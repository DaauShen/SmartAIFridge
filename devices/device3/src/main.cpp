#include <WiFi.h>
#include <Arduino_MQTT_Client.h>
#include <ThingsBoard.h>
#include "DHT20.h"
#include "Wire.h"
#include <ArduinoOTA.h>

#define LED_PIN GPIO_NUM_48
#define SDA_PIN GPIO_NUM_11
#define SCL_PIN GPIO_NUM_12

constexpr char WIFI_SSID[] = "iPhone Huytai102";
constexpr char WIFI_PASSWORD[] = "0305667542";
constexpr char TOKEN[] = "ZfAO9lxFLkRdKbytaaCu";
constexpr char THINGSBOARD_SERVER[] = "app.coreiot.io";

constexpr uint16_t THINGSBOARD_PORT = 1883U;
constexpr uint32_t MAX_MESSAGE_SIZE = 1024U;
constexpr uint32_t SERIAL_DEBUG_BAUD = 115200U;

constexpr char LED_STATE_ATTR[] = "ledState";
constexpr char TEMP_ATTR[] = "temperature";
constexpr char HUMIDITY_ATTR[] = "humidity";

volatile bool attributesChanged = false;
volatile bool ledState = false;
float temperature = 0.0, humidity = 0.0;

constexpr int16_t telemetrySendInterval = 10000U;

WiFiClient wifiClient;
Arduino_MQTT_Client mqttClient(wifiClient);
ThingsBoard tb(mqttClient, MAX_MESSAGE_SIZE);
DHT20 dht20;

void taskThingsBoard(void *pvParameters);
void taskDHT20(void *pvParameters);
void taskSendAttribute(void *pvParameters);

void InitWiFi() {
    Serial.println("Connecting to WiFi...");
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("Connected to WiFi");
}

void setup() {
    Serial.begin(SERIAL_DEBUG_BAUD);
    pinMode(LED_PIN, OUTPUT);

    Wire.begin(SDA_PIN, SCL_PIN);
    dht20.begin();

    delay(2000);
    InitWiFi();

    xTaskCreate(taskThingsBoard, "TaskMQTT", 4096, NULL, 1, NULL);
    xTaskCreate(taskSendAttribute, "taskSendAttribute", 2048, NULL, 1, NULL);
    xTaskCreate(taskDHT20, "taskDHT20", 2048, NULL, 1, NULL);
}

// Task 1: Quản lý kết nối đến ThingsBoard
void taskThingsBoard(void *parameter) {
  while (true) {
    if (!tb.connected()) {
      Serial.println("Connecting to ThingsBoard...");
      if (tb.connect(THINGSBOARD_SERVER, TOKEN, THINGSBOARD_PORT)) {
        Serial.println("Connected to ThingsBoard");
      } else {
        Serial.println("Failed to connect");
      }
    }
    tb.loop();
    vTaskDelay(1000);
  }
}

// Task 2: Đọc dữ liệu từ cảm biến DHT20
void taskDHT20(void *parameter) {
  for (;;) {
    dht20.read();
    temperature = dht20.getTemperature();
    humidity = dht20.getHumidity();

    Serial.print("Temperature: ");
    Serial.print(temperature);
    Serial.print(" °C, Humidity: ");
    Serial.print(humidity);
    Serial.println(" %");

    vTaskDelay(2000); // Đọc mỗi 2 giây
  }
}

// Task 3: Gửi dữ liệu lên ThingsBoard
void taskSendAttribute(void *parameter) {
    for (;;) {
      if (tb.connected()) {
        Serial.print("Sending Data - Temp: ");
        Serial.print(temperature);
        Serial.print(" °C, Humidity: ");
        Serial.print(humidity);
        Serial.println(" %");

        tb.sendAttributeData(TEMP_ATTR, temperature);
        tb.sendAttributeData(HUMIDITY_ATTR, humidity);
      }
      vTaskDelay(telemetrySendInterval / portTICK_PERIOD_MS);
    }
}

void loop() {}

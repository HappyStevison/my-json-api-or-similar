var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_KEY = "718dc7e7a5513ed423fcdd3c7697e25c";
function fetchWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(API_KEY, "&units=metric"))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function displayWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var data, background, weatherDesc, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchWeather(city)];
                case 1:
                    data = _a.sent();
                    background = document.getElementById("background");
                    background.style.backgroundImage = getBackgroundImage(data.weather[0].description);
                    weatherDesc = data.weather[0].description;
                    document.getElementById("weather-icon").textContent = getWeatherIcon(weatherDesc);
                    document.getElementById("city-name").textContent = city || data.name;
                    document.getElementById("temp").textContent = data.main.temp.toString();
                    document.getElementById("feels-like").textContent = data.main.feels_like.toString();
                    console.log("Vejrdata:", data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Fejl:", error_1);
                    alert("Kunne ikke hente vejrdata. Prøv igen senere");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function updateWeather() {
    var city = document.getElementById("city-input").value;
    displayWeather(city);
}
function getWeatherIcon(description) {
    var iconMap = {
        "clear sky": "☀️",
        "few clouds": "⛅",
        "scattered clouds": "☁️",
        "broken clouds": "☁️",
        "shower rain": "🌧️",
        "rain": "🌦️",
        "thunderstorm": "⛈️",
        "snow": "❄️",
        "mist": "🌫️"
    };
    return iconMap[description.toLowerCase()] || "🌈";
}
function getBackgroundImage(weatherDesc) {
    var bgMap = {
        "clear sky": "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        "few clouds": "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c')",
        "rain": "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17')",
        "thunderstorm": "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')",
        "snow": "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5')",
        "mist": "url('https://images.unsplash.com/photo-1504253163759-c23fccaebb55')"
    };
    return bgMap[weatherDesc.toLowerCase()]
        || "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031')"; // Default baggrund
}
displayWeather("Randers");

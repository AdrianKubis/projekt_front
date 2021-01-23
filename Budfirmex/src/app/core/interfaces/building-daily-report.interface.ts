import { Building } from "./building.interface";
import { WeatherCondition } from "./weather-condition.interface"

export interface BuildingDailyReport {
    id: number;
    building: Building;
    date: Date;
    weatherCondition: WeatherCondition;
}

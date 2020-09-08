import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// let fixture = TestBed.createComponent(AppComponent);
// let app = fixture.componentInstance;
let app: AppComponent;
let fixture: ComponentFixture<AppComponent>;
describe('AppComponent', () => {



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule

      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

  }));



  it('should display no data available', () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app.dataList.length).toBe(0);

  });


  it('should display list of without filtered space-x data', () => {
    //Dummy data to be returned by request.
    let dataList = [{ "flight_number": 3, "mission_name": "Trailblazer", "mission_id": [], "launch_year": "2008", "launch_date_unix": 1217734440, "launch_date_utc": "2008-08-03T03:34:00.000Z", "launch_date_local": "2008-08-03T15:34:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", "tbd": false, "launch_window": 0, "rocket": { "rocket_id": "falcon1", "rocket_name": "Falcon 1", "rocket_type": "Merlin C", "first_stage": { "cores": [{ "core_serial": "Merlin1C", "flight": 1, "block": null, "gridfins": false, "legs": false, "reused": false, "land_success": null, "landing_intent": false, "landing_type": null, "landing_vehicle": null }] }, "second_stage": { "block": 1, "payloads": [{ "payload_id": "Trailblazer", "norad_id": [], "reused": false, "customers": ["NASA"], "nationality": "United States", "manufacturer": "Space Dev", "payload_type": "Satellite", "payload_mass_kg": null, "payload_mass_lbs": null, "orbit": "LEO", "orbit_params": { "reference_system": "geocentric", "regime": "low-earth", "longitude": null, "semi_major_axis_km": null, "eccentricity": null, "periapsis_km": null, "apoapsis_km": null, "inclination_deg": null, "period_min": null, "lifespan_years": null, "epoch": null, "mean_motion": null, "raan": null, "arg_of_pericenter": null, "mean_anomaly": null } }, { "payload_id": "PRESat", "norad_id": [], "reused": false, "customers": ["ORS"], "nationality": "United States", "manufacturer": null, "payload_type": "Satellite", "payload_mass_kg": null, "payload_mass_lbs": null, "orbit": "LEO", "orbit_params": { "reference_system": "geocentric", "regime": "low-earth", "longitude": null, "semi_major_axis_km": null, "eccentricity": null, "periapsis_km": null, "apoapsis_km": null, "inclination_deg": null, "period_min": null, "lifespan_years": null, "epoch": null, "mean_motion": null, "raan": null, "arg_of_pericenter": null, "mean_anomaly": null } }] }, "fairings": { "reused": false, "recovery_attempt": false, "recovered": false, "ship": null } }, "ships": [], "telemetry": { "flight_club": null }, "launch_site": { "site_id": "kwajalein_atoll", "site_name": "Kwajalein Atoll", "site_name_long": "Kwajalein Atoll Omelek Island" }, "launch_success": false, "launch_failure_details": { "time": 140, "altitude": 35, "reason": "residual stage-1 thrust led to collision between stage 1 and stage 2" }, "links": { "mission_patch": "https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png", "mission_patch_small": "https://images2.imgbox.com/3d/86/cnu0pan8_o.png", "reddit_campaign": null, "reddit_launch": null, "reddit_recovery": null, "reddit_media": null, "presskit": null, "article_link": "http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary", "wikipedia": "https://en.wikipedia.org/wiki/Trailblazer_(satellite)", "video_link": "https://www.youtube.com/watch?v=v0w9p3U8860", "youtube_id": "v0w9p3U8860", "flickr_images": [] }, "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2", "upcoming": false, "static_fire_date_utc": null, "static_fire_date_unix": null, "timeline": { "webcast_liftoff": 14 }, "crew": null }, { "flight_number": 4, "mission_name": "RatSat", "mission_id": [], "launch_year": "2008", "launch_date_unix": 1222643700, "launch_date_utc": "2008-09-28T23:15:00.000Z", "launch_date_local": "2008-09-28T11:15:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", "tbd": false, "launch_window": 0, "rocket": { "rocket_id": "falcon1", "rocket_name": "Falcon 1", "rocket_type": "Merlin C", "first_stage": { "cores": [{ "core_serial": "Merlin2C", "flight": 1, "block": null, "gridfins": false, "legs": false, "reused": false, "land_success": null, "landing_intent": false, "landing_type": null, "landing_vehicle": null }] }, "second_stage": { "block": 1, "payloads": [{ "payload_id": "RatSat", "norad_id": [33393], "reused": false, "customers": ["SpaceX"], "nationality": "United States", "manufacturer": "SpaceX", "payload_type": "Satellite", "payload_mass_kg": 165, "payload_mass_lbs": 363, "orbit": "LEO", "orbit_params": { "reference_system": "geocentric", "regime": "low-earth", "longitude": null, "lifespan_years": null, "epoch": "2020-09-08T04:49:20.000Z", "mean_motion": 14.8485481, "raan": 261.487, "semi_major_axis_km": 6992.178, "eccentricity": 0.001254, "periapsis_km": 605.275, "apoapsis_km": 622.811, "inclination_deg": 9.3459, "period_min": 96.979, "arg_of_pericenter": 64.5036, "mean_anomaly": 295.646 } }] }, "fairings": { "reused": false, "recovery_attempt": false, "recovered": false, "ship": null } }, "ships": [], "telemetry": { "flight_club": null }, "launch_site": { "site_id": "kwajalein_atoll", "site_name": "Kwajalein Atoll", "site_name_long": "Kwajalein Atoll Omelek Island" }, "launch_success": true, "links": { "mission_patch": "https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png", "mission_patch_small": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png", "reddit_campaign": null, "reddit_launch": null, "reddit_recovery": null, "reddit_media": null, "presskit": null, "article_link": "https://en.wikipedia.org/wiki/Ratsat", "wikipedia": "https://en.wikipedia.org/wiki/Ratsat", "video_link": "https://www.youtube.com/watch?v=dLQ2tZEH6G0", "youtube_id": "dLQ2tZEH6G0", "flickr_images": [] }, "details": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1", "upcoming": false, "static_fire_date_utc": "2008-09-20T00:00:00.000Z", "static_fire_date_unix": 1221868800, "timeline": { "webcast_liftoff": 5 }, "crew": null }];
    expect(dataList.length).toBeGreaterThan(1);

  });
});

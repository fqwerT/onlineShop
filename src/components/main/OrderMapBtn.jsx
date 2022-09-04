import React, { useState } from "react";
import "./payment.style.scss";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  TrafficControl,
  ZoomControl,
} from "react-yandex-maps";

function MapBtn() {
  const [active, setActive] = useState(false);

  return (
    <>
      <button onClick={() => setActive(!active)} className="btn">
        Открыть Карту
      </button>
      {active && (
        <YMaps>
          <div>
            <Map
              defaultState={{
                center: [54.314192, 48.403132],
                zoom: 12,
              }}
            >
              <Placemark geometry={[54.314192, 48.403132]} />
              <GeolocationControl options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </div>
        </YMaps>
      )}
    </>
  );
}

export default MapBtn;

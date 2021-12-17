
import React, {useEffect, useRef} from 'react';
import { loadModules } from "esri-loader";

const Map = () => {
    const MapEl = useRef(null);
    useEffect(()=> {
        let view: any;
        loadModules(["esri/views/MapView", "esri/WebMap"], {
            css:true
        }).then(([MapView, WebMap]) => {
            const webmap = new WebMap({ basemap: "dark-gray-vector" , layers: [] }) // streets-night-vector
            view = new MapView({ container: MapEl.current, map: webmap, center: [102, 47], zoom: 8, ui: { components: [] }})
        })

        return ()=>{
            if(!!view) view.destroy();
            view = null;
        }
    })
    return <div style={{ width: '100%', height: '100%'}} ref={MapEl}/>
}
export default Map
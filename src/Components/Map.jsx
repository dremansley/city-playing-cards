import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
        const mapInstance = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: import.meta.env.VITE_MAPBOX_STYLE,
            center: [-2.89, 53.189999],
            zoom: 12,
        });

        return () => mapInstance.remove();
    }, []);

    return (
        <div className="w-full h-64 mt-2 bg-gray-200 rounded-lg">
            <div
                ref={mapContainerRef}
                className="flex-1 rounded-lg shadow-lg p-0 w-100 h-64"
            />
        </div>
    );
};

export default Map;

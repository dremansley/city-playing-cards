import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS

const Map = () => {
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);

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
        <div className="flex flex-col h-screen px-12 py-6">
            <h2 className="py-4 pb-8 text-3xl font-bold bg-clip-text">
                Card Map
            </h2>
            <div
                ref={mapContainerRef}
                className="flex-1 rounded-lg shadow-lg p-0"
            />
        </div>
    );
};

export default Map;

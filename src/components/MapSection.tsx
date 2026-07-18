import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MapPin, Globe2, Sparkles } from "lucide-react";
import { MAP_MARKERS, COMPANY_INFO } from "../data";

// Custom marker styling with animated pulsing rings using L.divIcon
const createCustomMarker = (isActiveHQ: boolean) => {
  return L.divIcon({
    html: `
      <div class="relative flex items-center justify-center">
        <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full ${
          isActiveHQ ? 'bg-gold-500/40' : 'bg-navy-500/30'
        } opacity-75"></span>
        <div class="relative rounded-full h-5 w-5 ${
          isActiveHQ ? 'bg-gold-500 border-2 border-white' : 'bg-navy-700 border-2 border-white'
        } shadow-lg flex items-center justify-center">
          <div class="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>
    `,
    className: 'custom-div-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -10]
  });
};

export default function MapSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Center coordinate of India to fit Mumbai, Surat, Hyderabad, and Devarakonda cleanly
  const centerPosition: [number, number] = [18.9, 75.8];
  const defaultZoom = 5.5;

  return (
    <section id="map" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
          <div className="lg:col-span-8 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-gold-600 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-200/50 uppercase">
              Geographic Footprint
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight">
              Operational Map & Service Areas
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-sans max-w-3xl">
              Headquartered in Telangana, we manage active statutory approvals and site feasibility surveys across central and western India corridors.
            </p>
            <div className="mt-4 h-1 w-16 bg-gold-500 rounded-full" />
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500">
              <Sparkles className="h-4 w-4 text-gold-500" /> Hover/Click markers for project scope
            </div>
          </div>
        </div>

        {/* Map Layout Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Container View (Left 8 Columns) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[480px] relative bg-slate-100 z-10">
            {isMounted ? (
              <MapContainer
                center={centerPosition}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                className="h-full w-full"
                id="leaflet-map-element"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {MAP_MARKERS.map((marker) => (
                  <Marker
                    key={marker.name}
                    position={marker.position}
                    icon={createCustomMarker(marker.isActiveHQ)}
                  >
                    <Popup>
                      <div className="p-2 min-w-[180px] font-sans">
                        <p className={`font-display font-extrabold text-sm ${
                          marker.isActiveHQ ? 'text-gold-600' : 'text-navy-900'
                        }`}>
                          {marker.name}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                          {marker.projectType}
                        </p>
                        {marker.isActiveHQ && (
                          <span className="inline-block mt-2 px-1.5 py-0.5 bg-gold-100 text-gold-800 text-[9px] font-mono font-bold rounded uppercase">
                            Registered MSME HQ
                          </span>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 font-mono text-xs">
                <Globe2 className="h-8 w-8 animate-spin text-slate-300 mb-2" />
                Initializing Leaflet Spatial Engine...
              </div>
            )}
          </div>

          {/* Location Sidebar (Right 4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* HQ Box Detail */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-navy-950 text-white rounded-2xl border border-navy-900 shadow-lg relative overflow-hidden flex flex-col justify-between h-1/2 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full filter blur-2xl" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-gold-400" />
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">Primary HQ Location</span>
                </div>
                <h3 className="font-display font-extrabold text-lg tracking-tight leading-snug">
                  Devarakonda Headquarters
                </h3>
                <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                  Serving Nalgonda District, Hyderabad Metropolitan development corridor, and regional municipal authorities in Telangana.
                </p>
              </div>

              <div className="pt-4 border-t border-navy-800/80 mt-4 flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Pincode:</span>
                <span className="text-gold-400 font-bold">508248</span>
              </div>
            </motion.div>

            {/* Service Corridors List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between h-1/2"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold">Active Regions</span>
                <h3 className="font-display font-extrabold text-navy-900 text-base tracking-tight mt-1 mb-3">
                  Interstate Consulting Footprint
                </h3>
                
                <div className="space-y-2 text-xs font-sans text-slate-600">
                  <div className="flex items-center gap-2 justify-between">
                    <span className="font-semibold text-navy-950">• Maharashtra:</span>
                    <span>MMR, Thane, Local Town schemes</span>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="font-semibold text-navy-950">• Telangana:</span>
                    <span>Hyderabad riverfront, Devarakonda HQ</span>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="font-semibold text-navy-950">• Gujarat:</span>
                    <span>Surat transit corridor planning</span>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 leading-relaxed font-sans pt-4 border-t border-slate-200 mt-4">
                Working with municipal corporations, town planning authorities, and private land advisory boards across multi-state boundaries.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

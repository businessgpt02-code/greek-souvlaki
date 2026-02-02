import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Locations.css';

const MAP_KEY = "YOUR_API_KEY";

const locations = [
    {
        id: 1,
        name: "Downtown - Greek Souvlaki Branch 2",
        coords: "12.2333° N, 109.1962° E",
        lat: 12.2333,
        lng: 109.1962,
        desc: "Located in the heart of Nha Trang, surrounded by coastal energy and city life. A central spot for bold flavours and laid-back gatherings.",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.2790803659136!2d109.1961747!3d12.233272600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067a73d3df2cd%3A0x7feb7775d274c641!2sGreek%20Souvlaki!5e1!3m2!1sen!2sae!4v1770044703983!5m2!1sen!2sae"
    },
    {
        id: 2,
        name: "SHORELINE - Greek Souvlaki Branch 3",
        coords: "12.2378° N, 109.1938° E",
        lat: 12.2378,
        lng: 109.1938,
        desc: "Steps away from the shoreline, blending ocean air with vibrant street culture. A relaxed extension of the Nha Trang experience.",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.221283770824!2d109.1938344!3d12.237795499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705d97d60c38f3%3A0x8941d263bbf879f7!2sGreek%20Souvlaki%20Nha%20Trang!5e1!3m2!1sen!2sae!4v1770045923578!5m2!1sen!2sae"
    },
    {
        id: 3,
        name: "Oldtown - Greek Souvlaki Branch 1",
        coords: "15.8786° N, 108.3252° E",
        lat: 15.8786,
        lng: 108.3252,
        desc: "Set near the historic streets of Hoi An, where tradition meets a slower pace of life. A warm, character-rich destination rooted in culture.",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.905738648535!2d108.32522000000002!3d15.8785852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420f8e05515e3f%3A0x5ae5490e546fc8c0!2sGreek%20Souvlaki%20Nha%20Trang%20(Hoi%20An%20Branch)!5e1!3m2!1sen!2sae!4v1770046078162!5m2!1sen!2sae"
    }
];


const getMapUrl = (lat, lng) =>
    `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=1200x1200&maptype=roadmap
    &markers=color:gold%7C${lat},${lng}
    &style=feature:all|element:geometry|color:0x0f0f0f
    &style=feature:road|element:geometry|color:0x1f1f1f
    &style=feature:water|element:geometry|color:0x000000
    &style=feature:poi|element:labels|visibility:off
    &key=${MAP_KEY}`;

const Locations = () => {
    const [active, setActive] = useState(locations[0].id);
    const activeLocation = locations.find(l => l.id === active);

    return (
        <section className="locations-wrapper">
            <div className="locations-list">
                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className={`location-item interactive ${active === loc.id ? 'active' : ''}`}
                        onMouseEnter={() => setActive(loc.id)}
                    >
                        <div className="loc-header">
                            <h3>{loc.name}</h3>
                            <span className="coords">{loc.coords}</span>
                        </div>

                        <AnimatePresence>
                            {active === loc.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="loc-desc"
                                >
                                    <p>{loc.desc}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className="location-bg-reveal">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="map-embed"
                    >
                        <iframe
                            src={locations.find(l => l.id === active).embed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        />
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Locations;

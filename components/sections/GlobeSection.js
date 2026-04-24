'use client';
import { useEffect, useRef } from 'react';

const radialCards = [
  { title: 'Bulk Production', desc: 'High-capacity production infrastructure designed to maintain batch-to-batch consistency while supporting both small launches and large-scale growth.', side: 'left', pos: 1 },
  { title: 'Custom Formulations', desc: 'Doctorate-led R&D to develop differentiated gummy formulations across probiotics, immunity, beauty, sleep, and functional nutrition—built for performance and stability.', side: 'left', pos: 2 },
  { title: 'Private & White Label Solutions', desc: 'Launch faster with ready-to-market formulations or build fully customized products with complete branding, packaging, and labelling support.', side: 'left', pos: 3 },
  { title: 'Low MOQ & Faster Turnaround', desc: 'Flexible minimum order quantities and optimized production timelines allow brands to enter the market quickly and scale efficiently.', side: 'right', pos: 1 },
  { title: 'Proprietary Technology & R&D', desc: 'Leverage our globally patented technologies and in-house R&D expertise to create stable, high-performance gummy formulations with a clear competitive edge.', side: 'right', pos: 2 },
  { title: 'Compliance & Certifications', desc: 'Manufacturing aligned with GMP, FSSAI and international regulatory standards, ensuring your products are compliant, safe, and globally market-ready.', side: 'right', pos: 3 },
];

export default function GlobeSection() {
  const containerRef = useRef(null);
  const globeInstance = useRef(null);

  useEffect(() => {
    if (!containerRef.current || globeInstance.current) return;

    let cancelled = false;

    async function init() {
      const [{ default: Globe }, THREE] = await Promise.all([
        import('globe.gl'),
        import('three'),
      ]);

      if (cancelled || !containerRef.current) return;

      const container = containerRef.current;
      const GLOBE_WIDTH = container.clientWidth || 500;
      const GLOBE_HEIGHT = 500;

      const INDIA = { lat: 20.5937, lng: 78.9629 };
      const brandGreen = '#047857';
      const globeColor = '#0f172a';

      const destinations = [
        { lat: 37.0902, lng: -95.7129 }, { lat: 45.4215, lng: -75.6972 },
        { lat: -15.7938, lng: -47.8827 }, { lat: 19.4326, lng: -99.1332 },
        { lat: 55.3781, lng: -3.4360 }, { lat: 48.8566, lng: 2.3522 },
        { lat: 51.1657, lng: 10.4515 }, { lat: 41.9028, lng: 12.4964 },
        { lat: 55.7558, lng: 37.6173 }, { lat: 23.4241, lng: 53.8478 },
        { lat: 30.0444, lng: 31.2357 }, { lat: 9.082, lng: 8.6753 },
        { lat: -30.5595, lng: 22.9375 }, { lat: 39.9042, lng: 116.4074 },
        { lat: 36.2048, lng: 138.2529 }, { lat: 37.5665, lng: 126.978 },
        { lat: 1.3521, lng: 103.8198 }, { lat: -25.2744, lng: 133.7751 },
        { lat: -40.9006, lng: 174.886 },
      ];

      const arcsData = destinations.map((d, i) => ({
        order: i, startLat: INDIA.lat, startLng: INDIA.lng,
        endLat: d.lat, endLng: d.lng,
        arcAlt: 0.2 + Math.random() * 0.2,
      }));

      // Generate solid-color texture for the globe surface
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 1; texCanvas.height = 1;
      const ctx = texCanvas.getContext('2d');
      ctx.fillStyle = globeColor;
      ctx.fillRect(0, 0, 1, 1);

      const world = Globe()(container)
        .width(GLOBE_WIDTH)
        .height(GLOBE_HEIGHT)
        .globeImageUrl(texCanvas.toDataURL())
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#1e3a8a')
        .atmosphereAltitude(0.15)
        .hexPolygonColor(() => '#4ade80')
        .hexPolygonResolution(3)
        .hexPolygonsData([])
        .hexPolygonMargin(0.7);

      globeInstance.current = world;

      // Fetch country outlines
      fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(r => r.json())
        .then(geo => world.hexPolygonsData(geo.features))
        .catch(() => {});

      // Export arcs from India
      world.arcsData(arcsData)
        .arcStartLat(d => d.startLat).arcStartLng(d => d.startLng)
        .arcEndLat(d => d.endLat).arcEndLng(d => d.endLng)
        .arcColor(() => [brandGreen, brandGreen])
        .arcAltitude(d => d.arcAlt)
        .arcStroke(() => 0.5)
        .arcDashLength(0.6)
        .arcDashInitialGap(d => d.order)
        .arcDashGap(15)
        .arcDashAnimateTime(() => 2500);

      // Destination points
      const pts = [];
      arcsData.forEach(a => {
        pts.push({ lat: a.startLat, lng: a.startLng });
        pts.push({ lat: a.endLat, lng: a.endLng });
      });
      const uniquePts = pts.filter((v, i, a) => a.findIndex(v2 => v2.lat === v.lat && v2.lng === v.lng) === i);
      world.pointsData(uniquePts).pointColor(() => brandGreen).pointsMerge(true).pointAltitude(0).pointRadius(2);

      // Globe material
      const mat = world.globeMaterial();
      mat.color = new THREE.Color(globeColor);
      mat.emissive = new THREE.Color(globeColor);
      mat.emissiveIntensity = 0.2;
      mat.shininess = 0.5;

      // Lighting
      const scene = world.scene();
      scene.children = scene.children.filter(ch => !ch.isLight);
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      const dl = new THREE.DirectionalLight(0xffffff, 1);
      dl.position.set(-400, 100, 400);
      scene.add(dl);

      // Controls — lock zoom completely
      const controls = world.controls();
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.minPolarAngle = Math.PI / 3.5;
      controls.maxPolarAngle = Math.PI - Math.PI / 3;

      world.pointOfView({ lat: 20, lng: 78, altitude: 2.5 }, 0);

      // Block wheel events from reaching the 3D renderer
      container.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { capture: true, passive: true });

      // Resize observer to keep globe responsive
      const ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const w = entry.contentRect.width;
          if (w > 0 && globeInstance.current) {
            globeInstance.current.width(w).height(GLOBE_HEIGHT);
          }
        }
      });
      ro.observe(container);
    }

    init();

    return () => {
      cancelled = true;
      if (globeInstance.current && globeInstance.current._destructor) {
        globeInstance.current._destructor();
      }
    };
  }, []);

  return (
    <div className="radial-layout">
      <div className="globe-center">
        <div ref={containerRef} style={{ width: '100%', height: 500, overflow: 'hidden', background: 'transparent' }} />
      </div>
      {radialCards.map((card) => (
        <div
          key={card.title}
          className={`radial-card radial-${card.side}-${card.pos}`}
          style={card.side === 'left' ? { textAlign: 'right' } : undefined}
        >
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

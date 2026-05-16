export function StatsSection() {
  return (
    <aside className="stats">
      <div className="container">
        <div className="stats-grid reveal">
          <div className="stat-card">
            <div className="stat-val" data-count="3" data-suffix="×">
              0×
            </div>
            <div className="stat-label">Más leads calificados</div>
          </div>
          <div className="stat-card">
            <div className="stat-val" data-count="1" data-suffix="min">
              0min
            </div>
            <div className="stat-label">Respuesta garantizada</div>
          </div>
          <div className="stat-card">
            <div className="stat-val" data-count="40" data-suffix="%">
              0%
            </div>
            <div className="stat-label">Aumento en conversiones</div>
          </div>
          <div className="stat-card">
            <div className="stat-val" data-count="24" data-suffix="/7">
              0/7
            </div>
            <div className="stat-label">Atención sin pausa</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

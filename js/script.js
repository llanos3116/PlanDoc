
// ═══════════ CNEB DATA ═══════════
const AREAS=[
  {id:'mat',e:'📐',n:'Matemática',c:'#C0392B'},
  {id:'com',e:'📖',n:'Comunicación',c:'#1A4A8A'},
  {id:'cyt',e:'🔬',n:'Ciencia y Tecnología',c:'#5B2D8E'},
  {id:'soc',e:'🌍',n:'Ciencias Sociales',c:'#0E7A4A'},
  {id:'dpcc',e:'⚖️',n:'D.P.C.C.',c:'#B85C00'},
  {id:'ing',e:'🗣️',n:'Inglés',c:'#1565C0'},
  {id:'ef',e:'⚽',n:'Educación Física',c:'#00695C'},
  {id:'arte',e:'🎨',n:'Arte y Cultura',c:'#880E4F'},
  {id:'rel',e:'✝️',n:'Educ. Religiosa',c:'#4A148C'},
  {id:'tut',e:'💬',n:'Tutoría',c:'#827717'},
  {id:'ept',e:'🏭',n:'Educ. para el Trabajo',c:'#37474F'},
];
const CNEB={
  mat:{c:[
    {n:'Resuelve problemas de cantidad',
     caps:['Traduce cantidades a expresiones numéricas','Comunica comprensión sobre números y operaciones','Usa estrategias de estimación y cálculo','Argumenta afirmaciones sobre relaciones numéricas'],
     d:['Establece relaciones entre números enteros, fracciones, decimales y porcentajes','Resuelve problemas de proporcionalidad directa e inversa en contextos del entorno','Calcula tasas, descuentos, interés simple y compuesto en situaciones financieras','Opera con potencias, raíces y notación científica en contextos reales','Aplica la divisibilidad (MCM, MCD) para resolver situaciones cotidianas']},
    {n:'Resuelve problemas de regularidad, equivalencia y cambio',
     caps:['Traduce datos y condiciones a expresiones algebraicas','Comunica su comprensión sobre las relaciones algebraicas','Usa estrategias y procedimientos para encontrar reglas generales','Argumenta afirmaciones sobre relaciones de cambio'],
     d:['Modela situaciones con ecuaciones lineales, cuadráticas y sistemas de ecuaciones','Representa funciones lineales y cuadráticas en tablas, gráficas y expresiones algebraicas','Resuelve ecuaciones e inecuaciones de primer y segundo grado','Determina la regla de formación de sucesiones aritméticas y geométricas','Interpreta la pendiente e intersecciones de funciones lineales en contextos reales']},
    {n:'Resuelve problemas de forma, movimiento y localización',
     caps:['Modela objetos con formas geométricas y sus transformaciones','Comunica su comprensión sobre las formas y relaciones geométricas','Usa estrategias y procedimientos para orientarse en el espacio','Argumenta afirmaciones sobre relaciones geométricas'],
     d:['Calcula perímetros, áreas y volúmenes de figuras y sólidos geométricos','Aplica el Teorema de Pitágoras y relaciones trigonométricas en triángulos rectángulos','Describe y aplica transformaciones geométricas (traslación, rotación, reflexión)','Usa coordenadas cartesianas para representar figuras y calcular distancias','Reconoce y aplica criterios de congruencia y semejanza de triángulos']},
    {n:'Resuelve problemas de gestión de datos e incertidumbre',
     caps:['Representa datos con gráficos y medidas estadísticas','Comunica su comprensión de los conceptos estadísticos y probabilísticos','Usa estrategias y procedimientos para recopilar y procesar datos','Sustenta conclusiones o decisiones basadas en información obtenida'],
     d:['Organiza y representa datos en tablas de frecuencia, histogramas y gráficos estadísticos','Calcula e interpreta medidas de tendencia central (media, mediana, moda) y dispersión','Calcula probabilidades simples y compuestas usando el espacio muestral','Interpreta y evalúa datos estadísticos presentados en medios de comunicación','Usa la distribución normal y percentiles en contextos de evaluación']}
  ]},
  com:{c:[
    {n:'Se comunica oralmente en su lengua materna',
     caps:['Obtiene información del texto oral','Infiere e interpreta información del texto oral','Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada','Utiliza recursos no verbales y paraverbales de forma estratégica','Interactúa estratégicamente con distintos interlocutores','Reflexiona y evalúa la forma, el contenido y contexto del texto oral'],
     d:['Participa en debates, foros y diálogos argumentando su punto de vista con evidencias','Adecúa el registro oral al propósito y destinatario en situaciones formales e informales','Evalúa la validez y confiabilidad de los argumentos escuchados','Produce discursos persuasivos con recursos retóricos apropiados']},
    {n:'Lee diversos tipos de textos escritos en lengua materna',
     caps:['Obtiene información del texto escrito','Infiere e interpreta información del texto','Reflexiona y evalúa la forma, el contenido y contexto del texto'],
     d:['Lee y comprende textos expositivos, argumentativos, narrativos y descriptivos','Infiere el tema central, la tesis y los argumentos de textos complejos','Evalúa la perspectiva del autor, sus recursos retóricos y la validez de sus argumentos','Interpreta el sentido figurado, la ironía y los recursos estilísticos literarios','Reflexiona sobre el efecto del texto en el lector y su contexto sociocultural']},
    {n:'Escribe diversos tipos de textos en lengua materna',
     caps:['Adecúa el texto a la situación comunicativa','Organiza y desarrolla las ideas de forma coherente y cohesionada','Utiliza convenciones del lenguaje escrito de forma pertinente','Reflexiona y evalúa la forma, el contenido y contexto del texto escrito'],
     d:['Produce textos argumentativos, expositivos y literarios con propósito claro','Usa recursos de cohesión (conectores, referentes, puntuación) con precisión','Revisa y corrige sus textos considerando las normas ortográficas y gramaticales','Adapta el registro escrito al destinatario y propósito comunicativo']}
  ]},
  cyt:{c:[
    {n:'Indaga mediante métodos científicos para construir conocimientos',
     caps:['Problematiza situaciones','Formula una hipótesis','Diseña estrategias para hacer indagación','Genera y registra datos e información','Analiza datos e información','Evalúa y comunica el proceso y resultado'],
     d:['Diseña y ejecuta experimentos controlados para responder preguntas científicas','Formula hipótesis verificables y diseña procedimientos para contrastarlas','Analiza datos experimentales, identifica tendencias e interpreta resultados','Comunica los hallazgos de su indagación usando lenguaje científico y gráficos','Evalúa la confiabilidad de sus datos y la validez de sus conclusiones']},
    {n:'Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo',
     caps:['Comprende y usa conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo','Evalúa las implicancias del saber y del quehacer científico y tecnológico'],
     d:['Explica los procesos físicos, químicos y biológicos usando modelos y teorías científicas','Relaciona los fenómenos naturales con leyes y principios de la ciencia','Analiza el impacto de los avances científicos en la sociedad y el ambiente','Explica la estructura y función de sistemas biológicos, físicos y químicos a diferentes escalas','Vincula conceptos científicos con situaciones cotidianas de su entorno']},
    {n:'Diseña y construye soluciones tecnológicas para resolver problemas de su entorno',
     caps:['Determina una alternativa de solución tecnológica','Diseña la alternativa de solución tecnológica','Implementa y valida alternativas de solución tecnológica','Evalúa y comunica el funcionamiento y los impactos'],
     d:['Diseña prototipos o artefactos que responden a necesidades identificadas en su entorno','Selecciona y usa materiales y herramientas adecuadas para construir su solución','Evalúa el funcionamiento de su diseño y propone mejoras basadas en evidencia','Analiza el impacto ambiental y social de su solución tecnológica']}
  ]},
  soc:{c:[
    {n:'Construye interpretaciones históricas',
     caps:['Interpreta críticamente fuentes diversas','Comprende el tiempo histórico','Elabora explicaciones sobre procesos históricos'],
     d:['Contrasta fuentes primarias y secundarias para construir interpretaciones fundamentadas','Explica causas y consecuencias de procesos históricos peruanos y mundiales','Establece relaciones de simultaneidad y secuencia entre hechos históricos','Analiza cambios y permanencias en el tiempo e identifica patrones históricos','Elabora ensayos históricos con argumentos sustentados en fuentes']},
    {n:'Gestiona responsablemente el espacio y el ambiente',
     caps:['Comprende las relaciones entre los elementos naturales y sociales','Maneja fuentes de información para comprender el espacio geográfico','Genera acciones para preservar el ambiente local y global'],
     d:['Analiza la distribución espacial de fenómenos geográficos usando cartografía y SIG','Explica cómo las actividades humanas transforman el espacio geográfico','Propone y ejecuta acciones de conservación ambiental en su entorno local','Evalúa el impacto del cambio climático y los desastres naturales en su región','Interpreta datos demográficos y económicos de mapas, gráficos y estadísticas']},
    {n:'Gestiona responsablemente los recursos económicos',
     caps:['Comprende las relaciones entre los elementos del sistema económico y financiero','Toma decisiones económicas y financieras'],
     d:['Analiza el funcionamiento de los mercados y el sistema económico peruano','Comprende el rol del Estado en la economía y las políticas fiscales','Aplica conceptos de ahorro, inversión y presupuesto en situaciones cotidianas','Evalúa el impacto de decisiones económicas en el bienestar personal y comunitario']}
  ]},
  dpcc:{c:[
    {n:'Convive y participa democráticamente en la búsqueda del bien común',
     caps:['Interactúa con todas las personas','Construye y asume normas y leyes utilizando conocimientos y principios democráticos','Delibera sobre asuntos públicos','Participa en acciones que promueven el bienestar común'],
     d:['Promueve el diálogo y la negociación pacífica para resolver conflictos','Analiza y cuestiona normas sociales desde una perspectiva de derechos humanos','Participa en proyectos de mejora de su comunidad escolar o local','Delibera sobre dilemas éticos y asuntos públicos con argumentos fundados','Defiende y ejerce sus derechos y cumple sus deberes ciudadanos']},
    {n:'Construye su identidad',
     caps:['Se valora a sí mismo','Autorregula sus emociones','Reflexiona y argumenta éticamente','Vive su sexualidad de manera integral y responsable'],
     d:['Reflexiona sobre su identidad personal y cultural en relación con su entorno','Desarrolla estrategias de autorregulación emocional ante situaciones de conflicto','Argumenta posturas éticas frente a dilemas morales de su entorno','Ejerce su sexualidad de manera responsable, autónoma y saludable']}
  ]},
  ing:{c:[
    {n:'Se comunica oralmente en inglés como lengua extranjera',
     caps:['Obtiene información de textos orales en inglés','Infiere e interpreta información de textos orales','Adecúa, organiza y desarrolla las ideas en inglés de forma coherente','Utiliza recursos no verbales y paraverbales','Interactúa en inglés con distintos interlocutores','Reflexiona y evalúa textos orales en inglés'],
     d:['Comprende y produce diálogos, presentaciones y discursos en inglés en nivel A2-B1','Participa en conversaciones cotidianas, académicas y laborales en inglés','Escucha y comprende textos orales auténticos (podcasts, videos, entrevistas)','Produce enunciados con pronunciación, entonación y fluidez apropiadas']},
    {n:'Lee diversos tipos de textos en inglés como lengua extranjera',
     caps:['Obtiene información de textos escritos en inglés','Infiere e interpreta información de textos escritos','Reflexiona y evalúa textos escritos en inglés'],
     d:['Lee y comprende textos escritos en inglés de nivel A2-B1 (artículos, correos, instrucciones)','Infiere el significado de palabras y expresiones desconocidas por contexto','Identifica la estructura y propósito comunicativo de diferentes tipos de texto','Evalúa críticamente el contenido e intención de textos en inglés']},
    {n:'Escribe diversos tipos de textos en inglés como lengua extranjera',
     caps:['Adecúa el texto en inglés a la situación comunicativa','Organiza y desarrolla ideas en inglés de forma coherente','Utiliza convenciones del lenguaje escrito en inglés','Reflexiona y evalúa sus textos en inglés'],
     d:['Redacta correos, párrafos descriptivos, narrativos y argumentativos en inglés','Usa vocabulario y estructuras gramaticales del nivel A2-B1 con precisión','Aplica reglas ortográficas y de puntuación en sus producciones escritas en inglés','Revisa y corrige sus textos en inglés atendiendo al propósito y destinatario']}
  ]},
  ef:{c:[
    {n:'Se desenvuelve de manera autónoma a través de su motricidad',
     caps:['Comprende su cuerpo','Se expresa corporalmente'],
     d:['Reconoce las posibilidades y limitaciones de su cuerpo en actividades físicas variadas','Demuestra control motor fino y grueso en actividades deportivas y expresivas','Valora y cuida su cuerpo reconociendo señales de bienestar y malestar','Controla la respiración y postura en actividades de esfuerzo físico']},
    {n:'Asume una vida saludable',
     caps:['Comprende las relaciones entre actividad física, alimentación, postura e higiene y la salud','Incorpora prácticas que mejoran su calidad de vida'],
     d:['Diseña y ejecuta rutinas de calentamiento, actividad física y vuelta a la calma','Analiza el impacto de la actividad física regular en la salud y el bienestar','Aplica principios de alimentación saludable en sus hábitos cotidianos','Previene lesiones aplicando técnicas correctas de estiramiento y descanso']},
    {n:'Interactúa a través de sus habilidades sociomotrices',
     caps:['Se relaciona utilizando sus habilidades sociomotrices','Crea y aplica estrategias y tácticas de juego'],
     d:['Colabora con sus compañeros aplicando principios tácticos en deportes de equipo','Demuestra respeto por las reglas y sus adversarios en situaciones de competencia','Diseña y ejecuta estrategias ofensivas y defensivas en juegos deportivos','Valora la cooperación y el juego limpio como principios del deporte']}
  ]},
  arte:{c:[
    {n:'Aprecia de manera crítica manifestaciones artístico-culturales',
     caps:['Percibe manifestaciones artístico-culturales','Contextualiza las manifestaciones culturales','Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales'],
     d:['Analiza obras de arte de diferentes culturas y épocas identificando elementos formales y contextuales','Interpreta el significado de manifestaciones artísticas en su contexto histórico-social','Evalúa críticamente manifestaciones artísticas locales, nacionales e internacionales','Relaciona las expresiones artísticas con los valores e identidad cultural de su comunidad']},
    {n:'Crea proyectos desde los lenguajes artísticos',
     caps:['Explora y experimenta los lenguajes del arte','Aplica procesos creativos','Evalúa y comunica sus procesos y proyectos'],
     d:['Diseña y produce obras artísticas usando técnicas plásticas, musicales, dramáticas o audiovisuales','Experimenta con diferentes materiales, soportes y técnicas para comunicar ideas y emociones','Evalúa sus producciones artísticas considerando los elementos del lenguaje artístico','Expone y sustenta sus proyectos creativos ante una audiencia']}
  ]},
  rel:{c:[
    {n:'Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente',
     caps:['Conoce a Dios y asume su identidad religiosa y espiritual como persona digna, libre y trascendente','Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa'],
     d:['Reflexiona sobre su identidad espiritual y su relación con Dios y los demás','Analiza textos bíblicos y documentos del Magisterio aplicándolos a su vida cotidiana','Valora y participa en las manifestaciones religiosas y culturales de su comunidad','Argumenta su fe de manera razonada ante situaciones de la vida contemporánea']},
    {n:'Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida',
     caps:['Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa','Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida'],
     d:['Organiza su proyecto de vida integrando valores evangélicos y principios éticos','Participa activamente en acciones de servicio y solidaridad en su comunidad','Reflexiona sobre dilemas morales actuales desde la ética cristiana y los derechos humanos','Practica la reconciliación, el perdón y el diálogo como medios de convivencia']}
  ]},
  tut:{c:[
    {n:'Construye su identidad',
     caps:['Se valora a sí mismo','Autorregula sus emociones','Reflexiona y argumenta éticamente','Vive su sexualidad de manera integral y responsable'],
     d:['Reconoce sus fortalezas, habilidades y áreas de mejora con valoración positiva','Desarrolla estrategias de autoconocimiento y manejo emocional en situaciones adversas','Establece metas personales y académicas vinculadas a su proyecto de vida','Toma decisiones responsables sobre su salud física, emocional y sexual']},
    {n:'Convive y participa democráticamente',
     caps:['Interactúa con todas las personas','Construye y asume normas','Delibera sobre asuntos públicos','Participa en acciones de bien común'],
     d:['Practica habilidades sociales de comunicación asertiva y escucha activa','Resuelve conflictos de manera pacífica usando la mediación y el diálogo','Participa activamente en la vida democrática del aula y la escuela','Promueve el respeto a la diversidad y la inclusión en su entorno escolar']}
  ]},
  ept:{c:[
    {n:'Gestiona proyectos de emprendimiento económico y social',
     caps:['Crea propuestas de valor','Aplica habilidades técnicas','Trabaja cooperativamente para lograr objetivos y metas','Evalúa los resultados del proyecto de emprendimiento'],
     d:['Identifica oportunidades de negocio o de impacto social en su comunidad local','Diseña y ejecuta un plan de negocio o proyecto social con metas definidas','Aplica habilidades técnicas y tecnológicas en el proceso productivo de su especialidad','Evalúa el impacto económico, social y ambiental de su proyecto de emprendimiento','Presenta y sustenta su proyecto ante una audiencia usando recursos visuales y argumentos']},
    {n:'Gestiona su aprendizaje de manera autónoma',
     caps:['Define metas de aprendizaje','Monitorea y ajusta su desempeño en el proceso de aprendizaje','Genera estrategias para alcanzar sus metas de aprendizaje'],
     d:['Define metas claras de aprendizaje técnico y las organiza en un plan de acción','Monitorea su progreso, identifica dificultades y ajusta sus estrategias','Reflexiona sobre sus aprendizajes y los aplica en situaciones laborales reales','Utiliza recursos digitales y tecnológicos para potenciar su aprendizaje técnico']}
  ]}
};

const BC={I:'#1565C0',II:'#2E7D32',III:'#E65100',IV:'#6A1B9A'};
// BD: dynamic bimester dates — built from getCal() at runtime
function getBD(){
  const c = (typeof getCal==='function') ? getCal() : null;
  if(!c) return {I:'16/03 – 08/05',II:'18/05 – 24/07',III:'10/08 – 09/10',IV:'19/10 – 18/12'};
  return {I:c.b1.ini+' – '+c.b1.fin, II:c.b2.ini+' – '+c.b2.fin, III:c.b3.ini+' – '+c.b3.fin, IV:c.b4.ini+' – '+c.b4.fin};
}
const BD = {I:'16/03 – 08/05',II:'18/05 – 24/07',III:'10/08 – 09/10',IV:'19/10 – 18/12'};

function rCal(){
  const anio = (typeof IE_PROFILE!=='undefined' && IE_PROFILE.anio) ? IE_PROFILE.anio : (localStorage.getItem('pd_ie_anio')||'2026');
  const ie   = (typeof IE_PROFILE!=='undefined' && IE_PROFILE.ie)   ? IE_PROFILE.ie   : 'I.E.';

  // Update header
  const titleEl = document.getElementById('cal-title');
  const subEl   = document.getElementById('cal-sub');
  if(titleEl) titleEl.textContent = 'Calendario Lectivo '+anio;
  if(subEl)   subEl.textContent   = ie+' · Año escolar '+anio+' · Nivel Secundaria · Perú';

  const c = (typeof getCal==='function') ? getCal() : null;
  const bims = [
    {num:'I',   nombre:'Primer Bimestre',   color:'#1565C0', ini: c?c.b1.ini:'16/03/'+anio, fin: c?c.b1.fin:'08/05/'+anio, sem: c?c.b1.sem:'8'},
    {num:'II',  nombre:'Segundo Bimestre',  color:'#2E7D32', ini: c?c.b2.ini:'18/05/'+anio, fin: c?c.b2.fin:'24/07/'+anio, sem: c?c.b2.sem:'9'},
    {num:'III', nombre:'Tercer Bimestre',   color:'#E65100', ini: c?c.b3.ini:'10/08/'+anio, fin: c?c.b3.fin:'09/10/'+anio, sem: c?c.b3.sem:'9'},
    {num:'IV',  nombre:'Cuarto Bimestre',   color:'#6A1B9A', ini: c?c.b4.ini:'19/10/'+anio, fin: c?c.b4.fin:'18/12/'+anio, sem: c?c.b4.sem:'9'},
  ];

  // Render cards
  const cardsEl = document.getElementById('cal-cards');
  if(cardsEl){
    cardsEl.innerHTML = bims.map(b=>`
      <div class="card" style="border-top:3px solid ${b.color};text-align:center;">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);letter-spacing:1px;">Bimestre ${b.num}</div>
        <div style="font-family:'Fraunces',serif;font-size:13px;font-weight:700;margin:4px 0;">${b.nombre}</div>
        <div style="font-size:11px;color:var(--ink3);">${b.ini} – ${b.fin}</div>
        <div style="font-family:'Fraunces',serif;font-size:32px;font-weight:900;color:${b.color};margin:8px 0 2px;">${b.sem}</div>
        <div style="font-size:10px;color:var(--ink3);">semanas lectivas</div>
        <div style="margin-top:10px;padding-top:8px;border-top:1px solid #eee;">
          <div style="font-size:9.5px;color:var(--ink3);">📅 Inicio</div>
          <div style="font-size:11px;font-weight:700;">${b.ini}</div>
          <div style="font-size:9.5px;color:var(--ink3);margin-top:4px;">🏁 Fin</div>
          <div style="font-size:11px;font-weight:700;">${b.fin}</div>
        </div>
      </div>`).join('');
  }

  // Render summary table
  const tblEl = document.getElementById('cal-table-wrap');
  if(tblEl){
    const totalSem = bims.map(b=>parseInt(b.sem)||0).reduce((a,x)=>a+x,0);
    const rows = bims.map(b=>{
      const dias = (parseInt(b.sem)||0)*5;
      const horas = dias * 5; // 5 horas diarias promedio
      return `<tr>
        <td style="padding:7px 10px;border:1px solid #ddd;font-weight:700;text-align:center;color:${b.color};">${b.num}</td>
        <td style="padding:7px 10px;border:1px solid #ddd;font-weight:700;">${b.nombre}</td>
        <td style="padding:7px 10px;border:1px solid #ddd;text-align:center;">${b.ini}</td>
        <td style="padding:7px 10px;border:1px solid #ddd;text-align:center;">${b.fin}</td>
        <td style="padding:7px 10px;border:1px solid #ddd;text-align:center;font-weight:700;color:${b.color};">${b.sem}</td>
        <td style="padding:7px 10px;border:1px solid #ddd;text-align:center;">${dias}</td>
      </tr>`;
    }).join('');
    tblEl.innerHTML = `<table style="width:100%;border-collapse:collapse;">
      <tr>
        ${['BIMESTRE','PERÍODO','INICIO','FIN','SEMANAS','DÍAS APROX.'].map(h=>`<th style="padding:7px 10px;border:1px solid #ddd;background:#0F0F1A;color:#fff;font-size:11px;text-align:center;">${h}</th>`).join('')}
      </tr>
      ${rows}
      <tr>
        <td colspan="4" style="padding:7px 10px;border:1px solid #ddd;font-weight:700;text-align:right;background:#f8f8f8;">TOTAL AÑO LECTIVO ${anio}</td>
        <td style="padding:7px 10px;border:1px solid #ddd;text-align:center;font-weight:700;font-size:13px;">${totalSem}</td>
        <td style="padding:7px 10px;border:1px solid #ddd;text-align:center;font-weight:700;">${totalSem*5}</td>
      </tr>
    </table>`;
  }
}
const ST={borrador:'<span class="badge b-bor">Borrador</span>',progreso:'<span class="badge b-pro">En progreso</span>',completo:'<span class="badge b-com">Completo</span>',revision:'<span class="badge b-rev">Revisión</span>'};

// ═══════════ DATABASE ═══════════
const DB={
  pa:[
    {id:1,grado:'3',area:'Matemática',doc:'Mg. María Pérez',secc:'A · B',status:'progreso',ie:'I.E. San Martín de Porres',ugel:'UGEL 05',horas:5,anio:'2026',ciclo:'Secundaria – Ciclo VII (3°, 4° y 5°)',modal:'Presencial',nunits:8,
     b1:'Unidad 1: Números racionales y proporcionalidad en la vida cotidiana\nUnidad 2: Estadística descriptiva y análisis de datos',
     b2:'Unidad 3: Álgebra – Ecuaciones lineales y funciones\nUnidad 4: Geometría plana y transformaciones geométricas',
     b3:'Unidad 5: Funciones cuadráticas y relaciones\nUnidad 6: Trigonometría básica aplicada',
     b4:'Unidad 7: Probabilidad y estadística inferencial\nUnidad 8: Repaso integral y preparación evaluativa',
     comp:'• Resuelve problemas de cantidad\n• Resuelve problemas de regularidad, equivalencia y cambio\n• Resuelve problemas de forma, movimiento y localización\n• Resuelve problemas de gestión de datos e incertidumbre',
     enf:'Ambiental, Inclusión, Bien Común',eval:'Rúbrica, Lista de cotejo, Escala AD/A/B/C',mat:'Textos MINEDU, fichas, GeoGebra, calculadora'},
    {id:2,grado:'2',area:'Comunicación',doc:'Lic. Jorge Ramírez',secc:'A',status:'completo',ie:'I.E. San Martín de Porres',ugel:'UGEL 05',horas:4,anio:'2026',ciclo:'Secundaria – Ciclo VI (1° y 2°)',modal:'Presencial',nunits:8,
     b1:'Unidad 1: Narraciones que nos identifican: mitos y leyendas peruanas\nUnidad 2: Textos informativos sobre biodiversidad peruana',
     b2:'Unidad 3: Textos argumentativos y debate ciudadano\nUnidad 4: Poesía y expresión literaria peruana',
     b3:'Unidad 5: Noticias, medios digitales y desinformación\nUnidad 6: Cartas y documentos formales',
     b4:'Unidad 7: Ensayo académico y producción escrita\nUnidad 8: Oralidad, exposición y presentaciones',
     comp:'• Se comunica oralmente en su lengua materna\n• Lee diversos tipos de textos escritos\n• Escribe diversos tipos de textos',
     enf:'Intercultural, Igualdad de género, Ambiental',eval:'Rúbrica, Autoevaluación, Coevaluación',mat:'Textos MINEDU, periódicos, recursos audiovisuales'}
  ],
  ud:[
    {id:1,grado:'3',area:'Matemática',bim:'I',num:1,status:'progreso',doc:'Mg. María Pérez',sem:5,hrs:20,ie:'I.E. San Martín de Porres',anio:'2026',secc:'A · B',ciclo:'Ciclo VII (3°, 4° y 5°)',modal:'Presencial',agrup:'Individual y grupal',esp:'Aula',
     tit:'Números racionales y proporcionalidad en la vida cotidiana',
     sit:'Los estudiantes necesitan comprar materiales para su feria de ciencias. Al visitar el mercado, encuentran precios con descuentos del 20% al 35%, productos fraccionados y ganancias en porcentajes. ¿Cómo calculamos el mejor precio y elaboramos un presupuesto real?',
     comp:'• Resuelve problemas de cantidad',desemp:'• Establece relaciones entre fracciones, decimales y porcentajes\n• Resuelve proporcionalidad directa e inversa\n• Calcula descuentos, aumentos e interés simple',
     mot:'Presentar el "Reto del mercado": 3 etiquetas con distintos descuentos. ¿Cuál es más conveniente para la feria? Grupos de 4 deliberan por 3 minutos y comparten.',
     sab:'Preguntas orales: ¿Qué es una fracción? ¿Cuándo usamos porcentajes? ¿Cómo calculo la mitad de un precio? Mapa mental grupal en papelógrafo.',
     conf:'"Una tienda anuncia 50% de descuento en la segunda unidad. Otra dice 2x1. ¿Cuál conviene más? ¿Son equivalentes?" Debate en parejas.',
     cons:'Trabajo colaborativo en grupos de 4: ficha con 8 problemas reales del mercado local. Docente guía con preguntas socráticas. Plenaria de socialización.',
     apli:'Diseñar el presupuesto de la feria de ciencias usando fracciones, porcentajes y proporciones. Presentación en papelógrafo o tabla digital.',
     meta:'¿Qué estrategia usé para los problemas difíciles? ¿En qué me equivoqué y por qué? ¿Dónde más puedo usar esto? Ficha de autoevaluación + rúbrica grupal.',
     prod:'Presupuesto de feria con cálculo de porcentajes y proporciones',instr:'Rúbrica',teval:'Formativa + Sumativa',enf:'Ambiental, Bien Común',mat:'Fichas, calculadora, papelógrafos, plumones'},
    {id:2,grado:'2',area:'Comunicación',bim:'I',num:1,status:'completo',doc:'Lic. Jorge Ramírez',sem:4,hrs:16,ie:'I.E. San Martín de Porres',anio:'2026',secc:'A',ciclo:'Ciclo VI (1° y 2°)',modal:'Presencial',agrup:'Grupos de 4',esp:'Aula',
     tit:'Narraciones que nos identifican: mitos y leyendas peruanas',
     sit:'El Perú posee una rica tradición oral con mitos amazónicos, andinos y costeños que forman parte de nuestra identidad. Muchos adolescentes los desconocen. ¿Cómo podemos recopilar, analizar y difundir estas narraciones para fortalecer nuestra identidad cultural?',
     comp:'• Lee diversos tipos de textos escritos\n• Escribe diversos tipos de textos\n• Se comunica oralmente',desemp:'• Lee textos narrativos identificando estructura y mensaje cultural\n• Produce textos narrativos usando recursos literarios\n• Narra oralmente con entonación y gestos adecuados',
     mot:'Escuchar grabación del mito de Inkarrí. ¿Conocen este relato? ¿Por qué existe? ¿Qué dice de nuestra cultura? Organizador previo grupal.',
     sab:'¿Diferencia entre mito, leyenda y cuento? ¿Conocen alguno de su región? Comparación en cuadro de doble entrada. Lluvia de ideas con tarjetas.',
     conf:'¿Por qué los mitos explican el origen del mundo diferente a la ciencia? ¿Son falsos? Debate filosófico breve por parejas.',
     cons:'Lectura guiada de 2 mitos (uno andino, uno amazónico). Análisis textual: estructura, personajes, tiempo, espacio, mensaje. Grupos heterogéneos.',
     apli:'Reescribir un mito de la región en versión contemporánea para jóvenes, con diálogos y contexto actual.',
     meta:'¿Qué aprendí sobre la cultura peruana? ¿Mejoré mi escritura narrativa? ¿Cómo la tradición oral fortalece mi identidad? Coevaluación con rúbrica.',
     prod:'Compilación digital o impresa de mitos y leyendas reescritas e ilustradas',instr:'Rúbrica de producción escrita',teval:'Formativa',enf:'Intercultural, Identidad cultural',mat:'Textos literarios, grabaciones, hojas de análisis, colores'}
  ],
  ses:[
    {id:1,grado:'3',area:'Matemática',bim:'I',status:'completo',dur:'90 min (2 horas)',num:1,ie:'I.E. San Martín de Porres',doc:'Mg. María Pérez',secc:'A',fecha:'2026-01-20',tipo:'Desarrollo',modal:'Presencial',agrup:'Individual y grupal',esp:'Aula',
     tit:'Fracciones y porcentajes: descuentos en el mercado local',
     comp:'Resuelve problemas de cantidad',desemp:'Establece relaciones entre fracciones, decimales y porcentajes en situaciones de compra y venta',
     mot:'Presentar volantes reales de ofertas con descuentos del 10%, 25% y 50%. Pregunta: ¿Cuál es la mejor oferta? Trabajo en parejas por 3 minutos.',
     sab:'¿Qué es un porcentaje? ¿Cómo convertimos fracción a porcentaje? ¿Cuánto es el 25% de S/.80? Respuestas voluntarias en pizarrón.',
     conf:'"La tienda A vende a S/.80 con 25% de descuento. La tienda B a S/.65 con 10% adicional. ¿Dónde conviene?" ¿Es lo mismo 25% que restar S/.20?',
     cons:'Trabajo en pares: 6 situaciones con precios y descuentos reales. Fichas diferenciadas con datos del barrio. Docente monitorea con preguntas de andamiaje.',
     apli:'"Mi tienda": cada par diseña 3 descuentos, calcula precio final y presenta su "mejor oferta" al grupo.',
     meta:'¿Qué estrategia me resultó más útil? ¿En qué me equivoqué inicialmente? ¿Dónde más puedo usar porcentajes? Ficha individual (5 min).',
     instr:'Rúbrica',enf:'Bien Común, Inclusión',mat:'Volantes del mercado, fichas, calculadora, pizarra, plumones',crit:'Resuelve correctamente al menos 4 de 6 situaciones, explicando el procedimiento'},
    {id:2,grado:'2',area:'Comunicación',bim:'I',status:'completo',dur:'90 min (2 horas)',num:1,ie:'I.E. San Martín de Porres',doc:'Lic. Jorge Ramírez',secc:'A',fecha:'2026-01-15',tipo:'Inicio de unidad',modal:'Presencial',agrup:'Grupos de 4',esp:'Aula',
     tit:'La leyenda del río Amazonas: lectura inferencial y análisis literario',
     comp:'Lee diversos tipos de textos escritos en su lengua materna',desemp:'Infiere el significado cultural y simbólico de textos narrativos de la tradición oral peruana amazónica',
     mot:'Proyectar imágenes del río Amazonas y su biodiversidad. ¿Por qué es tan especial para el Perú? ¿Han escuchado historias sobre su origen?',
     sab:'¿Qué es una leyenda? ¿En qué se diferencia de un cuento real? ¿Conocen alguna leyenda amazónica? Cuadro comparativo en parejas.',
     conf:'"La leyenda dice que el Amazonas nace de las lágrimas de una princesa. La ciencia dice que nace en los Andes. ¿Quién tiene razón? ¿Puede haber dos verdades sobre lo mismo?" Debate breve.',
     cons:'Lectura individual silenciosa. Subrayar personajes, lugar, tiempo y mensaje. Análisis en grupos de 4 con guía de preguntas literarias sobre estructura y simbolismo.',
     apli:'Reescribir el final desde la perspectiva de un personaje secundario. Comparar versiones en plenaria.',
     meta:'¿Qué recurso literario identifiqué con más facilidad? ¿Mejoré mi lectura inferencial? ¿Qué valor tienen nuestras leyendas amazónicas?',
     instr:'Lista de cotejo',enf:'Intercultural, Identidad cultural',mat:'Texto impreso, proyector, imágenes, hojas de análisis, colores',crit:'Identifica al menos 3 elementos del texto narrativo y formula una inferencia fundamentada'},
    {id:3,grado:'1',area:'D.P.C.C.',bim:'I',status:'revision',dur:'90 min (2 horas)',num:2,ie:'I.E. San Martín de Porres',doc:'Prof. Luis García',secc:'A',fecha:'2026-01-22',tipo:'Desarrollo',modal:'Presencial',agrup:'Individual y grupal',esp:'Aula',
     tit:'Mis derechos y deberes como ciudadano(a) peruano(a)',
     comp:'Convive y participa democráticamente en la búsqueda del bien común',desemp:'Explica sus derechos y deberes ciudadanos relacionándolos con artículos de la Constitución Política del Perú',
     mot:'Video de 3 min sobre casos de derechos vulnerados en adolescentes peruanos. ¿Qué derechos reconocen? ¿Les ha pasado algo similar?',
     sab:'¿Qué derechos tienen como estudiantes? ¿Quién los protege? ¿Cuáles son sus deberes? Tarjetas de ideas previas en grupos.',
     conf:'"Si tienes derecho a la educación pero no estudias, ¿dañas ese derecho para otros? ¿Los derechos tienen límites?" Debate inicial en parejas.',
     cons:'Lectura de 8 artículos seleccionados de la Constitución. Mapa conceptual: derechos civiles, políticos, económicos vs. deberes. Presentación grupal.',
     apli:'3 casos reales de adolescentes peruanos: identificar derechos vulnerados y proponer acciones concretas. Juego de roles.',
     meta:'¿Qué derecho considero más importante? ¿Estoy cumpliendo mis deberes? Diario reflexivo individual (1/2 página).',
     instr:'Escala de valoración AD/A/B/C',enf:'Bien Común, Inclusión',mat:'Constitución Política del Perú, fichas de casos, pizarra, proyector',crit:'Identifica al menos 4 derechos constitucionales y propone acciones ciudadanas concretas'}
  ]
};

// ═══════════ AI CONFIG ═══════════
let ENGINE   = localStorage.getItem('pd_engine')||'copilot';
let GEM_KEY  = localStorage.getItem('pd_gem_key')||'';
let CLA_KEY  = localStorage.getItem('pd_cla_key')||'';
let COP_KEY  = localStorage.getItem('pd_cop_key')||'';
let GEM_MDL  = localStorage.getItem('pd_gem_mdl')||'gemini-2.0-flash';
let CLA_MDL  = localStorage.getItem('pd_cla_mdl')||'claude-sonnet-4-5-20251001';
let COP_MDL  = localStorage.getItem('pd_cop_mdl')||'gpt-4o';

// ═══════════ IE PROFILE (persiste en localStorage) ═══════════
let IE_PROFILE = JSON.parse(localStorage.getItem('pd_ie_profile')||'{}');
function getIE(k,def){ return IE_PROFILE[k]||localStorage.getItem('pd_ie_'+k)||def||''; }
let genData = null;

function updAIBadge(){
  const dot=document.getElementById('ai-dot'), txt=document.getElementById('ai-txt'), bdg=document.getElementById('ai-bdg');
  const lbl=document.getElementById('gen-eng-lbl');
  if(ENGINE==='gemini'){dot.textContent='🔵';txt.textContent='Gemini activo';bdg.className='ai-bdg ai-bdg-gem';if(lbl)lbl.textContent='Gemini '+GEM_MDL;}
  else if(ENGINE==='claude'){dot.textContent='🟠';txt.textContent='Claude Premium';bdg.className='ai-bdg ai-bdg-cla';if(lbl)lbl.textContent='Claude '+CLA_MDL;}
  else{dot.textContent='🟢';txt.textContent='Copilot (M365)';bdg.className='ai-bdg';bdg.style.background='#0078d4';bdg.style.color='#fff';if(lbl)lbl.textContent='Copilot '+COP_MDL;}
}

function setEngine(e){
  ENGINE=e;localStorage.setItem('pd_engine',e);
  document.getElementById('eng-gem-btn').classList.toggle('on',e==='gemini');
  document.getElementById('eng-cla-btn').classList.toggle('on',e==='claude');
  document.getElementById('eng-cop-btn').classList.toggle('on',e==='copilot');
  document.getElementById('cfg-gem').style.display=e==='gemini'?'':'none';
  document.getElementById('cfg-cla').style.display=e==='claude'?'':'none';
  document.getElementById('cfg-cop').style.display=e==='copilot'?'':'none';
  updAIBadge();
}

function saveKey(t){
  const el = document.getElementById(t+'-key');
  const k = el ? el.value.trim() : '';
  if(!k || k.startsWith('•')){ toast('Ingresa una API Key válida (no los puntos)','err'); return; }
  localStorage.setItem('pd_'+t+'_key', k);
  if(t==='gem') GEM_KEY=k; else CLA_KEY=k;
  const m = document.getElementById(t+'-model');
  if(m){ const mv=m.value; localStorage.setItem('pd_'+t+'_mdl',mv); if(t==='gem')GEM_MDL=mv; else CLA_MDL=mv; }
  const st = document.getElementById(t+'-st');
  if(st){ st.textContent='✅ Guardada'; setTimeout(()=>{ st.textContent=''; },4000); }
  // Ocultar la key visualmente tras guardar
  if(el){ el.type='password'; setTimeout(()=>{ el.type='text'; el.value=k.substring(0,8)+'...'+k.slice(-4); el.disabled=true; el.style.color='var(--green)'; }, 500); }
  updAIBadge();
  toast('✅ API Key de '+(t==='gem'?'Gemini':t==='cla'?'Claude':'Copilot')+' guardada correctamente','ok');
}

function saveProfile(){
  const n=gv('cfg-nombre'),ie=gv('cfg-ie'),e=gv('cfg-espec');
  const prof = {
    nombre:n, ie:ie, espec:e,
    ugel:gv('cfg-ugel'), reg:gv('cfg-reg'), nivel:gv('cfg-nivel'),
    grados:gv('cfg-grados'), anio:gv('cfg-anio','2026'),
    director:gv('cfg-director'), coord:gv('cfg-coord'),
    dre:gv('cfg-dre'), dir1:gv('cfg-dir1'), dir2:gv('cfg-dir2')
  };
  IE_PROFILE = prof;
  localStorage.setItem('pd_ie_profile', JSON.stringify(prof));
  // Update sidebar
  document.getElementById('s-uname').textContent=n;
  document.getElementById('s-urole').textContent=e+' · '+ie.substring(0,22);
  document.getElementById('s-av').textContent=n.split(' ').filter(w=>w).map(w=>w[0]).slice(0,2).join('').toUpperCase()||'D';
  // Propagate to PA/UD/SES form defaults
  propagateIE();
  toast('✅ Perfil de I.E. guardado y aplicado a todos los formularios','ok');
  if(document.getElementById('cal-cards')) rCal();
}

function propagateIE(){
  const p = IE_PROFILE;
  if(!p || !p.ie) return;
  const paFields = {'pa-ie':p.ie,'pa-ugel':p.ugel,'pa-reg':p.dre||p.reg,'pa-doc':p.nombre,'pa-anio':p.anio||'2026'};
  Object.entries(paFields).forEach(([id,v])=>{ const el=document.getElementById(id); if(el && !el.value) sv(id,v); });
  const udFields = {'ud-ie':p.ie,'ud-doc':p.nombre,'ud-anio':p.anio||'2026'};
  Object.entries(udFields).forEach(([id,v])=>{ const el=document.getElementById(id); if(el && !el.value) sv(id,v); });
  const sesFields = {'ses-ie':p.ie,'ses-doc':p.nombre};
  Object.entries(sesFields).forEach(([id,v])=>{ const el=document.getElementById(id); if(el && !el.value) sv(id,v); });
}

function calcSem(n){
  const ini = document.getElementById('bim'+n+'-ini')?.value;
  const fin = document.getElementById('bim'+n+'-fin')?.value;
  const semEl = document.getElementById('bim'+n+'-sem');
  const diasEl = document.getElementById('bim'+n+'-dias');
  if(!ini || !fin || !semEl) return;
  const d1 = new Date(ini), d2 = new Date(fin);
  if(isNaN(d1)||isNaN(d2)||d2<=d1){
    if(semEl) semEl.value = '';
    if(diasEl) diasEl.textContent = '—';
    return;
  }
  // Count only weekdays (Mon–Fri) between the two dates inclusive
  let diasLect = 0;
  const cur = new Date(d1);
  while(cur <= d2){
    const dow = cur.getDay();
    if(dow!==0 && dow!==6) diasLect++;
    cur.setDate(cur.getDate()+1);
  }
  const semanas = Math.round(diasLect / 5);
  semEl.value = semanas;
  if(diasEl) diasEl.textContent = diasLect+' días lectivos';
  // Live-update total row if on config page
  updTotalSem();
}

function updTotalSem(){
  const tots = [1,2,3,4].map(n=>parseInt(document.getElementById('bim'+n+'-sem')?.value||0)||0);
  const total = tots.reduce((a,b)=>a+b,0);
  const el = document.getElementById('cfg-total-sem');
  if(el) el.textContent = total + ' semanas · ' + (total*5) + ' días lectivos';
}

function initCalcSem(){
  [1,2,3,4].forEach(n=>calcSem(n));
}


// ═══════════ CNEB 3-COL TABLE ═══════════
function renderCNEBTable(aId){
  const el=document.getElementById('pa-cneb-table');
  if(!el) return;
  const data=CNEB[aId]||{c:[]};
  const area=AREAS.find(a=>a.id===aId)||{n:'',c:'#888'};
  const mc=area.c||'#888';
  const TH=`background:${mc};color:#fff;font-weight:700;font-size:11px;padding:8px 10px;border:1px solid ${mc};text-align:left;`;
  const TDc=`border:1px solid #d0d0d0;padding:6px 10px;font-size:11px;vertical-align:top;font-weight:700;color:${mc};background:#fafafa;line-height:1.4;`;
  const TD=`border:1px solid #d0d0d0;padding:6px 10px;font-size:11px;vertical-align:top;line-height:1.4;`;
  let rows='';
  data.c.forEach(comp=>{
    const caps=comp.caps||[];const desm=comp.d||[];
    const maxR=Math.max(caps.length,desm.length,1);
    rows+=`<tr><td rowspan="${maxR}" style="${TDc}"><span style="display:block;font-weight:700;">${comp.n}</span></td><td style="${TD}">${caps[0]||''}</td><td style="${TD}">${desm[0]||''}</td></tr>`;
    for(let i=1;i<maxR;i++) rows+=`<tr><td style="${TD}">${caps[i]||''}</td><td style="${TD}">${desm[i]||''}</td></tr>`;
  });
  el.innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:11px;">
    <thead><tr>
      <th style="${TH}width:26%">COMPETENCIA</th>
      <th style="${TH}width:32%">CAPACIDADES</th>
      <th style="${TH}width:42%">DESEMPEÑOS PRECISADOS</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
  const cmp=document.getElementById('pa-comp');
  if(cmp&&!cmp.value) cmp.value=data.c.map(c=>c.n+':\n'+c.caps.map(x=>'  – '+x).join('\n')).join('\n\n');
}

function updBimLabels(){
  const c = (typeof getCal==='function') ? getCal() : null;
  if(!c) return;
  const pairs = [
    ['lbl-b1-dates', c.b1.ini+' – '+c.b1.fin, 'lbl-b1-sem', c.b1.sem],
    ['lbl-b2-dates', c.b2.ini+' – '+c.b2.fin, 'lbl-b2-sem', c.b2.sem],
    ['lbl-b3-dates', c.b3.ini+' – '+c.b3.fin, 'lbl-b3-sem', c.b3.sem],
    ['lbl-b4-dates', c.b4.ini+' – '+c.b4.fin, 'lbl-b4-sem', c.b4.sem],
  ];
  pairs.forEach(([did,dtxt,sid,stxt])=>{
    const de=document.getElementById(did); if(de) de.textContent=dtxt;
    const se=document.getElementById(sid); if(se) se.textContent=stxt;
  });
}

function saveCal(){
  const cal = {
    b1:{ini:gv('bim1-ini'),fin:gv('bim1-fin'),sem:gv('bim1-sem','8')},
    b2:{ini:gv('bim2-ini'),fin:gv('bim2-fin'),sem:gv('bim2-sem','9')},
    b3:{ini:gv('bim3-ini'),fin:gv('bim3-fin'),sem:gv('bim3-sem','9')},
    b4:{ini:gv('bim4-ini'),fin:gv('bim4-fin'),sem:gv('bim4-sem','9')},
  };
  localStorage.setItem('pd_cal', JSON.stringify(cal));
  // Refresh calendar view if visible
  if(document.getElementById('cal-cards')) rCal();
  updBimLabels();
  toast('✅ Calendarización guardada y actualizada','ok');
}

function getCal(){
  const def = {
    b1:{ini:'16/03/2026',fin:'08/05/2026',sem:'8'},
    b2:{ini:'18/05/2026',fin:'24/07/2026',sem:'9'},
    b3:{ini:'10/08/2026',fin:'09/10/2026',sem:'9'},
    b4:{ini:'19/10/2026',fin:'18/12/2026',sem:'9'},
  };
  try {
    const saved = localStorage.getItem('pd_cal');
    if(!saved) return def;
    const c = JSON.parse(saved);
    // Format dates nicely
    const fmt = s => { if(!s) return '—'; const p=s.split('-'); return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:s; };
    return {
      b1:{ini:fmt(c.b1?.ini),fin:fmt(c.b1?.fin),sem:c.b1?.sem||'8'},
      b2:{ini:fmt(c.b2?.ini),fin:fmt(c.b2?.fin),sem:c.b2?.sem||'9'},
      b3:{ini:fmt(c.b3?.ini),fin:fmt(c.b3?.fin),sem:c.b3?.sem||'9'},
      b4:{ini:fmt(c.b4?.ini),fin:fmt(c.b4?.fin),sem:c.b4?.sem||'9'},
    };
  } catch(x){ return def; }
}

async function testIA(){
  const btn=document.querySelector('#page-config .btn-green');
  const res=document.getElementById('test-r');
  if(btn){btn.disabled=true;btn.textContent='⏳ Probando...';}
  res.innerHTML='<span class="spin-d"></span> Conectando...';
  try{
    const r=await callAI('Responde exactamente: "Conexión OK con PlanDoc Perú 2026"');
    res.innerHTML='<span style="color:var(--green);">✅ '+r.trim()+'</span>';
    toast('✅ Conexión exitosa con '+ENGINE,'ok');
  }catch(e){
    res.innerHTML='<span style="color:var(--red);">❌ '+e.message+'</span>';
    toast('❌ Error: '+e.message,'err');
  }
  if(btn){btn.disabled=false;btn.textContent='🧪 Probar conexión';}
}

// ═══════════ AI CALL ═══════════
async function callAI(prompt){
  if(ENGINE==='gemini'){
    if(!GEM_KEY) throw new Error('Configura tu API Key de Gemini en ⚙️ Configuración IA');
    const model = GEM_MDL || 'gemini-2.0-flash';
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/'+model+':generateContent?key='+GEM_KEY;
    const body = {
      contents:[{parts:[{text:prompt}]}],
      generationConfig:{temperature:0.7, maxOutputTokens:1500}
    };
    let r;
    try {
      r = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)});
    } catch(fetchErr) {
      // Failed to fetch = red de CORS o archivo local
      throw new Error('No se pudo conectar con Gemini. Verifica: (1) tu API Key es válida, (2) tienes conexión a internet, (3) abre este archivo desde un servidor web o usa la extensión Live Server de VSCode. Detalle: '+fetchErr.message);
    }
    if(!r.ok){
      let errMsg = 'Error HTTP '+r.status;
      try { const e = await r.json(); errMsg = e.error?.message || errMsg; } catch(x){}
      if(r.status===400) errMsg = 'API Key inválida o solicitud incorrecta. Verifica tu key en ⚙️ Configuración.';
      if(r.status===403) errMsg = 'API Key sin permisos. Activa la API en Google AI Studio.';
      if(r.status===429) errMsg = 'Límite de solicitudes alcanzado. Espera un momento y reintenta.';
      throw new Error(errMsg);
    }
    const d = await r.json();
    const txt = d.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if(!txt) throw new Error('La IA no devolvió contenido. Intenta de nuevo.');
    return txt;

  } else if(ENGINE==='claude') {
    if(!CLA_KEY) throw new Error('Configura tu API Key de Claude en ⚙️ Configuración IA');
    let r;
    try {
      r = await fetch('https://api.anthropic.com/v1/messages', {
        method:'POST',
        headers:{'Content-Type':'application/json','x-api-key':CLA_KEY,'anthropic-version':'2023-06-01'},
        body:JSON.stringify({model:CLA_MDL, max_tokens:1500, messages:[{role:'user',content:prompt}]})
      });
    } catch(fetchErr) {
      throw new Error('No se pudo conectar con Claude. Detalle: '+fetchErr.message);
    }
    if(!r.ok){
      let errMsg = 'Error HTTP '+r.status;
      try { const e = await r.json(); errMsg = e.error?.message || errMsg; } catch(x){}
      if(r.status===401) errMsg = 'API Key de Claude inválida.';
      if(r.status===429) errMsg = 'Límite de uso de Claude alcanzado.';
      throw new Error(errMsg);
    }
    const d = await r.json();
    return d.content?.map(function(c){ return c.text||''; }).join('') || '';

  } else {
    // ── Copilot / Microsoft 365 (OpenAI compatible) ──
    if(!COP_KEY) throw new Error('Configura tu API Key de Copilot en ⚙️ Configuración IA');
    const model = COP_MDL || 'gpt-4o';
    // Endpoint: Azure OpenAI o OpenAI directo (ambos compatibles)
    const copEndpoint = localStorage.getItem('pd_cop_endpoint') || 'https://api.openai.com/v1/chat/completions';
    let r;
    try {
      r = await fetch(copEndpoint, {
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':'Bearer '+COP_KEY},
        body:JSON.stringify({model:model, max_tokens:1500, temperature:0.7, messages:[{role:'system',content:'Eres un asistente pedagógico experto en el Currículo Nacional de Educación Básica (CNEB) del Perú. Responde siempre en español. Eres preciso, profesional y orientado al contexto educativo peruano.'},{role:'user',content:prompt}]})
      });
    } catch(fetchErr) {
      throw new Error('No se pudo conectar con Copilot/OpenAI. Verifica tu conexión. Detalle: '+fetchErr.message);
    }
    if(!r.ok){
      let errMsg = 'Error HTTP '+r.status;
      try { const e = await r.json(); errMsg = e.error?.message || errMsg; } catch(x){}
      if(r.status===401) errMsg = 'API Key de Copilot inválida o expirada. Verifica en ⚙️ Configuración.';
      if(r.status===429) errMsg = 'Límite de solicitudes de Copilot. Espera un momento.';
      throw new Error(errMsg);
    }
    const d = await r.json();
    return d.choices?.[0]?.message?.content || '';
  }
}

// ═══════════ NAV ═══════════
const PI={
  dashboard:{t:'Panel Principal',s:'Año Lectivo 2026 · I.E. San Martín de Porres',btn:true},
  anual:{t:'Plan Anual por Grado',s:'Programación anual · 2026 · CNEB',btn:true},
  unidades:{t:'Unidades Didácticas',s:'Organización por grado y bimestre · 2026',btn:true},
  sesiones:{t:'Sesiones de Aprendizaje',s:'Por grado y bimestre · 2026',btn:true},
  competencias:{t:'Competencias y Capacidades · CNEB',s:'Currículo Nacional EBR · MINEDU Perú',btn:false},
  enfoques:{t:'Enfoques Transversales',s:'CNEB · MINEDU Perú · Secundaria',btn:false},
  evaluacion:{t:'Instrumentos de Evaluación',s:'Enfoque formativo · CNEB',btn:false},
  generador:{t:'Generador con IA',s:'Copilot M365 / Gemini / Claude · CNEB 2026',btn:false},
  config:{t:'Configuración',s:'Motor de IA y perfil docente',btn:false},
  calendario:{t:'Calendario Lectivo',s:'Año escolar configurable · Tu I.E. · Nivel Secundaria',btn:false},
};
let CG={anual:3,unidades:3,sesiones:3};

function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.s-link').forEach(l=>l.classList.remove('on'));
  const pg=document.getElementById('page-'+id);if(pg)pg.classList.add('on');
  if(id==='calendario') rCal();
  if(id==='config') { loadCfg(); setTimeout(initCalcSem,50); }
  document.querySelectorAll('.s-link').forEach(l=>{if(l.getAttribute('onclick')?.includes("'"+id+"'"))l.classList.add('on');});
  const i=PI[id]||{};
  document.getElementById('tb-ttl').textContent=i.t||'';
  document.getElementById('tb-sub').textContent=i.s||'';
  const tbBtn=document.getElementById('tb-btn');
  tbBtn.style.display=i.btn?'flex':'none';
  // Update topbar button label & action per page
  if(id==='anual')     { tbBtn.textContent='+ Nuevo Plan Anual';  tbBtn.onclick=()=>abrirPA(); }
  else if(id==='unidades') { tbBtn.textContent='+ Nueva Unidad';  tbBtn.onclick=()=>abrirUD(); }
  else if(id==='sesiones') { tbBtn.textContent='+ Nueva Sesión';  tbBtn.onclick=()=>abrirSES(); }
  else if(id==='dashboard'){ tbBtn.textContent='+ Nueva Planificación'; tbBtn.onclick=openNew; }
  else                     { tbBtn.textContent='+ Nueva Planificación'; tbBtn.onclick=openNew; }
  if(id==='dashboard')rDash();
  if(id==='anual')rAnual(CG.anual);
  if(id==='unidades')rUD(CG.unidades);
  if(id==='sesiones')rSES(CG.sesiones);
  if(id==='competencias')rComp('mat');
  if(id==='enfoques')rEnf();
  if(id==='evaluacion')rEval();
  if(id==='config')loadCfg();
  window.scrollTo(0,0);
}

function openNew(){
  const pg=document.querySelector('.page.on')?.id||'';
  if(pg.includes('anual'))abrirPA();
  else if(pg.includes('unid'))abrirUD();
  else abrirSES();
}

// ═══════════ GRADE TABS ═══════════
function bldGrades(cid,sec,cur){
  const c=document.getElementById(cid);if(!c)return;
  c.innerHTML=[1,2,3,4,5].map(g=>`<div class="gt${g===cur?' on':''}" onclick="selG('${sec}',${g},this)"><span class="gn">${g}°</span><span class="gl">Sec.</span></div>`).join('');
}
function selG(s,g,el){
  CG[s]=g;
  el.closest('.gts').querySelectorAll('.gt').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  if(s==='anual')rAnual(g);
  if(s==='unidades')rUD(g);
  if(s==='sesiones')rSES(g);
}

// ═══════════ RENDER DASHBOARD ═══════════
function rDash(){
  const sg=document.getElementById('stats-g');
  if(sg)sg.innerHTML=`
    <div class="stat"><div class="stat-ic" style="background:#FEF0EE;">📅</div><div><div class="stat-n">${DB.pa.length}</div><div class="stat-l">Planes Anuales</div><div class="stat-s">${DB.pa.filter(p=>p.status==='completo').length} completos</div></div></div>
    <div class="stat"><div class="stat-ic" style="background:#EBF2FF;">📚</div><div><div class="stat-n">${DB.ud.length}</div><div class="stat-l">Unidades Didácticas</div><div class="stat-s">${DB.ud.filter(u=>u.status==='completo').length} completas</div></div></div>
    <div class="stat"><div class="stat-ic" style="background:#E8F7F0;">🎯</div><div><div class="stat-n">${DB.ses.length}</div><div class="stat-l">Sesiones</div><div class="stat-s">Con IA disponible</div></div></div>
    <div class="stat"><div class="stat-ic" style="background:#FFFAED;">📊</div><div><div class="stat-n">${Math.round(DB.ses.filter(s=>s.status==='completo').length/Math.max(DB.ses.length,1)*100)}%</div><div class="stat-l">Avance 2026</div><div class="stat-s">↑ Buen progreso</div></div></div>`;
  updBadges();
  const rc=document.getElementById('dash-r');if(!rc)return;
  rc.innerHTML='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">'+DB.ses.slice(0,3).map(s=>{
    const a=AREAS.find(x=>x.n===s.area)||{e:'📋',c:'#888'};
    return `<div class="card" style="cursor:pointer;transition:all .15s;" onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform=''" onclick="carSES(${s.id})">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:9px;">
        <div style="width:36px;height:36px;border-radius:8px;background:${a.c}22;display:flex;align-items:center;justify-content:center;font-size:17px;">${a.e}</div>
        <div><div style="font-size:10px;font-weight:700;color:${a.c};text-transform:uppercase;">${s.area}</div><div style="font-size:12.5px;font-weight:700;line-height:1.3;margin-top:1px;">${s.tit}</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:7px;border-top:1px solid var(--border);">
        <span style="font-size:10.5px;color:var(--ink3);">${s.grado}° · Bim ${s.bim} · S.${s.num}</span>${ST[s.status]}
      </div></div>`;
  }).join('')+'</div>';
}
function updBadges(){
  document.getElementById('bdg-pa').textContent=DB.pa.length;
  document.getElementById('bdg-ud').textContent=DB.ud.length;
  document.getElementById('bdg-ses').textContent=DB.ses.length;
}

// ═══════════ RENDER ANUAL ═══════════
function rAnual(g){
  bldGrades('g-anual','anual',g);
  const gs=String(g),items=DB.pa.filter(p=>p.grado===gs);
  let h=`<div class="tc"><div class="tc-hdr"><div><div class="tc-ttl">📅 Plan Anual · ${g}° Secundaria 2026</div><div class="tc-sub">${items.length} área(s) registrada(s)</div></div><button class="btn btn-red btn-sm" onclick="abrirPA(${g})">+ Nuevo Plan</button></div>
  <table><thead><tr><th>Área</th><th>Docente</th><th>Bim. I</th><th>Bim. II</th><th>Bim. III</th><th>Bim. IV</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>`;
  if(!items.length)h+=`<tr><td colspan="8" class="no-data">Sin planes para ${g}°. <a onclick="abrirPA(${g})">Crear ahora</a></td></tr>`;
  items.forEach(p=>{
    const a=AREAS.find(x=>x.n===p.area)||{e:'📋',c:'#888'};
    h+=`<tr><td><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:16px;">${a.e}</span><div><div class="tdm">${p.area}</div><div class="tds">${p.secc}</div></div></div></td>
    <td style="font-size:11.5px;">${p.doc}</td>
    <td style="font-size:11px;">${(p.b1||'—').split('\n').map(l=>`<div>${l}</div>`).join('')}</td>
    <td style="font-size:11px;">${(p.b2||'—').split('\n').map(l=>`<div>${l}</div>`).join('')}</td>
    <td style="font-size:11px;">${(p.b3||'—').split('\n').map(l=>`<div>${l}</div>`).join('')}</td>
    <td style="font-size:11px;">${(p.b4||'—').split('\n').map(l=>`<div>${l}</div>`).join('')}</td>
    <td>${ST[p.status]}</td>
    <td><div class="acts">
      <button class="ab" onclick="carPA(${p.id})" title="Editar">✏️</button>
      <button class="ab" onclick="dupPA(${p.id})" title="Duplicar para otro grado" style="color:#1A4A9A;border-color:#1A4A9A;">📋</button>
      <button class="ab" onclick="expDir('pa',${p.id},'pdf')" title="PDF">📑</button>
      <button class="ab" onclick="expDir('pa',${p.id},'word')" title="Word">📄</button>
      <button class="ab" onclick="impDir('pa',${p.id})" title="Imprimir">🖨</button>
      <button class="ab del" onclick="elim('pa',${p.id},'anual',${g})">🗑</button>
    </div></td></tr>`;
  });
  h+=`</tbody></table></div>`;
  const noR=AREAS.filter(a=>!items.find(p=>p.area===a.n));
  if(noR.length){
    h+=`<div class="sec" style="margin-top:4px;"><div class="sec-t" style="font-size:13px;">Áreas sin Plan Anual · ${g}° Sec.</div></div><div class="area-mini">`;
    noR.forEach(a=>{h+=`<div class="am" onclick="presPA('${a.n}',${g})" style="border-color:${a.c}44;" onmouseenter="this.style.borderColor='${a.c}'" onmouseleave="this.style.borderColor='${a.c}44'"><div class="am-e">${a.e}</div><div class="am-n">${a.n}</div><div class="am-a" style="color:${a.c};">+ Crear plan</div></div>`;});
    h+=`</div>`;
  }
  document.getElementById('anual-c').innerHTML=h;
}

// ═══════════ RENDER UD ═══════════
function rUD(g){
  bldGrades('g-ud','unidades',g);
  const gs=String(g),items=DB.ud.filter(u=>u.grado===gs);
  let h=`<div class="bim-g">`;
  ['I','II','III','IV'].forEach(bim=>{
    const bi=items.filter(u=>u.bim===bim);
    h+=`<div class="bim-c"><div class="bim-h" style="background:${BC[bim]};"><div class="bt">BIMESTRE ${bim}</div><div class="bd">${BD[bim]}</div></div><div class="bim-b">`;
    if(!bi.length)h+=`<div style="text-align:center;padding:12px;font-size:11px;color:var(--ink3);">Sin unidades</div>`;
    bi.forEach(u=>{
      const a=AREAS.find(x=>x.n===u.area)||{e:'📋',c:'#888'};
      h+=`<div class="bim-i" onclick="carUD(${u.id})" style="border-left-color:${a.c};">
        <div class="bim-it">${a.e} ${u.tit}</div>
        <div class="bim-is">${u.area} · U.${u.num} · ${u.sem} sem. ${ST[u.status]}</div>
        <div class="bim-ia">
          <button class="ab" style="width:24px;height:24px;font-size:11px;" onclick="event.stopPropagation();expDir('ud',${u.id},'pdf')" title="PDF">📑</button>
          <button class="ab" style="width:24px;height:24px;font-size:11px;" onclick="event.stopPropagation();expDir('ud',${u.id},'word')" title="Word">📄</button>
          <button class="ab" style="width:24px;height:24px;font-size:11px;" onclick="event.stopPropagation();impDir('ud',${u.id})" title="Imprimir">🖨</button>
          <button class="ab del" style="width:24px;height:24px;font-size:11px;" onclick="event.stopPropagation();elim('ud',${u.id},'unidades',${g})">🗑</button>
        </div></div>`;
    });
    h+=`<div class="bim-add" onclick="presUD(${g},'${bim}')">+ Nueva Unidad Bim. ${bim}</div></div></div>`;
  });
  h+=`</div>`;
  document.getElementById('ud-c').innerHTML=h;
}

// ═══════════ RENDER SES ═══════════
function rSES(g){
  bldGrades('g-ses','sesiones',g);
  const gs=String(g),items=DB.ses.filter(s=>s.grado===gs);
  let h='';
  ['I','II','III','IV'].forEach(bim=>{
    const bi=items.filter(s=>s.bim===bim);
    h+=`<div style="margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:9px;margin-bottom:9px;">
        <div style="background:${BC[bim]};color:#fff;font-size:10px;font-weight:700;padding:3px 11px;border-radius:13px;">BIMESTRE ${bim} · ${BD[bim]}</div>
        <span style="font-size:11px;color:var(--ink3);">${bi.length} sesiones</span>
        <button class="btn btn-red btn-xs" style="margin-left:auto;" onclick="presSES(${g},'${bim}')">+ Sesión Bim. ${bim}</button>
      </div>
      <div class="tc"><table><thead><tr><th>N°</th><th>Título</th><th>Área</th><th>Competencia</th><th>Duración</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>`;
    if(!bi.length)h+=`<tr><td colspan="7" class="no-data">Sin sesiones. <a onclick="presSES(${g},'${bim}')">Crear sesión</a></td></tr>`;
    bi.forEach((s,i)=>{
      const a=AREAS.find(x=>x.n===s.area)||{e:'📋',c:'#888'};
      h+=`<tr><td style="font-weight:700;font-size:13px;">${s.num||i+1}</td>
      <td><div class="tdm">${a.e} ${s.tit}</div><div class="tds">${s.tipo||''} · ${s.modal||''}</div></td>
      <td style="font-size:11.5px;font-weight:700;color:${a.c};">${s.area}</td>
      <td style="font-size:11px;">${(s.comp||'').substring(0,45)}...</td>
      <td style="font-weight:700;">${s.dur}</td>
      <td>${ST[s.status]}</td>
      <td><div class="acts">
        <button class="ab" onclick="carSES(${s.id})" title="Editar">✏️</button>
        <button class="ab" onclick="expDir('ses',${s.id},'pdf')" title="PDF">📑</button>
        <button class="ab" onclick="expDir('ses',${s.id},'word')" title="Word">📄</button>
        <button class="ab" onclick="impDir('ses',${s.id})" title="Imprimir">🖨</button>
        <button class="ab del" onclick="elim('ses',${s.id},'sesiones',${g})">🗑</button>
      </div></td></tr>`;
    });
    h+=`</tbody></table></div></div>`;
  });
  document.getElementById('ses-c').innerHTML=h;
}

// ═══════════ COMPETENCIAS ═══════════
function rComp(aId){
  const tbs=document.getElementById('comp-tbs');
  if(tbs)tbs.innerHTML=AREAS.map(a=>`<button class="tb${a.id===aId?' on':''}" onclick="rComp('${a.id}');this.closest('.tbs').querySelectorAll('.tb').forEach(t=>t.classList.remove('on'));this.classList.add('on');">${a.e} ${a.n}</button>`).join('');
  const data=CNEB[aId]||{c:[]};const area=AREAS.find(a=>a.id===aId)||{n:'',c:'#888'};
  let h='';
  data.c.forEach((c,i)=>{
    h+=`<div style="margin-bottom:10px;border-radius:8px;overflow:hidden;border:1px solid var(--border);">
      <div style="display:flex;align-items:center;gap:8px;padding:10px 13px;background:var(--paper2);cursor:pointer;" onclick="togAcc(this)">
        <span style="background:${area.c}22;color:${area.c};font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;">C${i+1}</span>
        <span style="font-size:12.5px;font-weight:700;flex:1;">${c.n}</span>
        <span style="font-size:14px;color:var(--ink3);transition:transform .15s;">›</span>
      </div>
      <div style="display:none;background:var(--paper3);padding:11px 13px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);letter-spacing:1px;margin-bottom:6px;">Capacidades:</div>
        ${c.caps.map(cap=>`<div style="background:var(--paper2);border-radius:5px;padding:6px 9px;margin-bottom:4px;font-size:12px;border-left:3px solid ${area.c};">→ ${cap}</div>`).join('')}
        ${c.d?`<div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--blue);letter-spacing:1px;margin:9px 0 5px;">Desempeños precisados del ciclo:</div>${c.d.map(d=>`<div style="background:#EBF2FF;border-radius:5px;padding:6px 9px;margin-bottom:3px;font-size:11.5px;border-left:3px solid var(--blue);">◆ ${d}</div>`).join('')}`:''}
      </div></div>`;
  });
  document.getElementById('comp-c').innerHTML=h;
}
function togAcc(h){const b=h.nextElementSibling,ar=h.querySelector('span:last-child');b.style.display=b.style.display==='none'?'block':'none';ar.style.transform=b.style.display==='block'?'rotate(90deg)':'';}

// ═══════════ ENFOQUES ═══════════
const ENFS=[
  {e:'🌍',n:'Ambiental',c:'#0E7A4A',d:'Forma personas con conciencia crítica sobre la problemática ambiental y climática del Perú y el mundo. Promueve estilos de vida sostenibles.',
   v:['Responsabilidad ambiental','Justicia con los animales','Valoración de la biodiversidad'],
   a:['Propone y ejecuta acciones para reducir la contaminación en su entorno.','Demuestra hábitos de reciclaje y cuidado del medio ambiente.','Reflexiona sobre el impacto ambiental de las actividades humanas.']},
  {e:'🤝',n:'Intercultural',c:'#1A4A8A',d:'Impulsa el diálogo y convivencia entre las distintas culturas del Perú pluricultural. Valora la identidad propia y la del otro.',
   v:['Respeto a la identidad cultural','Diálogo intercultural','Justicia social'],
   a:['Interactúa con respeto ante personas de diferentes culturas y costumbres.','Valora y promueve las expresiones culturales de su comunidad.','Resuelve conflictos interculturales mediante el diálogo.']},
  {e:'♀️',n:'Igualdad de Género',c:'#880E4F',d:'Promueve la igualdad entre hombres y mujeres, cuestionando estereotipos y roles. Reconoce diferencias sin que generen discriminación.',
   v:['Igualdad y dignidad','No discriminación','Equidad de género'],
   a:['Cuestiona estereotipos de género en actividades cotidianas.','Promueve la participación igualitaria de hombres y mujeres.','Denuncia situaciones de discriminación por razón de género.']},
  {e:'⚖️',n:'Inclusivo / Diversidad',c:'#5B2D8E',d:'Reconoce y valora las diferencias individuales. Promueve ambientes donde todos participen con igualdad de oportunidades.',
   v:['Respeto a las diferencias','Equidad','Confianza en la persona'],
   a:['Apoya a sus compañeros con necesidades educativas especiales.','Adapta sus comunicaciones para incluir a todos.','Promueve un clima de aula donde todos participan por igual.']},
  {e:'💡',n:'Orientación al Bien Común',c:'#B85C00',d:'El bienestar general está por encima del interés individual. El aprendizaje-servicio y la responsabilidad social son la base de la ciudadanía.',
   v:['Equidad y justicia','Solidaridad','Empatía social'],
   a:['Prioriza el bienestar del grupo sobre el interés personal.','Participa en actividades de servicio a la comunidad.','Demuestra empatía ante las necesidades de sus compañeros.']},
  {e:'🏆',n:'Búsqueda de la Excelencia',c:'#827717',d:'Superación personal, persistencia y perfeccionamiento continuo. El autoaprendizaje y la mejora son filosofía de vida del estudiante.',
   v:['Superación personal','Perseverancia','Flexibilidad y apertura'],
   a:['Se esfuerza por mejorar continuamente sus resultados académicos.','Persiste ante las dificultades sin rendirse.','Revisa y corrige sus producciones para alcanzar la calidad esperada.']},
];
function rEnf(){document.getElementById('enf-g').innerHTML=ENFS.map(e=>`<div class="card"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="font-size:24px;">${e.e}</span><div><div style="font-size:13px;font-weight:700;color:${e.c};">${e.n}</div><div style="font-size:9.5px;color:var(--ink3);">Enfoque Transversal · CNEB</div></div></div><p style="font-size:11.5px;color:var(--ink3);line-height:1.7;margin-bottom:9px;">${e.d}</p><div style="display:flex;gap:4px;flex-wrap:wrap;">${e.v.map(v=>`<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;background:${e.c}22;color:${e.c};">${v}</span>`).join('')}</div></div>`).join('');}

const EVALS=[
  {e:'📋',n:'Rúbrica de desempeño',t:'Formativa',c:'#C0392B',d:'Describe niveles de logro con criterios claros. Permite retroalimentar con precisión. Alineada a estándares del CNEB.',tags:['AD/A/B/C','Competencia','Retroalimentación']},
  {e:'✅',n:'Lista de cotejo',t:'Formativa',c:'#0E7A4A',d:'Registra presencia o ausencia de indicadores. Útil para el seguimiento de capacidades en sesiones prácticas y proyectos.',tags:['Indicadores','Observación','Verificación']},
  {e:'📊',n:'Escala de valoración',t:'Sumativa',c:'#B85C00',d:'AD: Logro destacado · A: Logro esperado · B: En proceso · C: En inicio. Alineada a estándares del CNEB para secundaria.',tags:['AD','A','B','C']},
  {e:'📝',n:'Ficha de autoevaluación',t:'Metacognición',c:'#5B2D8E',d:'El estudiante reflexiona sobre su propio proceso. Fomenta autorregulación y metacognición como competencias transversales.',tags:['Metacognición','Autorregulación','Autonomía']},
  {e:'🤝',n:'Ficha de coevaluación',t:'Entre pares',c:'#1A4A8A',d:'Los estudiantes se evalúan mutuamente con criterios claros. Promueve el aprendizaje colaborativo y responsabilidad entre pares.',tags:['Colaborativo','Entre pares','Responsabilidad']},
  {e:'📁',n:'Portafolio del estudiante',t:'Procesual',c:'#827717',d:'Colección organizada de evidencias que muestran el progreso. Incluye criterios de selección y reflexión del estudiante.',tags:['Evidencias','Progreso','Reflexión']},
];
function rEval(){document.getElementById('eval-g').innerHTML=EVALS.map(e=>`<div class="card"><div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;"><div style="width:40px;height:40px;border-radius:8px;background:${e.c}22;display:flex;align-items:center;justify-content:center;font-size:19px;">${e.e}</div><div><div style="font-size:12.5px;font-weight:700;">${e.n}</div><div style="font-size:9.5px;color:${e.c};font-weight:700;text-transform:uppercase;">${e.t}</div></div></div><p style="font-size:11.5px;color:var(--ink3);line-height:1.6;margin-bottom:8px;">${e.d}</p><div style="display:flex;gap:4px;flex-wrap:wrap;">${e.tags.map(t=>`<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;background:${e.c}22;color:${e.c};">${t}</span>`).join('')}</div></div>`).join('');}

// ═══════════ AREA → COMP PANEL ═══════════
function pobAreaSel(){
  ['pa-area','ud-area','ses-area','gen-area'].forEach(id=>{
    const s=document.getElementById(id);if(!s)return;
    s.innerHTML=AREAS.map(a=>`<option value="${a.n}">${a.e} ${a.n}</option>`).join('');
  });
}

function onArea(pfx){
  const aNm=document.getElementById(pfx+'-area').value;
  const aObj=AREAS.find(a=>a.n===aNm);
  const cD=CNEB[aObj?.id||'mat'];
  if(!cD)return;
  const pEl=document.getElementById(pfx+'-cp');
  // Populate the cp panel only if it exists in the DOM
  if(pEl){
    let h=`<div style="font-size:10px;font-weight:700;color:var(--ink3);margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;">Competencias CNEB · ${aNm}</div>`;
    cD.c.forEach((c,i)=>{
      h+=`<div class="ci" style="border-left-color:${aObj.c};">
        <div class="cn" style="color:${aObj.c};">C${i+1}: ${c.n}</div>
        <div class="cc">${c.caps.map(cap=>`<div class="ccap">→ ${cap}</div>`).join('')}</div>
        ${c.d?`<div>${c.d.slice(0,2).map(d=>`<div class="cdes">◆ ${d}</div>`).join('')}</div>`:''}
      </div>`;
    });
    pEl.innerHTML=h;
  }
  // Always populate ses-comp select regardless of cp panel
  if(pfx==='ses'){
    const cSel=document.getElementById('ses-comp');
    if(cSel)cSel.innerHTML=cD.c.map(c=>`<option>${c.n}</option>`).join('');
  }
  if(pfx==='ud'){
    const compEl=document.getElementById('ud-comp');
    if(compEl) compEl.oninput=()=>updateCaps('ud');
    const capsEl=document.getElementById('ud-caps');
    if(capsEl) capsEl.value='';
  }
  if(pfx==='pa' && aObj){ renderCNEBTable(aObj.id); renderMetaTable(aNm); }
}

// ═══════════ MODALS ═══════════
function abrir(id){document.getElementById(id).classList.add('on');document.body.style.overflow='hidden';}
function cerrar(id){document.getElementById(id).classList.remove('on');document.body.style.overflow='';}
document.querySelectorAll('.ov').forEach(o=>o.addEventListener('click',function(e){
  if(e.target!==this) return;
  const ovId=this.id;
  const self=this;

  // Check if modal has any data worth saving
  function hasData(){
    const inputs=self.querySelectorAll('input:not([type=hidden]):not([type=number]), textarea, select');
    for(const el of inputs){
      const skip=['modal','agrup','ciclo','status','teval','instr','tipo','dur','bim','grado','area','nivel','apro'];
      if(skip.some(s=>el.id.endsWith('-'+s))) continue;
      const v=(el.value||'').trim();
      if(v && v!==el.defaultValue && v!=='Presencial' && v!=='Individual y grupal'
         && v!=='Formativa' && v!=='Rúbrica' && v!=='I' && v!=='1°' && v!=='Borrador') return true;
    }
    return false;
  }

  function doClose(){
    if(ovId==='ov-ud'){sv('ud-id','');}
    if(ovId==='ov-ses'){sv('ses-id','');}
    if(ovId==='ov-pa'){sv('pa-id','');}
    self.classList.remove('on');
    document.body.style.overflow='';
  }

  if(!hasData()){ doClose(); return; }

  // Show confirmation overlay
  const confirm=document.createElement('div');
  confirm.style.cssText='position:fixed;inset:0;background:rgba(15,15,26,.8);z-index:10000;display:flex;align-items:center;justify-content:center;';
  const tipo=ovId==='ov-pa'?'Plan Anual':ovId==='ov-ud'?'Unidad Didáctica':'Sesión de Aprendizaje';
  confirm.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:28px 32px;max-width:400px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.3);font-family:Sora,Arial,sans-serif;text-align:center;">
      <div style="font-size:36px;margin-bottom:10px;">⚠️</div>
      <div style="font-size:15px;font-weight:700;color:#0F0F1A;margin-bottom:8px;">¿Salir sin guardar?</div>
      <div style="font-size:12px;color:#6B6B8A;margin-bottom:20px;line-height:1.6;">
        Tienes cambios en <strong>${tipo}</strong> que no han sido guardados.<br>
        Si sales ahora, perderás los datos ingresados.
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
        <button id="conf-cancel" style="padding:9px 18px;border-radius:8px;border:1.5px solid #ddd;background:#fff;cursor:pointer;font-weight:600;font-size:12.5px;font-family:Sora,Arial,sans-serif;min-width:120px;">
          ✏️ Seguir editando
        </button>
        <button id="conf-discard" style="padding:9px 18px;border-radius:8px;border:1.5px solid #e74c3c;background:#fff;color:#e74c3c;cursor:pointer;font-weight:600;font-size:12.5px;font-family:Sora,Arial,sans-serif;min-width:120px;">
          🗑 Descartar cambios
        </button>
        <button id="conf-save" style="padding:9px 18px;border-radius:8px;border:none;background:#C0392B;color:#fff;cursor:pointer;font-weight:700;font-size:12.5px;font-family:Sora,Arial,sans-serif;min-width:120px;">
          💾 Guardar y salir
        </button>
      </div>
    </div>`;

  document.body.appendChild(confirm);

  // Seguir editando — close the confirm, keep modal open
  document.getElementById('conf-cancel').onclick=()=>document.body.removeChild(confirm);

  // Descartar — close modal without saving
  document.getElementById('conf-discard').onclick=()=>{
    document.body.removeChild(confirm);
    doClose();
  };

  // Guardar y salir — save then close
  document.getElementById('conf-save').onclick=()=>{
    document.body.removeChild(confirm);
    try{
      if(ovId==='ov-pa') guarPA();
      else if(ovId==='ov-ud') guarUD();
      else if(ovId==='ov-ses') guarSES();
    }catch(err){ toast('❌ Error al guardar: '+err.message,'err'); }
  };
}));

// ═══════════ DB PERSISTENCE ═══════════
function saveDB(){
  try{
    localStorage.setItem('pd_db_pa',  JSON.stringify(DB.pa));
    localStorage.setItem('pd_db_ud',  JSON.stringify(DB.ud));
    localStorage.setItem('pd_db_ses', JSON.stringify(DB.ses));
  }catch(e){ console.warn('saveDB error:',e); }
}
function loadDB(){
  try{
    const pa  = localStorage.getItem('pd_db_pa');
    const ud  = localStorage.getItem('pd_db_ud');
    const ses = localStorage.getItem('pd_db_ses');
    if(pa)  DB.pa  = JSON.parse(pa);
    if(ud)  DB.ud  = JSON.parse(ud);
    if(ses) DB.ses = JSON.parse(ses);
  }catch(e){ console.warn('loadDB error:',e); }
}

// ═══════════ RESET FORMS ═══════════
function resetF(pfx){
  const skip = [pfx+'-id', pfx+'-sub', pfx+'-cp', pfx+'-ld', pfx+'-msg', pfx+'-area', pfx+'-grado'];
  const ovEl = document.getElementById('ov-'+pfx);
  if(!ovEl) return;
  ovEl.querySelectorAll('input, textarea, select').forEach(el=>{
    if(skip.includes(el.id)) return;
    if(el.tagName==='SELECT') el.selectedIndex=0;
    else if(el.type==='hidden') return;
    else if(el.type==='number') el.value='';
    else el.value='';
  });
  // Restore IE profile defaults after clearing
  const p=(typeof IE_PROFILE!=='undefined')?IE_PROFILE:{};
  if(pfx==='pa'){
    sv('pa-ie',p.ie||''); sv('pa-ugel',p.ugel||''); sv('pa-reg',p.dre||p.reg||'');
    sv('pa-doc',p.nombre||''); sv('pa-anio',p.anio||'2026');
    sv('pa-modal','Presencial'); sv('pa-horas','5'); sv('pa-nunits','8');
    sv('pa-enf','Ambiental, Inclusión, Bien Común');
    sv('pa-bib-doc','- Currículo Nacional de Educación Básica, MINEDU.\n- Programa Curricular de Educación Secundaria, MINEDU.\n- Texto del área. MINEDU, 2025.');
    sv('pa-bib-est','- Texto del área. MINEDU, 2025.\n- Fichas del área. MINEDU, 2025.\n- Cuaderno de trabajo.');
    sv('pa-eval','Rúbrica, Lista de cotejo, Escala AD/A/B/C');
    sv('pa-mat','Textos MINEDU, fichas, recursos TIC');
  }
  if(pfx==='ud'){
    sv('ud-ie',p.ie||''); sv('ud-doc',p.nombre||''); sv('ud-anio',p.anio||'2026');
    sv('ud-modal','Presencial'); sv('ud-agrup','Individual y grupal');
    sv('ud-num','0'); sv('ud-sem','4'); sv('ud-hrs','20');
    const hint=document.getElementById('ud-prod-pa-hint');if(hint)hint.style.display='none';
  }
  if(pfx==='ses'){
    sv('ses-ie',p.ie||''); sv('ses-doc',p.nombre||'');
    sv('ses-modal','Presencial'); sv('ses-agrup','Individual y grupal'); sv('ses-dur','90 min (2 horas)');
    sv('ses-fecha',new Date().toISOString().split('T')[0]);
  }
}

function abrirPA(g){
  sv('pa-id','');
  document.getElementById('pa-sub').textContent='Nuevo Plan';
  resetF('pa');
  onArea('pa');
  // Pre-fill grade if provided
  if(g){ sv('pa-grado',g+'°'); }
  // Pre-fill IE profile data
  const p = (typeof IE_PROFILE!=='undefined') ? IE_PROFILE : {};
  if(p.ie)    { const el=document.getElementById('pa-ie');    if(el && !el.value) el.value=p.ie; }
  if(p.ugel)  { const el=document.getElementById('pa-ugel');  if(el && !el.value) el.value=p.ugel; }
  if(p.dre||p.reg){ const el=document.getElementById('pa-reg'); if(el && !el.value) el.value=p.dre||p.reg||''; }
  if(p.nombre){ const el=document.getElementById('pa-doc');   if(el && !el.value) el.value=p.nombre; }
  if(p.anio)  { const el=document.getElementById('pa-anio');  if(el) el.value=p.anio||'2026'; }
  // Update bimester labels from saved calendar
  updBimLabels();
  // Render competencias table for current area
  const _aObj=AREAS.find(a=>a.n===gv('pa-area'));
  if(_aObj) renderCNEBTable(_aObj.id);
  abrir('ov-pa');
}

// show/hide week-specific competency textareas
function updateWeekFields(){
  const sem=parseInt(gv('ud-sem',0))||0;
  const container=document.getElementById('ud-comp-week-container');
  if(!container)return;
  container.querySelectorAll('.wc').forEach(el=>{
    const wk=parseInt(el.getAttribute('data-week'))||0;
    el.style.display=wk>0&&wk<=sem?'block':'none';
  });
  container.className=sem>=5?'g5':sem===4?'g4':'';
}
(function(){
  const semEl=document.getElementById('ud-sem');
  if(semEl){semEl.addEventListener('change',function(){updateWeekFields();renderSemanasUD(parseInt(this.value)||4,[]);});}
})();

function updatePASelector(g){
  const sel=document.getElementById('sel-pa-preload');if(!sel)return;
  const pas=g==null||g===''?DB.pa.slice():DB.pa.filter(p=>String(p.grado)===String(g));
  sel.innerHTML='<option value="">— Selecciona un Plan Anual —</option>';
  pas.forEach(pa=>{const o=document.createElement('option');o.value=pa.id;o.textContent=pa.area+' · '+pa.grado+'° ('+pa.secc+')';sel.appendChild(o);});
}

function updateUDSelector(g){
  const sel=document.getElementById('sel-ud-preload');if(!sel)return;
  // Show units for the grade, or ALL units if none specified or no units for that grade
  let uds=g==null||g===''?DB.ud.slice():DB.ud.filter(u=>String(u.grado)===String(g));
  if(!uds.length) uds=DB.ud.slice(); // fallback to all units
  sel.innerHTML='<option value="">— Selecciona una Unidad para precargar datos —</option>';
  // Group by bimestre for better readability
  const bims=['I','II','III','IV'];
  bims.forEach(bim=>{
    const bi=uds.filter(u=>u.bim===bim);
    if(!bi.length)return;
    const og=document.createElement('optgroup');
    og.label='Bimestre '+bim;
    bi.forEach(ud=>{
      const o=document.createElement('option');
      o.value=ud.id;
      o.textContent=ud.area+' · U.'+ud.num+' · '+ud.tit.substring(0,35)+(ud.tit.length>35?'...':'');
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
  // If no units at all, show message
  if(!uds.length){
    const o=document.createElement('option');
    o.disabled=true;
    o.textContent='Sin unidades creadas — crea una unidad primero';
    sel.appendChild(o);
  }
}

function updateUDEnfFromPA(pa){
  if(!pa)return;
  const num = parseInt(gv('ud-num',0))||0;  // 0-based index
  const idx = num;
  const enfsD=(pa.enfsdet||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
  const enfVals=(pa.enfvals||'').split('\n').map(l=>l.replace(/^[^:]+:\s*/,'').trim()).filter(Boolean);
  const enfObs=(pa.enfobs||'').split('\n').map(l=>l.replace(/^[^:]+:\s*/,'').trim()).filter(Boolean);
  // productos por unidad
  const prods=(pa.prods||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
  // situaciones por unidad
  const sits=(pa.sits||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
  // campos temáticos por unidad
  const campos=(pa.campos||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);

  sv('ud-enf', enfsD[idx]||pa.enf||'');
  sv('ud-enf-vals', enfVals[idx]||'');
  sv('ud-enf-obs', enfObs[idx]||'');

  // auto-fill product if present in PA and current field is empty
  if(prods[idx]){
    sv('ud-prod', prods[idx]);
    const hint=document.getElementById('ud-prod-pa-hint');
    if(hint)hint.style.display='block';
  }
  // auto-fill situación significativa if empty
  if(sits[idx] && !gv('ud-sit')){
    sv('ud-sit', sits[idx]);
  }
}

(function(){
  const numEl=document.getElementById('ud-num');
  if(numEl){
    numEl.addEventListener('change',function(){
      // Only auto-fill from PA when creating a NEW unit (ud-id is empty)
      if(gv('ud-id')) return;
      const selEl=document.getElementById('sel-pa-preload');
      if(!selEl||!selEl.value) return;
      const pid=parseInt(selEl.value);
      if(pid) updateUDEnfFromPA(DB.pa.find(x=>x.id===pid));
    });
  }
})();

function preloadUDfromPA(paId){
  if(!paId)return;
  const pa=DB.pa.find(x=>x.id===paId);if(!pa)return;
  sv('ud-area',pa.area);sv('ud-grado',(pa.grado||'3')+'°');
  sv('ud-ie',pa.ie||'');sv('ud-doc',pa.doc||'');sv('ud-anio',pa.anio||'2026');
  onArea('ud');updateUDEnfFromPA(pa);
}

function preloadSESfromUD(udId){
  if(!udId)return;
  const ud=DB.ud.find(x=>x.id===udId);if(!ud)return;
  sv('ses-area',ud.area||'');sv('ses-grado',(ud.grado||'3')+'°');
  sv('ses-ie',ud.ie||'');sv('ses-doc',ud.doc||'');sv('ses-bim',ud.bim||'I');
  onArea('ses');
}

function renderSemanasUD(nSem, data){
  nSem=parseInt(nSem)||4; data=data||[];
  const grid=document.getElementById('ud-semanas-grid');
  if(!grid)return;
  grid.innerHTML='';
  for(let i=0;i<nSem;i++){
    const wk=data[i]||{};
    const row=document.createElement('div');
    row.style.cssText='border:1px solid #e0e0e0;border-radius:8px;padding:12px 14px;margin-bottom:10px;background:#fafafa;';
    row.innerHTML=`<div style="font-weight:700;font-size:12px;color:#C0392B;margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px;">📅 Semana ${i+1}</div>`
      +`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">`
      +`<div><label style="font-size:11px;font-weight:600;color:#555;display:block;margin-bottom:3px;">Propósito</label>`
      +`<textarea id="ud-prop-w${i+1}" rows="3" style="width:100%;font-size:12px;border:1px solid #ccc;border-radius:6px;padding:6px;resize:vertical;font-family:Sora,sans-serif;" placeholder="Propósito de la sesión de la semana ${i+1}...">${wk.prop||''}</textarea></div>`
      +`<div><label style="font-size:11px;font-weight:600;color:#555;display:block;margin-bottom:3px;">Campo Temático</label>`
      +`<textarea id="ud-campo-w${i+1}" rows="3" style="width:100%;font-size:12px;border:1px solid #ccc;border-radius:6px;padding:6px;resize:vertical;font-family:Sora,sans-serif;" placeholder="Campo temático semana ${i+1}...">${wk.campo||''}</textarea></div>`
      +`</div>`;
    grid.appendChild(row);
  }
}

function abrirUD(g,bim){
  sv('ud-id','');document.getElementById('ud-sub').textContent='Nueva Unidad';
  resetF('ud');
  sv('ud-id',''); // double-clear after resetF
  const useG = g===undefined||g===null ? CG.unidades : g;
  sv('ud-grado', useG+'°');
  if(bim) sv('ud-bim',bim);
  onArea('ud');
  const p=(typeof IE_PROFILE!=='undefined')?IE_PROFILE:{};
  if(p.ie){const el=document.getElementById('ud-ie');if(el&&!el.value)el.value=p.ie;}
  if(p.nombre){const el=document.getElementById('ud-doc');if(el&&!el.value)el.value=p.nombre;}
  if(p.anio){const el=document.getElementById('ud-anio');if(el)el.value=p.anio||'2026';}
  // Auto-detect PA for this grade if available
  const gStr=String(useG);
  const pa=DB.pa.find(x=>String(x.grado)===gStr);
  if(pa){
    sv('ud-area',pa.area);
    onArea('ud');
    if(pa.comp&&!gv('ud-comp'))sv('ud-comp',extractCompNames(pa.comp));
    updatePASelector(useG);
    const selPa=document.getElementById('sel-pa-preload');
    if(selPa)selPa.value=String(pa.id);
  } else {
    updatePASelector(useG);
  }
  renderSemanasUD(4,[]);
  renderRefuerzoUD(4,[]);
  abrir('ov-ud');
}

function presSES(g,bim){
  sv('ses-id',''); document.getElementById('ses-sub').textContent='Nueva Sesión';
  resetF('ses');
  sv('ses-grado', g+'°');
  const bimMap={1:'I',2:'II',3:'III',4:'IV'};
  sv('ses-bim', typeof bim==='number'?bimMap[bim]||'I':bim||'I');
  sv('ses-fecha', new Date().toISOString().split('T')[0]);
  onArea('ses');
  const p=(typeof IE_PROFILE!=='undefined')?IE_PROFILE:{};
  if(p.ie){const el=document.getElementById('ses-ie');if(el&&!el.value)el.value=p.ie;}
  if(p.nombre){const el=document.getElementById('ses-doc');if(el&&!el.value)el.value=p.nombre;}
  updateUDSelector(g);
  abrir('ov-ses');
}
function abrirSES(g,bim){
  sv('ses-id','');document.getElementById('ses-sub').textContent='Nueva Sesión';
  resetF('ses');sv('ses-fecha',new Date().toISOString().split('T')[0]);
  onArea('ses');
  if(g) sv('ses-grado',g+'°');
  if(bim) sv('ses-bim',bim);
  const p=(typeof IE_PROFILE!=='undefined')?IE_PROFILE:{};
  if(p.ie){const el=document.getElementById('ses-ie');if(el&&!el.value)el.value=p.ie;}
  if(p.nombre){const el=document.getElementById('ses-doc');if(el&&!el.value)el.value=p.nombre;}
  updateUDSelector(useG);
  abrir('ov-ses');
}

function presPA(area,g){
  sv('pa-area',area);sv('pa-grado',g+'°');
  onArea('pa');
  // Pre-fill IE data
  const p=(typeof IE_PROFILE!=='undefined')?IE_PROFILE:{};
  if(p.ie){const el=document.getElementById('pa-ie');if(el&&!el.value)el.value=p.ie;}
  if(p.ugel){const el=document.getElementById('pa-ugel');if(el&&!el.value)el.value=p.ugel;}
  if(p.dre||p.reg){const el=document.getElementById('pa-reg');if(el&&!el.value)el.value=p.dre||p.reg||'';}
  if(p.nombre){const el=document.getElementById('pa-doc');if(el&&!el.value)el.value=p.nombre;}
  if(p.anio){const el=document.getElementById('pa-anio');if(el)el.value=p.anio||'2026';}
  updBimLabels();
  // Render competencias table for current area
  const _aObj=AREAS.find(a=>a.n===gv('pa-area'));
  if(_aObj) renderCNEBTable(_aObj.id);
  abrir('ov-pa');
}
function presUD(g, bim){
  // Reset form — clear id BEFORE and AFTER resetF (resetF skips hidden inputs)
  sv('ud-id','');
  document.getElementById('ud-sub').textContent='Nueva Unidad';
  resetF('ud');
  sv('ud-id',''); // ensure id is empty even after resetF

  // Set grade and bimestre
  sv('ud-grado', g+'°');
  const bimMap={1:'I',2:'II',3:'III',4:'IV'};
  const bimStr = typeof bim==='number' ? bimMap[bim]||'I' : bim||'I';
  sv('ud-bim', bimStr);

  // Apply IE profile
  const p=(typeof IE_PROFILE!=='undefined')?IE_PROFILE:{};
  if(p.ie){const el=document.getElementById('ud-ie');if(el)el.value=p.ie;}
  if(p.nombre){const el=document.getElementById('ud-doc');if(el)el.value=p.nombre;}
  if(p.anio){const el=document.getElementById('ud-anio');if(el)el.value=p.anio||'2026';}

  // Find the Plan Anual for this grade (prefer the area matching IE profile espec)
  const gStr=String(g);
  let pa=DB.pa.find(x=>String(x.grado)===gStr && x.area===(p.espec||''));
  if(!pa) pa=DB.pa.find(x=>String(x.grado)===gStr);

  if(pa){
    // Set area from PA
    sv('ud-area', pa.area);
    onArea('ud');

    // Count units in previous bimestres to get the global unit index (0-based)
    const bimOrder=['I','II','III','IV'];
    const bimIdx=bimOrder.indexOf(bimStr);
    let unitsBefore=0;
    for(let b=0;b<bimIdx;b++){
      const key='b'+(b+1);
      const lines=(pa[key]||'').split('\n').filter(l=>l.trim());
      unitsBefore+=lines.length;
    }
    // Count how many units already exist in this bimestre in DB for this grade
    const existingInBim=DB.ud.filter(u=>String(u.grado)===gStr&&u.bim===bimStr).length;
    const unitNum=unitsBefore+existingInBim;

    sv('ud-num', String(unitNum));

    // Get unit title for this bimestre from PA
    const bimKey='b'+(bimIdx+1);
    const bimLines=(pa[bimKey]||'').split('\n').filter(l=>l.trim());
    const unitLine=bimLines[existingInBim]||'';
    const unitTitle=unitLine.replace(/^Unidad\s*\d+:\s*/i,'').trim();
    if(unitTitle) sv('ud-tit', unitTitle);

    // Get duration for this unit from PA durs
    const dursArr=(pa.durs||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
    const durStr=dursArr[unitNum]||'';
    if(durStr){
      // parse "4 semanas" → 4
      const semMatch=durStr.match(/(\d+)/);
      if(semMatch) sv('ud-sem', semMatch[1]);
    }

    // Set PA selector so updateUDEnfFromPA runs with correct unit number
    const selPa=document.getElementById('sel-pa-preload');
    if(selPa){
      updatePASelector(g);
      selPa.value=String(pa.id);
    }

    // Load enf, vals, obs, producto, situación for this unit index
    updateUDEnfFromPA(pa);

    // Auto-fill competencias from PA
    if(pa.comp && !gv('ud-comp')) sv('ud-comp', extractCompNames(pa.comp));

  } else {
    // No PA found — just set area from IE profile and init
    onArea('ud');
    updatePASelector(g);
    // Suggest creating a PA first
    setMsg('ud-msg','💡 No hay Plan Anual para '+g+'°. Crea uno primero para precargar datos automáticamente.');
  }

  // Render week grids based on sem
  const nSem=parseInt(gv('ud-sem',4))||4;
  renderSemanasUD(nSem,[]);
  renderRefuerzoUD(nSem,[]);

  abrir('ov-ud');
}

// helpers
function gv(id,def=''){const el=document.getElementById(id);return el?(el.value.trim()||def):def;}
function sv(id,val){const el=document.getElementById(id);if(el)el.value=val===undefined?'':String(val);}

function getDataFromModal(tipo){
  if(tipo==='pa'){
    const g=gv('pa-grado').replace('°','');
    const prof = (typeof IE_PROFILE!=='undefined') ? IE_PROFILE : {};
    return {
      id:parseInt(gv('pa-id'))||Date.now(),grado:g,area:gv('pa-area'),
      doc:gv('pa-doc',prof.nombre||'Docente'),
      secc:gv('pa-secc'),ie:gv('pa-ie',prof.ie||''),
      ugel:gv('pa-ugel',prof.ugel||''),reg:gv('pa-reg',prof.dre||prof.reg||''),
      anio:gv('pa-anio',prof.anio||'2026'),ciclo:gv('pa-ciclo'),
      modal:gv('pa-modal','Presencial'),horas:gv('pa-horas',4),
      b1:gv('pa-b1'),b2:gv('pa-b2'),b3:gv('pa-b3'),b4:gv('pa-b4'),
      comp:gv('pa-comp'),caps:gv('pa-caps'),enf:gv('pa-enf'),
      eval:gv('pa-eval'),mat:gv('pa-mat'),pres:gv('pa-pres'),
      bib:gv('pa-bib-doc'),bibDoc:gv('pa-bib-doc'),bibEst:gv('pa-bib-est'),apro:gv('pa-apro'),
      sits:gv('pa-sits'),campos:gv('pa-campos'),prods:gv('pa-prods'),
      enfsdet:gv('pa-enfs-det'),enfvals:gv('pa-enf-vals'),enfobs:gv('pa-enf-obs'),durs:gv('pa-durs'),
      // metas diagnóstica + salida — dynamic per area (up to 6 competencias)
      ...((()=>{const _mObj={};const _aM=AREAS.find(a=>a.n===gv('pa-area'));const _cM=_aM?CNEB[_aM.id]?.c||[]:[];_cM.slice(0,6).forEach((_,i)=>{['c','b','a','ad'].forEach(n=>{_mObj['d'+i+n]=gv('pa-d'+i+n);_mObj['s'+i+n]=gv('pa-s'+i+n);});});return _mObj;})()),
      // IE profile extras
      director:prof.director||'',coord:prof.coord||'',
      // Calendar data embedded at export time (so buildHTML works in any context)
      _cal: (typeof getCal==='function') ? getCal() : null,
      _ie: prof
    };
  }
  if(tipo==='ud'){
    const g=gv('ud-grado').replace('°','');
    const nSem=parseInt(gv('ud-sem',4))||4;
    const semanas_data=Array.from({length:nSem},(_,i)=>({prop:gv('ud-prop-w'+(i+1))||'',campo:gv('ud-campo-w'+(i+1))||''}));
    const refuerzo_data=Array.from({length:nSem},(_,i)=>{const el=document.getElementById('ud-ref-w'+(i+1));return el?el.value.trim():'';});
    return {id:parseInt(gv('ud-id'))||Date.now(),grado:g,area:gv('ud-area'),bim:gv('ud-bim','I'),num:parseInt(gv('ud-num',0))||0,sem:gv('ud-sem',4),hrs:gv('ud-hrs',20),doc:gv('ud-doc'),ie:gv('ud-ie'),anio:gv('ud-anio','2026'),secc:gv('ud-secc'),ciclo:gv('ud-ciclo'),modal:gv('ud-modal','Presencial'),agrup:gv('ud-agrup'),tit:gv('ud-tit')||'Sin título',sit:gv('ud-sit'),comp:gv('ud-comp'),caps:gv('ud-caps'),desemp:gv('ud-desemp'),prod:gv('ud-prod'),instr:gv('ud-instr'),teval:gv('ud-teval'),enf:gv('ud-enf'),enfvals:gv('ud-enf-vals'),enfobs:gv('ud-enf-obs'),mat:gv('ud-mat'),bib:gv('ud-bib'),semanas_data,refuerzo_data};
  }
  // ses
  const g=gv('ses-grado').replace('°','');
  return {id:parseInt(gv('ses-id'))||Date.now(),grado:g,area:gv('ses-area'),bim:gv('ses-bim','I'),num:parseInt(gv('ses-num',1))||1,dur:gv('ses-dur','90 min'),doc:gv('ses-doc'),ie:gv('ses-ie'),secc:gv('ses-secc'),fecha:gv('ses-fecha'),tipo:gv('ses-tipo'),modal:gv('ses-modal','Presencial'),agrup:gv('ses-agrup'),esp:gv('ses-esp'),tit:gv('ses-tit')||'Sin título',prop:gv('ses-prop'),campo:gv('ses-campo'),comp:gv('ses-comp'),caps:gv('ses-caps'),desemp:gv('ses-desemp'),mot:gv('ses-mot'),sab:gv('ses-sab'),conf:gv('ses-conf'),cons:gv('ses-cons'),apli:gv('ses-apli'),meta:gv('ses-meta'),instr:gv('ses-instr'),enf:gv('ses-enf'),mat:gv('ses-mat'),crit:gv('ses-crit'),bib:gv('ses-bib'),tarea:gv('ses-tarea')};
}

function getDataFromDB(tipo, id){
  const cal = (typeof getCal==='function') ? getCal() : null;
  const ieP = (typeof IE_PROFILE!=='undefined') ? IE_PROFILE : {};
  if(tipo==='pa'){const u=DB.pa.find(x=>x.id===id);return u?{...u,tipo:'pa',_cal:cal,_ie:ieP}:null;}
  if(tipo==='ud'){const u=DB.ud.find(x=>x.id===id);return u?{...u,tipo:'ud',_cal:cal,_ie:ieP}:null;}
  const s=DB.ses.find(x=>x.id===id);return s?{...s,tipo:'ses',dur:s.dur||'90 min',_cal:cal,_ie:ieP}:null;
}
function setMsg(id,txt,cls=''){const el=document.getElementById(id);if(el){el.textContent=txt;el.className='asz-msg'+(cls?' '+cls:'');}}

// ═══════════ LOAD ═══════════
function carPA(id){
  const p=DB.pa.find(x=>x.id===id);if(!p)return;
  sv('pa-id',id);document.getElementById('pa-sub').textContent='Editando: '+p.area+' '+p.grado+'°';
  ['ie','ugel','anio','doc','secc','horas','b1','b2','b3','b4','comp','enf','eval','mat'].forEach(f=>sv('pa-'+f,p[f]||''));
  sv('pa-grado',(p.grado||'3')+'°');sv('pa-reg',p.reg||'');sv('pa-ciclo',p.ciclo||'');sv('pa-modal',p.modal||'Presencial');sv('pa-status',p.status||'borrador');sv('pa-nunits',p.nunits||8);sv('pa-pres',p.pres||'');sv('pa-trans',p.trans||'');sv('pa-bib',p.bib||'');sv('pa-apro',p.apro||'');
  // New fields
  sv('pa-bib-doc',p.bibDoc||p.bib||'');sv('pa-bib-est',p.bibEst||'');
  sv('pa-caps',p.caps||'');sv('pa-sits',p.sits||'');sv('pa-campos',p.campos||'');sv('pa-prods',p.prods||'');sv('pa-enfs-det',p.enfsdet||'');sv('pa-enf-vals',p.enfvals||'');sv('pa-enf-obs',p.enfobs||'');sv('pa-durs',p.durs||'');
  onArea('pa'); // renders meta table dynamically
  // Restore saved meta values into the dynamically rendered table
  const _aObjPA=AREAS.find(a=>a.n===p.area);
  if(_aObjPA){
    const _comps=(CNEB[_aObjPA.id]?.c||[]);
    _comps.forEach((_,i)=>{
      ['c','b','a','ad'].forEach(n=>{
        const dEl=document.getElementById('pa-d'+i+n); if(dEl)dEl.value=p['d'+i+n]||'';
        const sEl=document.getElementById('pa-s'+i+n); if(sEl)sEl.value=p['s'+i+n]||'';
      });
    });
  }
  setMsg('pa-msg','Datos cargados. Puedes obtener nuevas sugerencias de IA.');
  abrir('ov-pa');
}
function carUD(id){
  const u=DB.ud.find(x=>x.id===id);if(!u)return;
  sv('ud-id',id);
  document.getElementById('ud-sub').textContent='Editando: U.'+u.num+' – '+(u.tit||'').substring(0,28)+'...';
  ['ie','anio','doc','secc','bim','num','sem','hrs','ciclo','modal','agrup','esp',
   'status','tit','sit','comp','caps','desemp','prod','instr','teval','enf',
   'enfvals','enfobs','mat','bib'].forEach(f=>sv('ud-'+f,u[f]||''));
  sv('ud-grado',(u.grado||'3')+'°');
  sv('ud-comp-w1',u.compw1||'');sv('ud-comp-w2',u.compw2||'');
  sv('ud-comp-w3',u.compw3||'');sv('ud-comp-w4',u.compw4||'');sv('ud-comp-w5',u.compw5||'');
  const hint=document.getElementById('ud-prod-pa-hint');
  if(hint)hint.style.display=u.prodFromPA?'block':'none';
  if(typeof updateWeekFields==='function')updateWeekFields();
  renderSemanasUD(parseInt(u.sem)||4, u.semanas_data||[]);
  renderRefuerzoUD(parseInt(u.sem)||4, u.refuerzo_data||[]);
  onArea('ud');
  // Restore caps/desemp after onArea (which clears them)
  if(u.caps){const el=document.getElementById('ud-caps');if(el)el.value=u.caps;}
  if(u.desemp){const el=document.getElementById('ud-desemp');if(el)el.value=u.desemp;}
  setMsg('ud-msg','Datos cargados. Obtén sugerencias IA para mejorar los procesos.');
  abrir('ov-ud');
}
function carSES(id){
  const s=DB.ses.find(x=>x.id===id);if(!s)return;
  sv('ses-id',id);document.getElementById('ses-sub').textContent='Editando: S.'+s.num+' – '+(s.tit||'').substring(0,28)+'...';
  ['ie','doc','secc','fecha','bim','num','dur','tipo','modal','agrup','esp','status','tit','desemp','mot','sab','conf','cons','apli','meta','instr','enf','mat','crit','bib','tarea'].forEach(f=>sv('ses-'+f,s[f]||''));
  sv('ses-grado',(s.grado||'3')+'°');
  // Restore prop, campo, caps explicitly
  const _propEl=document.getElementById('ses-prop'); if(_propEl)_propEl.value=s.prop||'';
  const _campoEl=document.getElementById('ses-campo'); if(_campoEl)_campoEl.value=s.campo||'';
  onArea('ses');
  const cSel=document.getElementById('ses-comp');
  if(cSel&&s.comp){const o=[...cSel.options].find(op=>op.value===s.comp||op.text===s.comp);if(o)cSel.value=o.value;}
  // Restore caps/desemp after onArea
  const _capsEl=document.getElementById('ses-caps'); if(_capsEl&&s.caps)_capsEl.value=s.caps;
  const _desEl=document.getElementById('ses-desemp'); if(_desEl&&s.desemp)_desEl.value=s.desemp;
  setMsg('ses-msg','Datos cargados. Obtén sugerencias IA para los procesos pedagógicos.');
  abrir('ov-ses');
}

// ═══════════ GUARDAR ═══════════
function guarPA(){
  const eid=gv('pa-id');const g=gv('pa-grado').replace('°','');
  const prof=(typeof IE_PROFILE!=='undefined')?IE_PROFILE:{};
  const mk=(f,d)=>gv(f,d||'');
  const obj={id:eid?parseInt(eid):Date.now(),grado:g,
    area:mk('pa-area'),doc:mk('pa-doc',prof.nombre||'Docente'),
    secc:mk('pa-secc'),ie:mk('pa-ie',prof.ie||''),
    ugel:mk('pa-ugel',prof.ugel||''),reg:mk('pa-reg',prof.dre||prof.reg||''),
    anio:mk('pa-anio',prof.anio||'2026'),ciclo:mk('pa-ciclo'),
    modal:mk('pa-modal','Presencial'),nunits:mk('pa-nunits','8'),horas:mk('pa-horas','5'),
    b1:mk('pa-b1'),b2:mk('pa-b2'),b3:mk('pa-b3'),b4:mk('pa-b4'),
    comp:mk('pa-comp'),caps:mk('pa-caps'),enf:mk('pa-enf'),
    eval:mk('pa-eval'),mat:mk('pa-mat'),pres:mk('pa-pres'),
    bib:mk('pa-bib-doc'),bibDoc:mk('pa-bib-doc'),bibEst:mk('pa-bib-est'),apro:mk('pa-apro'),status:mk('pa-status','borrador'),
    sits:mk('pa-sits'),campos:mk('pa-campos'),prods:mk('pa-prods'),
    enfsdet:mk('pa-enfs-det'),enfvals:mk('pa-enf-vals'),enfobs:mk('pa-enf-obs'),durs:mk('pa-durs'),
    director:prof.director||'',coord:prof.coord||''};
  // Meta fields
  // Meta fields — dynamic per area
  {const _aMG=AREAS.find(a=>a.n===mk('pa-area'));const _cMG=_aMG?CNEB[_aMG.id]?.c||[]:[];_cMG.slice(0,6).forEach((_,i)=>{['c','b','a','ad'].forEach(n=>{obj['d'+i+n]=gv('pa-d'+i+n);obj['s'+i+n]=gv('pa-s'+i+n);});});}
  if(eid){ const i=DB.pa.findIndex(x=>x.id===parseInt(eid));if(i>=0)DB.pa[i]=obj;else DB.pa.push(obj);}else DB.pa.push(obj);
  saveDB();cerrar('ov-pa');toast('✅ Plan Anual guardado','ok');CG.anual=parseInt(g)||3;rAnual(CG.anual);updBadges();
}
function guarUD(){
  const eid=gv('ud-id');const g=gv('ud-grado').replace('°','');
  const nSem=parseInt(gv('ud-sem',4))||4;
  const semanas_data=Array.from({length:nSem},(_,i)=>({prop:gv('ud-prop-w'+(i+1))||'',campo:gv('ud-campo-w'+(i+1))||''}));
  const numRaw=gv('ud-num','0');
  const numVal=numRaw===''?0:(parseInt(numRaw)>=0?parseInt(numRaw):0);
  const prodFromPA=document.getElementById('ud-prod-pa-hint')?.style.display!=='none';
  const obj={
    id:eid?parseInt(eid):Date.now(),grado:g,area:gv('ud-area'),bim:gv('ud-bim','I'),
    num:numVal,sem:gv('ud-sem',5),hrs:gv('ud-hrs',20),
    doc:gv('ud-doc'),ie:gv('ud-ie'),anio:gv('ud-anio','2026'),secc:gv('ud-secc'),
    ciclo:gv('ud-ciclo'),modal:gv('ud-modal'),agrup:gv('ud-agrup'),esp:gv('ud-esp'),
    status:gv('ud-status','borrador'),tit:gv('ud-tit')||'Sin título',sit:gv('ud-sit'),
    comp:gv('ud-comp'),caps:gv('ud-caps'),desemp:gv('ud-desemp'),
    prod:gv('ud-prod'),prodFromPA:prodFromPA,
    instr:gv('ud-instr'),teval:gv('ud-teval'),enf:gv('ud-enf'),
    enfvals:gv('ud-enf-vals'),enfobs:gv('ud-enf-obs'),
    mat:gv('ud-mat'),bib:gv('ud-bib'),
    compw1:gv('ud-comp-w1'),compw2:gv('ud-comp-w2'),compw3:gv('ud-comp-w3'),
    compw4:gv('ud-comp-w4'),compw5:gv('ud-comp-w5'),
    semanas_data,
    refuerzo_data: Array.from({length:nSem},(_,i)=>{
      const el=document.getElementById('ud-ref-w'+(i+1));
      return el?el.value.trim():'';
    })
  };
  if(eid){
    const _eid=parseInt(eid);
    const i=DB.ud.findIndex(x=>x.id===_eid);
    if(i>=0){
      // Safety check: only overwrite if bimestre matches (prevents cross-bim contamination)
      if(DB.ud[i].bim===obj.bim){
        DB.ud[i]=obj;
      } else {
        // Different bimestre — create new entry instead
        obj.id=Date.now();
        DB.ud.push(obj);
      }
    } else DB.ud.push(obj);
  } else DB.ud.push(obj);
  saveDB();cerrar('ov-ud');toast('✅ Unidad guardada','ok');CG.unidades=parseInt(g)||3;rUD(CG.unidades);updBadges();
}
function guarSES(){
  const eid=gv('ses-id');const g=gv('ses-grado').replace('°','');
  const obj={id:eid?parseInt(eid):Date.now(),grado:g,area:gv('ses-area'),bim:gv('ses-bim','I'),num:parseInt(gv('ses-num',1))||1,dur:gv('ses-dur','90 min'),doc:gv('ses-doc'),ie:gv('ses-ie'),secc:gv('ses-secc'),fecha:gv('ses-fecha'),tipo:gv('ses-tipo'),modal:gv('ses-modal'),agrup:gv('ses-agrup'),esp:gv('ses-esp'),status:gv('ses-status','borrador'),tit:gv('ses-tit')||'Sin título',
    prop:gv('ses-prop'),campo:gv('ses-campo'),caps:gv('ses-caps'),comp:gv('ses-comp'),desemp:gv('ses-desemp'),mot:gv('ses-mot'),sab:gv('ses-sab'),conf:gv('ses-conf'),cons:gv('ses-cons'),apli:gv('ses-apli'),meta:gv('ses-meta'),instr:gv('ses-instr'),enf:gv('ses-enf'),mat:gv('ses-mat'),crit:gv('ses-crit'),bib:gv('ses-bib'),tarea:gv('ses-tarea')};
  if(eid){const i=DB.ses.findIndex(x=>x.id===parseInt(eid));if(i>=0)DB.ses[i]=obj;else DB.ses.push(obj);}else DB.ses.push(obj);
  saveDB();cerrar('ov-ses');toast('✅ Sesión guardada','ok');CG.sesiones=parseInt(g)||3;rSES(CG.sesiones);updBadges();
}

function elim(col, id, pg, g){
  // confirm() puede estar bloqueado en iframes/embeds — usamos modal propio
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,15,26,.7);z-index:9998;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = '<div style="background:#fff;border-radius:14px;padding:28px 32px;max-width:380px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.25);font-family:Sora,Arial,sans-serif;text-align:center;">'
    +'<div style="font-size:36px;margin-bottom:10px;">🗑</div>'
    +'<div style="font-size:15px;font-weight:700;margin-bottom:6px;">¿Eliminar registro?</div>'
    +'<div style="font-size:12.5px;color:#666;margin-bottom:20px;">Esta acción no se puede deshacer.</div>'
    +'<div style="display:flex;gap:8px;justify-content:center;">'
    +'<button id="elim-cancel" style="padding:9px 22px;border-radius:8px;border:1.5px solid #ddd;background:#fff;cursor:pointer;font-weight:600;font-size:13px;">Cancelar</button>'
    +'<button id="elim-ok" style="padding:9px 22px;border-radius:8px;border:none;background:#C0392B;color:#fff;cursor:pointer;font-weight:700;font-size:13px;">Sí, eliminar</button>'
    +'</div></div>';
  document.body.appendChild(overlay);
  document.getElementById('elim-cancel').onclick = function(){ document.body.removeChild(overlay); };
  overlay.onclick = function(e){ if(e.target===overlay) document.body.removeChild(overlay); };
  document.getElementById('elim-ok').onclick = function(){
    document.body.removeChild(overlay);
    if(!DB[col]){ toast('Error: colección "'+col+'" no encontrada','err'); return; }
    DB[col] = DB[col].filter(function(x){ return x.id !== id; });
    saveDB();toast('🗑 Registro eliminado correctamente','ok');
    if(pg==='anual')rAnual(g);
    if(pg==='unidades')rUD(g);
    if(pg==='sesiones')rSES(g);
    updBadges();
  };
}

// ═══════════ AI SUGGEST ═══════════
function setLD(ldId,btnId,on,label='✨ Obtener Sugerencia'){
  const ld=document.getElementById(ldId),btn=document.getElementById(btnId);
  if(ld)ld.classList.toggle('on',on);
  if(btn){btn.disabled=on;btn.innerHTML=on?'<span class="spin"></span>Generando…':label;}
}

async function suPA(){
  const area=gv('pa-area'),grado=gv('pa-grado');
  setLD('pa-ld','btn-pa-ai',true);
  setMsg('pa-msg','<span class="spin-d"></span> Generando sugerencia para '+area+' '+grado+'...');
  const prompt=`Eres experto en el CNEB de Perú. Para el área de ${area} en ${grado} de Secundaria 2026, genera SOLO un JSON válido sin markdown:
{"b1":"Unidad 1: título\\nUnidad 2: título","b2":"Unidad 3: título\\nUnidad 4: título","b3":"Unidad 5: título\\nUnidad 6: título","b4":"Unidad 7: título\\nUnidad 8: título","comp":"• competencia1\\n• competencia2\\n• competencia3","enf":"Enfoque1, Enfoque2, Enfoque3","eval":"Instrumento1, Instrumento2, Instrumento3","mat":"material1, material2, material3"}
Contextualiza al Perú. Títulos sugerentes y situaciones del entorno peruano. Solo JSON puro, sin texto adicional.`;
  try{
    const txt=await callAI(prompt);
    const d=JSON.parse(txt.replace(/```json|```/g,'').trim());
    if(d.b1)sv('pa-b1',d.b1);if(d.b2)sv('pa-b2',d.b2);if(d.b3)sv('pa-b3',d.b3);if(d.b4)sv('pa-b4',d.b4);
    if(d.comp)sv('pa-comp',d.comp);if(d.enf)sv('pa-enf',d.enf);if(d.eval)sv('pa-eval',d.eval);if(d.mat)sv('pa-mat',d.mat);
    setMsg('pa-msg','✅ Campos completados por IA. Revisa y ajusta según tu contexto.','asz-ok');
  }catch(e){setMsg('pa-msg','❌ '+e.message+'. Verifica tu API Key en ⚙️ Configuración.','asz-err');}
  setLD('pa-ld','btn-pa-ai',false);
}

async function suUD(){
  const area=gv('ud-area'),grado=gv('ud-grado'),bim=gv('ud-bim'),tit=gv('ud-tit');
  setLD('ud-ld','btn-ud-ai',true);
  setMsg('ud-msg','<span class="spin-d"></span> Generando unidad para '+area+' '+grado+' Bim. '+bim+'...');
  const prompt=`Eres experto en el CNEB de Perú. Genera una Unidad Didáctica para ${area}, ${grado} de Secundaria, Bimestre ${bim}${tit?', Título: "'+tit+'"':''}.
Responde SOLO con JSON puro sin markdown:
{"tit":"título atractivo","sit":"situación significativa contextualizada al Perú (3-4 oraciones)","comp":"• competencia1\\n• competencia2","desemp":"• desempeño1\\n• desempeño2\\n• desempeño3","mot":"descripción detallada del inicio/motivación (4 oraciones)","sab":"actividad de saberes previos con preguntas concretas (3 oraciones)","conf":"situación o pregunta de conflicto cognitivo (2-3 oraciones)","cons":"actividades de construcción del aprendizaje (4-5 oraciones)","apli":"actividad de aplicación/transferencia (3-4 oraciones)","meta":"preguntas metacognitivas y evaluación (3 oraciones)","prod":"nombre del producto final","enf":"Enfoque1, Enfoque2","mat":"material1, material2, material3"}
Solo JSON, sin texto adicional.`;
  try{
    const txt=await callAI(prompt);
    const d=JSON.parse(txt.replace(/```json|```/g,'').trim());
    ['tit','sit','comp','desemp','mot','sab','conf','cons','apli','meta','prod','enf','mat'].forEach(k=>{if(d[k])sv('ud-'+k,d[k]);});
    setMsg('ud-msg','✅ Todos los campos completados por IA. Revisa y personaliza.','asz-ok');
  }catch(e){setMsg('ud-msg','❌ '+e.message+'. Verifica tu API Key en ⚙️ Configuración.','asz-err');}
  setLD('ud-ld','btn-ud-ai',false);
}

async function suSES(){
  const area=gv('ses-area'),grado=gv('ses-grado'),bim=gv('ses-bim'),tit=gv('ses-tit'),comp=gv('ses-comp');
  setLD('ses-ld','btn-ses-ai',true);
  setMsg('ses-msg','<span class="spin-d"></span> Generando procesos pedagógicos para "'+tit+'"...');
  const prompt=`Eres experto en el CNEB de Perú. Genera una Sesión de Aprendizaje para ${area}, ${grado} de Secundaria, Bimestre ${bim}.
Título: "${tit||'sesión del área'}" | Competencia: ${comp||'competencia del área'}
Responde SOLO con JSON puro sin markdown:
{"tit":"título atractivo si no hay uno","desemp":"desempeño específico iniciando con verbo (1 oración)","mot":"motivación detallada y concreta (4-5 oraciones)","sab":"recojo de saberes previos con preguntas específicas (3-4 oraciones)","conf":"pregunta o situación de conflicto cognitivo específica (2-3 oraciones)","cons":"actividades de construcción detalladas con rol del docente y estudiante (5-6 oraciones)","apli":"actividad de transferencia en contexto real peruano (3-4 oraciones)","meta":"3 preguntas metacognitivas + instrumento evaluativo (3-4 oraciones)","instr":"nombre del instrumento","mat":"material1, material2, material3","enf":"Enfoque1, Enfoque2"}
Solo JSON, sin texto adicional.`;
  try{
    const txt=await callAI(prompt);
    const d=JSON.parse(txt.replace(/```json|```/g,'').trim());
    ['tit','desemp','mot','sab','conf','cons','apli','meta','enf','mat'].forEach(k=>{if(d[k])sv('ses-'+k,d[k]);});
    if(d.instr){const s=document.getElementById('ses-instr');if(s){const o=[...s.options].find(op=>op.value===d.instr||op.text===d.instr);if(o)s.value=o.value;}}
    setMsg('ses-msg','✅ Los 6 procesos completados por IA. Revisa y personaliza.','asz-ok');
  }catch(e){setMsg('ses-msg','❌ '+e.message+'. Verifica tu API Key en ⚙️ Configuración.','asz-err');}
  setLD('ses-ld','btn-ses-ai',false);
}

async function aiCampo(fieldId,tipo){
  const el=document.getElementById(fieldId);if(!el)return;
  const pfx=fieldId.split('-')[0];
  const area=document.getElementById(pfx+'-area')?.value||'Matemática';
  const grado=document.getElementById(pfx+'-grado')?.value||'3°';
  const bim=document.getElementById(pfx+'-bim')?.value||'I';
  const plh=el.placeholder;el.placeholder='✨ Generando...';el.style.borderColor='var(--gold)';
  const prompts={
    'tit-ud':`Sugiere un título creativo para una Unidad Didáctica de ${area}, ${grado} Sec., Bimestre ${bim}. Solo el título, máximo 12 palabras, sin comillas.`,
    'tit-ses':`Sugiere un título atractivo para una Sesión de Aprendizaje de ${area}, ${grado} Sec. Solo el título, máximo 12 palabras, sin comillas.`,
    'situacion':`Redacta una situación significativa para una unidad de ${area} en ${grado} de Secundaria, Bimestre ${bim}. Contextualiza al Perú. 3 oraciones, sin formato especial.`,
    'producto':`Sugiere un producto final concreto para una unidad de ${area}, ${grado} Sec. Solo el nombre, máximo 10 palabras.`,
    'desempeno':`Escribe un desempeño precisado del CNEB para ${area}, ${grado} Sec. Inicia con verbo en tercera persona. Una oración.`,
    'proc1':`Describe la motivación/propósito para una sesión de ${area}, ${grado} Sec. 2-3 oraciones concretas.`,
    'proc2':`Describe el recojo de saberes previos para una sesión de ${area}, ${grado} Sec. 2-3 oraciones con preguntas.`,
    'proc3':`Describe el conflicto cognitivo para una sesión de ${area}, ${grado} Sec. 1-2 oraciones con pregunta desafiante.`,
    'proc4':`Describe la construcción del aprendizaje para una sesión de ${area}, ${grado} Sec. 3-4 oraciones con actividades concretas.`,
    'proc5':`Describe la aplicación/transferencia para una sesión de ${area}, ${grado} Sec. 2-3 oraciones con situación real peruana.`,
    'proc6':`Describe la evaluación/metacognición para una sesión de ${area}, ${grado} Sec. 2-3 oraciones con preguntas reflexivas.`,
  };
  try{
    const r=await callAI(prompts[tipo]||`Sugiere un contenido para ${tipo} del área ${area}. Respuesta breve.`);
    el.value=r.trim().replace(/^["']|["']$/g,'');
    el.style.borderColor='var(--green)';setTimeout(()=>{el.style.borderColor='';el.placeholder=plh;},2000);
  }catch(e){
    toast('❌ '+e.message,'err');el.style.borderColor='var(--red)';el.placeholder=plh;setTimeout(()=>{el.style.borderColor='';},2000);
  }
}

// ═══════════ GENERADOR COMPLETO ═══════════
async function genCompleto(){
  const tipo=gv('gen-tipo'),area=gv('gen-area'),grado=gv('gen-grado'),bim=gv('gen-bim'),tema=gv('gen-tema','tema general del área'),ctx=gv('gen-ctx','contexto peruano');
  const TIPOS={sesion:'Sesión de Aprendizaje',unidad:'Unidad Didáctica',anual:'Plan Anual'};
  const btn=document.getElementById('btn-gen');
  btn.disabled=true;btn.textContent='⏳ Generando...';
  document.getElementById('gen-ld').classList.add('on');
  document.getElementById('gen-btns').innerHTML='';
  document.getElementById('gen-r').innerHTML='<div style="text-align:center;padding:40px;color:var(--ink3);"><span class="spin-d"></span><br><br>Generando '+TIPOS[tipo]+'...</div>';
  const prompt=`Eres experto en el CNEB de Perú. Genera un/a ${TIPOS[tipo]} completo/a en HTML limpio (sin DOCTYPE, html, body tags).
Área: ${area} | Grado: ${grado} Sec. | Bimestre: ${bim} | Tema: ${tema} | Contexto: ${ctx}
Incluye: datos generales en tabla, competencias CNEB del área, capacidades, desempeños, situación significativa contextualizada al Perú, los 6 procesos pedagógicos detallados, enfoques transversales, instrumento de evaluación y materiales.
Usa estilos inline. Encabezados en background #C0392B color blanco. Tablas con bordes #ddd. Diseño profesional listo para imprimir en A4. En español, con lenguaje pedagógico formal del MINEDU.`;
  try{
    const html=await callAI(prompt);
    genData={tipo,area,grado,bim,html};
    document.getElementById('gen-r').innerHTML=html;
    document.getElementById('gen-btns').innerHTML=`<button class="btn btn-green btn-sm" onclick="expGen('pdf')">📑 PDF</button><button class="btn btn-blue btn-sm" onclick="expGen('word')">📄 Word</button><button class="btn btn-purple btn-sm" onclick="expGen('print')">🖨 Imprimir</button>`;
  }catch(e){
    document.getElementById('gen-r').innerHTML='<div style="color:var(--red);text-align:center;padding:30px;">❌ '+e.message+'<br><br><a href="#" onclick="go(\'config\')" style="color:var(--blue);">⚙️ Configurar API Key</a></div>';
  }
  document.getElementById('gen-ld').classList.remove('on');
  btn.disabled=false;btn.textContent='✨ Generar documento completo';
}

// ─── Extract only competency names from a pa.comp string ────────────────────
// pa.comp may contain "Comp:\n  – cap1\n  – cap2\n\nComp2:..." or "• Comp1\n• Comp2"
function extractCompNames(compText){
  if(!compText)return'';
  return compText
    .split(/\r?\n/)
    .map(l=>l.trim())
    .filter(l=>{
      if(!l)return false;
      // Skip lines that are capacidades (start with –, -, •• or leading spaces)
      if(/^[-–—]/.test(l))return false;
      if(/^\s+/.test(l))return false;  // indented lines
      if(/^capacidades?:/i.test(l))return false;
      return true;
    })
    .map(l=>l.replace(/^[•*]\s*/,'').replace(/:.*$/,'').trim())  // remove bullet & trailing colon+text
    .filter(Boolean)
    .map(l=>'• '+l)
    .join('\n');
}


// ═══ RENDER META TABLE (metas diagnóstica/salida) per area ═══
function renderMetaTable(areaName, savedData){
  const tbody=document.getElementById('pa-meta-tbody');
  if(!tbody)return;
  const aObj=AREAS.find(a=>a.n===areaName);
  if(!aObj){tbody.innerHTML='<tr><td colspan="9" style="text-align:center;padding:8px;color:#888;font-size:11px;">Selecciona un área para ver las competencias...</td></tr>';return;}
  const comps=(CNEB[aObj.id]?.c||[]).map(c=>c.n);
  savedData=savedData||{};
  const TD_S='padding:2px;border:1px solid #ddd;';
  const IN_S='width:100%;border:none;text-align:center;font-size:10px;';
  tbody.innerHTML=comps.map((comp,i)=>{
    const pfxD='d'+i, pfxS='s'+i;
    const mkCell=(id,ph)=>`<td style="${TD_S}"><input type="text" id="pa-${id}" style="${IN_S}" placeholder="${ph}" value="${savedData[id]||''}"></td>`;
    return `<tr>
      <td style="padding:3px 5px;border:1px solid #ddd;font-size:10px;">${comp}</td>
      ${mkCell(pfxD+'c','16%')}${mkCell(pfxD+'b','62%')}${mkCell(pfxD+'a','16%')}${mkCell(pfxD+'ad','6%')}
      ${mkCell(pfxS+'c','16%')}${mkCell(pfxS+'b','31%')}${mkCell(pfxS+'a','37%')}${mkCell(pfxS+'ad','16%')}
    </tr>`;
  }).join('');
}

function autoFillEnfoque(val){
  if(!val)return;
  const terms=val.split(/[,;]+/).map(t=>t.trim().toLowerCase()).filter(Boolean);
  const matched=[];
  const vals=[];
  const acts=[];
  terms.forEach(term=>{
    const enf=ENFS.find(e=>e.n.toLowerCase().includes(term)||term.includes(e.n.toLowerCase().split(' ')[0]));
    if(enf){
      vals.push(...(enf.v||[]));
      acts.push(...(enf.a||[]));
    }
  });
  const valsEl=document.getElementById('ud-enf-vals');
  const actsEl=document.getElementById('ud-enf-obs');
  if(valsEl&&!valsEl.value.trim()&&vals.length)valsEl.value=vals.join(', ');
  if(actsEl&&!actsEl.value.trim()&&acts.length)actsEl.value=acts[0]||'';
}

// ═══ RENDER REFUERZO GRID ═══
function renderRefuerzoUD(nSem, data){
  nSem=parseInt(nSem)||4; data=data||[];
  const grid=document.getElementById('ud-refuerzo-grid');
  if(!grid)return;
  grid.innerHTML='';
  for(let i=0;i<nSem;i++){
    const isLast=i===nSem-1;
    const saved=data[i]||'';
    const def=isLast?'Elaboración y presentación del producto final de la unidad.':'Refuerzo de conceptos clave de la semana '+(i+1)+'.';
    const row=document.createElement('div');
    row.style.cssText='border:1px solid #e0e0e0;border-radius:8px;padding:10px 14px;background:'+(isLast?'#FEF9EE':'#fafafa')+';';
    row.innerHTML=`<div style="font-weight:700;font-size:11.5px;color:${isLast?'#B85C00':'#1A4A9A'};margin-bottom:6px;">`
      +`${isLast?'🏆':'🔁'} Semana ${i+1}${isLast?' — Producto Final':' — Refuerzo'}</div>`
      +`<textarea id="ud-ref-w${i+1}" placeholder="${def}" style="width:100%;min-height:52px;font-size:12px;border:1px solid #ddd;border-radius:6px;padding:7px;background:#fff;resize:vertical;">${saved}</textarea>`;
    grid.appendChild(row);
  }
}


function getCapsList(areaName, compText){
  if(!areaName||!compText)return[];
  const aObj=AREAS.find(a=>a.n===areaName);
  if(!aObj)return[];
  const list=CNEB[aObj.id]?.c||[];
  const lines=compText.split(/\r?\n/).map(l=>l.replace(/^[•\-\s]+/,'').trim()).filter(Boolean);
  const caps=[];
  lines.forEach(line=>{
    const match=list.find(c=>c.n.toLowerCase().startsWith(line.toLowerCase()));
    if(match&&match.caps)caps.push(...match.caps);
  });
  return caps;
}
function getDesList(areaName, compText){
  if(!areaName||!compText)return[];
  const aObj=AREAS.find(a=>a.n===areaName);
  if(!aObj)return[];
  const list=CNEB[aObj.id]?.c||[];
  const lines=compText.split(/\r?\n/).map(l=>l.replace(/^[•\-\s]+/,'').trim()).filter(Boolean);
  const des=[];
  lines.forEach(line=>{
    const match=list.find(c=>c.n.toLowerCase().startsWith(line.toLowerCase()));
    if(match&&match.d)des.push(...match.d);
  });
  return des;
}
function buildCapsText(areaName, compText){
  if(!areaName||!compText)return'';
  const lines=compText.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  return lines.map(line=>getCapsList(areaName,line).join('\n')).join('\n\n');
}
function buildDesText(areaName, compText){
  if(!areaName||!compText)return'';
  const lines=compText.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  return lines.map(line=>getDesList(areaName,line).join('\n')).join('\n\n');
}
function updateCaps(pfx){
  const comp=gv(pfx+'-comp');if(!comp)return;
  const el=document.getElementById(pfx+'-caps');
  if(el)el.value=buildCapsText(gv(pfx+'-area'),comp);
}
function updateDes(pfx){
  const comp=gv(pfx+'-comp');if(!comp)return;
  const el=document.getElementById(pfx+'-desemp');
  if(!el)return;
  let t=buildDesText(gv(pfx+'-area'),comp);
  if(pfx==='ses'&&t)t=t.split(/\r?\n/)[0];
  el.value=t;
}

// ═══════════ BUILD HTML PARA EXPORT ═══════════
function buildHTML(tipo,d){
  /* ── color helpers ─────────────────────────────── */
  const aC={'Matemática':'#C0392B','Comunicación':'#1A4A8A','Ciencia y Tecnología':'#5B2D8E','Ciencias Sociales':'#0E7A4A','D.P.C.C.':'#B85C00','Inglés':'#1565C0','Educación Física':'#00695C','Arte y Cultura':'#880E4F','Educ. Religiosa':'#4A148C','Tutoría':'#827717','Educ. para el Trabajo':'#37474F'};
  const bC={'I':'#1565C0','II':'#2E7D32','III':'#E65100','IV':'#6A1B9A'};
  const mc = tipo==='ud' ? (bC[d.bim]||'#1A4A8A') : (aC[d.area]||'#C0392B');
  /* ── mini helpers ──────────────────────────────── */
  const nl  = v => (v||'').toString().replace(/\n/g,'<br>');
  const val = v => (v && v.toString().trim()) ? nl(v) : '—';
  /* ── shared style constants ────────────────────── */
  const F = 'font-family:Arial,sans-serif;';
  const TD = 'border:1px solid #aaa;padding:5px 8px;font-size:9.5pt;vertical-align:top;';
  const TH = 'border:1px solid #aaa;padding:5px 8px;font-size:9.5pt;font-weight:700;background:#EEEEEE;vertical-align:top;';
  const THc= 'border:1px solid #aaa;padding:5px 8px;font-size:9.5pt;font-weight:700;color:#fff;vertical-align:top;';
  /* ── shared row builder ────────────────────────── */
  const row = (l,v,w) => `<tr><td style="${TH}width:${w||'32%'};">${l}</td><td style="${TD}">${val(v)}</td></tr>`;
  /* ── section header (numbered) ─────────────────── */
  const hdr = (n,t) => `<div style="background:${mc};color:#fff;font-weight:700;font-size:10pt;padding:5px 10px;margin:10px 0 0;${F}">${n}. ${t}</div>`;
  /* ── box under section header ──────────────────── */
  const box = t => `<div style="${TD}border-top:none;line-height:1.6;">${nl(t)}</div>`;
  /* ── year banner (MINEDU style) ─────────────────── */
  const yBanner = `<div style="text-align:center;font-style:italic;font-size:8.5pt;color:#555;margin-bottom:6px;">"Año de la Esperanza y el Fortalecimiento de la Democracia"</div>`;
  /* ── document title block ───────────────────────── */
  const titleBox = (main,sub) => `<div style="border:2px solid ${mc};text-align:center;padding:8px 12px;margin-bottom:8px;">
    <div style="background:${mc};color:#fff;font-weight:700;font-size:13pt;padding:6px 8px;${F}">${main}</div>
    ${sub?`<div style="font-weight:700;font-size:10.5pt;color:${mc};margin-top:5px;padding:2px 0;">${sub}</div>`:''}
  </div>`;
  /* ── triple signature ───────────────────────────── */
  const firma = (doc,lugar,fecha) => `
  <div style="margin-top:24px;${F}">
    <div style="text-align:center;font-size:8.5pt;color:#444;margin-bottom:18px;">${lugar||'_________'}, ${fecha||'_____ de ____________ del 2026'}</div>
    <div style="display:flex;justify-content:space-around;text-align:center;gap:8px;">
      <div style="flex:1;"><div style="border-top:1px solid #333;padding-top:4px;display:inline-block;min-width:140px;"></div><br>
        <span style="font-size:9pt;font-weight:700;">${doc||'Prof. _________________'}</span><br>
        <span style="font-size:8.5pt;">DOCENTE</span></div>
      <div style="flex:1;"><div style="border-top:1px solid #333;padding-top:4px;display:inline-block;min-width:140px;"></div><br>
        <span style="font-size:9pt;font-weight:700;">${(typeof IE_PROFILE!=='undefined'&&IE_PROFILE.director)||'_______________________'}</span><br>
        <span style="font-size:8.5pt;">V°B° DIRECTOR(A)</span></div>
      <div style="flex:1;"><div style="border-top:1px solid #333;padding-top:4px;display:inline-block;min-width:140px;"></div><br>
        <span style="font-size:9pt;font-weight:700;">${(typeof IE_PROFILE!=='undefined'&&IE_PROFILE.coord)||'_______________________'}</span><br>
        <span style="font-size:8.5pt;">V°B° COORDINADOR(A)</span></div>
    </div>
  </div>`;

  /* ═══════════════════════════════════════════════════
     PLAN CURRICULAR ANUAL
     Estructura idéntica al modelo PDF de referencia
     ═══════════════════════════════════════════════════ */
  if(tipo==='pa'){
    /* -- Tabla calendarización dinámica — datos embebidos en d._cal -- */
    const cal = d._cal || {
      b1:{ini:'16/03/'+(d.anio||'2026'),fin:'15/05/'+(d.anio||'2026'),sem:'9'},
      b2:{ini:'25/05/'+(d.anio||'2026'),fin:'24/07/'+(d.anio||'2026'),sem:'9'},
      b3:{ini:'10/08/'+(d.anio||'2026'),fin:'09/10/'+(d.anio||'2026'),sem:'9'},
      b4:{ini:'19/10/'+(d.anio||'2026'),fin:'18/12/'+(d.anio||'2026'),sem:'9'},
    };
    // Unidades por bimestre desde los campos b1-b4
    const bUnits = {
      I:   (d.b1||'').split('\n').filter(l=>l.trim()).map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).join(', ') || 'Unidades del Bimestre I',
      II:  (d.b2||'').split('\n').filter(l=>l.trim()).map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).join(', ') || 'Unidades del Bimestre II',
      III: (d.b3||'').split('\n').filter(l=>l.trim()).map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).join(', ') || 'Unidades del Bimestre III',
      IV:  (d.b4||'').split('\n').filter(l=>l.trim()).map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).join(', ') || 'Unidades del Bimestre IV',
    };
    const _sem = k => parseInt(cal[k]?.sem)||0;
    const _dias= k => _sem(k)*5;
    const _hrs = k => _sem(k)*(parseInt(d.horas)||5)*5;
    const totalSem  = ['b1','b2','b3','b4'].map(_sem).reduce((a,b)=>a+b,0);
    const totalDias = totalSem*5;
    const totalHrs  = totalSem*(parseInt(d.horas)||5)*5;
    const calTable = `<table style="width:100%;border-collapse:collapse;">
      <tr>${['BIMESTRE','UNIDADES DE APRENDIZAJE','FECHA INICIO','FECHA FIN','SEMANAS','DÍAS LECTIVOS','HORAS LECTIVAS'].map(h=>`<th style="${THc}background:${mc};text-align:center;font-size:8pt;">${h}</th>`).join('')}</tr>
      <tr><td style="${TD}font-weight:700;text-align:center;color:#1565C0;">I</td><td style="${TD}font-size:8pt;">${bUnits.I}</td><td style="${TD}text-align:center;">${cal.b1.ini}</td><td style="${TD}text-align:center;">${cal.b1.fin}</td><td style="${TD}text-align:center;font-weight:700;">${cal.b1.sem}</td><td style="${TD}text-align:center;">${_dias('b1')}</td><td style="${TD}text-align:center;">${_hrs('b1')}</td></tr>
      <tr><td style="${TD}font-weight:700;text-align:center;color:#2E7D32;">II</td><td style="${TD}font-size:8pt;">${bUnits.II}</td><td style="${TD}text-align:center;">${cal.b2.ini}</td><td style="${TD}text-align:center;">${cal.b2.fin}</td><td style="${TD}text-align:center;font-weight:700;">${cal.b2.sem}</td><td style="${TD}text-align:center;">${_dias('b2')}</td><td style="${TD}text-align:center;">${_hrs('b2')}</td></tr>
      <tr><td style="${TD}font-weight:700;text-align:center;color:#E65100;">III</td><td style="${TD}font-size:8pt;">${bUnits.III}</td><td style="${TD}text-align:center;">${cal.b3.ini}</td><td style="${TD}text-align:center;">${cal.b3.fin}</td><td style="${TD}text-align:center;font-weight:700;">${cal.b3.sem}</td><td style="${TD}text-align:center;">${_dias('b3')}</td><td style="${TD}text-align:center;">${_hrs('b3')}</td></tr>
      <tr><td style="${TD}font-weight:700;text-align:center;color:#6A1B9A;">IV</td><td style="${TD}font-size:8pt;">${bUnits.IV}</td><td style="${TD}text-align:center;">${cal.b4.ini}</td><td style="${TD}text-align:center;">${cal.b4.fin}</td><td style="${TD}text-align:center;font-weight:700;">${cal.b4.sem}</td><td style="${TD}text-align:center;">${_dias('b4')}</td><td style="${TD}text-align:center;">${_hrs('b4')}</td></tr>
      <tr style="background:#f0f0f0;"><td colspan="4" style="${TH}text-align:right;font-weight:700;">TOTAL AÑO LECTIVO ${d.anio||'2026'}</td><td style="${TD}text-align:center;font-weight:700;">${totalSem}</td><td style="${TD}text-align:center;font-weight:700;">${totalDias}</td><td style="${TD}text-align:center;font-weight:700;">${totalHrs}</td></tr>
    </table>`;


    /* -- Tabla organización de unidades con datos del usuario -- */
    const sits   = (d.sits||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
    const campos  = (d.campos||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
    const prods   = (d.prods||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
    const enfsD   = (d.enfsdet||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
    const enfVals = (d.enfvals||'').split('\n').map(l=>l.replace(/^[^:]+:\s*/,'').trim()).filter(Boolean);
    const enfObs  = (d.enfobs||'').split('\n').map(l=>l.replace(/^[^:]+:\s*/,'').trim()).filter(Boolean);
    const dursArr = (d.durs||'').split('\n').map(l=>l.replace(/^Unidad\s*\d+:\s*/i,'').trim()).filter(Boolean);
    const unitRows = ()=>{
      const bims = {'I':d.b1||'','II':d.b2||'','III':d.b3||'','IV':d.b4||''};
      const rows = [];
      let uNum = 0;
      Object.entries(bims).forEach(([bim,txt])=>{
        if(!txt.trim()) return;
        txt.split('\n').filter(l=>l.trim()).forEach(line=>{
          const m = line.match(/^(?:Unidad\s*\d+:\s*)?(.+)$/i);
          const titulo = m?m[1].trim():line.trim();
          const sit  = sits[uNum]  || 'Situación contextualizada al entorno del estudiante y la comunidad local.';
          const camp = campos[uNum]|| '—';
          const prod = prods[uNum] || '—';
          const enf  = enfsD[uNum] || (d.enf||'—');
          const vals = enfVals[uNum] || '—';
          const obs  = enfObs[uNum]  || '—';
          const dur  = dursArr[uNum]|| '4 semanas';
          rows.push(`<tr>
            <td style="${TD}text-align:center;font-weight:700;">${uNum}</td>
            <td style="${TD}font-weight:700;">${titulo}</td>
            <td style="${TD}font-style:italic;font-size:8.5pt;">${sit}</td>
            <td style="${TD}font-size:8.5pt;">${enf}</td>
            <td style="${TD}font-size:8.5pt;">${vals}</td>
            <td style="${TD}font-size:8.5pt;">${obs}</td>
            <td style="${TD}font-size:8.5pt;">${camp}</td>
            <td style="${TD}font-size:8.5pt;font-weight:700;">${prod}</td>
            <td style="${TD}text-align:center;">${dur}</td>
          </tr>`);
          uNum++;
        });
      });
      if(rows.length===0) rows.push(`<tr><td colspan="9" style="${TD}text-align:center;color:#888;">Sin unidades — ingresa los títulos en los campos de Bimestre.</td></tr>`);
      return rows.join('');
    };
    const unitTable = `<table style="width:100%;border-collapse:collapse;">
      <tr>${['UA','TÍTULO DE LA UNIDAD','SITUACIÓN SIGNIFICATIVA','ENFOQUE TRANSVERSAL','VALORES','ACTITUDES / ACCIONES OBSERVABLES','CAMPO TEMÁTICO','PRODUCTO','TIEMPO']
        .map(h=>`<th style="${THc}background:${mc};text-align:center;">${h}</th>`).join('')}</tr>
      ${unitRows()}
    </table>`;

    /* -- Tabla metas con datos del formulario -- */
    // metaComps — dynamic: use competencias from the area saved in d.area
    const _aObjMeta = AREAS.find(a=>a.n===d.area);
    const _compsMeta = _aObjMeta ? (CNEB[_aObjMeta.id]?.c||[]).map(c=>c.n) : [];
    const metaComps = _compsMeta.map((comp,i)=>[
      comp,
      ['d'+i+'c','d'+i+'b','d'+i+'a','d'+i+'ad'],
      ['s'+i+'c','s'+i+'b','s'+i+'a','s'+i+'ad']
    ]);
    const metaTable = `<table style="width:100%;border-collapse:collapse;">
      <tr>
        <th rowspan="2" style="${TH}width:30%;text-align:left;">COMPETENCIAS</th>
        <th colspan="4" style="${THc}background:#1565C0;text-align:center;">EVALUACIÓN DIAGNÓSTICA</th>
        <th colspan="4" style="${THc}background:#2E7D32;text-align:center;">EVALUACIÓN DE SALIDA (META ${d.anio||'2026'})</th>
      </tr>
      <tr>${['C %','B %','A %','AD %','C %','B %','A %','AD %'].map(c=>`<th style="${TH}text-align:center;width:6%;">${c}</th>`).join('')}</tr>
      ${metaComps.map(([comp,dk,sk])=>`<tr>
        <td style="${TD}font-size:9pt;">${comp}</td>
        ${dk.map(k=>`<td style="${TD}text-align:center;">${d[k]||'—'}</td>`).join('')}
        ${sk.map(k=>`<td style="${TD}text-align:center;">${d[k]||'—'}</td>`).join('')}
      </tr>`).join('')}
    </table>`;

    /* -- Tabla evaluación -- */
    const evalTable = `<table style="width:100%;border-collapse:collapse;">
      <tr>
        <th style="${THc}background:${mc};width:22%;">TIPO</th>
        <th style="${THc}background:${mc};">ORIENTACIONES PEDAGÓGICAS</th>
      </tr>
      <tr><td style="${TD}font-weight:700;">Diagnóstica</td><td style="${TD}">Se aplica al inicio del periodo o unidad para determinar el nivel real de desarrollo de las competencias. Toma como referencia los estándares de aprendizaje y desempeños del grado para identificar necesidades y planificar pertinentemente.</td></tr>
      <tr><td style="${TD}font-weight:700;">Formativa</td><td style="${TD}">Proceso permanente centrado en la retroalimentación oportuna. Busca valorar el desempeño del estudiante ante situaciones significativas, permitiéndole reflexionar sobre sus procesos e integrar capacidades.</td></tr>
      <tr><td style="${TD}font-weight:700;">Sumativa</td><td style="${TD}">Se orienta a certificar el nivel de logro alcanzado al finalizar un periodo o unidad. Se sustenta en evidencias recolectadas mediante instrumentos diversificados, alineados a los propósitos de aprendizaje.</td></tr>
    </table>`;

    return `<div style="${F}font-size:10pt;color:#111;line-height:1.5;padding:4px;">
      ${yBanner}
      ${titleBox('PLAN CURRICULAR ANUAL DE '+(d.area||'ÁREA').toUpperCase()+' – '+(d.anio||'2026'),'')}

      ${hdr('I','DATOS INFORMATIVOS')}
      <table style="width:100%;border-collapse:collapse;">
        ${row('1.1. DRE',d.reg||'Lima Metropolitana')}
        ${row('1.2. UGEL',d.ugel)}
        ${row('1.3. Institución Educativa',d.ie)}
        ${row('1.4. Director(a)',(typeof IE_PROFILE!=='undefined'&&IE_PROFILE.director)||d.director||'______________________')}
        ${row('1.5. Nivel','Secundaria')}
        ${row('1.6. Grado y Sección',(d.grado||'—')+'° – '+(d.secc||'—'))}
        ${row('1.7. Horas semanales',(d.horas||'—')+' horas')}
        ${row('1.8. Docente',d.doc)}
      </table>

      ${hdr('II','CARACTERIZACIÓN DEL ESTUDIANTE Y SU ENTORNO')}
      ${box(d.pres||'Los estudiantes del grado presentan características propias de la etapa adolescente. La planificación responde a sus necesidades de aprendizaje y al contexto sociocultural de la institución, articulando el CNEB con situaciones significativas del entorno peruano.')}

      ${hdr('III','METAS PARA EL PERIODO LECTIVO '+(d.anio||'2026'))}
      ${metaTable}

      ${hdr('IV','CALENDARIZACIÓN DEL PERIODO LECTIVO '+(d.anio||'2026'))}
      ${calTable}

      ${hdr('V','ORGANIZACIÓN DE LAS UNIDADES DIDÁCTICAS')}
      ${unitTable}

            ${hdr('VI','COMPETENCIAS, CAPACIDADES Y DESEMPEÑOS DEL ÁREA')}
      ${(()=>{
        const _aO=AREAS.find(a=>a.n===d.area)||AREAS[0];
        const _cn=CNEB[_aO?.id||'mat']||{c:[]};
        const _mc3=_aO?.c||mc;
        const TH3=`background:${_mc3};color:#fff;font-weight:700;font-size:9pt;padding:6pt 8pt;border:1pt solid ${_mc3};text-align:left;`;
        const TDcc=`border:1pt solid #d0d0d0;padding:5pt 8pt;font-size:9pt;vertical-align:top;font-weight:700;color:${_mc3};line-height:1.4;background:#fafafa;`;
        const TD3=`border:1pt solid #d0d0d0;padding:5pt 8pt;font-size:9pt;vertical-align:top;line-height:1.4;`;
        let rows='';
        _cn.c.forEach(comp=>{
          const caps=comp.caps||[];const desm=comp.d||[];
          const maxR=Math.max(caps.length,desm.length,1);
          const compCell=`<td rowspan="${maxR}" style="${TDcc}"><span style="display:block;font-weight:700;font-size:9pt;color:${_mc3};line-height:1.4;">${comp.n}</span></td>`;
          rows+=`<tr>${compCell}<td style="${TD3}">${caps[0]||''}</td><td style="${TD3}">${desm[0]||''}</td></tr>`;
          for(let i=1;i<maxR;i++) rows+=`<tr><td style="${TD3}">${caps[i]||''}</td><td style="${TD3}">${desm[i]||''}</td></tr>`;
        });
        return `<table style="width:100%;border-collapse:collapse;margin:4pt 0;">
          <thead><tr>
            <th style="${TH3}width:26%">COMPETENCIA</th>
            <th style="${TH3}width:32%">CAPACIDADES</th>
            <th style="${TH3}width:42%">DESEMPEÑOS PRECISADOS</th>
          </tr></thead><tbody>${rows}</tbody></table>`;
      })()}

      ${hdr('VII','EVALUACIÓN')}
      ${evalTable}

      ${hdr('VIII','REFERENCIAS BIBLIOGRÁFICAS')}
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <th style="${THc}background:${mc};width:50%;">PARA EL DOCENTE</th>
          <th style="${THc}background:${mc};">PARA EL ESTUDIANTE</th>
        </tr>
        <tr>
          <td style="${TD}">${d.bibDoc?nl(d.bibDoc):'- Currículo Nacional de Educación Básica, MINEDU.<br>- Programa Curricular de Educación Secundaria, MINEDU.<br>- Texto del área. MINEDU, 2025.'}</td>
          <td style="${TD}">${d.bibEst?nl(d.bibEst):'- Texto del área ${d.grado||""}°. MINEDU, 2025.<br>- Fichas del área ${d.grado||""}°. MINEDU, 2025.<br>- Cuaderno de trabajo.'}</td>
        </tr>
      </table>

      ${firma(d.doc, d.ie, '___ de __________ del '+(d.anio||'2026'))}
    </div>`;
  }

  /* ═══════════════════════════════════════════════════
     UNIDAD DE APRENDIZAJE
     Estructura idéntica al modelo PDF de referencia
     ═══════════════════════════════════════════════════ */
  if(tipo==='ud'){
    const bDates = {'I':'Del 23 de marzo al 17 de abril del 2026','II':'Del 25 de mayo al 24 de julio del 2026','III':'Del 10 de agosto al 09 de octubre del 2026','IV':'Del 19 de octubre al 18 de diciembre del 2026'};

    /* tabla propósito de aprendizaje */
    const propTable = (()=>{
      /* Split competencias por línea, ignorar vacíos y bullets */
      const compLines = (d.comp||'').split(/\r?\n/).map(l=>l.replace(/^[•\-\s]+/,'').trim()).filter(Boolean);
      const nComps = compLines.length || 1;
      /* Capacidades: bloques separados por línea vacía, uno por competencia */
      const capsGroups = (d.caps||'').split(/\n\s*\n/).map(g=>g.trim()).filter(Boolean);
      /* Desempeños: bloques separados por línea vacía, uno por competencia */
      const desGroups  = (d.desemp||'').split(/\n\s*\n/).map(g=>g.trim()).filter(Boolean);
      /* Si sólo hay un bloque de caps/des, usarlo para todas las filas */
      const getCaps = i => {
        const t = capsGroups[i] || capsGroups[0] || buildCapsText(d.area, compLines[i]||d.comp) || '';
        return t.split(/\r?\n/).filter(Boolean).map(l=>'– '+l.replace(/^[•\-\s]+/,'')).join('<br>');
      };
      const getDes = i => {
        const t = desGroups[i] || desGroups[0] || buildDesText(d.area, compLines[i]||d.comp) || '';
        return t.split(/\r?\n/).filter(Boolean).map(l=>l.replace(/^[•\-\s]+/,'')).join('<br>');
      };
      /* Build rows */
      let rows = '';
      compLines.forEach((comp, i) => {
        rows += `<tr>
          <td style="${TD}font-weight:700;vertical-align:top;">${comp}</td>
          <td style="${TD}vertical-align:top;">${getCaps(i)||'—'}</td>
          <td style="${TD}vertical-align:top;">${getDes(i)||'—'}</td>
          ${i===0 ? `<td style="${TD}font-weight:700;text-align:center;vertical-align:middle;" rowspan="${nComps}">${val(d.prod)}</td>` : ''}
        </tr>`;
      });
      if(!compLines.length){
        rows = `<tr>
          <td style="${TD}font-weight:700;">${val(d.comp)}</td>
          <td style="${TD}">${buildCapsText(d.area,d.comp).split(/\r?\n/).filter(Boolean).map(l=>'– '+l).join('<br>')||'—'}</td>
          <td style="${TD}">${val(d.desemp)}</td>
          <td style="${TD}font-weight:700;text-align:center;">${val(d.prod)}</td>
        </tr>`;
      }
      return `<table style="width:100%;border-collapse:collapse;">
        <tr>
          <th style="${THc}background:${mc};width:18%;">COMPETENCIAS</th>
          <th style="${THc}background:${mc};width:26%;">CAPACIDADES</th>
          <th style="${THc}background:${mc};">DESEMPEÑOS CONTEXTUALIZADOS</th>
          <th style="${THc}background:${mc};width:18%;">PRODUCTO FINAL</th>
        </tr>
        ${rows}
      </table>`;
    })();

    /* tabla competencias transversales */
    const transTable = `<table style="width:100%;border-collapse:collapse;">
      <tr>
        <th style="${THc}background:${mc};width:30%;">COMPETENCIA TRANSVERSAL</th>
        <th style="${THc}background:${mc};width:30%;">CAPACIDADES</th>
        <th style="${THc}background:${mc};">DESEMPEÑOS CONTEXTUALIZADOS</th>
      </tr>
      <tr>
        <td style="${TD}">Se desenvuelve en entornos virtuales generados por las TIC</td>
        <td style="${TD}">- Personaliza entornos virtuales.<br>- Gestiona información del entorno virtual.<br>- Crea objetos virtuales en diversos formatos.</td>
        <td style="${TD}">Organiza y descarga información en herramientas digitales para crear el componente del producto final.</td>
      </tr>
      <tr>
        <td style="${TD}">Gestiona su aprendizaje de manera autónoma</td>
        <td style="${TD}">- Define metas de aprendizaje.<br>- Organiza acciones estratégicas.<br>- Monitorea y ajusta su desempeño.</td>
        <td style="${TD}">Determina metas de aprendizaje viables, organiza sus tiempos y cumple con las actividades de la unidad.</td>
      </tr>
    </table>`;

    /* tabla enfoques transversales */
    const _enfValsTxt = d.enfvals||d.enf_vals||'Responsabilidad, Solidaridad, Empatía';
    const _enfObsTxt  = d.enfobs||d.enf_obs||'Los estudiantes demuestran actitudes positivas hacia el aprendizaje y la comunidad educativa.';
    const enfTable = `<table style="width:100%;border-collapse:collapse;">
      <tr>
        <th style="${THc}background:${mc};width:28%;">ENFOQUE TRANSVERSAL</th>
        <th style="${THc}background:${mc};width:22%;">VALORES</th>
        <th style="${THc}background:${mc};">ACTITUDES O ACCIONES OBSERVABLES</th>
      </tr>
      <tr>
        <td style="${TD}">${val(d.enf)}</td>
        <td style="${TD}">${_enfValsTxt}</td>
        <td style="${TD}">${_enfObsTxt}</td>
      </tr>
    </table>`;

    /* tabla secuencia de sesiones — columnas dinámicas según n° semanas */
    let sesTable = '';
    (function(){
      const nSem = parseInt(d.sem)||4;
      const wPct = Math.round(100/nSem)+'%';
      const hdrs = Array.from({length:nSem},(_,i)=>`<th style="${THc}background:${mc};text-align:center;width:${wPct};">SEMANA ${i+1}</th>`).join('');
      const wkData = d.semanas_data||[];
      /* split competencias — one per week; if fewer comps than weeks, cycle last one */
      const compLines = (d.comp||'').split(/\r?\n/).map(l=>l.replace(/^[•\-\s]+/,'').trim()).filter(Boolean);
      const getCompForWeek = i => compLines.length ? (compLines[i] || compLines[compLines.length-1]) : (d.comp||'—');
      const cells = Array.from({length:nSem},(_,i)=>{
        const wk = wkData[i]||{};
        const prop  = wk.prop  || (i===0?'Sesión de inicio de la unidad.': i===nSem-1?'Elaboración del producto final.':'Desarrollo de capacidades de la unidad.');
        const campo = wk.campo || 'Según programación.';
        const isLast = i===nSem-1;
        const sesNum = String(i+1).padStart(2,'0');
        const compSem = getCompForWeek(i);
        return `<td style="${TD}vertical-align:top;"><strong>Sesión N°${sesNum}${isLast?' / Producto Final':''}</strong><br><br><strong>COMPETENCIA:</strong><br>${compSem}<br><br><strong>PROPÓSITO:</strong><br>${prop}<br><br><strong>CAMPO TEMÁTICO:</strong><br>${campo}</td>`;
      }).join('');
      sesTable = `<table style="width:100%;border-collapse:collapse;"><tr>${hdrs}</tr><tr>${cells}</tr></table>`;
    })();

    /* tabla sesiones de refuerzo — usa datos reales de refuerzo_data */
    const _nSemRef = parseInt(d.sem)||4;
    const _refData = d.refuerzo_data||[];
    const _refHdrs = Array.from({length:_nSemRef},(_,i)=>`<th style="${THc}background:${mc};text-align:center;width:${Math.round(100/_nSemRef)}%;">SEMANA ${i+1}</th>`).join('');
    const _refCells = Array.from({length:_nSemRef},(_,i)=>{
      const isLast=i===_nSemRef-1;
      const def=isLast?'Elaboración y presentación del producto final de la unidad.':'Refuerzo de conceptos clave de la semana '+(i+1)+'.';
      const txt=(_refData[i]&&_refData[i].trim())?_refData[i]:def;
      return `<td style="${TD}vertical-align:top;font-style:italic;">${nl(txt)}</td>`;
    }).join('');
    const refTable = `<table style="width:100%;border-collapse:collapse;"><tr>${_refHdrs}</tr><tr>${_refCells}</tr></table>`;

    /* rúbrica */
    const rubTable = `<table style="width:100%;border-collapse:collapse;">
      <tr>
        <th style="${THc}background:${mc};width:20%;">CRITERIOS DE EVALUACIÓN</th>
        <th style="${THc}background:#1A7A4A;">LOGRO DESTACADO (AD)</th>
        <th style="${THc}background:#1565C0;">LOGRO PREVISTO (A)</th>
        <th style="${THc}background:#E65100;">EN PROCESO (B)</th>
        <th style="${THc}background:#B71C1C;">EN INICIO (C)</th>
      </tr>
      <tr>
        <td style="${TD}font-weight:700;">Competencia principal del área</td>
        <td style="${TD}">Supera el nivel esperado con creatividad y precisión; justifica sus procedimientos.</td>
        <td style="${TD}">Cumple con el propósito de aprendizaje de manera satisfactoria.</td>
        <td style="${TD}">En camino de alcanzar el nivel esperado; presenta algunas dificultades.</td>
        <td style="${TD}">Requiere apoyo adicional para alcanzar el nivel mínimo esperado.</td>
      </tr>
      <tr>
        <td style="${TD}font-weight:700;">Aplicación en situación real</td>
        <td style="${TD}">Aplica los aprendizajes en situaciones nuevas con total autonomía.</td>
        <td style="${TD}">Aplica correctamente los aprendizajes en la situación planteada.</td>
        <td style="${TD}">Aplica parcialmente los aprendizajes con cierta guía del docente.</td>
        <td style="${TD}">No logra aplicar los aprendizajes en la situación planteada.</td>
      </tr>
      <tr>
        <td style="${TD}font-weight:700;">Presentación y Propuesta de Valor (Producto Final)</td>
        <td style="${TD}">El producto es creativo, bien organizado y presenta una solución altamente viable.</td>
        <td style="${TD}">El producto está completo, ordenado y cumple el propósito de la unidad.</td>
        <td style="${TD}">El producto está incompleto o la propuesta no se sustenta claramente.</td>
        <td style="${TD}">El trabajo es desorganizado y no cumple el propósito de la unidad.</td>
      </tr>
    </table>`;

    return `<div style="${F}font-size:10pt;color:#111;line-height:1.5;padding:4px;">
      ${yBanner}
      ${titleBox('UNIDAD DE APRENDIZAJE N°'+(d.num||'01')+' – '+(d.anio||'2026'), (d.tit||'UNIDAD DE APRENDIZAJE').toUpperCase())}

      ${hdr('I','DATOS GENERALES')}
      <table style="width:100%;border-collapse:collapse;">
        ${row('1.1. Institución Educativa',d.ie)}
        ${row('1.2. Nivel','Secundaria')}
        ${row('1.3. Área',d.area)}
        ${row('1.4. Grado y Sección',(d.grado||'—')+'° – '+(d.secc||'—'))}
        ${row('1.5. Fecha',bDates[d.bim]||'—')}
        ${row('1.6. Duración',(d.sem||'—')+' semanas')}
        ${row('1.7. Horas semanales','5 horas')}
        ${row('1.8. Docente',d.doc)}
        ${row('1.9. Director(a)',(typeof IE_PROFILE!=='undefined'&&IE_PROFILE.director)||'______________________')}
      </table>

      ${hdr('II','SITUACIÓN SIGNIFICATIVA')}
      ${box(d.sit)}

      ${hdr('III','PROPÓSITO DE APRENDIZAJE')}
      ${propTable}

      ${hdr('IV','COMPETENCIAS TRANSVERSALES')}
      ${transTable}

      ${hdr('V','ENFOQUES TRANSVERSALES')}
      ${enfTable}

      ${hdr('VI','SECUENCIA DE SESIONES DE APRENDIZAJE')}
      ${sesTable}

      ${hdr('VII','SECUENCIA DE SESIONES DE REFUERZO ESCOLAR')}
      ${refTable}

      ${hdr('VIII','EVALUACIÓN DEL PRODUCTO FINAL (RÚBRICA DE EVALUACIÓN)')}
      ${rubTable}

      ${hdr('IX','RECURSOS Y MATERIALES')}
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <th style="${THc}background:${mc};width:50%;">PARA EL DOCENTE</th>
          <th style="${THc}background:${mc};">PARA EL ESTUDIANTE</th>
        </tr>
        <tr>
          <td style="${TD}">${d.mat?nl(d.mat):'- Texto del área. MINEDU, 2025.<br>- Fichas de actividades.<br>- Proyector multimedia y ecran.<br>- Instrumentos de evaluación (lista de cotejo y rúbricas).'}</td>
          <td style="${TD}">- Texto del área ${d.grado||''}°. MINEDU, 2025.<br>- Cuaderno de ${d.area||'área'}.<br>- Fichas de actividades.<br>- Materiales didácticos concretos.</td>
        </tr>
      </table>
      <table style="width:100%;border-collapse:collapse;margin-top:4px;">
        <tr>
          <td style="${TH}width:22%;">Bibliografía</td>
          <td style="${TD}">${d.bib?nl(d.bib):'- Currículo Nacional de Educación Básica, MINEDU.<br>- Texto del área. MINEDU, 2025.<br>- Programa Curricular de Educación Secundaria, MINEDU.'}</td>
        </tr>
      </table>

      ${firma(d.doc, d.ie, '')}
    </div>`;
  }

  /* ═══════════════════════════════════════════════════
     SESIÓN DE APRENDIZAJE
     Estructura idéntica al modelo PDF de referencia
     ═══════════════════════════════════════════════════ */

  /* -- ficha de cabecera 3 filas x 4 col -- */
  const fichaHdr = `<table style="width:100%;border-collapse:collapse;">
    <tr>
      <td style="${TH}width:12%;">Área</td>
      <td style="${TD}width:38%;">${val(d.area)}</td>
      <td style="${TH}width:22%;">Grado y Sección</td>
      <td style="${TD}">${d.grado||'—'}° "${d.secc||'A'}"</td>
    </tr>
    <tr>
      <td style="${TH}">Fecha</td>
      <td style="${TD}">${val(d.fecha)}</td>
      <td style="${TH}">Duración</td>
      <td style="${TD}">${d.dur||'90 min'}</td>
    </tr>
    <tr>
      <td style="${TH}">Docente</td>
      <td colspan="3" style="${TD}font-weight:700;">${val(d.doc)}</td>
    </tr>
  </table>`;

  /* -- tabla propósito de aprendizaje sesión -- */
  const propSes = `<table style="width:100%;border-collapse:collapse;">
    <tr>
      <td style="${TH}width:12%;">Propósito</td>
      <td colspan="3" style="${TD}">${nl(d.prop||d.tit)||'—'}</td>
    </tr>
    <tr>
      <th style="${TH}width:12%;">Competencia</th>
      <th style="${TH}width:25%;">Capacidades</th>
      <th style="${TH}width:30%;">Desempeños precisados</th>
      <th style="${TH}width:22%;">Campos temáticos</th>
    </tr>
    <tr>
      <td style="${TD}font-weight:700;vertical-align:top;">${val(d.comp)}</td>
      <td style="${TD}vertical-align:top;">${d.caps?nl(d.caps):(getCapsList(d.area,d.comp).map(c=>'– '+c).join('<br>')||'—')}</td>
      <td style="${TD}vertical-align:top;">${nl(d.desemp)||'—'}</td>
      <td style="${TD}vertical-align:top;">${nl(d.campo||d.tit)||'—'}</td>
    </tr>
    <tr>
      <th colspan="2" style="${TH}">Competencias transversales</th>
      <th colspan="2" style="${TH}">Enfoque transversal</th>
    </tr>
    <tr>
      <td colspan="2" style="${TD}">- Gestiona su aprendizaje de manera autónoma.<br>- Se desenvuelve en los entornos virtuales generados por las TIC.</td>
      <td colspan="2" style="${TD}">${nl(d.enf)||'Enfoque de Orientación al Bien Común'}</td>
    </tr>
  </table>`;

  /* -- tabla evidencia de aprendizaje -- */
  const evidSes = `<table style="width:100%;border-collapse:collapse;">
    <tr>
      <th style="${TH}width:30%;">Evidencia</th>
      <th style="${TH}width:50%;">Criterios de evaluación</th>
      <th style="${TH}width:18%;">Instrumento</th>
    </tr>
    <tr>
      <td style="${TD}">El estudiante resuelve la Ficha de Actividades de la sesión demostrando el logro del desempeño esperado.</td>
      <td style="${TD}">${nl(d.crit)||'- Identifica y diferencia los conceptos clave de la sesión.<br>- Aplica estrategias adecuadas para resolver las situaciones planteadas.<br>- Relaciona los aprendizajes con situaciones del entorno real.'}</td>
      <td style="${TD}text-align:center;font-weight:700;">${d.instr||'Lista de cotejo'}</td>
    </tr>
  </table>`;

  /* -- secuencia didáctica con 3 momentos -- */
  const momStyle = (bg) => `border:1px solid #aaa;background:${bg};font-weight:700;font-size:9pt;text-align:center;vertical-align:middle;width:5%;writing-mode:vertical-rl;transform:rotate(180deg);padding:5px 3px;`;
  const seqTable = `<table style="width:100%;border-collapse:collapse;">
    <tr>
      <th style="${THc}background:${mc};width:5%;">MOMENTO</th>
      <th style="${THc}background:${mc};">SECUENCIA DIDÁCTICA</th>
      <th style="${THc}background:${mc};width:8%;text-align:center;">TIEMPO</th>
    </tr>
    <tr>
      <td style="${momStyle('#FDECEA')}">INICIO</td>
      <td style="${TD}vertical-align:top;">
        <strong>1. SALUDO Y SOPORTE SOCIOEMOCIONAL:</strong><br>
        El docente recibe a los estudiantes con un saludo afectuoso, estableciendo un clima de confianza. Se dialoga sobre los acuerdos de convivencia. Se organiza a los estudiantes y se distribuye la ficha de actividades.<br><br>
        <strong>2. MOTIVACIÓN:</strong><br>${nl(d.mot)||'—'}<br><br>
        <strong>3. RECUPERACIÓN DE SABERES PREVIOS Y CONFLICTO COGNITIVO:</strong><br>${nl(d.sab)||'—'}<br><br>
        <em><strong>Conflicto cognitivo:</strong> ${nl(d.conf)||'—'}</em><br><br>
        <strong>4. PROPÓSITO Y EVIDENCIA DE APRENDIZAJE:</strong><br>
        El docente comunica el propósito de la sesión y la evidencia esperada: <em>"${nl(d.desemp)||'Lograr el desempeño previsto.'}"</em>
      </td>
      <td style="${TD}text-align:center;font-weight:700;">20 min</td>
    </tr>
    <tr>
      <td style="${momStyle('#E8F5E9')}">DESARROLLO</td>
      <td style="${TD}vertical-align:top;">
        <strong>1. FORMALIZACIÓN DE LOS APRENDIZAJES:</strong><br>
        El docente formaliza los campos temáticos a través de ejemplos y ejercicios contextualizados. Los estudiantes completan su ficha de actividades.<br><br>
        <strong>2. SITUACIÓN SIGNIFICATIVA:</strong><br>${nl(d.cons)||'—'}<br><br>
        <strong>3. FAMILIARIZACIÓN CON LA SITUACIÓN:</strong><br>
        Los estudiantes leen detenidamente la situación y responden preguntas para asegurar la comprensión del reto.<br><br>
        <strong>4. BÚSQUEDA Y EJECUCIÓN DE ESTRATEGIAS:</strong><br>${nl(d.apli)||'—'}<br><br>
        <strong>5. SOCIALIZACIÓN DE REPRESENTACIONES:</strong><br>
        Estudiantes voluntarios comparten sus hallazgos. Se comparan las diversas estrategias. El docente registra avances con el instrumento de evaluación.
      </td>
      <td style="${TD}text-align:center;font-weight:700;">55 min</td>
    </tr>
    <tr>
      <td style="${momStyle('#E3F2FD')}">CIERRE</td>
      <td style="${TD}vertical-align:top;">
        <strong>1. EVALUACIÓN Y RETROALIMENTACIÓN FORMAL:</strong><br>
        Los estudiantes completan la autoevaluación en su ficha, reflexionando sobre sus logros y dificultades.<br><br>
        <strong>2. METACOGNICIÓN:</strong><br>${nl(d.meta)||'—'}<br>
        <em>¿Qué aprendí hoy? ¿Cómo lo aprendí? ¿Para qué me sirve en la vida cotidiana?</em><br><br>
        <strong>3. EXTENSIÓN Y TRANSFERENCIA:</strong><br>${d.tarea?nl(d.tarea):'El docente entrega ficha de refuerzo domiciliario con retos contextualizados.'}
      </td>
      <td style="${TD}text-align:center;font-weight:700;">15 min</td>
    </tr>
  </table>`;

  return `<div style="${F}font-size:10pt;color:#111;line-height:1.5;padding:4px;">
    ${yBanner}
    <div style="text-align:center;font-size:8.5pt;color:#555;margin-bottom:4px;">Unidad de Aprendizaje N°__ – ${d.anio||'2026'}</div>
    ${titleBox('SESIÓN DE APRENDIZAJE N°'+(d.num||'01')+':','"'+(d.tit||'SESIÓN DE APRENDIZAJE').toUpperCase()+'"')}
    ${fichaHdr}

    ${hdr('I','PROPÓSITO DE APRENDIZAJE')}
    ${propSes}

    ${hdr('II','EVIDENCIA DE APRENDIZAJE')}
    ${evidSes}

    ${hdr('III','SECUENCIA DIDÁCTICA')}
    ${seqTable}

    <div style="margin-top:10px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row('Materiales y Recursos',d.mat||'Fichas de actividades, pizarra, plumones, texto MINEDU, materiales concretos.')}
        ${row('Bibliografía',d.bib||'Texto del área MINEDU, Fichas de actividades, CNEB.')}
      </table>
    </div>

    <div style="margin-top:24px;${F}display:flex;justify-content:space-around;text-align:center;gap:8px;">
      <div style="flex:1;"><div style="border-top:1px solid #333;padding-top:4px;display:inline-block;min-width:130px;"></div><br>
        <span style="font-size:8.5pt;">DIRECTOR(A)</span></div>
      <div style="flex:1;"><div style="border-top:1px solid #333;padding-top:4px;display:inline-block;min-width:130px;"></div><br>
        <span style="font-size:9pt;font-weight:700;">${val(d.doc)}</span><br>
        <span style="font-size:8.5pt;">DOCENTE</span></div>
    </div>
  </div>`;
}


function doExportWord(htmlContent, fileName){
  // Word XML with proper 2cm margins, A4 portrait, Arial font
  // Strip no-print elements first
  const tmp = document.createElement('div');
  tmp.innerHTML = htmlContent;
  tmp.querySelectorAll('.no-print,[class*="no-print"]').forEach(el=>el.remove());
  const cleanHtml = tmp.innerHTML;

  const w = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
    xmlns:w='urn:schemas-microsoft-com:office:word'
    xmlns='http://www.w3.org/TR/REC-html40'>
  <head>
    <meta charset='utf-8'>
    <xml>
      <w:WordDocument>
        <w:View>Print</w:View>
        <w:Zoom>90</w:Zoom>
        <w:DoNotOptimizeForBrowser/>
      </w:WordDocument>
    </xml>
    <style>
      /* Page setup: A4 portrait, 2cm margins all sides */
      @page WordSection1 {
        size: 21cm 29.7cm;
        margin: 2cm 2cm 2cm 2cm;
        mso-page-orientation: portrait;
        mso-header-margin: 1cm;
        mso-footer-margin: 1cm;
      }
      div.WordSection1 { page: WordSection1; }

      body {
        font-family: Arial, sans-serif;
        font-size: 10pt;
        color: #111111;
        line-height: 1.4;
        margin: 0;
        padding: 0;
      }

      /* Tables */
      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 6pt;
        font-size: 9pt;
      }
      td, th {
        border: 1px solid #999999;
        padding: 4pt 6pt;
        vertical-align: top;
        font-size: 9pt;
        line-height: 1.3;
      }
      th {
        font-weight: bold;
      }

      /* Headings */
      h1 { font-size: 13pt; font-weight: bold; margin: 6pt 0 4pt; }
      h2 { font-size: 11pt; font-weight: bold; margin: 5pt 0 3pt; }
      h3 { font-size: 10pt; font-weight: bold; margin: 4pt 0 2pt; }

      /* Paragraphs */
      p { margin: 3pt 0; font-size: 9.5pt; }

      /* Section headers (colored divs) */
      div[style*="background:#C0392B"], div[style*="background:#1565C0"],
      div[style*="background:#2E7D32"], div[style*="background:#E65100"],
      div[style*="background:#6A1B9A"], div[style*="background:#B85C00"],
      div[style*="background:#5B2D8E"], div[style*="background:#0E7A4A"] {
        font-size: 9pt;
        font-weight: bold;
        padding: 4pt 6pt;
        margin: 5pt 0 2pt;
      }

      /* Fix: remove fixed positioning, box-shadows, animations for Word */
      *[style*="position:fixed"], *[style*="position: fixed"] { display: none !important; }
      *[style*="box-shadow"] { box-shadow: none !important; }
      *[style*="border-radius"] { border-radius: 0 !important; }
      *[style*="animation"] { animation: none !important; }

      /* Ensure images don't overflow */
      img { max-width: 100%; height: auto; }

      /* Page break helper */
      .page-break { page-break-before: always; }
    </style>
  </head>
  <body>
    <div class="WordSection1">
      ${cleanHtml}
    </div>
  </body>
</html>`;

  const blob = new Blob(['﻿' + w], {type: 'application/msword'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = fileName + '.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('✅ Word descargado: ' + fileName + '.doc  (márgenes 2cm · A4)', 'ok');
}

function fname(tipo,d){
  if(tipo==='pa')return `PlanAnual_${d.area||''}_${d.grado||''}Sec`;
  if(tipo==='ud')return `Unidad${d.num||1}_${d.area||''}_Bim${d.bim||''}`;
  return `Sesion${d.num||1}_${d.area||''}_Bim${d.bim||''}`;
}

// ─── CORE PRINT / EXPORT HELPERS ───────────────────────────────
function buildDocPage(html, titulo){
  var estilos = [
    'body{font-family:Arial,sans-serif;margin:0;padding:2cm 2cm 2cm 2cm;font-size:10pt;color:#111;line-height:1.4;}',
    'table{width:100%;border-collapse:collapse;margin-bottom:5pt;font-size:9pt;}',
    'td,th{border:1px solid #999;padding:4pt 6pt;font-size:9pt;vertical-align:top;line-height:1.3;}',
    'th{font-weight:bold;}',
    'p{margin:3pt 0;}',
    '.no-print{display:none!important;}',
    '@media print{',
    '  @page{size:A4 portrait;margin:2cm;}',
    '  body{padding:0;margin:0;}',
    '  .no-print{display:none!important;}',
    '  table{page-break-inside:auto;}',
    '  tr{page-break-inside:avoid;}',
    '}'
  ].join('');
  var btnBar = '<div class="no-print" style="position:fixed;top:0;left:0;right:0;background:#0F0F1A;padding:8px 16px;display:flex;gap:8px;align-items:center;z-index:999;box-shadow:0 2px 10px rgba(0,0,0,.4);">'
    +'<span style="color:#fff;font-weight:700;font-family:Arial;font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">📋 '+titulo+'</span>'
    +'<button onclick="window.print()" style="background:#0e7a4a;color:#fff;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px;white-space:nowrap;">🖨 Imprimir / Guardar PDF</button>'
    +'<button onclick="window.close()" style="background:#555;color:#fff;border:none;padding:8px 12px;border-radius:6px;cursor:pointer;font-size:12px;">✕</button>'
    +'</div>';
  var paddingTop = '<div style="height:46px;" class="no-print"></div>';
  return '<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+titulo+'</title><style>'+estilos+'</style></head><body>'+btnBar+paddingTop+html+'</body></html>';
}

function abrirEnBlob(html, titulo){
  // Usa Blob + iframe oculto → evita bloqueo de popups
  var docHtml = buildDocPage(html, titulo);
  var blob = new Blob([docHtml], {type:'text/html;charset=utf-8'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function(){ URL.revokeObjectURL(url); }, 10000);
  toast('✅ Documento abierto. Usa el botón "Imprimir / Guardar PDF"','ok');
}

function imprimirDoc(html, titulo){
  abrirEnBlob(html, titulo);
}

function guardarPDF(html, titulo){
  abrirEnBlob(html, titulo);
}

// ─── MODAL: PA ──────────────────────────────────────────────────
function expPA(fmt){
  try{
    var d = getDataFromModal('pa');
    var h = buildHTML('pa', d);
    var fn = fname('pa', d);
    if(fmt==='pdf') guardarPDF(h, fn);
    else doExportWord(h, fn);
  }catch(e){ toast('❌ Error exportando: '+e.message,'err'); console.error(e); }
}
function impPA(){
  try{
    var d = getDataFromModal('pa');
    imprimirDoc(buildHTML('pa',d), 'Plan Anual – '+(d.area||''));
  }catch(e){ toast('❌ Error imprimiendo: '+e.message,'err'); console.error(e); }
}

// ─── MODAL: UD ──────────────────────────────────────────────────
function expUD(fmt){
  try{
    var d = getDataFromModal('ud');
    var h = buildHTML('ud', d);
    var fn = fname('ud', d);
    if(fmt==='pdf') guardarPDF(h, fn);
    else doExportWord(h, fn);
  }catch(e){ toast('❌ Error exportando: '+e.message,'err'); console.error(e); }
}
function impUD(){
  try{
    var d = getDataFromModal('ud');
    imprimirDoc(buildHTML('ud',d), 'Unidad – '+(d.tit||''));
  }catch(e){ toast('❌ Error imprimiendo: '+e.message,'err'); console.error(e); }
}

// ─── MODAL: SES ─────────────────────────────────────────────────
function expSES(fmt){
  try{
    var d = getDataFromModal('ses');
    var h = buildHTML('ses', d);
    var fn = fname('ses', d);
    if(fmt==='pdf') guardarPDF(h, fn);
    else doExportWord(h, fn);
  }catch(e){ toast('❌ Error exportando: '+e.message,'err'); console.error(e); }
}
function impSES(){
  try{
    var d = getDataFromModal('ses');
    imprimirDoc(buildHTML('ses',d), 'Sesión – '+(d.tit||''));
  }catch(e){ toast('❌ Error imprimiendo: '+e.message,'err'); console.error(e); }
}

// ─── TABLA: acciones directas ───────────────────────────────────
function expDir(tipo, id, fmt){
  try{
    var d = getDataFromDB(tipo, id);
    if(!d){ toast('No se encontraron datos para id='+id,'err'); return; }
    var h = buildHTML(tipo, d);
    var fn = fname(tipo, d);
    if(fmt==='pdf') guardarPDF(h, fn);
    else doExportWord(h, fn);
  }catch(e){ toast('❌ Error exportando: '+e.message,'err'); console.error(e); }
}
function impDir(tipo, id){
  try{
    var d = getDataFromDB(tipo, id);
    if(!d){ toast('No se encontraron datos para id='+id,'err'); return; }
    var titulo = tipo==='pa'?('Plan Anual – '+(d.area||'')) : tipo==='ud'?('Unidad – '+(d.tit||'')) : ('Sesión – '+(d.tit||''));
    imprimirDoc(buildHTML(tipo, d), titulo);
  }catch(e){ toast('❌ Error imprimiendo: '+e.message,'err'); console.error(e); }
}

// ─── GENERADOR IA ───────────────────────────────────────────────
function expGen(fmt){
  if(!genData){ toast('Primero genera un documento con IA','err'); return; }
  try{
    var fn = 'PlanDoc_IA_'+(genData.area||'doc')+'_'+(genData.grado||'');
    if(fmt==='print'){ imprimirDoc(genData.html, fn); return; }
    if(fmt==='pdf') guardarPDF(genData.html, fn);
    else doExportWord(genData.html, fn);
  }catch(e){ toast('❌ Error exportando generador: '+e.message,'err'); console.error(e); }
}

// ─── (mantiene compatibilidad) ──────────────────────────────────
function doPDFfromHTML(html, fn){ guardarPDF(html, fn||'PlanDoc'); }
function doPrint(html, titulo){ imprimirDoc(html, titulo||'PlanDoc'); }

// ═══════════ CONFIG PAGE ═══════════
function loadCfg(){
  // Load saved keys into globals first
  const gkS=localStorage.getItem('pd_gem_key');if(gkS)GEM_KEY=gkS;
  const ckS=localStorage.getItem('pd_cla_key');if(ckS)CLA_KEY=ckS;
  const cpkS=localStorage.getItem('pd_cop_key');if(cpkS)COP_KEY=cpkS;
  const gmS=localStorage.getItem('pd_gem_mdl');if(gmS)GEM_MDL=gmS;
  const cmS=localStorage.getItem('pd_cla_mdl');if(cmS)CLA_MDL=cmS;
  const cpM=localStorage.getItem('pd_cop_mdl');if(cpM)COP_MDL=cpM;

  const maskKey=(k,pre)=>k?k.substring(0,pre||7)+'...'+k.slice(-4):'';

  const gEl=document.getElementById('gem-key');
  if(gEl){ if(GEM_KEY){gEl.value=maskKey(GEM_KEY);gEl.disabled=true;gEl.style.color='var(--green)';}else{gEl.value='';gEl.disabled=false;gEl.style.color='';gEl.placeholder='AIzaSy...';} }

  const cEl=document.getElementById('cla-key');
  if(cEl){ if(CLA_KEY){cEl.value=maskKey(CLA_KEY);cEl.disabled=true;cEl.style.color='var(--green)';}else{cEl.value='';cEl.disabled=false;cEl.style.color='';} }

  const cpEl=document.getElementById('cop-key');
  if(cpEl){ if(COP_KEY){cpEl.value=maskKey(COP_KEY);cpEl.disabled=true;cpEl.style.color='var(--green)';}else{cpEl.value='';cpEl.disabled=false;cpEl.style.color='';cpEl.placeholder='sk-... o Bearer ...';} }

  ['gem','cla','cop'].forEach(function(t){
    const wrap=document.getElementById(t+'-key')?.parentElement;
    if(wrap && !wrap.querySelector('.btn-cambiar')){
      const btn=document.createElement('button');
      btn.className='btn btn-ghost btn-sm btn-cambiar';btn.textContent='✏️';btn.title='Cambiar key';
      btn.onclick=function(){
        const el=document.getElementById(t+'-key');
        el.value='';el.disabled=false;el.style.color='';el.type='text';el.focus();
      };
      wrap.appendChild(btn);
    }
  });

  const gm=document.getElementById('gem-model');if(gm)gm.value=GEM_MDL;
  const cm=document.getElementById('cla-model');if(cm)cm.value=CLA_MDL;
  const cpm=document.getElementById('cop-model');if(cpm)cpm.value=COP_MDL;

  const eng=localStorage.getItem('pd_engine')||'copilot'; ENGINE=eng;
  document.getElementById('eng-gem-btn').classList.toggle('on',eng==='gemini');
  document.getElementById('eng-cla-btn').classList.toggle('on',eng==='claude');
  document.getElementById('eng-cop-btn').classList.toggle('on',eng==='copilot');
  document.getElementById('cfg-gem').style.display=eng==='gemini'?'':'none';
  document.getElementById('cfg-cla').style.display=eng==='claude'?'':'none';
  document.getElementById('cfg-cop').style.display=eng==='copilot'?'':'none';

  // Load IE profile into config form — always restore saved values
  const p=IE_PROFILE;
  if(p && p.ie){
    const fields=['nombre','ie','espec','ugel','reg','dre','anio','director','coord','dir1','dir2'];
    fields.forEach(f=>{ const el=document.getElementById('cfg-'+f); if(el && p[f]!==undefined) el.value=p[f]; });
    // Also restore fields with different cfg- mapping
    if(p.ugel){const el=document.getElementById('cfg-ugel');if(el)el.value=p.ugel;}
    if(p.dre){const el=document.getElementById('cfg-dre');if(el)el.value=p.dre;}
    if(p.reg){const el=document.getElementById('cfg-reg');if(el)el.value=p.reg;}
    if(p.nivel){const el=document.getElementById('cfg-nivel');if(el)el.value=p.nivel;}
    if(p.grados){const el=document.getElementById('cfg-grados');if(el)el.value=p.grados;}
    if(p.horas){const el=document.getElementById('cfg-horas');if(el)el.value=p.horas;}
    if(p.dir1){const el=document.getElementById('cfg-dir1');if(el)el.value=p.dir1;}
    if(p.coord){const el=document.getElementById('cfg-coord');if(el)el.value=p.coord;}
    if(p.director){const el=document.getElementById('cfg-director');if(el)el.value=p.director;}
  }
  updAIBadge();
  // Restore saved calendar dates into inputs then recalculate
  try {
    const savedCal = localStorage.getItem('pd_cal');
    if(savedCal){
      const sc = JSON.parse(savedCal);
      const fmtBack = s => { if(!s||s.includes('-')) return s||''; const p=s.split('/'); return p.length===3?p[2]+'-'+p[1]+'-'+p[0]:s; };
      if(sc.b1){ const el1=document.getElementById('bim1-ini'); if(el1) el1.value=fmtBack(sc.b1.ini);
                 const el2=document.getElementById('bim1-fin'); if(el2) el2.value=fmtBack(sc.b1.fin); }
      if(sc.b2){ const el1=document.getElementById('bim2-ini'); if(el1) el1.value=fmtBack(sc.b2.ini);
                 const el2=document.getElementById('bim2-fin'); if(el2) el2.value=fmtBack(sc.b2.fin); }
      if(sc.b3){ const el1=document.getElementById('bim3-ini'); if(el1) el1.value=fmtBack(sc.b3.ini);
                 const el2=document.getElementById('bim3-fin'); if(el2) el2.value=fmtBack(sc.b3.fin); }
      if(sc.b4){ const el1=document.getElementById('bim4-ini'); if(el1) el1.value=fmtBack(sc.b4.ini);
                 const el2=document.getElementById('bim4-fin'); if(el2) el2.value=fmtBack(sc.b4.fin); }
      setTimeout(initCalcSem, 80);
    }
  } catch(x){}
}

// ═══════════ DUPLICAR PLAN ANUAL ═══════════
function dupPA(id){
  const p = DB.pa.find(x=>x.id===id);
  if(!p){toast('Plan no encontrado','err');return;}

  // Build overlay
  const ov = document.createElement('div');
  ov.style.cssText='position:fixed;inset:0;background:rgba(15,15,26,.7);z-index:9999;display:flex;align-items:center;justify-content:center;';

  const gradesOpts = [1,2,3,4,5].map(g=>`<button data-g="${g}" style="width:54px;height:54px;border-radius:10px;border:2px solid ${String(g)===String(p.grado)?'#C0392B':'#E2E0F0'};background:${String(g)===String(p.grado)?'#FEF0EE':'#fff'};cursor:pointer;font-family:Fraunces,serif;font-size:20px;font-weight:900;color:${String(g)===String(p.grado)?'#C0392B':'#2D2D45'};transition:all .15s;" onmouseover="if('${g}'!=='${p.grado}'){this.style.borderColor='#C0392B';this.style.color='#C0392B';}" onmouseout="if('${g}'!=='${p.grado}'){this.style.borderColor='#E2E0F0';this.style.color='#2D2D45';}">${g}°</button>`).join('');

  ov.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:28px 32px;max-width:400px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.25);font-family:Sora,Arial,sans-serif;text-align:center;">
      <div style="font-size:30px;margin-bottom:8px;">📋</div>
      <div style="font-size:15px;font-weight:700;color:#0F0F1A;margin-bottom:4px;">Duplicar Plan Anual</div>
      <div style="font-size:11.5px;color:#6B6B8A;margin-bottom:6px;">Copiando: <strong>${p.area}</strong> · ${p.grado}° grado</div>
      <div style="font-size:11px;color:#6B6B8A;margin-bottom:16px;background:#F0EFF8;border-radius:6px;padding:6px 10px;">Selecciona el grado destino para la copia:</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-bottom:20px;" id="dup-grades">${gradesOpts}</div>
      <div style="font-size:10.5px;color:#C0392B;margin-bottom:16px;display:none;" id="dup-warn">⚠️ Ya existe un Plan Anual de <strong id="dup-warn-area"></strong> para ese grado. Se creará una copia adicional.</div>
      <div style="display:flex;gap:8px;justify-content:center;">
        <button id="dup-cancel" style="padding:9px 22px;border-radius:8px;border:1.5px solid #ddd;background:#fff;cursor:pointer;font-weight:600;font-size:13px;font-family:Sora,Arial,sans-serif;">Cancelar</button>
        <button id="dup-ok" style="padding:9px 22px;border-radius:8px;border:none;background:#C0392B;color:#fff;cursor:pointer;font-weight:700;font-size:13px;font-family:Sora,Arial,sans-serif;">📋 Duplicar</button>
      </div>
    </div>`;

  document.body.appendChild(ov);

  let selectedGrade = String(p.grado);

  // Grade button click
  ov.querySelectorAll('#dup-grades button').forEach(btn=>{
    btn.addEventListener('click', function(){
      selectedGrade = this.getAttribute('data-g');
      ov.querySelectorAll('#dup-grades button').forEach(b=>{
        const isSel = b.getAttribute('data-g')===selectedGrade;
        b.style.borderColor = isSel?'#C0392B':'#E2E0F0';
        b.style.background  = isSel?'#FEF0EE':'#fff';
        b.style.color       = isSel?'#C0392B':'#2D2D45';
      });
      // warn if plan already exists for that grade+area
      const exists = DB.pa.some(x=>String(x.grado)===selectedGrade && x.area===p.area);
      const warnEl = document.getElementById('dup-warn');
      const warnArea = document.getElementById('dup-warn-area');
      if(warnEl){warnEl.style.display=exists?'block':'none';}
      if(warnArea){warnArea.textContent=p.area+' · '+selectedGrade+'°';}
    });
  });

  // Cancel
  document.getElementById('dup-cancel').onclick = ()=>document.body.removeChild(ov);
  ov.addEventListener('click', e=>{if(e.target===ov)document.body.removeChild(ov);});

  // Confirm duplicate
  document.getElementById('dup-ok').onclick = ()=>{
    const newPlan = Object.assign({}, p, {
      id: Date.now(),
      grado: selectedGrade,
      status: 'borrador',
    });
    // Update grado-specific fields if doc field contains old grado
    if(newPlan.secc) newPlan.secc = newPlan.secc; // keep sections as-is
    DB.pa.push(newPlan);
    saveDB();
    document.body.removeChild(ov);
    toast('✅ Plan duplicado para '+selectedGrade+'° ('+p.area+')', 'ok');
    CG.anual = parseInt(selectedGrade)||3;
    rAnual(CG.anual);
    updBadges();
  };
}

// ═══════════ TOAST ═══════════
function toast(msg,type='ok'){
  const t=document.getElementById('toast');
  t.textContent=msg;t.className='toast on '+(type==='ok'?'ok':'err');
  clearTimeout(window._tt);window._tt=setTimeout(()=>t.classList.remove('on'),3500);
}

// ═══════════ INIT ═══════════
window.addEventListener('DOMContentLoaded',()=>{
  pobAreaSel();
  onArea('pa');onArea('ud');onArea('ses');
  sv('ses-fecha',new Date().toISOString().split('T')[0]);
  // Load IE profile first
  const saved=localStorage.getItem('pd_ie_profile');
  if(saved){ try{ IE_PROFILE=JSON.parse(saved); }catch(x){} }
  // Load AI config (keys + engine)
  loadCfg();
  // Fill sidebar with saved profile
  if(IE_PROFILE.nombre){ document.getElementById('s-uname').textContent=IE_PROFILE.nombre; }
  if(IE_PROFILE.ie){ document.getElementById('s-urole').textContent=(IE_PROFILE.espec||'')+' · '+IE_PROFILE.ie.substring(0,22); }
  // Propagate IE to forms
  propagateIE();
  // Update bimester labels in PA form
  setTimeout(updBimLabels, 100);
  // Recalculate all bimester semanas from saved calendar
  setTimeout(initCalcSem, 150);
  loadDB();  // restore saved plans/units/sessions
  rDash();updAIBadge();
});

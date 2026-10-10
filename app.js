'use strict';
const PHONE = '595976418720';
const captures = {
  'planilla-escolar': {width:1321,height:425,alt:'Captura real de la planilla SODI PRO Escolar con indicadores y puntajes por área'},
  'planilla-inicial': {width:1287,height:233,alt:'Captura real de los indicadores de atención y conducta y socioemocionales de la planilla de Inicial'},
  resultados: {width:1303,height:420,alt:'Captura real del resumen por áreas y del perfil orientativo de la planilla'},
  informe: {width:1257,height:579,alt:'Captura real de un informe de orientación educativa con interpretación de resultados y fortalezas'},
  orientaciones: {width:1253,height:585,alt:'Captura real de orientaciones diferenciadas para la familia y el aula'},
  derivacion: {width:1253,height:581,alt:'Captura real del informe de derivación con motivo orientativo y síntesis del perfil'},
  'plan-profesional': {width:1252,height:579,alt:'Captura real del plan de acompañamiento profesional con objetivo, actividad, frecuencia e indicador de progreso'},
  'plan-seguimiento': {width:1252,height:586,alt:'Captura real de las áreas de intervención y de la revisión del plan profesional'},
  ia: {width:1002,height:569,alt:'Captura real de SODI PRO IA con datos de observación y vista previa del informe'},
  'ia-documentos': {width:746,height:545,alt:'Captura real del selector de documentos y la vista previa en SODI PRO IA'},
  modulos: {width:565,height:294,alt:'Captura real de la carpeta de SODI PRO: cinco módulos y acceso a IA'}
};
const demoContent = {
  planilla: {kicker:'EL PUNTO DE PARTIDA',title:'Observaciones que toman forma.',copy:'Registrá indicadores y puntajes en la planilla de tu nivel. Los resultados por área ayudan a organizar la lectura y decidir qué requiere seguimiento.',points:['Inicial y 1.º a 6.º grado','Indicadores y evidencia cualitativa','Resultados y seguimiento por área'],variants:[['Escolar','planilla-escolar','Captura real · Planilla de observación escolar'],['Inicial','planilla-inicial','Captura real · Indicadores de la planilla de Inicial'],['Resultados','resultados','Captura real · Resumen y perfil orientativo']]},
  instrumentos: {kicker:'LA EVIDENCIA Y SU CONTEXTO',title:'Escuchá, observá y registrá.',copy:'Los instrumentos de entrevista, observación áulica y registro anecdótico complementan la planilla. Conservá evidencias para comprender qué ocurre, cuándo y con qué apoyos.',points:['Entrevistas con las familias','Observación y registro anecdótico','Guías para organizar el proceso'],variants:[['Organización del paquete','modulos','Captura real · Organización de los materiales. El registro ilustrativo se muestra debajo.']]},
  informes: {kicker:'COMUNICAR PARA ACOMPAÑAR',title:'Hallazgos claros, orientaciones concretas.',copy:'Los modelos y la IA ayudan a ordenar resultados, fortalezas y necesidades. Revisá el lenguaje y las recomendaciones según el destinatario antes de entregar.',points:['Orientación para familia y docente','Fortalezas y aspectos que requieren seguimiento','Derivación cuando el profesional la considera pertinente'],variants:[['Informe','informe','Captura real · Informe de orientación educativa'],['Orientaciones','orientaciones','Captura real · Sugerencias para familia y aula'],['Derivación','derivacion','Captura real · Informe de derivación']]},
  plan: {kicker:'DEL HALLAZGO AL ACOMPAÑAMIENTO',title:'Un plan que podés revisar y adaptar.',copy:'El psicólogo o psicopedagogo puede organizar objetivos, actividades graduadas e indicadores de progreso para el trabajo en la institución o en consultorio.',points:['Objetivos vinculados con las necesidades observadas','Actividades, frecuencia y responsables','Indicadores de seguimiento y revisión'],variants:[['Plan profesional','plan-profesional','Captura real · Plan de acompañamiento profesional'],['Seguimiento','plan-seguimiento','Captura real · Revisión y adaptación profesional']]},
  ia: {kicker:'REDACCIÓN ASISTIDA',title:'Tu información, mejor organizada.',copy:'Aportá la planilla, revisá los datos y seleccioná el documento. La IA prepara un borrador que podés ajustar con tu criterio antes de descargar y utilizar.',points:['Datos de la observación y resultados por área','Selección del tipo de documento','Vista previa y descarga editable'],variants:[['Datos y vista previa','ia','Captura real · Interfaz de SODI PRO IA'],['Documentos','ia-documentos','Captura real · Selección y revisión de documentos']]}
};
const profileLabels = {psicologia:'Psicólogo/a',psicopedagogia:'Psicopedagogo/a',docencia:'Docente'};
const profileBadges = {psicologia:'Psicología',psicopedagogia:'Psicopedagogía',docencia:'Docencia'};
const needLabels = {observar:'organizar la observación',informar:'preparar un informe',acompanar:'planificar el acompañamiento',derivar:'documentar una derivación'};
function whatsappUrl(message) { return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(message); }
function buildRoute(profile,level,need) {
  const teacher = profile === 'docencia';
  const initial = level === 'inicial';
  const sheet = initial ? 'Planilla de Inicial' : 'Planilla escolar';
  const scope = initial ? 'Prejardín, Jardín y Preescolar' : '1.º a 6.º grado';
  let route;
  if(need === 'observar') route = {title:'Empezá por la evidencia.',description:'Organizá la observación con la planilla de tu nivel y complementala con registros e información del contexto.',steps:[[sheet,'Registrá indicadores de '+scope+'.'],['Instrumentos y registros','Reuní evidencias de la observación y las entrevistas.'],['Resumen y seguimiento','Revisá los resultados por área y registrá la evolución.']],demo:'planilla',link:'Ver la planilla'};
  if(need === 'informar') route = {title:'Convertí el registro en un mensaje claro.',description:teacher?'Partí de tus observaciones del aula y prepará orientaciones educativas. Coordiná la revisión con el equipo profesional cuando corresponda.':'Reuní los datos de la planilla y la información cualitativa para preparar un documento coherente con el nivel y su destinatario.',steps:[[sheet,'Verificá los indicadores, los resultados y las observaciones.'],['Modelos de informe + IA','Organizá un borrador para familia y docente.'],['Revisión y orientaciones','Comprobá fortalezas, necesidades y sugerencias antes de comunicar.']],demo:'informes',link:'Ver los informes'};
  if(need === 'acompanar') route = teacher ? {title:'Apoyos concretos para el aula.',description:'Usá las orientaciones y el banco de estrategias para seleccionar apoyos educativos y coordinar el seguimiento con el equipo profesional.',steps:[['Orientaciones para el aula','Identificá qué apoyos surgen de la observación de '+scope+'.'],['Banco de intervención','Adaptá estrategias educativas a las actividades y al grupo.'],['Coordinación profesional','Compartí evidencias con el psicólogo o psicopedagogo para acordar el seguimiento.']],demo:'informes',link:'Ver las orientaciones'} : {title:'Planificá y registrá el acompañamiento.',description:'Construí un plan profesional a partir de las áreas priorizadas. Ajustá objetivos, actividades e indicadores al nivel y al contexto de trabajo.',steps:[['Perfil orientativo de la planilla','Identificá necesidades y fortalezas en '+scope+'.'],['Plan profesional + IA','Organizá un borrador con objetivos y actividades graduadas.'],['Banco de intervención y seguimiento','Seleccioná recursos pertinentes y revisá los avances.']],demo:'plan',link:'Ver el plan profesional'};
  if(need === 'derivar') route = teacher ? {title:'Reuní evidencias para coordinar una consulta.',description:'Documentá las observaciones del aula y conversá con el equipo profesional. La decisión de derivación se toma con información del contexto y criterio profesional.',steps:[['Observación y registro','Describí situaciones concretas de '+scope+'.'],['Información para el equipo','Organizá fortalezas, apoyos aplicados y aspectos que requieren seguimiento.'],['Coordinación con el profesional','El equipo responsable valora la necesidad y el motivo de una derivación.']],demo:'instrumentos',link:'Ver instrumentos y registros'} : {title:'Una derivación con información pertinente.',description:'Cuando consideres necesaria una consulta externa, organizá un motivo orientativo y las evidencias relevantes para el profesional que recibirá el caso.',steps:[[sheet+' e instrumentos','Revisá los resultados de '+scope+' junto con el contexto.'],['Modelo de derivación + IA','Prepará un borrador con motivo y síntesis del perfil observado.'],['Revisión profesional','Definí la pertinencia de derivar y verificá la información a compartir.']],demo:'informes',variant:2,link:'Ver la derivación'};
  if(!route) throw new Error('Necesidad no reconocida');
  route.note = teacher ? 'El plan de acompañamiento profesional corresponde al psicólogo o psicopedagogo responsable. Tu ruta prioriza el trabajo educativo en el aula.' : 'Los resultados son orientativos. La interpretación, las decisiones y la revisión final corresponden al profesional responsable.';
  route.badge = profileBadges[profile] + ' · ' + (initial?'Inicial':'Escolar');
  route.whatsapp = whatsappUrl('Hola, Pedro. Soy '+profileLabels[profile]+', trabajo en '+(initial?'Educación Inicial':'Escolar Básica, 1.º a 6.º grado')+' y necesito '+needLabels[need]+'. Me interesa SODI PRO + IA. ¿Cómo puedo utilizarlo con mi perfil?');
  return route;
}

let selectedDemo = 'planilla';
let selectedVariant = 0;
function setCapture(img,key) {
  const c=captures[key];
  img.src='assets/'+key+'-1400.webp';
  img.srcset=c.width<=720 ? 'assets/'+key+'-1400.webp '+c.width+'w' : 'assets/'+key+'-720.webp 720w, assets/'+key+'-1400.webp '+c.width+'w';
  img.width=c.width; img.height=c.height; img.alt=c.alt;
}
function selectVariant(index) {
  selectedVariant=index;
  const variant=demoContent[selectedDemo].variants[index];
  setCapture(document.getElementById('demo-image'),variant[1]);
  document.getElementById('demo-image-caption').textContent=variant[2];
  document.getElementById('enlarge-demo').setAttribute('aria-label','Ampliar: '+captures[variant[1]].alt);
  document.querySelectorAll('[data-variant]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.variant)===index)));
}
function selectDemo(key,variant=0) {
  selectedDemo=key;
  const d=demoContent[key];
  document.querySelectorAll('[data-demo]').forEach(b=>{const active=b.dataset.demo===key;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  document.getElementById('demo-panel').setAttribute('aria-labelledby','tab-'+key);
  document.getElementById('demo-kicker').textContent=d.kicker;
  document.getElementById('demo-title').textContent=d.title;
  document.getElementById('demo-copy').textContent=d.copy;
  document.getElementById('demo-list').replaceChildren(...d.points.map(p=>{const li=document.createElement('li');li.textContent=p;return li;}));
  document.getElementById('demo-variants').replaceChildren(...d.variants.map((v,i)=>{const b=document.createElement('button');b.dataset.variant=String(i);b.textContent=v[0];b.setAttribute('aria-pressed',String(i===variant));b.addEventListener('click',()=>selectVariant(i));return b;}));
  document.getElementById('demo-variants').setAttribute('aria-label','Vistas del componente');
  document.getElementById('instrument-preview').hidden=key!=='instrumentos';
  selectVariant(variant);
}
function updateRoute() {
  const p=document.querySelector('input[name="profile"]:checked').value;
  const l=document.getElementById('level').value;
  const n=document.getElementById('need').value;
  const r=buildRoute(p,l,n);
  document.getElementById('route-badge').textContent=r.badge;
  document.getElementById('route-title').textContent=r.title;
  document.getElementById('route-description').textContent=r.description;
  document.getElementById('route-note').textContent=r.note;
  document.getElementById('route-steps').replaceChildren(...r.steps.map(s=>{const li=document.createElement('li');const strong=document.createElement('strong');const span=document.createElement('span');strong.textContent=s[0];span.textContent=s[1];li.append(strong,span);return li;}));
  const link=document.getElementById('route-demo');link.textContent=r.link+' →';link.dataset.targetDemo=r.demo;link.dataset.targetVariant=String(r.variant||0);
  document.getElementById('route-whatsapp').href=r.whatsapp;
}
document.querySelectorAll('.wa').forEach(a=>{a.href=whatsappUrl(a.dataset.message);});
document.querySelectorAll('input[name="profile"],#level,#need').forEach(el=>el.addEventListener('change',updateRoute));
document.getElementById('route-demo').addEventListener('click',e=>{selectDemo(e.currentTarget.dataset.targetDemo,Number(e.currentTarget.dataset.targetVariant||0));});
document.querySelectorAll('[data-demo]').forEach(b=>{
  b.addEventListener('click',()=>selectDemo(b.dataset.demo));
  b.addEventListener('keydown',e=>{
    const tabs=Array.from(document.querySelectorAll('[data-demo]'));let i=tabs.indexOf(b);
    if(e.key==='ArrowRight')i=(i+1)%tabs.length;else if(e.key==='ArrowLeft')i=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')i=0;else if(e.key==='End')i=tabs.length-1;else return;
    e.preventDefault();selectDemo(tabs[i].dataset.demo);tabs[i].focus();
  });
});
document.querySelectorAll('[data-hero]').forEach(b=>b.addEventListener('click',()=>{
  const states={planilla:['planilla-escolar','Registrá indicadores. Organizá los resultados.'],informe:['informe','Comunicá fortalezas y orientaciones claras.'],plan:['plan-profesional','Convertí los hallazgos en acompañamiento.']};const s=states[b.dataset.hero];
  setCapture(document.getElementById('hero-img'),s[0]);document.getElementById('hero-caption').textContent=s[1];
  document.querySelectorAll('[data-hero]').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active));});
}));
const dialog=document.getElementById('image-dialog');
let lastZoomTrigger;
function openImage(key,trigger) {
  lastZoomTrigger=trigger;
  const im=document.getElementById('dialog-image');im.src='assets/'+key+'-1400.webp';im.alt=captures[key].alt;
  document.getElementById('image-dialog-title').textContent=captures[key].alt;
  if(typeof dialog.showModal==='function'){dialog.showModal();document.body.style.overflow='hidden';}else{window.open(im.src,'_blank','noopener,noreferrer');}
}
document.getElementById('enlarge-demo').addEventListener('click',e=>openImage(demoContent[selectedDemo].variants[selectedVariant][1],e.currentTarget));
document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>openImage(b.dataset.zoom,b)));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.style.overflow='';if(lastZoomTrigger)lastZoomTrigger.focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const menuButton=document.querySelector('.menu-toggle');const mobileMenu=document.getElementById('mobile-menu');
function closeMenu(){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');}
menuButton.addEventListener('click',()=>{mobileMenu.hidden=!mobileMenu.hidden;menuButton.setAttribute('aria-expanded',String(!mobileMenu.hidden));menuButton.setAttribute('aria-label',mobileMenu.hidden?'Abrir menú':'Cerrar menú');});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu.hidden){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width: 681px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
selectDemo('planilla');updateRoute();

// Track the same contact action used by the previous commercial site.
document.querySelectorAll('.wa,#route-whatsapp').forEach(link=>link.addEventListener('click',()=>{if(typeof window.fbq==='function')window.fbq('track','Contact')}));

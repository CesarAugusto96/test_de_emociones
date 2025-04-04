document.addEventListener('DOMContentLoaded', function() {
    // Test data structure (same as before)

  const testData = {
    negativeEmotions: [
        {
            id: 'shame',
            name: 'Vergüenza (Humillación)',
            description: 'Sentir que no valgo nada o que estoy rota/o por dentro. Hay miedo constante al juicio y sensación de indignidad.',
            generalBehaviors: [
                'Evitar participar en actividades por miedo al rechazo.',
                'Aislarse socialmente.',
                'Desviar la atención para no ser notado/a.',
                'Sentir un constante deseo de desaparecer.',
                'Hablar mal de uno mismo de forma automática.'
            ],
            partnerBehaviors: [
                'Callarse las necesidades o emociones.',
                'Aceptar críticas constantes sin defenderse.',
                'Sentir que no merece el amor de su pareja.',
                'Evitar tomar decisiones por temor a equivocarse.',
                'Pedir perdón repetidamente aunque no haya cometido ningún error.'
            ]
        },
        {
            id: 'guilt',
            name: 'Culpa (Remordimiento)',
            description: 'Sensación de cargar con responsabilidades que no son mías, como si todo lo malo fuera mi culpa.',
            generalBehaviors: [
                'Pedir perdón incluso cuando no hay razón para hacerlo.',
                'Sentirse mal por cualquier error, incluso pequeños.',
                'Hacer cosas para compensar supuestos errores.',
                'Criticarse constantemente internamente.',
                'Evitar conflictos para no sentirse culpable.'
            ],
            partnerBehaviors: [
                'Asumir la culpa en discusiones para acabar rápido.',
                'Sentirse responsable de la felicidad de la pareja.',
                'Ceder a demandas o peticiones poco razonables.',
                'Justificar comportamientos tóxicos de la pareja.',
                'Minimizar sus propias necesidades para evitar conflictos.'
            ]
        },
        {
            id: 'apathy',
            name: 'Apatía (Desesperanza)',
            description: 'Sensación de que nada vale la pena. No hay motivación ni interés por lo que sucede.',
            generalBehaviors: [
                'Evitar tomar decisiones importantes.',
                'Pasar mucho tiempo en actividades pasivas (TV, redes).',
                'Dejar tareas sin terminar constantemente.',
                'Mostrar indiferencia ante lo que pasa alrededor.',
                'No expresar opiniones o deseos.'
            ],
            partnerBehaviors: [
                'No tomar iniciativa en la relación.',
                'Mostrar indiferencia hacia las preocupaciones de la pareja.',
                'Responder con monosílabos o evitar conversaciones importantes.',
                'Evitar hablar de los problemas de la relación.',
                'Cargar todo el esfuerzo emocional a la pareja.'
            ]
        },
        {
            id: 'grief',
            name: 'Duelo/Tristeza (Desaliento)',
            description: 'Sentimiento de pérdida o vacío constante. Hay una inclinación hacia la melancolía y la desconexión emocional.',
            generalBehaviors: [
                'Llorar con frecuencia sin saber exactamente por qué.',
                'Recordar constantemente momentos tristes del pasado.',
                'Evitar actividades que antes disfrutaba.',
                'Sentir que las cosas nunca van a mejorar.',
                'Aislarse emocionalmente de los demás.'
            ],
            partnerBehaviors: [
                'Desconectarse emocionalmente de la relación.',
                'Mostrar poca energía para resolver conflictos.',
                'Expresar que "nada tiene sentido" en discusiones.',
                'Sentirse incapaz de brindar apoyo emocional.',
                'Buscar consuelo sin ser claro sobre sus necesidades.'
            ]
        },
        {
            id: 'fear',
            name: 'Miedo (Ansiedad)',
            description: 'Sensación constante de amenaza o peligro, que paraliza y genera inseguridad.',
            generalBehaviors: [
                'Evitar riesgos o cambios importantes.',
                'Ser muy dependiente de la opinión de otros.',
                'Repetir comportamientos para evitar lo desconocido.',
                'Sobreanalizar las decisiones antes de actuar.',
                'Buscar seguridad en todo momento.'
            ],
            partnerBehaviors: [
                'Tener celos frecuentes por miedo a ser reemplazado/a.',
                'Necesitar constantes garantías de amor o compromiso.',
                'Evitar expresar necesidades por temor al rechazo.',
                'Soportar malos tratos por miedo a estar solo/a.',
                'Buscar controlar las acciones de la pareja.'
            ]
        },
        {
            id: 'desire',
            name: 'Deseo (Anhelo Insatisfecho)',
            description: 'Siempre querer más y nunca sentirse satisfecho. Hay un enfoque constante en lo que falta.',
            generalBehaviors: [
                'Compararse constantemente con otros.',
                'Buscar validación externa.',
                'Perseguir logros materiales o sociales sin disfrutar el presente.',
                'Enfocarse en lo que no tiene, en lugar de lo que tiene.',
                'Sentirse atrapado/a en un ciclo de insatisfacción.'
            ],
            partnerBehaviors: [
                'Enfocarse en lo que la pareja no hace o no da.',
                'Comparar la relación con ideales poco realistas.',
                'Sentir que siempre se necesita más atención o afecto.',
                'Exigir constantes pruebas de amor.',
                'Priorizar expectativas externas sobre la conexión real.'
            ]
        },
        {
            id: 'anger',
            name: 'Ira (Odio)',
            description: 'Sentimiento de frustración acumulada que explota en enojo o agresividad.',
            generalBehaviors: [
                'Reaccionar agresivamente a pequeños problemas.',
                'Criticar o culpar a otros constantemente.',
                'Usar sarcasmo o comentarios hirientes.',
                'Guardar rencor por mucho tiempo.',
                'Lanzar objetos o desquitarse físicamente.'
            ],
            partnerBehaviors: [
                'Reprochar errores pasados constantemente.',
                'Gritar o usar un tono agresivo durante discusiones.',
                'Ignorar a la pareja como castigo.',
                'Usar amenazas emocionales para obtener control.',
                'Destruir momentos de conexión por explosiones emocionales.'
            ]
        },
        {
            id: 'pride',
            name: 'Orgullo (Desprecio)',
            description: 'Sensación de superioridad que tapa inseguridades internas. Difícil aceptar críticas o equivocaciones.',
            generalBehaviors: [
                'Mostrar arrogancia o altivez.',
                'Evitar pedir ayuda para no parecer débil.',
                'No aceptar críticas constructivas.',
                'Hablar constantemente de sus logros para validarse.',
                'Descartar a personas que no validan su percepción.'
            ],
            partnerBehaviors: [
                'Criticar a la pareja para mantener el control.',
                'Negarse a pedir disculpas aunque esté equivocado/a.',
                'Tomar decisiones sin consultar a la pareja.',
                'Priorizar su propio bienestar por encima del mutuo.',
                'Invalidar las emociones o necesidades de la pareja.'
            ]
        }
    ],
    positiveEmotions: [
        {
            id: 'courage',
            name: 'Coraje (Empoderamiento)',
            description: 'Primer nivel donde asumimos retos con determinación y confiamos en nuestra capacidad para superarlos.',
            generalBehaviors: [
                'Enfrentar problemas en lugar de evitarlos.',
                'Probar cosas nuevas sin miedo al fracaso.',
                'Defender derechos propios o de otros.',
                'Establecer metas claras y trabajar en ellas.',
                'Salir de la zona de confort para aprender y crecer.'
            ],
            partnerBehaviors: [
                'Hablar abiertamente sobre problemas y necesidades.',
                'Proponer soluciones constructivas en discusiones.',
                'Establecer límites claros con respeto.',
                'Reconocer y aceptar errores propios.',
                'Tomar iniciativa para mejorar la relación.'
            ]
        },
        {
            id: 'neutrality',
            name: 'Neutralidad (Consentimiento)',
            description: 'Estado de calma donde no hay juicios ni reacciones extremas. Se acepta lo que sucede con tranquilidad.',
            generalBehaviors: [
                'Tomar decisiones sin apego emocional.',
                'Adaptarse a cambios sin resistencia.',
                'Mantener una actitud abierta en conflictos.',
                'Evitar involucrarse en dramas innecesarios.',
                'Vivir el presente con serenidad.'
            ],
            partnerBehaviors: [
                'Resolver conflictos sin discusiones acaloradas.',
                'Escuchar sin interrumpir o juzgar.',
                'Respetar los puntos de vista de la pareja aunque no coincidan.',
                'Mostrar paciencia y empatía en desacuerdos.',
                'Fomentar un ambiente de calma en la relación.'
            ]
        },
        {
            id: 'willingness',
            name: 'Disposición (Voluntad)',
            description: 'Actitud de apertura y entusiasmo para mejorar, aprender y resolver problemas.',
            generalBehaviors: [
                'Ser proactivo/a en el trabajo y relaciones.',
                'Buscar soluciones en lugar de enfocarse en los problemas.',
                'Aprender de las críticas constructivas.',
                'Ofrecer ayuda genuina a los demás.',
                'Iniciar nuevos proyectos con optimismo.'
            ],
            partnerBehaviors: [
                'Participar activamente en la relación.',
                'Hacer pequeños gestos para fortalecer la conexión.',
                'Estar abierto/a a cambiar patrones negativos.',
                'Pedir feedback a la pareja para mejorar.',
                'Planificar juntos el futuro con entusiasmo.'
            ]
        },
        {
            id: 'acceptance',
            name: 'Aceptación (Perdón)',
            description: 'Reconocer y aceptar la realidad tal como es, sin resistencia, pero con una actitud de mejora constante.',
            generalBehaviors: [
                'Soltar resentimientos y perdonar.',
                'Agradecer lo que se tiene en lugar de enfocarse en lo que falta.',
                'Ver los desafíos como oportunidades para crecer.',
                'Manejar el estrés con serenidad.',
                'Reconocer los defectos propios sin juzgarse.'
            ],
            partnerBehaviors: [
                'Aceptar a la pareja tal como es, sin intentar cambiarla.',
                'Reconocer los errores de ambos sin juicio.',
                'Perdonar heridas del pasado.',
                'Mostrar empatía hacia los problemas personales de la pareja.',
                'Trabajar juntos en soluciones sin culpas ni recriminaciones.'
            ]
        },
        {
            id: 'reason',
            name: 'Razón (Comprensión)',
            description: 'Nivel donde se busca entender el mundo de manera lógica y encontrar claridad en las situaciones.',
            generalBehaviors: [
                'Analizar problemas de manera objetiva.',
                'Usar la lógica para tomar decisiones efectivas.',
                'Resolver conflictos con argumentos claros.',
                'Reflexionar antes de actuar impulsivamente.',
                'Buscar información para mejorar habilidades y conocimientos.'
            ],
            partnerBehaviors: [
                'Comprender las emociones de la pareja desde un punto lógico.',
                'Analizar juntos los problemas para encontrar soluciones.',
                'Escuchar y validar las ideas de la pareja.',
                'Tomar decisiones basadas en hechos y no emociones.',
                'Trabajar en equipo para resolver conflictos con claridad.'
            ]
        },
        {
            id: 'love',
            name: 'Amor (Veneración)',
            description: 'Estado de conexión genuina y compasión por uno mismo y los demás.',
            generalBehaviors: [
                'Practicar la gratitud diariamente.',
                'Ayudar a los demás sin esperar nada a cambio.',
                'Ver lo mejor en las personas y las situaciones.',
                'Mostrar afecto y bondad en el día a día.',
                'Escuchar activamente y con empatía.'
            ],
            partnerBehaviors: [
                'Expresar amor y aprecio frecuentemente.',
                'Cuidar el bienestar emocional de la pareja.',
                'Resolver conflictos con respeto y cariño.',
                'Planificar tiempo de calidad juntos.',
                'Mostrar interés genuino por las emociones y deseos de la pareja.'
            ]
        },
        {
            id: 'joy',
            name: 'Alegría (Éxtasis)',
            description: 'Nivel de entusiasmo donde se aprecia cada momento con gratitud y felicidad.',
            generalBehaviors: [
                'Sonreír y reír con facilidad.',
                'Inspirar positividad en quienes le rodean.',
                'Disfrutar de los pequeños momentos.',
                'Buscar actividades que alimenten el alma.',
                'Ver el mundo con optimismo genuino.'
            ],
            partnerBehaviors: [
                'Reír juntos y disfrutar de momentos felices.',
                'Crear sorpresas o gestos cariñosos para la pareja.',
                'Celebrar los logros de ambos con entusiasmo.',
                'Planificar experiencias emocionantes juntos.',
                'Disfrutar del presente sin preocupaciones innecesarias.'
            ]
        },
        {
            id: 'peace',
            name: 'Paz (Serenidad)',
            description: 'Un estado de equilibrio total donde reina la calma y la aceptación de todo lo que sucede.',
            generalBehaviors: [
                'Resolver conflictos con serenidad y empatía.',
                'Inspirar tranquilidad a quienes están cerca.',
                'Tomar decisiones sin estrés ni duda.',
                'Valorar lo esencial y soltar lo innecesario.',
                'Vivir el presente con gratitud.'
            ],
            partnerBehaviors: [
                'Crear un ambiente de tranquilidad y confianza.',
                'Resolver problemas con diálogo calmado.',
                'Valorar las diferencias como oportunidades para aprender.',
                'Fomentar una relación basada en el respeto mutuo.',
                'Compartir momentos de conexión profunda sin distracciones.'
            ]
        },
        {
            id: 'enlightenment',
            name: 'Iluminación (Indescriptible)',
            description: 'Nivel más alto de conciencia, donde todo se percibe con un profundo sentido de unidad y amor universal.',
            generalBehaviors: [
                'Ver el mundo como un lugar perfecto en su esencia.',
                'Sentir gratitud por la vida en todas sus formas.',
                'Actuar con propósito y amor universal.',
                'Inspirar paz y armonía a quienes le rodean.',
                'Dejar de resistirse a la realidad tal como es.'
            ],
            partnerBehaviors: [
                'Amar de manera incondicional y sin apegos.',
                'Ser una fuente de inspiración y calma para la pareja.',
                'Valorar profundamente cada momento juntos.',
                'Construir una relación basada en amor y conexión trascendental.',
                'Crear una relación que refleje el respeto y amor universal.'
            ]
        }
    ]
};
    // DOM elements
    const startTestBtn = document.getElementById('start-test');
    const testInstructions = document.getElementById('test-instructions');
    const testForm = document.getElementById('test-form');
    const testSections = document.getElementById('test-sections');
    const prevSectionBtn = document.getElementById('prev-section');
    const nextSectionBtn = document.getElementById('next-section');
    const submitTestBtn = document.getElementById('submit-test');
    const resultsSection = document.getElementById('results');
    const restartTestBtn = document.getElementById('restart-test');
    const globalProgressBar = document.querySelector('.global-progress-bar::after');
    const progressText = document.getElementById('progress-text');
    const pageCounter = document.createElement('span');
    pageCounter.className = 'page-counter';
  
  // Test state
    let currentSection = 0;
    const totalSections = testData.negativeEmotions.length + testData.positiveEmotions.length;
    const scores = {};
    
    // Initialize test sections
    function initializeTest() {
        // Create sections for negative emotions
        testData.negativeEmotions.forEach(emotion => {
            const section = createEmotionSection(emotion, 'negative');
            testSections.appendChild(section);
            scores[emotion.id] = { general: 0, partner: 0, total: 0 };
            pageCounter.style.display = 'inline-block'; // Asegurar que es visible
            pageCounter.textContent = `1 / ${totalSections}`;
        });
        
        // Create sections for positive emotions
        testData.positiveEmotions.forEach(emotion => {
            const section = createEmotionSection(emotion, 'positive');
            testSections.appendChild(section);
            scores[emotion.id] = { general: 0, partner: 0, total: 0 };
        });
        
        // Hide all sections except first
        const sections = document.querySelectorAll('.emotion-section');
        sections.forEach((section, index) => {
            section.style.display = index === 0 ? 'block' : 'none';
        });
        
        // Initialize sliders to middle value (5)
        const sliders = document.querySelectorAll('.rating-slider');
        sliders.forEach(slider => {
            slider.value = 5;
            const input = document.getElementById(`${slider.dataset.emotion}-${slider.dataset.category}-${slider.dataset.index}`);
            input.value = 5;
        });
        
        // Update progress
        updateGlobalProgress();
    }
    
    // Create an emotion section
    function createEmotionSection(emotion, type) {
        const section = document.createElement('div');
        section.className = `emotion-section ${type}-emotion`;
        section.id = `section-${emotion.id}`;
        
        const title = document.createElement('h2');
        title.className = 'emotion-title';
        title.textContent = emotion.name;
        section.appendChild(title);
        
        const desc = document.createElement('p');
        desc.textContent = emotion.description;
        section.appendChild(desc);
        
        // General behaviors
        const generalTitle = document.createElement('h3');
        generalTitle.textContent = 'Comportamientos generales';
        section.appendChild(generalTitle);
        
        emotion.generalBehaviors.forEach((behavior, index) => {
            const behaviorItem = createBehaviorItem(emotion.id, 'general', index, behavior);
            section.appendChild(behaviorItem);
        });
        
        const generalTotal = document.createElement('div');
        generalTotal.className = 'total-section';
        generalTotal.innerHTML = `
            <strong>TOTAL PARCIAL</strong>
            <div>
                <span class="score-number" id="${emotion.id}-general-total">0</span>
                <span class="score-divider">/</span>
                <span class="score-max">50</span>
            </div>
        `;
        section.appendChild(generalTotal);
        
        // Partner behaviors
        const partnerTitle = document.createElement('h3');
        partnerTitle.textContent = 'Comportamientos en pareja';
        section.appendChild(partnerTitle);
        
        emotion.partnerBehaviors.forEach((behavior, index) => {
            const behaviorItem = createBehaviorItem(emotion.id, 'partner', index, behavior);
            section.appendChild(behaviorItem);
        });
        
        const partnerTotal = document.createElement('div');
        partnerTotal.className = 'total-section';
        partnerTotal.innerHTML = `
            <strong>TOTAL PARCIAL</strong>
            <div>
                <span class="score-number" id="${emotion.id}-partner-total">0</span>
                <span class="score-divider">/</span>
                <span class="score-max">50</span>
            </div>
        `;
        section.appendChild(partnerTotal);
        
        // Combined total
        const combinedTotal = document.createElement('div');
        combinedTotal.className = 'total-section';
        combinedTotal.innerHTML = `
            <strong>TOTAL COMBINADO</strong>
            <div>
                <span class="score-number" id="${emotion.id}-combined-total">0</span>
                <span class="score-divider">/</span>
                <span class="score-max">100</span>
            </div>
        `;
        section.appendChild(combinedTotal);
        
        return section;
    }
    
    // Create a behavior item with rating controls
    function createBehaviorItem(emotionId, category, index, text) {
        const item = document.createElement('div');
        item.className = 'behavior-item';
        
        const behaviorText = document.createElement('div');
        behaviorText.className = 'behavior-text';
        behaviorText.textContent = text;
        item.appendChild(behaviorText);
        
        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating-container';
        
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.max = '10';
        input.className = 'rating-input';
        input.id = `${emotionId}-${category}-${index}`;
        input.dataset.emotion = emotionId;
        input.dataset.category = category;
        input.dataset.index = index;
        
        input.addEventListener('change', function() {
            validateInput(this);
            updateScores();
        });
        
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '10';
        slider.value = '5';
        slider.step = '1';
        slider.className = 'rating-slider';
        slider.dataset.emotion = emotionId;
        slider.dataset.category = category;
        slider.dataset.index = index;
        
        slider.addEventListener('input', function() {
            const input = document.getElementById(`${this.dataset.emotion}-${this.dataset.category}-${this.dataset.index}`);
            input.value = this.value;
            validateInput(input);
            updateScores();
        });
        
        // Link input and slider
        input.addEventListener('input', function() {
            const slider = document.querySelector(`.rating-slider[data-emotion="${this.dataset.emotion}"][data-category="${this.dataset.category}"][data-index="${this.dataset.index}"]`);
            slider.value = this.value;
        });
        
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = 'Por favor ingresa un valor entre 0 y 10';
        
        ratingContainer.appendChild(input);
        ratingContainer.appendChild(slider);
        ratingContainer.appendChild(error);
        item.appendChild(ratingContainer);
        
        return item;
    }
    
    // Validate input is between 0-10
    function validateInput(input) {
        const value = parseInt(input.value);
        const error = input.nextElementSibling.nextElementSibling;
        
        if (isNaN(value) || value < 0 || value > 10) {
            input.classList.add('invalid');
            error.style.display = 'block';
            return false;
        } else {
            input.classList.remove('invalid');
            error.style.display = 'none';
            return true;
        }
    }
    
    // Update scores based on current inputs
    function updateScores() {
        // Reset all scores
        Object.keys(scores).forEach(emotionId => {
            scores[emotionId].general = 0;
            scores[emotionId].partner = 0;
            scores[emotionId].total = 0;
        });
        
        // Calculate new scores
        const inputs = document.querySelectorAll('.rating-input');
        inputs.forEach(input => {
            if (validateInput(input)) {
                const emotionId = input.dataset.emotion;
                const category = input.dataset.category;
                const value = parseInt(input.value) || 0;
                
                scores[emotionId][category] += value;
                scores[emotionId].total += value;
            }
        });
        
        // Update displayed totals
        Object.keys(scores).forEach(emotionId => {
            document.getElementById(`${emotionId}-general-total`).textContent = scores[emotionId].general;
            document.getElementById(`${emotionId}-partner-total`).textContent = scores[emotionId].partner;
            document.getElementById(`${emotionId}-combined-total`).textContent = scores[emotionId].total;
        });
    }
    
    // Update global progress
    function updateGlobalProgress() {
        const progress = ((currentSection + 1) / totalSections) * 100;
        document.querySelector('.global-progress-bar::after').style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% completado`;
    }
  
    
//Show results  
function showResults() {
    // Calculate totals
    let negativeTotal = 0;
    let positiveTotal = 0;
    
    testData.negativeEmotions.forEach(emotion => {
        negativeTotal += scores[emotion.id].total;
    });
    
    testData.positiveEmotions.forEach(emotion => {
        positiveTotal += scores[emotion.id].total;
    });
    
    // Update UI with totals
    document.getElementById('negative-score').textContent = negativeTotal;
    document.getElementById('positive-score').textContent = positiveTotal;
    
    // Update progress bars (new max values: 800 for negative, 900 for positive)
    document.getElementById('negative-progress').style.width = `${Math.min(100, (negativeTotal / 800) * 100)}%`;
    document.getElementById('positive-progress').style.width = `${Math.min(100, (positiveTotal / 900) * 100)}%`;
    
    // Get top 3 emotions for each category
    const topNegative = [...testData.negativeEmotions]
        .sort((a, b) => scores[b.id].total - scores[a.id].total)
        .slice(0, 3);
        
    const topPositive = [...testData.positiveEmotions]
        .sort((a, b) => scores[b.id].total - scores[a.id].total)
        .slice(0, 3);
    
    // Display top emotions
    const topNegativeList = document.getElementById('top-negative');
    topNegativeList.innerHTML = '';
    topNegative.forEach(emotion => {
        const li = document.createElement('li');
        li.textContent = `${emotion.name} (${scores[emotion.id].total} puntos)`;
        topNegativeList.appendChild(li);
    });
    
    const topPositiveList = document.getElementById('top-positive');
    topPositiveList.innerHTML = '';
    topPositive.forEach(emotion => {
        const li = document.createElement('li');
        li.textContent = `${emotion.name} (${scores[emotion.id].total} puntos)`;
        topPositiveList.appendChild(li);
    });
    
    // Show interpretations based on new ranges
    const negativeInterpretation = document.getElementById('negative-interpretation');
    const positiveInterpretation = document.getElementById('positive-interpretation');
    
    // Negative emotions interpretation (max 800)
    if (negativeTotal <= 160) {
        negativeInterpretation.innerHTML = `
            <h4>🟢 0 - 160 puntos: Bajo impacto negativo</h4>
            <p>Tienes un excelente manejo de las emociones que restan energía.</p>
        `;
    } else if (negativeTotal <= 320) {
        negativeInterpretation.innerHTML = `
            <h4>🟠 161 - 320 puntos: Impacto moderado</h4>
            <p>Algunas emociones negativas están presentes pero manejables.</p>
        `;
    } else if (negativeTotal <= 480) {
        negativeInterpretation.innerHTML = `
            <h4>🔴 321 - 480 puntos: Impacto alto</h4>
            <p>Las emociones negativas están afectando significativamente tu bienestar.</p>
        `;
    } else {
        negativeInterpretation.innerHTML = `
            <h4>🛑 481 - 800 puntos: Impacto crítico</h4>
            <p>Las emociones negativas dominan tu experiencia. Considera buscar apoyo.</p>
        `;
    }
    
    // Positive emotions interpretation (max 900)
    if (positiveTotal <= 180) {
        positiveInterpretation.innerHTML = `
            <h4>🔴 0 - 180 puntos: Baja energía positiva</h4>
            <p>Las emociones positivas tienen poca presencia en tu vida.</p>
        `;
    } else if (positiveTotal <= 360) {
        positiveInterpretation.innerHTML = `
            <h4>🟠 181 - 360 puntos: Energía positiva moderada</h4>
            <p>Experimentas emociones positivas pero hay espacio para mejorar.</p>
        `;
    } else if (positiveTotal <= 540) {
        positiveInterpretation.innerHTML = `
            <h4>🟢 361 - 540 puntos: Buena energía positiva</h4>
            <p>Mantienes un buen nivel de emociones que potencian tu energía.</p>
        `;
    } else {
        positiveInterpretation.innerHTML = `
            <h4>🌟 541 - 900 puntos: Alta energía positiva</h4>
            <p>¡Excelente! Las emociones positivas predominan en tu vida.</p>
        `;
    }
    
    // Show results section
    testForm.style.display = 'none';
    resultsSection.style.display = 'block';
}
    
    // Navigation functions
   function goToSection(index) {
    const sections = document.querySelectorAll('.emotion-section');
    
    // Hide current section
    sections[currentSection].style.display = 'none';
    
    // Show new section
    currentSection = index;
    sections[currentSection].style.display = 'block';
    
    // Update navigation buttons
    prevSectionBtn.disabled = currentSection === 0;
    nextSectionBtn.style.display = currentSection === totalSections - 1 ? 'none' : 'inline-block';
    submitTestBtn.style.display = currentSection === totalSections - 1 ? 'inline-block' : 'none';
    
    // Actualizar el contador de página
    pageCounter.textContent = `${currentSection + 1} / ${totalSections}`;
    
     // Update progress
    updateGlobalProgress();
     
     // Actualizar el contador de página
    pageCounter.textContent = `${currentSection + 1} / ${totalSections}`;
}
    
    // Reset the test
    function resetTest() {
        // Reset form
        testForm.reset();
        pageCounter.textContent = `1 / ${totalSections}`;
        // Reset scores
        Object.keys(scores).forEach(emotionId => {
            scores[emotionId].general = 0;
            scores[emotionId].partner = 0;
            scores[emotionId].total = 0;
        });
        
        // Reset sliders to middle value
        const sliders = document.querySelectorAll('.rating-slider');
        sliders.forEach(slider => {
            slider.value = 5;
            const input = document.getElementById(`${slider.dataset.emotion}-${slider.dataset.category}-${slider.dataset.index}`);
            input.value = 5;
        });
        
        // Update totals
        updateScores();
        
        // Reset UI state
        currentSection = 0;
        testInstructions.style.display = 'block';
        testForm.style.display = 'none';
        resultsSection.style.display = 'none';
        
        // Hide all sections except first
        const sections = document.querySelectorAll('.emotion-section');
        sections.forEach((section, index) => {
            section.style.display = index === 0 ? 'block' : 'none';
        });
        
        // Update navigation buttons
        prevSectionBtn.disabled = true;
        prevSectionBtn.insertAdjacentElement('afterend', pageCounter);
        nextSectionBtn.style.display = 'inline-block';
        submitTestBtn.style.display = 'none';
        
         // Reset progress bar
    updateGlobalProgress();
    
    // Forzar un redibujado de la barra de progreso
    const progressBar = document.querySelector('.global-progress-bar');
    progressBar.style.display = 'none';
    progressBar.offsetHeight; // Trigger reflow
    progressBar.style.display = 'block';
}

// Modificamos la función updateGlobalProgress para manejar mejor el pseudo-elemento
function updateGlobalProgress() {
    const progress = ((currentSection + 1) / totalSections) * 100;
    const progressBar = document.querySelector('.global-progress-bar');
    
    // Usamos una clase para el pseudo-elemento
    progressBar.style.setProperty('--progress', `${progress}%`);
    progressText.textContent = `${Math.round(progress)}% completado`;
}
    
    // Event listeners
    startTestBtn.addEventListener('click', function() {
        testInstructions.style.display = 'none';
        testForm.style.display = 'block';
        initializeTest();
    });
    
    prevSectionBtn.addEventListener('click', function() {
        if (currentSection > 0) {
            goToSection(currentSection - 1);
        }
    });
  
  // Busca el contenedor de navegación y coloca el contador entre los botones
const navButtonsContainer = document.querySelector('.navigation-buttons'); // Asegúrate que esta clase exista
if (navButtonsContainer) {
    prevSectionBtn.insertAdjacentElement('afterend', pageCounter);
}
    
    nextSectionBtn.addEventListener('click', function() {
        if (currentSection < totalSections - 1) {
            goToSection(currentSection + 1);
        }
    });
    
    submitTestBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showResults();
    });

    
    // Restart test
    restartTestBtn.addEventListener('click', function() {
        resetTest();
    });
});
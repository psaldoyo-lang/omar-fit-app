// =========================================================
// JAVASCRIPT PRINCIPAL DE OMAR FIT - MÓDULO LÓGICA (DEFINITIVO)
// =========================================================

const videoCache = {};


        function preloadVideo(url) {
            if (videoCache[url]) return;
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    videoCache[url] = URL.createObjectURL(blob);
                })
                .catch(err => console.log("Error en precarga de video:", err));
        }

        const workoutData = {
            lun: [
                { id: 1, name: "Press de Banca Plano con Barra", sets: "4 Series", reps: "10 - 12 Reps", rest: "90 seg", weight: "70 kg", icon: "fa-dumbbell", completed: false },
                { id: 2, name: "Press Inclinado con Mancuernas", sets: "4 Series", reps: "10 Reps", rest: "75 seg", weight: "24 kg c/u", icon: "fa-dumbbell", completed: false },
                { id: 3, name: "Aperturas en Polea Alta", sets: "3 Series", reps: "15 Reps", rest: "60 seg", weight: "15 kg", icon: "fa-dumbbell", completed: false },
                { id: 4, name: "Fondos en Paralelas para Pecho", sets: "3 Series", reps: "Al fallo", rest: "90 seg", weight: "Corporal", icon: "fa-child", completed: false },
                { id: 5, name: "Extensiones de Tríceps en Polea", sets: "4 Series", reps: "12 Reps", rest: "60 seg", weight: "25 kg", icon: "fa-dumbbell", completed: false },
                { id: 6, name: "Press Francés con Barra Z", sets: "3 Series", reps: "10 Reps", rest: "75 seg", weight: "30 kg", icon: "fa-dumbbell", completed: false }
            ],
            mar: [
                { id: 7, name: "Dominadas Agarre Ancho", sets: "4 Series", reps: "8 - 10 Reps", rest: "90 seg", weight: "Corporal", icon: "fa-child", completed: false },
                { id: 8, name: "Jalón al Pecho Polea Alta", sets: "4 Series", reps: "12 Reps", rest: "75 seg", weight: "55 kg", icon: "fa-dumbbell", completed: false },
                { id: 9, name: "Remo con Barra T", sets: "4 Series", reps: "10 Reps", rest: "90 seg", weight: "50 kg", icon: "fa-dumbbell", completed: false },
                { id: 10, name: "Remo Unilateral con Mancuerna", sets: "3 Series", reps: "12 Reps", rest: "60 seg", weight: "28 kg", icon: "fa-dumbbell", completed: false },
                { id: 11, name: "Curl de Bíceps con Barra Z", sets: "4 Series", reps: "10 Reps", rest: "60 seg", weight: "25 kg", icon: "fa-dumbbell", completed: false },
                { id: 12, name: "Curl Martillo con Mancuernas", sets: "3 Series", reps: "12 Reps", rest: "60 seg", weight: "14 kg", icon: "fa-dumbbell", completed: false }
            ],
            mie: [
                { id: 13, name: "Sentadilla Libre Profunda", sets: "4 Series", reps: "8 - 10 Reps", rest: "120 seg", weight: "90 kg", icon: "fa-person-walking", completed: false },
                { id: 14, name: "Prensa 45 Grados Pesada", sets: "4 Series", reps: "12 Reps", rest: "90 seg", weight: "160 kg", icon: "fa-dumbbell", completed: false },
                { id: 15, name: "Zancadas Caminando con Mancuernas", sets: "3 Series", reps: "12 Pasos/Pierna", rest: "75 seg", weight: "16 kg c/u", icon: "fa-person-walking", completed: false },
                { id: 16, name: "Sillón de Extensiones de Cuádriceps", sets: "4 Series", reps: "15 Reps", rest: "60 seg", weight: "45 kg", icon: "fa-dumbbell", completed: false },
                { id: 17, name: "Curl Femoral Tumbado", sets: "4 Series", reps: "12 Reps", rest: "60 seg", weight: "35 kg", icon: "fa-dumbbell", completed: false },
                { id: 18, name: "Elevación de Gemelos en Máquina", sets: "5 Series", reps: "20 Reps", rest: "45 seg", weight: "60 kg", icon: "fa-dumbbell", completed: false }
            ],
            jue: [
                { id: 19, name: "Press Militar con Barra de Pie", sets: "4 Series", reps: "8 - 10 Reps", rest: "90 seg", weight: "40 kg", icon: "fa-dumbbell", completed: false },
                { id: 20, name: "Elevaciones Laterales con Mancuerna", sets: "4 Series", reps: "15 Reps", rest: "60 seg", weight: "10 kg", icon: "fa-dumbbell", completed: false },
                { id: 21, name: "Pájaro en Polea Posterior", sets: "4 Series", reps: "15 Reps", rest: "60 seg", weight: "8 kg", icon: "fa-dumbbell", completed: false },
                { id: 22, name: "Encogimientos de Hombro con Barra", sets: "4 Series", reps: "15 Reps", rest: "60 seg", weight: "70 kg", icon: "fa-dumbbell", completed: false },
                { id: 23, name: "Press Arnold Sentado", sets: "3 Series", reps: "10 Reps", rest: "75 seg", weight: "18 kg", icon: "fa-dumbbell", completed: false }
            ],
            vie: [
                { id: 24, name: "Kettlebell Swings (Circuito)", sets: "5 Rondas", reps: "45 seg", rest: "15 seg", weight: "Kettlebell 16kg", icon: "fa-fire", completed: false },
                { id: 25, name: "Burpees con Salto Explosivo", sets: "5 Rondas", reps: "45 seg", rest: "15 seg", weight: "Corporal", icon: "fa-person-running", completed: false },
                { id: 26, name: "Mountain Climbers Intensivos", sets: "5 Rondas", reps: "45 seg", rest: "15 seg", weight: "Corporal", icon: "fa-fire", completed: false },
                { id: 27, name: "Salto con Cuerda / Velocidad", sets: "5 Rondas", reps: "60 seg", rest: "20 seg", weight: "Cuerda", icon: "fa-bolt", completed: false },
                { id: 28, name: "Planchas Abdominales Estáticas", sets: "4 Rondas", reps: "60 seg", rest: "30 seg", weight: "Corporal", icon: "fa-child", completed: false }
            ],
            sab: [
                { id: 29, name: "Peso Muerto Rumano con Barra", sets: "4 Series", reps: "10 Reps", rest: "90 seg", weight: "80 kg", icon: "fa-dumbbell", completed: false },
                { id: 30, name: "Hip Thrust con Barra en Banco", sets: "4 Series", reps: "12 Reps", rest: "90 seg", weight: "100 kg", icon: "fa-dumbbell", completed: false },
                { id: 31, name: "Abducciones en Máquina Sentado", sets: "4 Series", reps: "15 Reps", rest: "60 seg", weight: "50 kg", icon: "fa-dumbbell", completed: false },
                { id: 32, name: "Patada de Glúteo en Polea", sets: "3 Series", reps: "12 Reps/Lado", rest: "60 seg", weight: "15 kg", icon: "fa-dumbbell", completed: false }
            ]
        };

        const dayTags = {
            lun: "PECHO & TRÍCEPS",
            mar: "ESPALDA & BÍCEPS",
            mie: "PIERNA COMPLETA",
            jue: "HOMBRO & TRAPECIO",
            vie: "CARDIO & HIIT",
            sab: "GLÚTEO & FEMORAL"
        };

        let studentsList = [
            { id: 1, name: "Pablo Thomas Saldarriaga Oyola", phone: "914774277", plan: "Hipertrofia 1 a 1", fee: 150, payType: "Mensual", dueDate: "30/11/2026", note: "¡Excelente ganancia muscular!", diet: { phase: "Volumen Limpio", kcal: 2800, meal1: "4 Huevos enteros + 80g Avena con plátano + 1 taza de café negro.", meal2: "200g Pechuga de pollo + 200g Arroz blanco + Ensalada verde." } },
            { id: 2, name: "Carlos Ruiz", phone: "914774277", plan: "Pérdida de Grasa & Definición", fee: 150, payType: "Mensual", dueDate: "28/10/2026", note: "Constante y disciplinado" },
            { id: 3, name: "Miguel Ángel Torres", phone: "987654321", plan: "Entrenamiento Semanal Intensivo", fee: 45, payType: "Semanal", dueDate: "25/10/2026", note: "Buen progreso" },
            { id: 4, name: "Andrea Benítez", phone: "912345678", plan: "Entrenamiento Funcional & Cross", fee: 140, payType: "Mensual", dueDate: "22/10/2026", note: "Pendiente renovación" },
            { id: 5, name: "Jorge Ramos", phone: "955443322", plan: "Hipertrofia 1 a 1", fee: 40, payType: "Semanal", dueDate: "20/10/2026", note: "Requiere atención" },
            { id: 6, name: "Sonia Morales", phone: "944332211", plan: "Pérdida de Grasa & Definición", fee: 150, payType: "Mensual", dueDate: "30/10/2026", note: "Excelente técnica" },
            { id: 7, name: "David Castro", phone: "933221100", plan: "Preparación Física Competencia", fee: 200, payType: "Mensual", dueDate: "29/10/2026", note: "Nivel avanzado" },
            { id: 8, name: "Renzo Valdivia", phone: "922110099", plan: "Hipertrofia 1 a 1", fee: 150, payType: "Mensual", dueDate: "27/10/2026", note: "Muy dedicado" },
            { id: 9, name: "Lucía Fernández", phone: "911009988", plan: "Grupos Reducidos (Fit)", fee: 35, payType: "Semanal", dueDate: "21/10/2026", note: "Faltó 2 clases" },
            { id: 10, name: "Gaston Acurio S.", phone: "900998877", plan: "Pérdida de Grasa & Definición", fee: 150, payType: "Mensual", dueDate: "02/11/2026", note: "Constante" }
        ];

        function parseDateString(dateStr) {
            if(!dateStr) return new Date();
            const parts = dateStr.split('/');
            if(parts.length === 3) return new Date(parts[2], parts[1] - 1, parts[0]);
            return new Date(dateStr);
        }

        function getPaymentStatus(dueDateStr) {
            const due = parseDateString(dueDateStr);
            const today = new Date();
            today.setHours(0,0,0,0);
            due.setHours(0,0,0,0);
            
            const diffTime = due - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays < 0) return { status: 'expired', days: diffDays };
            if (diffDays <= 3) return { status: 'warning', days: diffDays };
            return { status: 'paid', days: diffDays };
        }

 let currentDay = 'lun';
        let filterStatus = 'all';
        let currentStudentId = null; // 🔒 BLINDADO: Nace vacío, JAMÁS en 1
        let currentUserRole = null;  // 🔒 BLINDADO: Nace vacío hasta validar sesión

        window.onload = async function() {
            // 🌟 1. LEER SESIÓN GUARDADA EN EL DISPOSITIVO
            const savedStudentId = localStorage.getItem('omarfit_logged_id');
            const savedRole = localStorage.getItem('omarfit_role');

            const loginView = document.getElementById('view-login');
            const header = document.getElementById('app-header');
            const main = document.getElementById('app-main');
            const roleText = document.getElementById('header-role-text');
            const coachToggles = document.getElementById('coach-toggles');
            const coachGear = document.getElementById('btn-coach-gear');

            // 🌟 2. SI HAY UNA SESIÓN VÁLIDA DE ATLETA
            if (savedStudentId && savedRole === 'student' && savedStudentId !== 'null' && savedStudentId !== 'undefined') {
                const lockedId = parseInt(savedStudentId, 10);
                currentStudentId = lockedId;
                currentUserRole = 'student';
                
                if (loginView) loginView.classList.add('hidden');
                if (header) header.classList.remove('hidden');
                if (main) main.classList.remove('hidden');
                if (coachToggles) coachToggles.classList.add('hidden');
                if (coachGear) coachGear.style.setProperty('display', 'none', 'important');
                if (roleText) roleText.innerText = "Modo Atleta";
                
                // ⏳ CRÍTICO: Esperamos a que Supabase descargue la lista de atletas primero
                if (typeof renderTrainerTable === 'function') {
                    await renderTrainerTable();
                }

                // 🔒 Re-forzamos el ID del alumno logueado por si renderTrainerTable lo alteró
                currentStudentId = lockedId;
                currentUserRole = 'student';
                
                switchView('student');
                syncStudentView(lockedId);

                // Doble candado de seguridad 300ms después por si la red demora
                setTimeout(() => {
                    currentStudentId = lockedId;
                    syncStudentView(lockedId);
                }, 300);

            } else {
                // 🔒 3. SI NO HAY SESIÓN ACTIVA: Limpiamos todo y mostramos Login
                localStorage.removeItem('omarfit_logged_id');
                localStorage.removeItem('omarfit_role');
                currentStudentId = null;
                currentUserRole = null;

                if (loginView) {
                    loginView.classList.remove('hidden');
                    loginView.classList.remove('opacity-0');
                }
                if (header) header.classList.add('hidden');
                if (main) main.classList.add('hidden');

                renderExercises(currentDay);
                if (typeof renderTrainerTable === 'function') {
                    await renderTrainerTable();
                }
                // ❌ ELIMINADO syncStudentView(1) de aquí para que NUNCA cargue a Pablo Thomas por defecto
            }
            
            const bgVideo = document.getElementById('login-video');
            if (bgVideo) bgVideo.playbackRate = 1.4;

            const hour = new Date().getHours();
            const greetingElement = document.getElementById('dynamic-greeting');
            if (greetingElement) {
                greetingElement.classList.remove('animate-pulse');
                if (hour >= 5 && hour < 12) {
                    greetingElement.innerText = "Buenos días, ¿listo para mutar? ☀️";
                } else if (hour >= 12 && hour < 19) {
                    greetingElement.innerText = "Buenas tardes, a romperla 💥";
                } else {
                    greetingElement.innerText = "La disciplina no duerme 🌙";
                }
            }
        };

   // =========================================================
        // 1. FUNCIÓN DE LOGIN CON VALIDACIÓN DE CONTRASEÑA
        // =========================================================
       async function handleAppLogin(provider) {
            const userVal = document.getElementById('login-username')?.value.toLowerCase().trim() || provider || '';
            const passVal = document.getElementById('login-password')?.value || ''; // ATRAPAMOS LA CONTRASEÑA
            
            const loginView = document.getElementById('view-login');
            const btnText = document.getElementById('btn-login-text');
            const btnIcon = document.getElementById('btn-login-icon');
            const submitBtn = document.getElementById('btn-login-submit');
            
            const coachGear = document.getElementById('btn-coach-gear');
            if(coachGear) coachGear.style.setProperty('display', 'flex', 'important');
           
            // Efecto de carga
            if(btnText && btnIcon && submitBtn) {
                btnText.innerText = "Autenticando...";
                btnIcon.className = "fa-solid fa-circle-notch fa-spin text-[10px]";
                submitBtn.classList.add('opacity-80', 'cursor-wait');
            }

            setTimeout(async () => {
                const header = document.getElementById('app-header');
                const main = document.getElementById('app-main');
                const coachToggles = document.getElementById('coach-toggles');
                const roleText = document.getElementById('header-role-text');

// MODO ADMINISTRADOR (Coach Omar - Conectado a Supabase con SHA-256)
                if (userVal === 'coach' || userVal === 'omar' || userVal === 'admin') {
                    // Consultamos la tabla admins en Supabase
                    const { data: adminData, error: adminErr } = await supabaseClient
                        .from('admins')
                        .select('*')
                        .eq('usuario', 'omar')
                        .single();

                    let passwordValida = adminData ? adminData.password : '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'; // Fallback por defecto ('admin' en hash)
                    
                    const hashedInputPass = await hashPassword(passVal);
                    
                    // Validamos si coincide el hash cifrado O si es texto plano antiguo
                    if (hashedInputPass === passwordValida || passVal === passwordValida) {
                        currentUserRole = 'coach';
                        if(loginView) loginView.classList.add('opacity-0');
                        setTimeout(() => {
                            if(loginView) loginView.classList.add('hidden');
                            if(header) header.classList.remove('hidden');
                            if(main) main.classList.remove('hidden');
                            
                            if(coachToggles) coachToggles.classList.remove('hidden');
                            if(roleText) roleText.innerText = "Modo Administrador";
                            
                            switchView('trainer');
                            showToast("Bienvenido Coach Omar 🏆", "fa-crown");
                            
                            if(btnText && btnIcon && submitBtn) {
                                btnText.innerText = "Iniciar Sesión";
                                btnIcon.className = "fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1";
                                submitBtn.classList.remove('opacity-80', 'cursor-wait');
                            }
                        }, 500);
                    } else {
                        alert("⚠️ Contraseña de Administrador incorrecta.");
                        if(btnText && btnIcon && submitBtn) {
                            btnText.innerText = "Iniciar Sesión";
                            btnIcon.className = "fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1";
                            submitBtn.classList.remove('opacity-80', 'cursor-wait');
                        }
                    }
                    return;
                }

                // MODO ATLETA: Buscamos al alumno exacto
                currentUserRole = 'student';
                let foundStudent = [...studentsList].reverse().find(s => 
                    (s.email && s.email.toLowerCase() === userVal) || 
                    s.phone === userVal || 
                    s.name.toLowerCase() === userVal
                );

               // VALIDACIÓN DE CONTRASEÑA BLINDADA
                let isAuthValid = false;
                if (foundStudent) {
                    if (provider === 'google' || provider === 'facebook') {
                        isAuthValid = true; 
                    } else {
                        // Comparamos el hash de lo que escribió el usuario con la base de datos
                        const hashedInputPass = await hashPassword(passVal);
                        
                        if (foundStudent.password) {
                            // Si ya tiene contraseña cifrada en la nube
                            isAuthValid = (hashedInputPass === foundStudent.password || passVal === foundStudent.password);
                        } else {
                            // Si es un usuario antiguo sin contraseña creada, por defecto es su celular
                            isAuthValid = (passVal === foundStudent.phone);
                        }
                    }
                }

               // SI TODO ES CORRECTO
                if (isAuthValid && foundStudent) {
                    if(loginView) loginView.classList.add('opacity-0');
                    setTimeout(() => {
                        if(loginView) loginView.classList.add('hidden');
                        if(header) header.classList.remove('hidden');
                        if(main) main.classList.remove('hidden');
                        
                        if(coachToggles) coachToggles.classList.add('hidden');
                        if(roleText) roleText.innerText = "Modo Atleta";
                        
                        currentStudentId = foundStudent.id; // Asignamos la sesión a este atleta
                        
                        // 🌟 AQUÍ COLOCAS LAS LÍNEAS DE PERSISTENCIA:
                        localStorage.setItem('omarfit_logged_id', foundStudent.id);
                        localStorage.setItem('omarfit_role', 'student');

                        switchView('student');
                        syncStudentView(currentStudentId);
                        showToast("¡A entrenar con todo! 🔥", "fa-fire");
                        
                        if(btnText && btnIcon && submitBtn) {
                            btnText.innerText = "Iniciar Sesión";
                            btnIcon.className = "fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1";
                            submitBtn.classList.remove('opacity-80', 'cursor-wait');
                        }
                    }, 500);
                } 
                // SI ALGO FALLA (Rebote de seguridad)
                else {
                    alert("⚠️ Credenciales incorrectas o atleta no encontrado.");
                    if(btnText && btnIcon && submitBtn) {
                        btnText.innerText = "Iniciar Sesión";
                        btnIcon.className = "fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1";
                        submitBtn.classList.remove('opacity-80', 'cursor-wait');
                    }
                }
            }, 800);
        }


        // Función para cifrar contraseñas con SHA-256 de forma nativa
    async function hashPassword(password) {
    if (!password) return "";
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

        function toggleAuthView(view) {
            const loginBox = document.getElementById('login-box');
            const registerBox = document.getElementById('register-box');
            const greeting = document.getElementById('dynamic-greeting');
            
            if (view === 'register') {
                if(loginBox) loginBox.classList.add('hidden');
                if(registerBox) registerBox.classList.remove('hidden');
                if(greeting) {
                    greeting.innerText = "ÚNETE A LA ÉLITE 💪";
                    greeting.classList.remove('animate-pulse');
                }
            } else {
                if(registerBox) registerBox.classList.add('hidden');
                if(loginBox) loginBox.classList.remove('hidden');
                
                if(greeting) {
                    const hour = new Date().getHours();
                    if (hour >= 5 && hour < 12) greeting.innerText = "Buenos días, ¿listo para mutar? ☀️";
                    else if (hour >= 12 && hour < 19) greeting.innerText = "Buenas tardes, a romperla 💥";
                    else greeting.innerText = "La disciplina no duerme 🌙";
                }
            }
        }

      // =========================================================
        // 3. FUNCIÓN DE REGISTRO REAL (ANTI DOBLE-CLIC Y FANTASMAS)
        // =========================================================
        function handleAppRegister() {
            const nameEl = document.getElementById('reg-name');
            const lastNameEl = document.getElementById('reg-lastname');
            const phoneEl = document.getElementById('reg-phone');
            const emailEl = document.getElementById('reg-email');
            const pass1El = document.getElementById('reg-pass');
            const pass2El = document.getElementById('reg-pass-confirm');
            
            // ATRAPAMOS LOS DATOS INMEDIATAMENTE AFUERA PARA EVITAR ERRORES DE TIEMPO
            const nameVal = nameEl ? nameEl.value.trim() : '';
            const lastNameVal = lastNameEl ? lastNameEl.value.trim() : '';
            const emailVal = emailEl ? emailEl.value.trim().toLowerCase() : '';
            const pass1 = pass1El ? pass1El.value : '';
            const pass2 = pass2El ? pass2El.value : '';
            const phoneVal = phoneEl ? phoneEl.value.trim() : '';
            
            if(pass1 !== pass2) {
                alert("Las contraseñas no coinciden. Revisa e inténtalo de nuevo.");
                return; 
            }

            if(!nameVal || !lastNameVal || !phoneVal) {
                alert("Por favor, ingresa tus nombres, apellidos y celular.");
                return;
            }

            const studentExists = studentsList.find(s => s.phone === phoneVal);
            if (studentExists) {
                alert("⚠️ Tu número de celular ya está registrado. INICIA SESIÓN con tu celular y la contraseña que te asignó el Coach (por defecto es tu mismo número).");
                return; 
            }

            const btnText = document.getElementById('btn-reg-text');
            const btnIcon = document.getElementById('btn-reg-icon');
            const submitBtn = document.getElementById('btn-reg-submit');
            
            // FILTRO ANTI DOBLE-CLIC: Si el botón ya está procesando, ignoramos nuevos clics
            if (submitBtn && submitBtn.disabled) return;
            
            if(btnText && btnIcon && submitBtn) {
                submitBtn.disabled = true; // BLOQUEAMOS EL BOTÓN INSTANTÁNEAMENTE
                btnText.innerText = "Creando Atleta...";
                btnIcon.className = "fa-solid fa-circle-notch fa-spin text-[10px]";
                submitBtn.classList.add('opacity-80', 'cursor-wait');
            }

            setTimeout(() => {
                const newId = studentsList.length > 0 ? Math.max(...studentsList.map(s => s.id)) + 1 : 1;
                
                const today = new Date();
                const dd = String(today.getDate()).padStart(2, '0');
                const mm = String(today.getMonth() + 1).padStart(2, '0');
                const todayStr = `${dd}/${mm}/${today.getFullYear()}`;

                const newStudent = {
                    id: newId,
                    name: nameVal + ' ' + lastNameVal,
                    phone: phoneVal,
                    email: emailVal,
                    password: pass1, 
                    plan: "Por asignar", 
                    fee: 0,
                    dueDate: "Pendiente",
                    status: "warning", 
                    payType: "MENSUAL",
                    note: "¡ATLETA NUEVO!",
                    diet: { phase: "Sin asignar", kcal: "0", prot: "0", carb: "0", fat: "0", meal1: "", meal2: "", meal3: "", meal4: "" },
                    measures: [{
                        date: todayStr,
                        weight: 0,
                        fat: 0,
                        waist: 0,
                        arm: 0,
                        note: "Cuenta creada"
                    }]
                };

                studentsList.unshift(newStudent);
                
                if (typeof renderTrainerTable === 'function') renderTrainerTable();

                if(btnText && btnIcon && submitBtn) {
                    submitBtn.disabled = false; // DESBLOQUEAMOS EL BOTÓN AL TERMINAR
                    btnText.innerText = "Comenzar Ahora";
                    btnIcon.className = "fa-solid fa-user-plus text-[10px] transition-transform group-hover:scale-110";
                    submitBtn.classList.remove('opacity-80', 'cursor-wait');
                }
                
                if(nameEl) nameEl.value = '';
                if(lastNameEl) lastNameEl.value = '';
                if(phoneEl) phoneEl.value = '';
                if(emailEl) emailEl.value = '';
                if(pass1El) pass1El.value = '';
                if(pass2El) pass2El.value = '';
                
                if (typeof showToast === 'function') showToast("¡Cuenta creada! Inicia sesión ahora.", "fa-check-circle");
                if (typeof toggleAuthView === 'function') toggleAuthView('login');
                
            }, 1500); 
        }
 function switchView(view) {
    const studentView = document.getElementById('view-student');
    const trainerView = document.getElementById('view-trainer');
    const btnStudent = document.getElementById('btn-view-student');
    const btnTrainer = document.getElementById('btn-view-trainer');
    const btnSettings = document.getElementById('btn-student-settings'); 
    const btnQr = document.querySelector('button[onclick="openStudentQRModal()"]');
    const mobileNav = document.getElementById('mobile-bottom-nav');
    const coachGear = document.getElementById('btn-coach-gear'); // 🌟 El engranaje del coach

    if (!studentView || !trainerView) return;

    if (view === 'student') {
        studentView.style.setProperty('display', 'block', 'important');
        trainerView.style.setProperty('display', 'none', 'important');
        if (btnStudent) btnStudent.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-brand-red text-white shadow-md";
        if (btnTrainer) btnTrainer.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-brand-muted hover:text-white";
        
        if (mobileNav) {
            mobileNav.style.setProperty('display', 'flex', 'important');
            mobileNav.style.setProperty('flex-direction', 'row', 'important');
        }

        // 🔒 BLINDAJE DE SEGURIDAD VISUAL
        if (currentUserRole === 'coach') {
            if (btnSettings) btnSettings.style.setProperty('display', 'none', 'important');
            if (btnQr) btnQr.style.setProperty('display', 'none', 'important');
            if (coachGear) coachGear.style.setProperty('display', 'flex', 'important'); // Visible solo si el coach ve la vista alumno
        } else {
            if (btnSettings) btnSettings.style.setProperty('display', 'flex', 'important');
            if (btnQr) btnQr.style.setProperty('display', 'flex', 'important');
            if (coachGear) coachGear.style.setProperty('display', 'none', 'important'); // 🌟 OCULTO PARA EL ATLETA
        }

        syncStudentView(currentStudentId);

    } else { // Vista Trainer / CRM
        studentView.style.setProperty('display', 'none', 'important');
        trainerView.style.setProperty('display', 'block', 'important');
        if (btnTrainer) btnTrainer.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-brand-red text-white shadow-md";
        if (btnStudent) btnStudent.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-brand-muted hover:text-white";
        
        if (mobileNav) {
            mobileNav.style.setProperty('display', 'none', 'important');
        }

        // En panel de administrador, el engranaje siempre debe verse
        if (coachGear) coachGear.style.setProperty('display', 'flex', 'important');

        const weeklyModal = document.getElementById('modal-weekly-warning');
        if(weeklyModal) weeklyModal.classList.add('hidden');

        renderTrainerTable();
    }
}


        function openImageModal() {
            const modal = document.getElementById('modal-image-fullscreen');
            const targetImg = document.getElementById('fullscreen-img-target');
            const sourceImg = document.getElementById('mot-banner-img');
            if (modal && targetImg && sourceImg) {
                targetImg.src = sourceImg.src;
                modal.classList.remove('hidden');
            }
        }

        function closeImageModal() {
            document.getElementById('modal-image-fullscreen').classList.add('hidden');
        }
function syncStudentView(studentId = 1) {
    currentStudentId = studentId; // Seteamos el usuario activo globalmente

    const curStudent = studentsList.find(s => s.id == studentId) || studentsList[0];
    if (!curStudent) return;

    const nameParts = curStudent.name.split(' ');
    const userInitials = nameParts.length >= 2 ? (nameParts[0][0] + nameParts[1][0]).toUpperCase() : curStudent.name.substring(0,2).toUpperCase();

    // 🌟 CORRECCIÓN DE FOTO (Soporta 'photo' y 'foto' indistintamente)
    const fotoPerfil = curStudent.foto || curStudent.photo || '';
    const avatarContainer = document.getElementById('student-avatar-container');
    if (avatarContainer) {
        if (fotoPerfil) {
            avatarContainer.innerHTML = `<img src="${fotoPerfil}" class="w-full h-full object-cover">`;
        } else {
            avatarContainer.innerHTML = `<span id="student-initials-display">${userInitials}</span>`;
        }
    }

    const nameDisplay = document.getElementById('student-name-display');
    if(nameDisplay) nameDisplay.innerText = curStudent.name;
    
    const subtitleContainer = document.getElementById('student-subtitle-display');
    const stPayInfo = getPaymentStatus(curStudent.dueDate);

    if (subtitleContainer) {
        const mailText = curStudent.email ? `<span class="text-zinc-400 font-normal ml-1 border-l border-zinc-700 pl-1"><i class="fa-solid fa-envelope text-[9px] mr-0.5"></i> ${curStudent.email}</span>` : '';
        
        let stStatusHTML = '';
        if(stPayInfo.status === 'paid') stStatusHTML = '<span class="text-emerald-400 font-bold">● Al día</span>';
        else if(stPayInfo.status === 'warning') stStatusHTML = `<span class="text-amber-400 font-bold">● Vence pronto (${stPayInfo.days}d)</span>`;
        else stStatusHTML = '<span class="text-brand-red font-bold">● Vencido</span>';

        subtitleContainer.innerHTML = `Entrenador: <span class="text-white font-semibold">Omar Ore</span> | ${stStatusHTML} ${mailText}`;
    }

    // --- LÓGICA DE ALERTA DE VENCIMIENTO BLINDADA (SIN BUCLES) ---
    const weeklyModal = document.getElementById('modal-weekly-warning');
    const trainerView = document.getElementById('view-trainer');
    
    if (weeklyModal) {
        if ((trainerView && trainerView.style.display === 'block') || currentUserRole === 'coach') {
            weeklyModal.classList.add('hidden');
        } else if (curStudent.dueDate && curStudent.dueDate.toLowerCase() !== "pendiente") {
            const isWeeklyPlan = curStudent.payType === 'Semanal';
            const isMonthlyPlan = curStudent.payType === 'Mensual';

            const isExpired = stPayInfo.status === 'expired';
            const isWarningWeekly = isWeeklyPlan && stPayInfo.status === 'warning' && stPayInfo.days <= 1;
            const isWarningMonthly = isMonthlyPlan && stPayInfo.status === 'warning' && stPayInfo.days <= 3;

            if (isExpired || isWarningWeekly || isWarningMonthly) {
                if (weeklyModal.classList.contains('hidden')) {
                    weeklyModal.classList.remove('hidden');
                }
                
                const wText = document.getElementById('weekly-warning-days');
                if (wText) {
                    if (isExpired) wText.innerText = 'VENCIDA (BLOQUEADO)';
                    else if (stPayInfo.days === 0) wText.innerText = 'VENCE HOY';
                    else if (stPayInfo.days === 1) wText.innerText = 'VENCE MAÑANA';
                    else wText.innerText = `VENCE EN ${stPayInfo.days} DÍAS`;
                }
            } else {
                weeklyModal.classList.add('hidden');
            }
        } else {
            weeklyModal.classList.add('hidden');
        }
    }

    const planDisplay = document.getElementById('student-plan-display');
    if(planDisplay) planDisplay.innerText = curStudent.plan;

    const dueDisplay = document.getElementById('student-duedate-display');
    if(dueDisplay) dueDisplay.innerHTML = `<i class="fa-regular fa-calendar-check text-brand-red mr-1"></i> ${curStudent.dueDate}`;
    
    const payTypeDisplay = document.getElementById('student-paytype-display');
    if(payTypeDisplay) payTypeDisplay.innerHTML = `<i class="fa-solid fa-clock mr-1"></i> ${curStudent.payType}`;
    
    const feeDisplay = document.getElementById('student-fee-display');
    if(feeDisplay) feeDisplay.innerText = `S/ ${parseFloat(curStudent.fee).toFixed(2)}`;

    const noteCell = document.getElementById('default-note-cell');
    if (noteCell) noteCell.innerText = curStudent.note || "Progreso constante";

    // 🌟 ----------------------------------------------------
    // 🌟 RENDERIZADO Y MARCADO VISUAL DE LOS CUADRITOS DE ASISTENCIA
    // ------------------------------------------------------
    const diasPermitidos = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    diasPermitidos.forEach(dia => {
        // Buscamos elementos en tu HTML que representen los cuadritos (pueden usar atributos data-day o IDs como 'check-lunes', etc.)
        const dayBoxes = document.querySelectorAll(`[data-attendance-day="${dia}"], #attendance-${dia}`);
        dayBoxes.forEach(box => {
            if (curStudent[dia] && curStudent[dia] !== "" && curStudent[dia] !== null) {
                // Si el alumno asistió ese día, pintamos el cuadrito de verde / éxito
                box.classList.add('bg-emerald-500', 'border-emerald-400', 'text-white');
                box.classList.remove('bg-[#121215]', 'border-zinc-700');
                box.innerHTML = `<i class="fa-solid fa-check text-xs"></i>`;
            } else {
                // Si está vacío, queda en estado normal
                box.classList.remove('bg-emerald-500', 'border-emerald-400', 'text-white');
                box.classList.add('bg-[#121215]', 'border-zinc-700');
                box.innerHTML = '';
            }
        });
    });

    const dietSection = document.getElementById('section-nutrition');
    if(dietSection) {
        const diet = curStudent.diet || { 
            phase: "Sin asignar", kcal: "0", prot: "0", carb: "0", fat: "0", 
            meal1: "", meal2: "", meal3: "", meal4: "" 
        };

        let mealsHTML = '';
        const mealsList = [
            { name: 'COMIDA 1 — DESAYUNO', time: '07:30 AM', content: diet.meal1 },
            { name: 'COMIDA 2 — MEDIA MAÑANA', time: '10:30 AM', content: diet.meal2 },
            { name: 'COMIDA 3 — ALMUERZO FUERTE', time: '01:30 PM', content: diet.meal3 },
            { name: 'COMIDA 4 — PRE / POST ENTRENO', time: '05:30 PM', content: diet.meal4 }
        ];

        let totalMeals = 0;
        mealsList.forEach(m => { if (m.content && m.content.trim() !== '') totalMeals++; });

        mealsList.forEach(m => {
            if (m.content && m.content.trim() !== '') {
                mealsHTML += `
                    <div class="p-6 bg-[#09090b] border border-zinc-800/60 rounded-2xl cursor-pointer transition-all hover:border-brand-red/60 relative group shadow-lg" onclick="toggleMeal(this)">
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex items-center space-x-3">
                                <span class="meal-title text-brand-red font-black text-[13px] tracking-wide transition-colors uppercase">${m.name}</span>
                                <span class="text-zinc-500 bg-[#121215] px-2 py-1 rounded-md text-[10px] font-bold">${m.time}</span>
                            </div>
                            <div class="meal-check w-7 h-7 rounded-md border-2 border-zinc-700 flex items-center justify-center transition-colors bg-[#121215]"></div>
                        </div>
                        <p class="meal-desc text-[15px] font-bold text-zinc-300 leading-relaxed pr-8 transition-colors">${m.content.replace(/\n/g, '<br>')}</p>
                    </div>
                `;
            }
        });

        if (mealsHTML === '') {
            mealsHTML = `<div class="p-6 bg-[#09090b] border border-zinc-800/60 rounded-2xl col-span-full"><p class="text-[15px] font-bold text-zinc-600">El Coach aún no ha asignado tu plan. 🏋️‍♂️</p></div>`;
        }

        dietSection.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 mt-4">
                <div>
                    <h3 class="text-xl font-black tracking-wide text-white uppercase font-display flex items-center">
                        <i class="fa-solid fa-utensils text-brand-red mr-3"></i>PLAN NUTRICIONAL & BIO-HIDRATACIÓN
                    </h3>
                    <p class="text-[12px] text-brand-muted mt-1">Dieta de <span class="text-white font-bold">${diet.phase}</span> asignada por Coach Omar | Meta Diaria: <span class="text-white font-black">${diet.kcal} kcal</span></p>
                </div>
                <span class="text-[10px] border border-brand-red text-brand-red font-black px-4 py-1.5 rounded-full uppercase tracking-wider bg-transparent shadow-[0_0_15px_rgba(255,30,39,0.15)] whitespace-nowrap">${diet.phase}</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                
                <div class="lg:col-span-2 bg-[#09090b] border border-zinc-800/60 rounded-2xl p-5 md:p-6 flex flex-col shadow-lg">
                    <div class="flex justify-between items-center mb-5">
                        <span class="text-[11px] font-black uppercase text-white tracking-widest">Objetivos de Macronutrientes</span>
                        <span class="text-[10px] font-bold text-emerald-500">0/${totalMeals} Comidas listas</span>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-3 md:gap-4 h-full">
                        <div class="bg-[#121215] border border-zinc-800/50 rounded-xl p-4 flex flex-col items-center justify-center">
                            <span class="text-[10px] text-zinc-400 font-bold uppercase tracking-wide">Proteína</span>
                            <p class="text-2xl md:text-3xl font-black text-brand-red font-display mt-1 mb-2">${diet.prot || '0'}g</p>
                            <div class="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mx-auto w-5/6 mb-1.5"><div class="h-full bg-brand-red w-[30%] shadow-[0_0_8px_#ff1e27]"></div></div>
                            <span class="text-[9px] text-zinc-500 font-medium">30% Cal</span>
                        </div>
                        
                        <div class="bg-[#121215] border border-zinc-800/50 rounded-xl p-4 flex flex-col items-center justify-center">
                            <span class="text-[10px] text-zinc-400 font-bold uppercase tracking-wide">Carbos</span>
                            <p class="text-2xl md:text-3xl font-black text-amber-500 font-display mt-1 mb-2">${diet.carb || '0'}g</p>
                            <div class="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mx-auto w-5/6 mb-1.5"><div class="h-full bg-amber-500 w-[46%] shadow-[0_0_8px_#f59e0b]"></div></div>
                            <span class="text-[9px] text-zinc-500 font-medium">46% Cal</span>
                        </div>
                        
                        <div class="bg-[#121215] border border-zinc-800/50 rounded-xl p-4 flex flex-col items-center justify-center">
                            <span class="text-[10px] text-zinc-400 font-bold uppercase tracking-wide">Grasas</span>
                            <p class="text-2xl md:text-3xl font-black text-emerald-500 font-display mt-1 mb-2">${diet.fat || '0'}g</p>
                            <div class="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mx-auto w-5/6 mb-1.5"><div class="h-full bg-emerald-500 w-[24%] shadow-[0_0_8px_#10b981]"></div></div>
                            <span class="text-[9px] text-zinc-500 font-medium">24% Cal</span>
                        </div>
                    </div>
                </div>

                <div class="bg-[#09090b] border border-zinc-800/60 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-lg h-full">
                    <div class="flex justify-between items-start mb-4">
                        <div class="shrink-0 mr-2">
                            <span class="text-[11px] font-black uppercase text-white tracking-widest flex items-center"><i class="fa-solid fa-droplet text-[#0ea5e9] mr-2"></i>Hidratación</span>
                            <p class="text-[9px] text-zinc-500 mt-1">Meta: 3.5 Litros / día</p>
                        </div>
                        <span id="hydro-text" class="text-[13px] md:text-sm font-black text-[#0ea5e9] tracking-wide whitespace-nowrap shrink-0 text-right">1.50 / 3.5 L</span>
                    </div>
                    
                    <div class="w-full h-1.5 bg-[#18181b] border border-zinc-800/50 rounded-full mb-6 overflow-hidden shadow-inner">
                        <div id="hydro-bar" class="h-full bg-[#0ea5e9] w-[42%] shadow-[0_0_12px_#0ea5e9] transition-all duration-300"></div>
                    </div>
                    
                    <div class="flex space-x-3 mt-auto">
                        <button onclick="changeHydration(-0.25)" class="w-1/3 py-2 border border-zinc-700 bg-[#121215] text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg text-[11px] font-bold transition-all">-250ml</button>
                        <button onclick="changeHydration(0.25)" class="w-2/3 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-lg text-xs font-black shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all flex justify-center items-center">+ Vaso (250ml)</button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                ${mealsHTML}
            </div>
        `;
    }

    const measuresBody = document.getElementById('measures-history-body');
    const measures = curStudent.measures || []; 
    
    if (measuresBody) {
        measuresBody.innerHTML = ''; 
        
        if (measures.length === 0) {
            measuresBody.innerHTML = `<tr><td colspan="7" class="py-4 px-3 text-center text-zinc-500 font-bold text-xs">Aún no hay medidas. Añade tu primer registro.</td></tr>`;
        } else {
           measures.forEach((m, index) => {
                        const tr = document.createElement('tr');
                        tr.className = "hover:bg-zinc-900/50 transition-colors";
                        tr.innerHTML = `
                            <td class="py-3 px-3 font-bold text-white">${m.date}</td>
                            <td class="py-3 px-3 text-brand-red font-bold">${m.weight > 0 ? m.weight + ' kg' : '--'}</td>
                            <td class="py-3 px-3 text-white">${m.pierna > 0 ? m.pierna + ' cm' : '--'}</td>
                            <td class="py-3 px-3 text-white">${m.waist > 0 ? m.waist + ' cm' : '--'}</td>
                            <td class="py-3 px-3 text-white">${m.arm > 0 ? m.arm + ' cm' : '--'}</td>
                            <td class="py-3 px-3 text-emerald-400 font-bold">${m.note}</td>
                            <td class="py-3 px-3 text-center">
                                <button onclick="deleteMeasure(${curStudent.id}, ${index})" class="px-2.5 py-1.5 bg-zinc-800 hover:bg-brand-red text-white rounded-xl font-bold text-[10px]">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </td>
                        `;
                        measuresBody.appendChild(tr);
                    });
        }
    }

    const latestWeight = measures.length > 0 && measures[0].weight > 0 ? measures[0].weight + ' kg' : '-- kg';
    
    const weightElem = document.getElementById('student-weight-display');
    if (weightElem) {
        weightElem.innerText = latestWeight;
    }

    const objectiveElem = document.getElementById('student-objective-display');
    if (objectiveElem) {
        const objetivoText = (curStudent.diet && curStudent.diet.phase && curStudent.diet.phase !== "Sin asignar") 
            ? curStudent.diet.phase 
            : (curStudent.plan || "Definición");
        objectiveElem.innerText = objetivoText;
    }

    let rachaDays = 0;
    if (curStudent.dueDate && curStudent.dueDate.toLowerCase() !== "pendiente") {
        const curDate = new Date();
        curDate.setHours(0,0,0,0);
        const dueD = parseDateString(curStudent.dueDate);
        
        if (!isNaN(dueD.getTime())) {
            dueD.setHours(0,0,0,0);
            let startDate = new Date(dueD);
            if (curStudent.payType === 'Semanal') {
                startDate.setDate(startDate.getDate() - 7);
            } else {
                startDate.setMonth(startDate.getMonth() - 1);
            }
            rachaDays = Math.floor((curDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
            if (rachaDays < 0) rachaDays = 0; 
        }
    }
    
    const rachaDisplay = document.getElementById('student-racha-display');
    if(rachaDisplay) rachaDisplay.innerText = `Racha: ${rachaDays} Días`;

    const planMiniBadge = document.getElementById('student-plan-mini');
    if(planMiniBadge) planMiniBadge.innerText = curStudent.plan || "Por asignar";

    const btnText = document.getElementById('btn-start-workout-text');
    if(btnText) btnText.innerText = `INICIAR ENTRENAMIENTO DE HOY - ${dayTags[currentDay] || 'RUTINA'}`;
 
    const mapaDias = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    const diaRealHoy = mapaDias[new Date().getDay()];
    if (diaRealHoy !== 'domingo') {
        selectDay(diaRealHoy); 
    } else {
        selectDay('lun'); 
    }

    if (typeof renderProgressChart === 'function') {
        renderProgressChart(curStudent.progresos);
    }
}
   

      function selectDay(day) {
            currentDay = day;
            document.querySelectorAll('.day-btn').forEach(btn => {
                btn.className = "day-btn px-3 py-1.5 text-xs font-bold rounded-lg bg-zinc-800 text-brand-muted hover:text-white";
            });
            const activeBtn = document.getElementById(`btn-day-${day}`);
            if (activeBtn) {
                activeBtn.className = "day-btn px-3 py-1.5 text-xs font-bold rounded-lg bg-brand-red text-white";
            }
            const dayTag = document.getElementById('workout-day-tag');
            
            // Leemos la rutina dinámica para actualizar el texto
            const routine = getStudentRoutine();
            if(dayTag && routine[day]) dayTag.innerText = routine[day].tag || "RUTINA DEL DÍA";
            
            const btnText = document.getElementById('btn-start-workout-text');
            if(btnText && routine[day]) btnText.innerText = `INICIAR ENTRENAMIENTO DE HOY - ${routine[day].tag || 'RUTINA'}`;

            renderExercises(day);

            // ==========================================
            // LÓGICA DE BOTÓN LIBERADA (Solo bloquea días pasados/futuros)
            // ==========================================
            const mapaDias = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
            const diaRealHoy = mapaDias[new Date().getDay()]; 
            
            const botonCompletar = document.getElementById('btn-completar-rutina');
            let activeId = (typeof currentStudentId !== 'undefined') ? currentStudentId : 1;
            let curStudent = studentsList.find(s => s.id === activeId);

            if (botonCompletar && curStudent) {
                if (day === diaRealHoy) {
                    // Si es hoy, SIEMPRE lo dejamos habilitado para que el alumno pueda entrenar.
                    botonCompletar.disabled = false;
                    botonCompletar.className = "w-full bg-brand-red hover:bg-brand-redDark text-white font-bold py-3 rounded-xl transition-colors mt-4";
                    botonCompletar.innerHTML = '<i class="fa-solid fa-trophy mr-2"></i> COMPLETAR ENTRENAMIENTO DEL DÍA';
                } else {
                    // Si mira otro día que no es hoy, se bloquea.
                    botonCompletar.disabled = true;
                    botonCompletar.className = "w-full bg-zinc-700 text-zinc-500 font-bold py-3 rounded-xl mt-4 cursor-not-allowed opacity-50";
                    if (diaRealHoy === 'domingo') {
                        botonCompletar.innerHTML = '<i class="fa-solid fa-bed mr-2"></i> HOY ES DOMINGO DE DESCANSO';
                    } else {
                        botonCompletar.innerHTML = '<i class="fa-solid fa-lock mr-2"></i> SOLO PUEDES MARCAR LA RUTINA DE HOY';
                    }
                }
            }
        }

        let restTimerInterval = null;

        function startRestTimer(seconds) {
            clearInterval(restTimerInterval);
            const timerContainer = document.getElementById('global-rest-timer');
            const timerText = document.getElementById('global-rest-timer-text');
            if(!timerContainer) return;
            
            timerContainer.classList.remove('translate-y-[200%]', 'opacity-0', 'pointer-events-none');
            
            let timeLeft = seconds;
            if(timerText) timerText.innerText = `01:30`;
            
            restTimerInterval = setInterval(() => {
                timeLeft--;
                let m = Math.floor(timeLeft / 60);
                let s = timeLeft % 60;
                if(timerText) timerText.innerText = `0${m}:${s < 10 ? '0'+s : s}`;
                
                if(timeLeft <= 0) {
                    clearInterval(restTimerInterval);
                    if(timerText) timerText.innerText = "¡A ENTRENAR!";
                    setTimeout(() => closeRestTimer(), 3000); 
                }
            }, 1000);
        }

        function closeRestTimer() {
            clearInterval(restTimerInterval);
            const timerContainer = document.getElementById('global-rest-timer');
            if(timerContainer) timerContainer.classList.add('translate-y-[200%]', 'opacity-0', 'pointer-events-none');
        }

        function renderExercises(day) {
            const listContainer = document.getElementById('exercise-list');
            if (!listContainer) return;

            const exercises = workoutData[day] || [];
            listContainer.innerHTML = '';

            const currentActiveIndex = exercises.findIndex(e => !e.completed);

            exercises.forEach((ex, index) => {
                const isActive = (index === currentActiveIndex);
                const card = document.createElement('div');
                
                let cardStyles = '';
                if (ex.completed) {
                    cardStyles = 'bg-emerald-900/10 border-emerald-500/30 opacity-60';
                } else if (isActive) {
                    cardStyles = 'bg-[#15151a] border-brand-red/60 shadow-[0_0_15px_rgba(255,30,39,0.2)]';
                } else {
                    cardStyles = 'bg-[#101014] border-zinc-800/80 hover:border-brand-red/40 shadow-sm';
                }

                card.className = `p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${cardStyles}`;
                
                card.innerHTML = `
                    ${isActive ? '<div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"></div>' : ''}
                    <div class="flex items-center space-x-4 flex-1 cursor-pointer pl-1" onclick="toggleExercise(${ex.id})">
                        <div class="${ex.completed ? 'w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'w-6 h-6 rounded-full border-2 border-zinc-600 flex items-center justify-center group-hover:border-brand-red transition-colors'} shrink-0">
                            ${ex.completed ? '<i class="fa-solid fa-check text-[10px] font-black"></i>' : ''}
                        </div>
                        <div class="flex-1 py-1">
                            <div class="flex items-center justify-between">
                                <h4 class="text-sm font-black text-white ${ex.completed ? 'line-through text-zinc-500' : 'group-hover:text-brand-red transition-colors'}">${ex.name}</h4>
                                ${isActive ? '<span class="text-[9px] bg-brand-red text-white font-black px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">En curso</span>' : ''}
                            </div>
                            <div class="flex flex-wrap items-center gap-2 mt-1.5">
                                <span class="text-[10px] bg-brand-redDark/20 border border-brand-red/20 text-brand-red font-bold px-2 py-0.5 rounded flex items-center"><i class="fa-solid ${ex.icon} mr-1"></i>${ex.sets}</span>
                                <span class="text-[10px] bg-zinc-800 text-zinc-300 font-bold px-2 py-0.5 rounded">${ex.reps}</span>
                                <span class="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold px-2 py-0.5 rounded flex items-center"><i class="fa-solid fa-weight-hanging mr-1"></i>${ex.weight}</span>
                                <span class="text-[10px] text-zinc-500 flex items-center font-medium"><i class="fa-regular fa-clock mr-1"></i>${ex.rest}</span>
                            </div>
                        </div>
                    </div>
                `;
                listContainer.appendChild(card);
            });
            updateWorkoutProgress();
        }

        // ==========================================
// MARCAR/DESMARCAR EJERCICIOS (CON CANDADO ESTRICTO)
// ==========================================
function toggleExercise(id) {
    // 1. Verificamos qué día es hoy en la vida real
    const mapaDias = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    const diaRealHoy = mapaDias[new Date().getDay()];

    // 2. Si el alumno intenta tocar un día distinto a hoy, lo rebotamos
    if (currentDay !== diaRealHoy) {
        showToast("Solo puedes marcar los ejercicios de hoy.", "fa-lock");
        return; // ¡Esto detiene la función y bloquea el check!
    }

    // 3. Si el día es correcto, marca el ejercicio de forma normal
    const exercises = workoutData[currentDay];
    const ex = exercises.find(item => item.id === id);
    if (ex) {
        ex.completed = !ex.completed;
        renderExercises(currentDay);
        
        if(ex.completed) {
            startRestTimer(90); // Dispara el reloj de descanso
        } else {
            closeRestTimer();
        }
    }
}
// ==========================================
// ACTUALIZAR BARRA Y BOTÓN DE PROGRESO DE RUTINAS
// ==========================================
function updateWorkoutProgress() {
    const routine = getStudentRoutine();
    let exercises = [];
    
    if (routine[currentDay]) {
        exercises = routine[currentDay].exercises || (Array.isArray(routine[currentDay]) ? routine[currentDay] : []);
    }
    
    if (!Array.isArray(exercises)) return;
    
    const completedCount = exercises.filter(e => e.completed).length;
    const percentage = exercises.length > 0 ? Math.round((completedCount / exercises.length) * 100) : 0;

    const pctText = document.getElementById('workout-percentage');
    if(pctText) pctText.innerText = `${percentage}% COMPLETADO`;
    
    const fill = document.getElementById('workout-progress-fill');
    if(fill) fill.style.width = `${percentage}%`;

    // Sincronización estricta con el día real de hoy
    const btnFinish = document.getElementById('btn-completar-rutina');
    const mapaDias = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    const diaRealHoy = mapaDias[new Date().getDay()];
    
    if (btnFinish) {
        if (currentDay !== diaRealHoy) {
            // Si el alumno está curioseando otro día, el botón se bloquea obligatoriamente
            btnFinish.disabled = true;
            if (diaRealHoy === 'domingo') {
                btnFinish.className = "w-full bg-zinc-700 text-zinc-500 font-bold py-3.5 rounded-2xl mt-4 cursor-not-allowed opacity-50 shadow-none";
                btnFinish.innerHTML = '<i class="fa-solid fa-bed mr-2"></i> HOY ES DOMINGO DE DESCANSO';
            } else {
                btnFinish.className = "w-full bg-zinc-700 text-zinc-500 font-bold py-3.5 rounded-2xl mt-4 cursor-not-allowed opacity-50 shadow-none";
                btnFinish.innerHTML = '<i class="fa-solid fa-lock mr-2"></i> SOLO PUEDES MARCAR LA RUTINA DE HOY';
            }
        } else {
            // Si es el día de hoy, evaluamos si terminó los ejercicios
            if (percentage === 100) {
                btnFinish.disabled = false;
                btnFinish.className = "w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-2xl mt-4 shadow-[0_0_15px_rgba(22,163,74,0.4)] transition-all";
                btnFinish.innerHTML = '<i class="fa-solid fa-check-double mr-2"></i> ¡RUTINA COMPLETADA!';
            } else {
                btnFinish.disabled = false;
                btnFinish.className = "w-full bg-brand-red hover:bg-brand-redDark text-white font-bold py-3.5 rounded-2xl transition-colors mt-4 shadow-lg";
                btnFinish.innerHTML = '<i class="fa-solid fa-trophy mr-2"></i> COMPLETAR ENTRENAMIENTO DEL DÍA';
            }
        }
    }
}

        function finishWorkout() {
            showToast("¡Excelente entrenamiento! Rutina guardada. 🔥", "fa-trophy");
        }
// ==========================================
// RENDERIZAR TABLA CRM (CON ASISTENCIA INTEGRADA)
// ==========================================
async function renderTrainerTable() {
    const tableBody = document.getElementById('trainer-students-table');
    const searchInput = document.getElementById('student-search-input');
    if (!tableBody) return;

    const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
    tableBody.innerHTML = '<tr><td colspan="5" class="text-center py-6 text-brand-muted text-xs uppercase font-bold tracking-widest animate-pulse">Sincronizando con Supabase <i class="fa-solid fa-cloud-arrow-down ml-2 text-brand-red"></i></td></tr>';

    try {
        const { data: alumnosNube, error } = await supabaseClient
            .from('alumnos')
            .select('*')
            .order('id', { ascending: false });

        if (error) throw error;
        tableBody.innerHTML = '';

studentsList = alumnosNube.map(a => {
            // Buscamos si ya teníamos un registro local de este alumno
            const alumnoExistente = studentsList.find(s => s.id === a.id);

            return {
                rutina: a.rutina || null,
                id: a.id, 
                name: a.nombre, 
                phone: a.telefono,
                password: a.password,
                plan: a.plan_entrenamiento, 
                payType: a.plan,
                fee: a.cuota, 
                dueDate: a.vencimiento, 
                note: a.nota,
                
                // 🌟 1. AÑADIMOS EL MAPEO SEGURO DE LA FOTO (Soporta foto y photo)
                foto: a.foto || (alumnoExistente ? alumnoExistente.foto : ''),
                photo: a.foto || (alumnoExistente ? alumnoExistente.photo : ''),

                lunes: a.lunes || false, 
                martes: a.martes || false,
                miercoles: a.miercoles || false, 
                jueves: a.jueves || false,
                viernes: a.viernes || false, 
                sabado: a.sabado || false,
                
                diet: a.dieta || { phase: "Sin asignar", kcal: "0", prot: "0", carb: "0", fat: "0", meal1: "", meal2: "", meal3: "", meal4: "" },
                email: "", 
                status: "warning",
                
                // 🌟 2. AÑADIMOS EL MAPEO DE MEDIDAS CONECTADO A SUPABASE Y MEMORIA
                measures: a.measures || a.progresos || (alumnoExistente ? alumnoExistente.measures : []),
                progresos: a.progresos || a.measures || []
            };
        });

        let filtered = studentsList.filter(s => {
            const matchesName = s.name.toLowerCase().includes(searchVal);
            const payInfo = getPaymentStatus(s.dueDate);
            if (filterStatus === 'all') return matchesName;
            if (filterStatus === 'paid') return matchesName && payInfo.status === 'paid';
            if (filterStatus === 'due') return matchesName && (payInfo.status === 'warning' || payInfo.status === 'expired');
            return false;
        });

        if(filtered.length === 0) {
             tableBody.innerHTML = '<tr><td colspan="5" class="text-center py-6 text-zinc-500 font-bold">No hay atletas registrados aún.</td></tr>';
             updateTrainerStats();
             return;
        }

        filtered.forEach(s => {
            const tr = document.createElement('tr');
            tr.className = "hover:bg-zinc-900/50 transition-colors";
            
            const payTypeBadge = s.payType === 'Semanal'
                ? `<span class="bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase mt-1 inline-block">Semanal</span>`
                : s.payType === 'Por Día' 
                ? `<span class="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase mt-1 inline-block">Por Día</span>`
                : `<span class="bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase mt-1 inline-block">Mensual</span>`;

            // 2. Calculamos los días que asistió
            let diasAsistidos = 0;
            if (s.lunes) diasAsistidos++; if (s.martes) diasAsistidos++;
            if (s.miercoles) diasAsistidos++; if (s.jueves) diasAsistidos++;
            if (s.viernes) diasAsistidos++; if (s.sabado) diasAsistidos++;

            // 3. Mostramos la deuda solo si es "Por Día"
            let infoDeuda = '';
            if (s.payType === 'Por Día') {
                let deuda = diasAsistidos * s.fee;
                infoDeuda = `<div class="text-[11px] font-bold mt-1 text-brand-red">Deuda: S/ ${deuda}.00</div>`;
            } else {
                infoDeuda = `<div class="text-[11px] font-bold mt-1 text-emerald-500">Cuota: S/ ${s.fee}</div>`;
            }

            // 4. Función para crear los cuadritos de los días
            const btnDia = (diaBD, letra, estado) => `
                <button onclick="toggleDiaAsistencia(${s.id}, '${diaBD}', ${estado})" class="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold transition-all ${estado ? 'bg-brand-red text-white shadow-[0_0_8px_rgba(255,30,39,0.4)]' : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700 hover:text-white'}">${letra}</button>
            `;

            let waText = `Hola ${s.name}, te saluda el Coach Omar Ore 💪. ¡A darle con todo hoy! 🔥`;
            const waMessage = encodeURIComponent(waText);

            tr.innerHTML = `
                <td class="py-4 px-3">
                    <div class="flex items-center space-x-3">
                        <div class="w-9 h-9 rounded-full bg-brand-red/20 border border-brand-red text-brand-red flex items-center justify-center text-sm font-black shadow-inner shrink-0">
                            ${s.name.charAt(0)}
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-white cursor-pointer hover:text-brand-red transition-colors text-sm" onclick="viewStudentProfile(${s.id})">${s.name}</span>
                            <span class="text-zinc-500 text-[11px] italic">${s.note || ''}</span>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-3">
                    <div class="text-brand-muted text-xs font-medium">${s.plan}</div>
                    ${payTypeBadge}
                </td>
                <td class="py-4 px-3 text-zinc-300 font-mono text-xs">${s.dueDate}</td>
                <td class="py-4 px-3">
                    <div class="flex space-x-1">
                        ${btnDia('lunes', 'L', s.lunes)}
                        ${btnDia('martes', 'M', s.martes)}
                        ${btnDia('miercoles', 'M', s.miercoles)}
                        ${btnDia('jueves', 'J', s.jueves)}
                        ${btnDia('viernes', 'V', s.viernes)}
                        ${btnDia('sabado', 'S', s.sabado)}
                    </div>
                    ${infoDeuda}
                </td>
                 <td class="py-4 px-3 text-center space-x-1.5 whitespace-nowrap">
                    <button onclick="liquidarSemanaCoach(${s.id}, '${s.name}')" class="px-3 py-2 bg-zinc-800 hover:bg-brand-red text-white rounded-lg font-bold text-xs shadow transition-colors" title="Liquidar Deuda / Reiniciar Asistencia">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </button>
                    <a href="https://wa.me/51${s.phone}?text=${waMessage}" target="_blank" class="px-3 py-2 bg-zinc-800 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs shadow transition-all" title="WhatsApp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <button onclick="openDietModal(${s.id})" class="px-3 py-2 bg-zinc-800 hover:bg-blue-500 text-white rounded-lg font-bold text-xs shadow transition-colors" title="Dieta">
                        <i class="fa-solid fa-utensils"></i>
                    </button>
                    <button onclick="openRoutineModal(${s.id})" class="px-3 py-2 bg-zinc-800 hover:bg-orange-500 text-white rounded-lg font-bold text-xs shadow transition-colors" title="Armar Rutina">
                        <i class="fa-solid fa-dumbbell"></i>
                     </button>
                    <button onclick="openProgressModal(${s.id})" class="px-3 py-2 bg-zinc-800 hover:bg-purple-600 text-white rounded-lg font-bold text-xs shadow transition-colors" title="Registrar Récords">
                        <i class="fa-solid fa-chart-line"></i>
                    </button>
                    <button onclick="openEditStudentModal(${s.id})" class="px-3 py-2 bg-zinc-800 hover:bg-amber-600 text-white rounded-lg font-bold text-xs shadow transition-colors" title="Editar">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="deleteStudent(${s.id})" class="px-3 py-2 bg-zinc-800 hover:bg-brand-red text-white rounded-lg font-bold text-xs shadow transition-colors" title="Eliminar Atleta">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        updateTrainerStats();
        
       // 🔥 LA PIEZA FALTANTE (BLINDADA): Solo refresca si hay una sesión real activa
            const savedId = localStorage.getItem('omarfit_logged_id');
            if (savedId && savedId !== 'null' && savedId !== 'undefined') {
                currentStudentId = parseInt(savedId, 10);
                syncStudentView(currentStudentId);
            } else if (currentStudentId) {
                syncStudentView(currentStudentId);
            }

    } catch (error) {
        console.error("Error al cargar la tabla:", error);
    }
}


// ==========================================
// FUNCIÓN PARA QUE EL COACH MARQUE/DESMARQUE DÍAS MANUALMENTE
// ==========================================
async function toggleDiaAsistencia(alumnoId, dia, estadoActual) {
    try {
        const nuevoEstado = !estadoActual; // Si era true lo pasa a false y viceversa
        const { error } = await supabaseClient
            .from('alumnos')
            .update({ [dia]: nuevoEstado })
            .eq('id', alumnoId);

        if (error) throw error;
        renderTrainerTable(); // Refrescamos la tabla instantáneamente
    } catch (error) {
        console.error("Error al marcar asistencia:", error);
        showToast("Error de conexión", "fa-triangle-exclamation");
    }
}

// ==========================================
// FUNCIÓN PARA LIQUIDAR/COBRAR LA SEMANA
// ==========================================
async function liquidarSemanaCoach(alumnoId, alumnoNombre) {
    const confirmacion = confirm(`¿Estás seguro de liquidar la deuda y reiniciar la asistencia de ${alumnoNombre}?`);
    if (confirmacion) {
        try {
            const { error } = await supabaseClient
                .from('alumnos')
                .update({ lunes: false, martes: false, miercoles: false, jueves: false, viernes: false, sabado: false })
                .eq('id', alumnoId);

            if (error) throw error;
            showToast(`Asistencia y deuda de ${alumnoNombre} liquidadas.`, "fa-hand-holding-dollar");
            renderTrainerTable(); // Refrescamos la tabla instantáneamente
        } catch (error) {
            console.error("Error al liquidar:", error);
            alert("Hubo un error al intentar liquidar.");
        }
    }
}

        function viewStudentProfile(id) {
            // 1. Primero le decimos al sistema de quién vamos a cargar el perfil
            currentStudentId = id; 
            
            // 2. Luego cambiamos la vista (al hacerse visible, el sistema auto-sincronizará la gráfica sin errores)
            switchView('student');
            
            // 3. Finalmente cargamos los ejercicios correspondientes al día de hoy
            const mapaDias = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
            const diaRealHoy = mapaDias[new Date().getDay()];
            if (diaRealHoy !== 'domingo') selectDay(diaRealHoy);
            else selectDay('lun');
        }

        function updateTrainerStats() {
            const total = studentsList.length;
            const paid = studentsList.filter(s => getPaymentStatus(s.dueDate).status === 'paid').length;
            const due = studentsList.filter(s => {
                const st = getPaymentStatus(s.dueDate).status;
                return st === 'warning' || st === 'expired';
            }).length;
            const revenue = studentsList.reduce((acc, curr) => acc + parseFloat(curr.fee), 0);

            const totEl = document.getElementById('stat-total-students');
            if(totEl) totEl.innerText = total;
            
            const paidEl = document.getElementById('stat-paid-students');
            if(paidEl) paidEl.innerText = paid;
            
            const pendingEl = document.getElementById('stat-pending-students');
            if(pendingEl) pendingEl.innerText = due;
            
            const revEl = document.getElementById('stat-total-revenue');
            if(revEl) revEl.innerText = `S/ ${revenue.toLocaleString()}`;

            const paidRate = document.getElementById('stat-paid-rate');
            const incomeBar = document.getElementById('stat-income-bar');
            const rate = total > 0 ? Math.round((paid / total) * 100) : 0;
            
            if(paidRate) paidRate.innerText = `Tasa al día: ${rate}%`;
            if(incomeBar) incomeBar.style.width = `${rate}%`;

            const btnAll = document.getElementById('btn-filter-all');
            if(btnAll) btnAll.innerText = `Todos (${total})`;
        }

        function setFilterStatus(status) {
            filterStatus = status;
            
            document.querySelectorAll('.filter-status-btn').forEach(btn => {
                btn.className = "filter-status-btn px-4 py-1.5 text-[11px] font-bold rounded-full bg-transparent border border-zinc-700 text-zinc-400 hover:text-white whitespace-nowrap transition-all";
            });
            
            const activeClass = "filter-status-btn px-4 py-1.5 text-[11px] font-bold rounded-full bg-brand-red text-white whitespace-nowrap shadow-[0_0_10px_rgba(255,30,39,0.3)] transition-all";
            
            if (status === 'all') document.getElementById('btn-filter-all').className = activeClass;
            if (status === 'paid') document.getElementById('btn-filter-paid').className = activeClass;
            if (status === 'due') document.getElementById('btn-filter-due').className = activeClass;
            
            renderTrainerTable();
        }

        function filterStudents() { 
            const searchInput = document.getElementById('student-search-input');
            if (!searchInput) return;
            
            // SANITIZACIÓN: Eliminamos cualquier carácter especial peligroso o etiquetas HTML/script
            let cleanValue = searchInput.value.replace(/[<>]/g, '').trim();
            if (searchInput.value !== cleanValue) {
                searchInput.value = cleanValue;
            }
            
            renderTrainerTable(); 
        }

        function renewStudentPayment(id) {
            const student = studentsList.find(s => s.id === id);
            if(!student) return;
            
            const currentDue = parseDateString(student.dueDate);
            const today = new Date();
            today.setHours(0,0,0,0);
            
            let baseDate = currentDue < today ? today : currentDue;

            if(student.payType === 'Semanal') baseDate.setDate(baseDate.getDate() + 7);
            else baseDate.setMonth(baseDate.getMonth() + 1);
            
            const dd = String(baseDate.getDate()).padStart(2, '0');
            const mm = String(baseDate.getMonth() + 1).padStart(2, '0');
            student.dueDate = `${dd}/${mm}/${baseDate.getFullYear()}`;
            
            renderTrainerTable();
            syncStudentView(student.id);
            showToast(`Suscripción renovada a ${student.name} 💰`, "fa-sack-dollar");
        }

        let hydrationLevel = 1.5;

        function changeHydration(amount) {
            hydrationLevel += amount;
            if (hydrationLevel < 0) hydrationLevel = 0;
            if (hydrationLevel > 3.5) hydrationLevel = 3.5;
            
            const hydroText = document.getElementById('hydro-text');
            const hydroBar = document.getElementById('hydro-bar');
            
            if(hydroText) hydroText.innerText = `${hydrationLevel.toFixed(1)} / 3.5 L`;
            if(hydroBar) hydroBar.style.width = `${(hydrationLevel / 3.5) * 100}%`;
        }

        function toggleMeal(element) {
            element.classList.toggle('bg-emerald-900/10');
            element.classList.toggle('border-emerald-500/30');
            element.classList.toggle('border-zinc-800/80');
            
            const title = element.querySelector('.meal-title');
            const desc = element.querySelector('.meal-desc');
            const check = element.querySelector('.meal-check');
            
            if(title) {
                title.classList.toggle('line-through');
                title.classList.toggle('text-zinc-500');
                title.classList.toggle('text-brand-red');
            }
            if(desc) {
                desc.classList.toggle('line-through');
                desc.classList.toggle('text-zinc-500');
                desc.classList.toggle('text-white');
            }
            
            if(check) {
                if (check.innerHTML.includes('fa-check')) {
                    check.innerHTML = '';
                    check.className = 'meal-check w-7 h-7 rounded-md border-2 border-zinc-600 flex items-center justify-center transition-colors';
                } else {
                    check.innerHTML = '<i class="fa-solid fa-check text-xs font-black"></i>';
                    check.className = 'meal-check w-7 h-7 rounded-md bg-brand-red border border-brand-red text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,30,39,0.4)] transition-colors';
                }
            }
        }

        function openDietModal(id) {
            const student = studentsList.find(s => s.id === id);
            if (!student) return;
            
            document.getElementById('diet-student-id').value = student.id;
            const diet = student.diet || { phase: "", kcal: "", prot: "", carb: "", fat: "", meal1: "", meal2: "", meal3: "", meal4: "" };
            
            document.getElementById('diet-phase').value = diet.phase || "";
            document.getElementById('diet-kcal').value = diet.kcal || "";
            document.getElementById('diet-prot').value = diet.prot || "";
            document.getElementById('diet-carb').value = diet.carb || "";
            document.getElementById('diet-fat').value = diet.fat || "";
            document.getElementById('diet-meal1').value = diet.meal1 || "";
            document.getElementById('diet-meal2').value = diet.meal2 || "";
            document.getElementById('diet-meal3').value = diet.meal3 || "";
            document.getElementById('diet-meal4').value = diet.meal4 || "";
            
            const dm = document.getElementById('modal-diet-builder');
            if(dm) dm.classList.remove('hidden');
        }

        function closeDietModal() {
            const dm = document.getElementById('modal-diet-builder');
            if(dm) dm.classList.add('hidden');
        }

       // ==========================================
// GUARDAR DIETA EN SUPABASE
// ==========================================
async function saveDiet() {
    const id = document.getElementById('diet-student-id').value;
    const student = studentsList.find(s => s.id == id);
    if (!student) return;

    // Bloqueamos el botón mientras sube a la nube
    const botonGuardar = document.querySelector('button[onclick="saveDiet()"]');
    const textoOriginal = botonGuardar.innerHTML;
    botonGuardar.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Guardando en la Nube...';
    botonGuardar.disabled = true;

    // Empaquetamos la dieta
    const nuevaDieta = {
        phase: document.getElementById('diet-phase').value,
        kcal: document.getElementById('diet-kcal').value,
        prot: document.getElementById('diet-prot').value,
        carb: document.getElementById('diet-carb').value,
        fat: document.getElementById('diet-fat').value,
        meal1: document.getElementById('diet-meal1').value,
        meal2: document.getElementById('diet-meal2').value,
        meal3: document.getElementById('diet-meal3').value,
        meal4: document.getElementById('diet-meal4').value
    };

    try {
        // Subimos a la columna 'dieta' de Supabase
        const { error } = await supabaseClient
            .from('alumnos')
            .update({ dieta: nuevaDieta })
            .eq('id', id);

        if (error) throw error;

        // Actualizamos la memoria local
        student.diet = nuevaDieta;

        closeDietModal();
        showToast("Dieta guardada en la nube 🍗", "fa-utensils");
        
        // Si el coach está viendo la pantalla de este alumno, se actualiza en vivo
        if (currentStudentId == id && document.getElementById('view-student').style.display !== 'none') {
            syncStudentView(id);
        }
    } catch (error) {
        console.error("Error guardando dieta:", error);
        alert("Hubo un error al guardar la dieta en Supabase.");
    } finally {
        // Desbloqueamos el botón
        botonGuardar.innerHTML = textoOriginal;
        botonGuardar.disabled = false;
    }
}

       // ==========================================
// ELIMINAR ATLETA (CONECTADO A SUPABASE)
// ==========================================
async function deleteStudent(id) {
    const confirmacion = confirm("¿Estás seguro de eliminar este atleta de la base de datos?");
    if (confirmacion) {
        try {
            const { error } = await supabaseClient.from('alumnos').delete().eq('id', id);
            if (error) throw error;
            
            showToast("Alumno eliminado de la Nube.", "fa-trash-can");
            renderTrainerTable(); // Actualiza la tabla
           
            
        } catch(error) {
            console.error("Error al eliminar:", error);
            alert("Hubo un error al eliminar. Revisa la consola.");
        }
    }
}

        function openAddStudentModal() {
            document.getElementById('student-edit-id').value = '';
            document.getElementById('modal-student-title').innerHTML = `<i class="fa-solid fa-user-plus text-brand-red mr-2"></i>Registrar Nuevo Alumno`;
            document.getElementById('new-student-name').value = '';
            document.getElementById('new-student-phone').value = '914774277';
            document.getElementById('new-student-fee').value = '150';
            
            const hoy = new Date();
            hoy.setMonth(hoy.getMonth() + 1);
            const dd = String(hoy.getDate()).padStart(2, '0');
            const mm = String(hoy.getMonth() + 1).padStart(2, '0');
            document.getElementById('new-student-duedate').value = `${dd}/${mm}/${hoy.getFullYear()}`;
            
            document.getElementById('new-student-note').value = 'Inicio de asesoría';
            const m = document.getElementById('modal-student');
            if(m) m.classList.remove('hidden');
        }

        function openEditStudentModal(id) {
            const student = studentsList.find(s => s.id === id);
            if (student) {
                document.getElementById('student-edit-id').value = student.id;
                document.getElementById('modal-student-title').innerHTML = `<i class="fa-solid fa-user-pen text-brand-red mr-2"></i>Editar Alumno: ${student.name}`;
                document.getElementById('new-student-name').value = student.name;
                document.getElementById('new-student-phone').value = student.phone;
                document.getElementById('new-student-plan').value = student.plan;
                document.getElementById('new-student-paytype').value = student.payType || 'Mensual';
                document.getElementById('new-student-fee').value = student.fee;
                document.getElementById('new-student-duedate').value = student.dueDate;
                document.getElementById('new-student-note').value = student.note || '';
                
                const m = document.getElementById('modal-student');
                if(m) m.classList.remove('hidden');
            }
        }

        function closeAddStudentModal() { 
            const m = document.getElementById('modal-student');
            if(m) m.classList.add('hidden'); 
        }

  // ==========================================
// FUNCIÓN DEL COACH PARA CREAR/EDITAR ALUMNOS (CON CANDADO ANTI-DOBLE CLIC)
// ==========================================
let isSavingStudent = false; // Nuestro candado lógico

async function saveStudentData() {
    if (isSavingStudent) return; // Si ya está guardando, rebota los clics extra

    // 1. RECOLECCIÓN Y SANEAMIENTO DE INPUTS (Anti-Inyecciones / XSS)
    const rawName = document.getElementById('new-student-name').value;
    const rawPhone = document.getElementById('new-student-phone').value;
    const rawNote = document.getElementById('new-student-note').value;

    const name = rawName.replace(/[<>]/g, '').trim();
    const phone = rawPhone.replace(/\D/g, '').trim() || "000000000"; // Solo permite números
    const note = rawNote.replace(/[<>]/g, '').trim();

    if (!name) {
        showToast("Ingresa el nombre del alumno", "fa-triangle-exclamation");
        return;
    }

    // 2. Buscamos el botón y lo bloqueamos visualmente
    const botonGuardar = document.querySelector('button[onclick="saveStudentData()"]');
    const textoOriginal = botonGuardar ? botonGuardar.innerHTML : "Guardar Alumno";
    
    isSavingStudent = true; // Cerramos el candado
    if (botonGuardar) {
        botonGuardar.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Guardando...';
        botonGuardar.classList.add('opacity-50', 'cursor-not-allowed');
    }

    const editId = document.getElementById('student-edit-id').value;
    const planEntrenamiento = document.getElementById('new-student-plan').value;
    const payType = document.getElementById('new-student-paytype').value;
    const fee = parseFloat(document.getElementById('new-student-fee').value) || 150;
    const dueDate = document.getElementById('new-student-duedate').value || "30/11/2026";

    // Generamos el hash SHA-256 usando su número de teléfono como contraseña inicial o de reseteo
    const hashedPassword = await hashPassword(phone);

    // Empaquetamos los datos ya limpios y seguros
    const datosAlumno = {
        nombre: name, 
        telefono: phone, 
        plan_entrenamiento: planEntrenamiento, 
        plan: payType, 
        cuota: fee, 
        vencimiento: dueDate, 
        nota: note || "Inicio de asesoría",
        password: hashedPassword // <--- ¡Aquí se asigna y actualiza la contraseña cifrada automáticamente!
    };

    try {
        if (editId) {
            const { error } = await supabaseClient.from('alumnos').update(datosAlumno).eq('id', editId);
            if (error) throw error;
            showToast("Datos actualizados, clave reseteada y seguros en la Nube.", "fa-user-check");
        } else {
            datosAlumno.lunes = false; datosAlumno.martes = false; datosAlumno.miercoles = false;
            datosAlumno.jueves = false; datosAlumno.viernes = false; datosAlumno.sabado = false;
            
            const { error } = await supabaseClient.from('alumnos').insert([datosAlumno]);
            if (error) throw error;
            showToast("Atleta registrado y contraseña cifrada en Supabase.", "fa-user-check");
        }

        renderTrainerTable(); 
        closeAddStudentModal();

    } catch (error) {
        console.error("Error de seguridad conectando con Supabase:", error);
        alert("Hubo un error al guardar en la nube de forma segura. Revisa la consola.");
    } finally {
        // 3. Al terminar (sea éxito o error), abrimos el candado y restauramos el botón
        isSavingStudent = false;
        if (botonGuardar) {
            botonGuardar.innerHTML = textoOriginal;
            botonGuardar.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}
        function openAddMeasureModal() { 
            const m = document.getElementById('modal-measure');
            if(m) m.classList.remove('hidden'); 
        }
        function closeAddMeasureModal() { 
            const m = document.getElementById('modal-measure');
            if(m) m.classList.add('hidden'); 
        }
        
      
// ==========================================
// GUARDAR REGISTRO DE MEDIDAS (100% ASÍNCRONO Y BLINDADO)
// ==========================================
async function saveMeasureRecord() {
    const w = document.getElementById('input-weight').value;
    const pierna = document.getElementById('input-pierna').value || "0";
    const waist = document.getElementById('input-waist').value || "0";
    const arm = document.getElementById('input-arm').value || "0";

    if (!w) { 
        showToast("Ingresa el peso corporal", "fa-triangle-exclamation");
        return; 
    }
    
    let activeId = (typeof currentStudentId !== 'undefined' && currentStudentId) ? currentStudentId : (studentsList.length > 0 ? studentsList[0].id : 1);
    let student = studentsList.find(s => s.id == activeId);
    
    if (!student && studentsList.length > 0) {
        student = studentsList[0];
        activeId = student.id;
        currentStudentId = activeId;
    }

    if (student) {
        if (!student.measures || !Array.isArray(student.measures)) {
            student.measures = [];
        }
        
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        
        const nuevoRegistro = {
            date: `${dd}/${mm}/${yyyy}`,
            weight: parseFloat(w),
            pierna: parseFloat(pierna),
            waist: parseFloat(waist),
            arm: parseFloat(arm),
            note: "Nuevo registro"
        };

        student.measures.unshift(nuevoRegistro);
        
        try {
            // 🌟 GUARDADO ASÍNCRONO SEGURO EN SUPABASE
            const { error } = await supabaseClient
                .from('alumnos')
                .update({ measures: student.measures, progresos: student.measures })
                .eq('id', activeId);

            if (error) throw error;

            syncStudentView(activeId); 
            closeAddMeasureModal();
            showToast("¡Medidas guardadas en la Nube!", "fa-ruler-combined");
        } catch (err) {
            console.error("Error al sincronizar medidas en Supabase:", err);
            showToast("⚠️ Error al sincronizar el peso en la nube.", "fa-triangle-exclamation");
        }
    } else {
        showToast("Error crítico: No hay atletas cargados en el sistema.", "fa-triangle-exclamation");
    }
    
    document.getElementById('input-weight').value = '';
    document.getElementById('input-pierna').value = '';
    document.getElementById('input-waist').value = '';
    document.getElementById('input-arm').value = '';
}
       

// Nueva función para borrar de la base de datos
        function deleteMeasure(studentId, measureIndex) {
            let student = studentsList.find(s => s.id === studentId);
            if (student && student.measures) {
                student.measures.splice(measureIndex, 1); // Lo borra de la memoria
                syncStudentView(studentId); // Redibuja la tabla al instante
                showToast("Registro eliminado.", "fa-trash-can");
            }
        }

        function showToast(message, icon = "fa-circle-check") {
            const toast = document.getElementById('toast');
            if(!toast) return;
            const tMsg = document.getElementById('toast-message');
            if(tMsg) tMsg.innerText = message;
            const tIcon = document.getElementById('toast-icon');
            if(tIcon) tIcon.className = `fa-solid ${icon} text-lg`;
            toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
            toast.classList.add('opacity-100', 'translate-y-0');
            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-10px]');
            }, 3000);
        }

        let temporaryProfileImage = null;

 // =// =========================================================
// FUNCIONES DEL PERFIL DEL ALUMNO (AJUSTES)
// =========================================================

// 1. ABRIR MODAL
function openStudentSettingsModal() {
    try {
        let activeId = (typeof currentStudentId !== 'undefined') ? currentStudentId : 1;
        const student = studentsList.find(s => s.id === activeId) || studentsList[0];
        
        if (!student) return;

        const nameEl = document.getElementById('edit-my-name');
        const phoneEl = document.getElementById('edit-my-phone');
        const passEl = document.getElementById('edit-my-password');
        
        if (nameEl) nameEl.value = student.name || "";
        if (phoneEl) phoneEl.value = student.phone || "";
        if (passEl) passEl.value = ""; // Siempre inicia vacío por seguridad

        const modalPreview = document.getElementById('modal-avatar-preview');
        const parts = student.name.split(' ');
        const initials = parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : student.name.substring(0,2).toUpperCase();
        
        if (student.photo && modalPreview) {
            modalPreview.innerHTML = `<img src="${student.photo}" class="w-full h-full object-cover">`;
        } else if(modalPreview) {
            modalPreview.innerHTML = `<span id="modal-avatar-initials">${initials}</span>`;
        }

        const m = document.getElementById('modal-student-settings');
        if(m) m.classList.remove('hidden');
    } catch (error) {
        console.error("Error al abrir perfil:", error);
    }
}

// 2. CERRAR MODAL (Forzado)
function closeStudentSettingsModal() {
    const m = document.getElementById('modal-student-settings');
    if(m) m.classList.add('hidden');
}

// 3. PREVISUALIZAR FOTO
function previewProfilePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            temporaryProfileImage = e.target.result;
            const modalPreview = document.getElementById('modal-avatar-preview');
            if(modalPreview) modalPreview.innerHTML = `<img src="${temporaryProfileImage}" class="w-full h-full object-cover">`;
        };
        reader.readAsDataURL(file);
    }
}

async function saveStudentProfileChanges() {
    try {
        const nameEl = document.getElementById('edit-my-name');
        const phoneEl = document.getElementById('edit-my-phone');
        const passEl = document.getElementById('edit-my-password');
        
        const newName = nameEl ? nameEl.value.trim() : "";
        const newPhone = phoneEl ? phoneEl.value.trim() : "";
        const newPassword = passEl ? passEl.value.trim() : "";

        if (!newName) {
            showToast("El nombre no puede estar vacío", "fa-triangle-exclamation");
            return; 
        }

        let activeId = (typeof currentStudentId !== 'undefined') ? currentStudentId : 1;
        let student = studentsList.find(s => s.id === activeId) || studentsList[0];
        
        if (!student) return;

        const datosActualizados = {
            nombre: newName,
            telefono: newPhone
        };

        if (newPassword) {
            const hashedNewPass = await hashPassword(newPassword);
            datosActualizados.password = hashedNewPass; 
            student.password = hashedNewPass;
        }

        const activePhoto = (typeof temporaryProfileImage !== 'undefined' && temporaryProfileImage) 
            ? temporaryProfileImage 
            : ((typeof window !== 'undefined' && window.temporaryProfileImage) ? window.temporaryProfileImage : null);

        if (activePhoto) {
            datosActualizados.foto = activePhoto; 
            student.foto = activePhoto;
            student.photo = activePhoto; // 🌟 Respaldo dual para evitar que parpadee o se borre
            
            temporaryProfileImage = null;
            if (typeof window !== 'undefined') window.temporaryProfileImage = null; 
        }

        const { error } = await supabaseClient
            .from('alumnos')
            .update(datosActualizados)
            .eq('id', student.id);

        if (error) throw error;

        student.name = newName;
        student.phone = newPhone;

        if (typeof syncStudentView === 'function') syncStudentView(student.id);
        if (typeof renderTrainerTable === 'function') renderTrainerTable();
        
        showToast("¡Perfil actualizado con éxito!", "fa-user-check");
        
    } catch (error) {
        console.error("Error al guardar perfil en la nube:", error);
        alert(`Hubo un error al actualizar tus datos: ${error.message || error}`);
    } finally {
        closeStudentSettingsModal();
    }
}

function openMediaModal(type, src, title) {
            if (type === 'image') {
                const modal = document.getElementById('modal-image-fullscreen');
                const targetImg = document.getElementById('fullscreen-img-target');
                if (modal && targetImg) {
                    targetImg.src = src;
                    modal.classList.remove('hidden');
                }
            } else if (type === 'video') {
                const modal = document.getElementById('modal-video-player');
                const videoTarget = document.getElementById('video-modal-target');
                const titleEl = document.getElementById('video-modal-title');

                // Pausar cualquier otro video de fondo previo
                const previewVideos = document.querySelectorAll("video");
                previewVideos.forEach(v => { if(v !== videoTarget) v.pause(); });

                if (modal && videoTarget) {
                    videoTarget.pause();
                    videoTarget.removeAttribute('src'); // Limpieza profunda del buffer
                    
                    if (titleEl) titleEl.innerText = title || 'Entrenamiento Intensivo Omar Fit 🔥';
                    
                    // Asignamos directamente la ruta (ignorando temporalmente el caché local si interfiere con los blobs)
                    videoTarget.src = src;
                    
                    videoTarget.setAttribute('controls', 'true');
                    videoTarget.setAttribute('playsinline', 'true');
                    
                    // Mostramos el modal primero para que el DOM reconozca el elemento video visible
                    modal.classList.remove('hidden');
                    
                    // Forzamos la carga y reproducción controlada
                    videoTarget.load();
                    
                    // Envolvemos el play en un try/catch para evitar errores en consola si el navegador lo restringe
                    const playPromise = videoTarget.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log("Reproducción automática pausada por políticas del navegador. El usuario puede usar los controles manuales.", error);
                        });
                    }
                }
            }
        }

        function closeVideoModal() {
            const modal = document.getElementById('modal-video-player');
            const videoTarget = document.getElementById('video-modal-target');

            if (videoTarget) {
                videoTarget.pause();
                videoTarget.src = "";
            }
            if (modal) modal.classList.add('hidden');
        }

        const galleryFiles = [
            { type: 'image', src: 'assets/porras1.jpg', title: 'Familia Fierrera Omar Fit' },
            { type: 'image', src: 'assets/foto-concurso.jpg', title: 'Concurso Omar Fit' },
            { type: 'image', src: 'assets/porras2.jpg', title: 'Familia Fierrera Omar Fit' },
            { type: 'image', src: 'assets/grupo2.jpg', title: 'Familia Fierrera Omar Fit' },
            { type: 'image', src: 'assets/gym athletic.jpg', title: 'Entrenamiento Gym Athletic' },
            { type: 'video', src: 'vid/video1.mp4', title: 'Entrenamiento Intensivo Omar Fit' },
            { type: 'video', src: 'vid/video2.mp4', title: 'Entrenamiento Intensivo Omar Fit' },
            { type: 'video', src: 'vid/video3.mp4', title: 'Entrenamiento Intensivo Omar Fit' },
            { type: 'video', src: 'vid/video4.mp4', title: 'Entrenamiento Intensivo Omar Fit' },
        ];

   function openFullGalleryModal(filterCategory) {
    const modal = document.getElementById('modal-full-gallery');
    const titleEl = document.getElementById('full-gallery-title');
    const gridContainer = document.getElementById('full-gallery-grid');

    if (!modal || !gridContainer) return;
    gridContainer.innerHTML = '';

    let filtered = galleryFiles;
    if (filterCategory === 'photos') {
        filtered = galleryFiles.filter(f => f.type === 'image');
        if (titleEl) titleEl.innerText = "Galería de Fotos - Omar Fit";
    } else if (filterCategory === 'videos') {
        filtered = galleryFiles.filter(f => f.type === 'video');
        if (titleEl) titleEl.innerText = "Galería de Videos - Omar Fit";
    } else {
        if (titleEl) titleEl.innerText = "Galería Multimedia Completa - Omar Fit";
    }

    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "relative group rounded-xl overflow-hidden border border-brand-border bg-zinc-900 aspect-video cursor-pointer shadow-lg";
        
        // 🔒 EXCLUSIVO PARA EL COACH: Solo si currentUserRole es 'coach' se dibuja el tachito
        let deleteBtnHtml = '';
        if (typeof currentUserRole !== 'undefined' && currentUserRole === 'coach') {
            deleteBtnHtml = `
                <button onclick="event.stopPropagation(); deleteGalleryItem(${index});" class="absolute top-2 right-2 w-8 h-8 bg-black/70 hover:bg-brand-red text-white rounded-lg flex items-center justify-center transition-all z-20 border border-zinc-700 hover:border-brand-red shadow-md" title="Eliminar archivo">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                </button>
            `;
        }

        if (item.type === 'image') {
            card.onclick = () => { closeFullGalleryModal(); openMediaModal('image', item.src, item.title); };
            card.innerHTML = `
                ${deleteBtnHtml}
                <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <span class="absolute bottom-2 left-2 bg-black/80 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md border border-zinc-700 backdrop-blur-md flex items-center space-x-1">
                    <i class="fa-solid fa-camera text-brand-red"></i>
                    <span>Foto</span>
                </span>
            `;
        } else {
            card.innerHTML = `
                ${deleteBtnHtml}
                <video src="${item.src}" muted playsinline preload="metadata" class="w-full h-full object-contain bg-black opacity-90 group-hover:scale-105 transition-transform duration-500"></video>
                <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center" onclick="event.stopPropagation(); openMediaModal('video', '${item.src}', '${item.title}');">
                    <div class="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform glow-red">
                        <i class="fa-solid fa-play text-sm ml-0.5"></i>
                    </div>
                </div>
                <span class="absolute bottom-2 left-2 bg-brand-red text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow flex items-center space-x-1 pointer-events-none">
                    <i class="fa-solid fa-video"></i>
                    <span>Video</span>
                </span>
            `;
        }
        gridContainer.appendChild(card);
    });

    modal.classList.remove('hidden');
}

function closeFullGalleryModal() {
    const m = document.getElementById('modal-full-gallery');
    if(m) m.classList.add('hidden');
}

    // =========================================================
// FUNCIÓN PARA EXPORTAR A CSV (FORMATO EXCEL PERFECTO)
// =========================================================
function exportToCSV() {
    if (studentsList.length === 0) {
        showToast("No hay atletas para exportar.", "fa-triangle-exclamation");
        return;
    }

    // 1. Cabeceras del Excel (Cambiado "ID" por "N°")
    const headers = ["N°", "ATLETA", "CELULAR", "CORREO", "PLAN", "MODALIDAD", "CUOTA (S/)", "VENCIMIENTO", "ESTADO", "NOTA"];
    
    let totalCuotas = 0;
    let alumnosAlDia = 0;
    let alumnosVencidos = 0;

    // 2. Mapeamos la lista de atletas usando 'index + 1' para que cuente cuántos hay (1, 2, 3...)
    const rows = studentsList.map((s, index) => {
        const payInfo = getPaymentStatus(s.dueDate);
        let estadoTexto = "VENCIDO";
        if (payInfo.status === 'paid') {
            estadoTexto = "AL DÍA";
            alumnosAlDia++;
        } else if (payInfo.status === 'warning') {
            estadoTexto = "POR VENCER";
        } else {
            alumnosVencidos++;
        }

        const cuotaVal = parseFloat(s.fee) || 0;
        totalCuotas += cuotaVal;

        const cleanName = (s.name || '').replace(/"/g, '""');
        const cleanPlan = (s.plan || '').replace(/"/g, '""');
        const cleanNote = (s.note || '').replace(/"/g, '""');

        return [
            index + 1, // Número correlativo de orden
            `"${cleanName}"`,
            `"${s.phone || ''}"`,
            `"${s.email || 'Sin correo'}"`,
            `"${cleanPlan}"`,
            `"${s.payType || 'Mensual'}"`,
            cuotaVal.toFixed(2),
            `"${s.dueDate || ''}"`,
            `"${estadoTexto}"`,
            `"${cleanNote}"`
        ].join(";");
    });

    // 3. Agregamos filas de resumen / totales al final de la tabla
    const totalAlumnos = studentsList.length;
    const promedioCuota = totalAlumnos > 0 ? (totalCuotas / totalAlumnos).toFixed(2) : "0.00";

    const summaryRows = [
        "", // Línea en blanco
        `"RESUMEN GENERAL DEL CRM OMAR FIT";"";"";"";"";"";"";"";"";""`,
        `"Total de Atletas Registrados:";"${totalAlumnos}";"Al Día:";"${alumnosAlDia}";"Vencidos/Por Vencer:";"${alumnosVencidos}";"";"";"";""`,
        `"Ingreso Total Estimado (S/):";"${totalCuotas.toFixed(2)}";"Promedio por Cuota (S/):";"${promedioCuota}";"";"";"";"";"";""`
    ];

    const csvContent = headers.join(";") + "\n" + rows.join("\n") + "\n" + summaryRows.join("\n");
    
    const bom = "\uFEFF"; 
    const blob = new Blob([bom + csvContent], { type: "text/csv;charset=utf-8;" });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    const today = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    
    link.setAttribute("href", url);
    link.setAttribute("download", `CRM_OmarFit_Reporte_${dateStr}.csv`);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast("¡Reporte Excel exportado con éxito! 📊", "fa-file-excel");
}
// =========================================================
        // FUNCIÓN PARA CERRAR SESIÓN (NETAMENTE BLINDADA)
        // =========================================================
        function logoutApp() {
            // 1. Borramos todo rastro de almacenamiento local para evitar perfiles cruzados
            localStorage.removeItem('omarfit_logged_id');
            localStorage.removeItem('omarfit_role');
            
            // 2. Limpiamos las variables globales de memoria
            if (typeof currentStudentId !== 'undefined') currentStudentId = null;
            if (typeof currentUserRole !== 'undefined') currentUserRole = null;

            // 3. Cerramos cualquier ventana modal que esté abierta por seguridad
            if (typeof closeStudentSettingsModal === 'function') closeStudentSettingsModal();
            if (typeof closeCoachSettingsModal === 'function') closeCoachSettingsModal();
            
            // 4. Escondemos la App principal (Header y Main)
            const header = document.getElementById('app-header');
            const main = document.getElementById('app-main');
            if (header) header.classList.add('hidden');
            if (main) main.classList.add('hidden');
            
            // 5. Ocultamos a la fuerza el engranaje del coach para que no persista visualmente
            const coachGear = document.getElementById('btn-coach-gear');
            if (coachGear) {
                coachGear.style.setProperty('display', 'none', 'important');
            }

            // 6. Limpiamos las cajas de texto del formulario de login
            const userInput = document.getElementById('login-username');
            const passInput = document.getElementById('login-password');
            if (userInput) userInput.value = '';
            if (passInput) passInput.value = '';
            
            // 7. Aseguramos que se muestre el formulario de Login y no el de Registro
            if (typeof toggleAuthView === 'function') toggleAuthView('login');
            
            // 8. Mostramos de nuevo la pantalla de cristal con el video y efecto prémium
            const loginView = document.getElementById('view-login');
            if (loginView) {
                loginView.classList.remove('hidden');
                setTimeout(() => {
                    loginView.classList.remove('opacity-0');
                }, 50);
            }
            
            // 9. Mensaje de confirmación en pantalla
            if (typeof showToast === 'function') {
                showToast("Sesión cerrada correctamente", "fa-arrow-right-from-bracket");
            }
        }


        function openCoachSettingsModal() {
            const modal = document.getElementById('modal-coach-settings');
            if (modal) modal.classList.remove('hidden');
        }

        function closeCoachSettingsModal() {
            const modal = document.getElementById('modal-coach-settings');
            if (modal) modal.classList.add('hidden');
        }

       async function saveCoachSettings() {
            const passInput = document.getElementById('edit-coach-password').value.trim();
            if (!passInput) {
                showToast("Ingresa una contraseña válida", "fa-triangle-exclamation");
                return;
            }

            try {
                // Ciframos la nueva contraseña con SHA-256
                const hashedCoachPass = await hashPassword(passInput);
                
                // Actualizamos directamente en la tabla admins de Supabase
                const { error } = await supabaseClient
                    .from('admins')
                    .update({ password: hashedCoachPass })
                    .eq('usuario', 'omar');

                if (error) throw error;

                showToast("¡Contraseña de Administrador actualizada en la Nube!", "fa-shield-halved");
                closeCoachSettingsModal();
                document.getElementById('edit-coach-password').value = '';
            } catch (error) {
                console.error("Error guardando clave de coach:", error);
                alert("Hubo un error al actualizar la credencial en Supabase.");
            }
        }

  
        const supabaseUrl = 'https://atjrshlhcsyncklmuncb.supabase.co/';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0anJzaGxoY3N5bmNrbG11bmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwNjc1NjIsImV4cCI6MjEwODY0MzU2Mn0.8IU_T6nf2TTCmDH3oo8O-UVCG1VBJuT_5weopsX1wgg';
        const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
        console.log("¡Cerebro Supabase conectado con éxito al servidor!", supabaseClient);         
    

async function registrarAsistencia() {
    const diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const numeroDia = new Date().getDay(); 
    const diaActual = diasSemana[numeroDia];

    if (diaActual === 'domingo') {
        alert("Hoy es domingo. ¡Ve a descansar!");
        return;
    }

    // ==========================================
    // 🔒 BLOQUEO ANTI-TRAMPA PROFESIONAL
    // ==========================================
    const routine = getStudentRoutine();
    const mapaDiasCorto = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    const diaCortoHoy = mapaDiasCorto[numeroDia];
    
    let exercises = [];
    if (routine[diaCortoHoy]) {
        exercises = routine[diaCortoHoy].exercises || (Array.isArray(routine[diaCortoHoy]) ? routine[diaCortoHoy] : []);
    }
    
    if (exercises.length > 0) {
        const completedCount = exercises.filter(e => e.completed).length;
        const percentage = Math.round((completedCount / exercises.length) * 100);
        
        // Si el porcentaje es menor al 100%, ¡bloqueamos el botón por completo!
        if (percentage < 100) {
            alert(`⚠️ ¡Rutina incompleta (${percentage}%)\n\nPara registrar tu asistencia y completar el entrenamiento, debes marcar todos los ejercicios propuestos por el Coach.`);
            return; // Detiene la ejecución y protege el registro
        }
    }
    

    const boton = document.getElementById('btn-completar-rutina');
    const textoOriginal = boton.innerHTML;
    boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> GUARDANDO...';
    boton.disabled = true;

    try {
        const activeId = (typeof currentStudentId !== 'undefined') ? currentStudentId : 1;

        // Registra la asistencia en Supabase al cumplir el 100%
        const { error: errorUpdate } = await supabaseClient
            .from('alumnos')
            .update({ [diaActual]: true })
            .eq('id', activeId);

        if (errorUpdate) throw errorUpdate;

        boton.innerHTML = '<i class="fa-solid fa-check-double mr-2"></i> ¡RUTINA COMPLETADA!';
        boton.className = "w-full bg-green-600 text-white font-bold py-3.5 rounded-2xl mt-2 cursor-not-allowed opacity-90 shadow-none";
        
        showToast("¡Excelente trabajo! Rutina completada al 100%. 🔥", "fa-fire");
        renderTrainerTable(); // Actualiza el CRM del coach al instante

    } catch (error) {
        console.error("Error al registrar rutina:", error);
        alert("Hubo un problema de conexión al guardar tu entrenamiento.");
        boton.innerHTML = textoOriginal;
        boton.disabled = false;
    }
}

// ==========================================
// CEREBRO: CONSTRUCTOR DINÁMICO DE RUTINAS
// ==========================================
let currentEditDay = 'lun';
let tempRoutineData = {};

// 1. Lógica de Plantilla por defecto vs Personalizada
function getStudentRoutine() {
    let activeId = (typeof currentStudentId !== 'undefined') ? currentStudentId : 1;
    let student = studentsList.find(s => s.id === activeId);
    
    // Si el alumno tiene una rutina guardada en Supabase, ¡la usamos!
    if (student && student.rutina && Object.keys(student.rutina).length > 0) {
        return student.rutina;
    }
    
    // Si no, inyectamos la plantilla por defecto (Tu workoutData original)
    return {
        lun: { tag: "PECHO & TRÍCEPS", exercises: workoutData.lun },
        mar: { tag: "ESPALDA & BÍCEPS", exercises: workoutData.mar },
        mie: { tag: "PIERNA COMPLETA", exercises: workoutData.mie },
        jue: { tag: "HOMBRO & TRAPECIO", exercises: workoutData.jue },
        vie: { tag: "CARDIO & HIIT", exercises: workoutData.vie },
        sab: { tag: "GLÚTEO & FEMORAL", exercises: workoutData.sab }
    };
}

// 2. Abrir Modal del Coach
function openRoutineModal(studentId) {
    document.getElementById('routine-student-id').value = studentId;
    
    // Simulamos la vista del alumno temporalmente para extraer su rutina
    const backupId = currentStudentId; 
    currentStudentId = studentId; 
    
    // Clonamos la rutina exacta (sea personalizada o la plantilla por defecto)
    tempRoutineData = JSON.parse(JSON.stringify(getStudentRoutine()));
    
    currentStudentId = backupId; // Restauramos

    changeRoutineDayEditor('lun');
    const m = document.getElementById('modal-routine-builder');
    if (m) m.classList.remove('hidden');
}

function closeRoutineModal() {
    const m = document.getElementById('modal-routine-builder');
    if (m) m.classList.add('hidden');
}

// 3. Cambiar de día en el editor
function changeRoutineDayEditor(day) {
    saveCurrentDayInputs(); // Guarda lo que estabas escribiendo antes de cambiar de pestaña

    currentEditDay = day;
    document.querySelectorAll('.edit-day-btn').forEach(btn => {
        btn.className = "edit-day-btn px-4 py-2 text-[11px] font-bold rounded-xl bg-zinc-800 text-brand-muted hover:text-white uppercase";
    });
    document.getElementById(`btn-edit-${day}`).className = "edit-day-btn px-4 py-2 text-[11px] font-bold rounded-xl bg-brand-red text-white uppercase";

    const dayData = tempRoutineData[day] || { tag: "", exercises: [] };
    document.getElementById('routine-day-tag').value = dayData.tag;

    renderExerciseEditors(dayData.exercises);
}




// Función para validar el acceso directo contra Supabase
async function validarLoginAlumno(telefonoIngresado, passwordIngresado) {
    try {
        // Consultamos directamente a Supabase al alumno por su teléfono
        const { data: alumnos, error } = await supabaseClient
            .from('alumnos')
            .select('*')
            .eq('telefono', telefonoIngresado);

        if (error) throw error;

        if (!alumnos || alumnos.length === 0) {
            alert("Número de celular no registrado.");
            return false;
        }

        const alumno = alumnos[0];

        // Si el alumno ya creó su contraseña personalizada se usa esa, si no, usa su teléfono por defecto
        const passwordReal = alumno.password ? alumno.password : alumno.telefono;

        // Validamos estrictamente contra la base de datos
        if (passwordIngresado === passwordReal) {
            currentStudentId = alumno.id;
            showToast("¡Bienvenido a Omar Fit!", "fa-user-check");
            
            // AQUÍ LLAMAS A LA FUNCIÓN QUE MUESTRA EL PANEL DEL ALUMNO EN TU APP
            // (por ejemplo: document.getElementById('login-screen').classList.add('hidden'), etc.)
            
            return true;
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
            return false;
        }

    } catch (err) {
        console.error("Error en el login seguro:", err);
        alert("Error de conexión con la base de datos.");
        return false;
    }
}

// 4. Dibujar las cajitas editables de ejercicios
function renderExerciseEditors(exercises) {
    const container = document.getElementById('routine-exercises-container');
    container.innerHTML = '';

    if (exercises.length === 0) {
        container.innerHTML = '<p class="text-xs text-zinc-500 text-center py-4 font-bold">No hay ejercicios. ¡Agrega el primero!</p>';
        return;
    }

    exercises.forEach((ex, index) => {
        const row = document.createElement('div');
        row.className = "bg-[#121215] border border-zinc-800/80 rounded-xl p-3 flex flex-col gap-2 relative shadow-md";
        row.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <span class="text-[10px] font-black text-brand-red uppercase tracking-wider">Ejercicio ${index + 1}</span>
                <button onclick="removeExerciseFromDay(${index})" class="text-zinc-500 hover:text-brand-red transition-colors"><i class="fa-solid fa-trash-can text-sm"></i></button>
            </div>
            <input type="text" class="ex-name w-full bg-[#050506] border border-zinc-800 rounded-lg p-2 text-xs text-white font-bold focus:border-brand-red transition-colors" placeholder="Nombre (Ej. Press de Banca)" value="${ex.name || ''}">
            <div class="grid grid-cols-4 gap-2">
                <div>
                    <label class="text-[9px] text-zinc-500 uppercase font-bold">Series</label>
                    <input type="text" class="ex-sets w-full bg-[#050506] border border-zinc-800 rounded-lg p-2 text-xs text-white focus:border-brand-red" placeholder="Ej. 4 Series" value="${ex.sets || ''}">
                </div>
                <div>
                    <label class="text-[9px] text-zinc-500 uppercase font-bold">Reps</label>
                    <input type="text" class="ex-reps w-full bg-[#050506] border border-zinc-800 rounded-lg p-2 text-xs text-white focus:border-brand-red" placeholder="Ej. 10 - 12" value="${ex.reps || ''}">
                </div>
                <div>
                    <label class="text-[9px] text-zinc-500 uppercase font-bold">Peso</label>
                    <input type="text" class="ex-weight w-full bg-[#050506] border border-zinc-800 rounded-lg p-2 text-xs text-amber-500 font-bold focus:border-brand-red" placeholder="Ej. 70 kg" value="${ex.weight || ''}">
                </div>
                <div>
                    <label class="text-[9px] text-zinc-500 uppercase font-bold">Descanso</label>
                    <input type="text" class="ex-rest w-full bg-[#050506] border border-zinc-800 rounded-lg p-2 text-xs text-emerald-500 font-bold focus:border-brand-red" placeholder="Ej. 90 seg" value="${ex.rest || ''}">
                </div>
            </div>
        `;
        container.appendChild(row);
    });
}

// 5. Capturar lo que el Coach escribe
function saveCurrentDayInputs() {
    const tag = document.getElementById('routine-day-tag').value;
    const container = document.getElementById('routine-exercises-container');
    const rows = container.children;
    
    let newExercises = [];
    if (rows.length > 0 && rows[0].querySelector('.ex-name')) {
        for (let row of rows) {
            newExercises.push({
                id: Math.floor(Math.random() * 10000), // ID único para cada ejercicio
                name: row.querySelector('.ex-name').value, 
                sets: row.querySelector('.ex-sets').value, 
                reps: row.querySelector('.ex-reps').value, 
                weight: row.querySelector('.ex-weight').value, 
                rest: row.querySelector('.ex-rest').value,
                icon: "fa-dumbbell", completed: false
            });
        }
    }
    tempRoutineData[currentEditDay] = { tag: tag, exercises: newExercises };
}

// 6. Agregar y Quitar Ejercicios
function addExerciseToDay() {
    saveCurrentDayInputs();
    if (!tempRoutineData[currentEditDay].exercises) tempRoutineData[currentEditDay].exercises = [];
    tempRoutineData[currentEditDay].exercises.push({ id: Math.floor(Math.random() * 10000), name: "", sets: "", reps: "", weight: "", rest: "", icon: "fa-dumbbell", completed: false });
    renderExerciseEditors(tempRoutineData[currentEditDay].exercises);
}
function removeExerciseFromDay(index) {
    saveCurrentDayInputs();
    tempRoutineData[currentEditDay].exercises.splice(index, 1);
    renderExerciseEditors(tempRoutineData[currentEditDay].exercises);
}

// 7. Guardar en Supabase
async function saveRoutineCoach() {
    saveCurrentDayInputs(); 
    const studentId = document.getElementById('routine-student-id').value;
    
    const botonGuardar = document.querySelector('button[onclick="saveRoutineCoach()"]');
    const textoOriginal = botonGuardar.innerHTML;
    botonGuardar.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Guardando en la Nube...';
    botonGuardar.disabled = true;

    try {
        const { error } = await supabaseClient.from('alumnos').update({ rutina: tempRoutineData }).eq('id', studentId);
        if (error) throw error;
        
        let student = studentsList.find(s => s.id == studentId);
        if (student) student.rutina = tempRoutineData; // Actualizar local

        showToast("¡Rutina personalizada guardada! 🏋️‍♂️", "fa-dumbbell");
        closeRoutineModal();
        
        // Si el coach está viendo el perfil de este alumno, refresca la pantalla en vivo
        if (currentStudentId == studentId && document.getElementById('view-student').style.display !== 'none') {
            selectDay(currentEditDay); 
        }
    } catch (error) {
        console.error("Error guardando rutina:", error);
        alert("Error al guardar la rutina en Supabase.");
    } finally {
        botonGuardar.innerHTML = textoOriginal;
        botonGuardar.disabled = false;
    }
}

// =========================================================
// SISTEMA DE PERSISTENCIA DIARIA DE EJERCICIOS (ANTI-REINICIO)
// =========================================================

// 1. Obtener fecha local exacta (Perú) en formato YYYY-MM-DD
function getTodayLocalString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 2. Generar llave única por Atleta + Fecha de Hoy + Día de Rutina
function getWorkoutStorageKey(day) {
    const studentId = currentStudentId || localStorage.getItem('omarfit_logged_id') || 'guest';
    const today = getTodayLocalString();
    const activeDay = day || currentDay || 'lun';
    return `omarfit_workout_${studentId}_${today}_${activeDay}`;
}

// 3. Guardar en el celular cada vez que el alumno marca/desmarca
function saveExerciseProgressLocal(day, exerciseKey, isCompleted) {
    const storageKey = getWorkoutStorageKey(day);
    let savedProgress = {};
    try {
        savedProgress = JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (e) {
        savedProgress = {};
    }

    if (isCompleted) {
        savedProgress[exerciseKey] = true;
    } else {
        delete savedProgress[exerciseKey];
    }

    localStorage.setItem(storageKey, JSON.stringify(savedProgress));
}

// 4. Sincronizar los ejercicios con la memoria del teléfono antes de dibujar
function syncExercisesWithLocalStorage(day, exercises) {
    if (!Array.isArray(exercises)) return;
    
    const mapaDias = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    const diaRealHoy = mapaDias[new Date().getDay()];

    // Si está viendo un día distinto al de hoy, se muestran desmarcados
    if (day !== diaRealHoy) {
        exercises.forEach(ex => ex.completed = false);
        return;
    }

    const storageKey = getWorkoutStorageKey(day);
    let savedProgress = {};
    try {
        savedProgress = JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (e) {
        savedProgress = {};
    }

    exercises.forEach((ex, idx) => {
        const key = ex.id !== undefined ? ex.id : idx;
        ex.completed = !!savedProgress[key];
    });
}

// 5. Limpiar automáticamente días pasados para no llenar la memoria
function cleanOldWorkoutStorage() {
    const today = getTodayLocalString();
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('omarfit_workout_') && !key.includes(today)) {
            localStorage.removeItem(key);
        }
    });
}

// =========================================================
// RENDERIZAR Y MARCAR EJERCICIOS (CONECTADO A MEMORIA LOCAL)
// =========================================================
function renderExercises(day) {
    const listContainer = document.getElementById('exercise-list');
    if (!listContainer) return;

    // Limpieza ligera de días anteriores
    cleanOldWorkoutStorage();

    const routine = getStudentRoutine();
    let exercises = [];
    
    // Soporta rutinas de todos los formatos
    if (routine && routine[day]) {
        exercises = routine[day].exercises || (Array.isArray(routine[day]) ? routine[day] : []);
    }
    
    listContainer.innerHTML = '';

    const dayTag = document.getElementById('workout-day-tag');
    const btnText = document.getElementById('btn-start-workout-text');
    
    if (routine && routine[day]) {
        const tagText = routine[day].tag || "RUTINA DEL DÍA";
        if (dayTag) dayTag.innerText = tagText;
        if (btnText) btnText.innerText = `INICIAR ENTRENAMIENTO DE HOY - ${tagText}`;
    }

    if (!Array.isArray(exercises)) return;

    // 🔥 SINCRONIZAMOS CON EL LOCALSTORAGE ANTES DE DIBUJAR
    syncExercisesWithLocalStorage(day, exercises);

    const currentActiveIndex = exercises.findIndex(e => !e.completed);

    exercises.forEach((ex, index) => {
        const isActive = (index === currentActiveIndex);
        const exKey = ex.id !== undefined ? ex.id : index;
        const card = document.createElement('div');
        
        let cardStyles = '';
        if (ex.completed) cardStyles = 'bg-emerald-900/10 border-emerald-500/30 opacity-60';
        else if (isActive) cardStyles = 'bg-[#15151a] border-brand-red/60 shadow-[0_0_15px_rgba(255,30,39,0.2)]';
        else cardStyles = 'bg-[#101014] border-zinc-800/80 hover:border-brand-red/40 shadow-sm';

        card.className = `p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${cardStyles}`;
        card.innerHTML = `
            ${isActive ? '<div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"></div>' : ''}
            <div class="flex items-center space-x-4 flex-1 cursor-pointer pl-1" onclick="toggleExercise(${exKey})">
                <div class="${ex.completed ? 'w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'w-6 h-6 rounded-full border-2 border-zinc-600 flex items-center justify-center group-hover:border-brand-red transition-colors'} shrink-0">
                    ${ex.completed ? '<i class="fa-solid fa-check text-[10px] font-black"></i>' : ''}
                </div>
                <div class="flex-1 py-1">
                    <div class="flex items-center justify-between">
                        <h4 class="text-sm font-black text-white ${ex.completed ? 'line-through text-zinc-500' : 'group-hover:text-brand-red transition-colors'}">${ex.name}</h4>
                        ${isActive ? '<span class="text-[9px] bg-brand-red text-white font-black px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">En curso</span>' : ''}
                    </div>
                    <div class="flex flex-wrap items-center gap-2 mt-1.5">
                        <span class="text-[10px] bg-brand-redDark/20 border border-brand-red/20 text-brand-red font-bold px-2 py-0.5 rounded flex items-center"><i class="fa-solid ${ex.icon || 'fa-dumbbell'} mr-1"></i>${ex.sets || '-'}</span>
                        <span class="text-[10px] bg-zinc-800 text-zinc-300 font-bold px-2 py-0.5 rounded">${ex.reps || '-'}</span>
                        <span class="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold px-2 py-0.5 rounded flex items-center"><i class="fa-solid fa-weight-hanging mr-1"></i>${ex.weight || '-'}</span>
                        <span class="text-[10px] text-zinc-500 flex items-center font-medium"><i class="fa-regular fa-clock mr-1"></i>${ex.rest || '-'}</span>
                    </div>
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
    updateWorkoutProgress();
}

function toggleExercise(idOrIndex) {
    const mapaDias = ['domingo', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    const diaRealHoy = mapaDias[new Date().getDay()];

    if (currentDay !== diaRealHoy) {
        showToast("Solo puedes marcar los ejercicios de hoy.", "fa-lock");
        return; 
    }

    const routine = getStudentRoutine();
    let exercises = [];
    if (routine && routine[currentDay]) {
        exercises = routine[currentDay].exercises || (Array.isArray(routine[currentDay]) ? routine[currentDay] : []);
    }
    
    if (!Array.isArray(exercises)) return;

    // Primero aseguramos que el arreglo tenga el estado actual del localStorage
    syncExercisesWithLocalStorage(currentDay, exercises);

    // Buscamos por ID o por índice
    let ex = exercises.find((item, idx) => (item.id !== undefined ? item.id === idOrIndex : idx === idOrIndex));
    
    if (ex) {
        ex.completed = !ex.completed;
        
        // 🔥 GUARDAMOS INSTANTÁNEAMENTE EN EL TELÉFONO DEL ATLETA
        saveExerciseProgressLocal(currentDay, idOrIndex, ex.completed);

        renderExercises(currentDay);
        
        if (ex.completed) startRestTimer(90);
        else closeRestTimer();
    }
}


// ==========================================
// MÓDULO DE PROGRESOS Y GRÁFICAS (CHART.JS)
// ==========================================
let progressChartInstance = null;

// 1. Abrir Modal de Progresos (Para el Coach)
function openProgressModal(id) {
    document.getElementById('progress-student-id').value = id;
    
    // Limpiar campos
    ['mes', 'peso', 'sentadilla', 'banca', 'muerto', 'pendulo', 'ext'].forEach(f => {
        document.getElementById(`prog-${f}`).value = '';
    });
    
    // Poner el mes actual por defecto
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const fecha = new Date();
    document.getElementById('prog-mes').value = `${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;

    document.getElementById('modal-progress').classList.remove('hidden');
}

function closeProgressModal() {
    document.getElementById('modal-progress').classList.add('hidden');
}
// ==========================================
// GUARDAR RÉCORDS (ANTI-CORRUPCIÓN DE DATOS)
// ==========================================
async function saveProgressRecord() {
    const idStr = document.getElementById('progress-student-id').value;
    const id = parseInt(idStr); // Aseguramos que sea número
    const student = studentsList.find(s => s.id === id);
    if (!student) return;

    const btn = document.querySelector('button[onclick="saveProgressRecord()"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Guardando...';
    btn.disabled = true;

    const nuevoRegistro = {
        mes: document.getElementById('prog-mes').value,
        peso_corporal: parseFloat(document.getElementById('prog-peso').value) || null,
        sentadilla: parseFloat(document.getElementById('prog-sentadilla').value) || null,
        banca: parseFloat(document.getElementById('prog-banca').value) || null,
        muerto: parseFloat(document.getElementById('prog-muerto').value) || null,
        pendulo: parseFloat(document.getElementById('prog-pendulo').value) || null,
        ext: parseFloat(document.getElementById('prog-ext').value) || null
    };

    // 1. ASPIRADORA DE DATOS: Limpiamos cualquier historial corrupto
    let historialLimpio = [];
    if (typeof student.progresos === 'string') {
        try { historialLimpio = JSON.parse(student.progresos); } catch(e) {}
    } else if (Array.isArray(student.progresos)) {
        historialLimpio = student.progresos;
    }
    
    // Aplanamos y filtramos para eliminar basura (letras sueltas o nulos)
    historialLimpio = historialLimpio.flat(Infinity).filter(item => 
        typeof item === 'object' && item !== null && !Array.isArray(item) && item.mes
    );

    // 2. Añadimos el nuevo registro válido
    historialLimpio.push(nuevoRegistro);

    try {
        // 3. Subimos la lista limpia a Supabase
        const { error } = await supabaseClient.from('alumnos').update({ progresos: historialLimpio }).eq('id', id);
        
        if (error) {
            console.error("Error de Supabase:", error);
            throw error;
        }

        // 4. Actualizamos la memoria
        student.progresos = historialLimpio;
        
        closeProgressModal();
        showToast("¡Récords actualizados en la Nube!", "fa-chart-line");
        
        // 5. Refrescamos la pantalla si el Coach está viendo a este mismo alumno
        if (currentStudentId === id) {
            syncStudentView(id);
        }
    } catch (error) {
        console.error("Error completo:", error);
        alert("Fallo al guardar: " + (error.message || "Revisa la consola."));
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}


// ==========================================
// 3. Dibujar Gráfica de Barras Brillantes + Tachito de Basura del Coach (ULTIMA REVISIÓN)
// ==========================================
function renderProgressChart(historial, studentId) {
    try {
        const canvas = document.getElementById('progressChart');
        const emptyState = document.getElementById('chart-empty-state');
        const chartContainer = document.getElementById('chart-container');
        
        if (!canvas || !emptyState || !chartContainer) return;

        // 1. Extraer y limpiar los datos de 'progresos' y sus índices reales
        let rawData = [];
        if (typeof historial === 'string') {
            try { rawData = JSON.parse(historial); } catch(e) { rawData = []; }
        } else if (Array.isArray(historial)) {
            rawData = historial;
        }
        
        const historialPlano = rawData.flat(Infinity).map((item, originalIndex) => {
            if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
                return { ...item, _originalIndex: originalIndex };
            }
            return null;
        }).filter(item => item !== null);
        
        // 2. Filtrar solo los registros que tengan al menos 1 peso válido
        const historialValido = historialPlano.filter(h => {
            return (parseFloat(h.sentadilla) > 0) || 
                   (parseFloat(h.muerto) > 0) || 
                   (parseFloat(h.banca) > 0) || 
                   (parseFloat(h.pendulo) > 0) || 
                   (parseFloat(h.ext) > 0);
        });

        // 3. GESTIÓN DEL CONTENEDOR DE BORRADO PARA EL COACH (DEBAJO DE LA GRÁFICA)
        let coachDeleteList = document.getElementById('coach-delete-records-list');
        if (!coachDeleteList) {
            coachDeleteList = document.createElement('div');
            coachDeleteList.id = 'coach-delete-records-list';
            coachDeleteList.className = 'mt-4 space-y-2';
            chartContainer.parentNode.appendChild(coachDeleteList);
        }
        coachDeleteList.innerHTML = '';

        if (historialValido.length === 0) {
            chartContainer.style.display = 'none';
            chartContainer.classList.add('hidden');
            emptyState.style.display = 'flex';
            emptyState.classList.remove('hidden');
            coachDeleteList.style.display = 'none';
            return; 
        } else {
            emptyState.style.display = 'none';
            emptyState.classList.add('hidden');
            chartContainer.style.display = 'block';
            chartContainer.classList.remove('hidden');
            coachDeleteList.style.display = 'block';
        }

        // 4. SI ES EL COACH, RENDERIZAMOS LA LISTA DE GESTIÓN CON TACHITO
        if (typeof currentUserRole !== 'undefined' && currentUserRole === 'coach' && studentId) {
            const titleHtml = document.createElement('div');
            titleHtml.className = 'text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center justify-between px-1';
            titleHtml.innerHTML = `<span>Gestión de Récords (Coach)</span><span>Acciones</span>`;
            coachDeleteList.appendChild(titleHtml);

            historialValido.forEach((reg) => {
                const rowItem = document.createElement('div');
                rowItem.className = 'bg-[#15151a] border border-zinc-800 p-3 rounded-xl flex items-center justify-between text-xs text-white shadow-sm';
                rowItem.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="font-black text-brand-red">${reg.mes || 'Mes'}</span>
                        <span class="text-zinc-400">Sq: ${reg.sentadilla || 0}kg | Muerto: ${reg.muerto || 0}kg | Banca: ${reg.banca || 0}kg</span>
                    </div>
                `;

                const btnDelete = document.createElement('button');
                btnDelete.className = 'bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-3 py-1.5 rounded-lg font-bold transition-all border border-red-500/20 flex items-center gap-1.5';
                btnDelete.innerHTML = `<i class="fa-solid fa-trash-can text-xs"></i> Borrar`;
                btnDelete.onclick = () => confirmDeleteProgress(studentId, reg._originalIndex);
                
                rowItem.appendChild(btnDelete);
                coachDeleteList.appendChild(rowItem);
            });
        }

        // 5. Renderizado de Chart.js
        setTimeout(() => {
            if (typeof progressChartInstance !== 'undefined' && progressChartInstance !== null) {
                progressChartInstance.destroy();
            }

            const registrosRecientes = historialValido.slice(-2);
            const ctx = canvas.getContext('2d');
            const labels = registrosRecientes.map(h => h.mes || 'Mes');
            
            const createBarGradient = (colorTop, colorBottom) => {
                const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                gradient.addColorStop(0, colorTop);
                gradient.addColorStop(1, colorBottom);
                return gradient;
            };

            const datasets = [
                { label: 'Sentadilla', data: registrosRecientes.map(h => parseFloat(h.sentadilla) || null), backgroundColor: createBarGradient('#ff1e27', '#4a0005'), borderRadius: 6, barPercentage: 0.7, categoryPercentage: 0.8 },
                { label: 'Peso Muerto', data: registrosRecientes.map(h => parseFloat(h.muerto) || null), backgroundColor: createBarGradient('#10b981', '#064e3b'), borderRadius: 6, barPercentage: 0.7, categoryPercentage: 0.8 },
                { label: 'Press Banca', data: registrosRecientes.map(h => parseFloat(h.banca) || null), backgroundColor: createBarGradient('#3b82f6', '#1e3a8a'), borderRadius: 6, barPercentage: 0.7, categoryPercentage: 0.8 },
                { label: 'Péndulo', data: registrosRecientes.map(h => parseFloat(h.pendulo) || null), backgroundColor: createBarGradient('#f59e0b', '#78350f'), borderRadius: 6, barPercentage: 0.7, categoryPercentage: 0.8 },
                { label: 'Extensiones', data: registrosRecientes.map(h => parseFloat(h.ext) || null), backgroundColor: createBarGradient('#f59e0b', '#78350f'), borderRadius: 6, barPercentage: 0.7, categoryPercentage: 0.8 }
            ];

            const datasetsFiltrados = datasets.filter(ds => ds.data.some(val => val !== null && val > 0));

            Chart.defaults.color = '#a1a1aa'; 
            Chart.defaults.font.family = "'Montserrat', sans-serif";
            
            progressChartInstance = new Chart(ctx, {
                type: 'bar',
                data: { labels: labels, datasets: datasetsFiltrados },
                plugins: typeof ChartDataLabels !== 'undefined' ? [ChartDataLabels] : [], 
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: { padding: { top: 35 } },
                    interaction: { mode: 'index', intersect: false },
                    plugins: {
                        legend: { display: false },
                        tooltip: { backgroundColor: 'rgba(9, 9, 11, 0.95)', titleColor: '#fff', bodyColor: '#a1a1aa', borderColor: '#ff1e27', borderWidth: 1, padding: 12, usePointStyle: true, boxPadding: 6 },
                        datalabels: {
                            color: '#ffffff', anchor: 'end', align: 'top', offset: 4, textAlign: 'center', font: { weight: 'black', size: 9 },
                            formatter: function(value, context) {
                                if (!value) return '';
                                return [context.dataset.label, value + ' kg'];
                            }
                        }
                    },
                    scales: {
                        y: { grid: { color: 'rgba(39, 39, 42, 0.2)', drawBorder: false }, border: { display: false }, beginAtZero: true, grace: '10%' },
                        x: { grid: { display: false, drawBorder: false }, ticks: { font: { weight: 'black', size: 11 }, color: '#fff' } }
                    }
                }
            });
        }, 100); 
    } catch(err) {
        console.error("Error crítico al dibujar la gráfica: ", err);
    }
}

// =========================================================
// CONFIRMAR Y ELIMINAR REGISTRO DE PROGRESO (SOLO COACH)
// =========================================================
async function confirmDeleteProgress(studentId, progressIndex) {
    if (currentUserRole !== 'coach') {
        showToast("Acción no autorizada", "fa-triangle-exclamation");
        return;
    }

    const confirmDelete = confirm("¿Estás seguro de eliminar este registro de progreso erróneo?");
    if (!confirmDelete) return;

    try {
        const student = studentsList.get ? studentsList.find(s => s.id === studentId) : studentsList.find(s => s.id === studentId);
        if (!student) throw new Error("Atleta no encontrado");

        let progresosLimpios = [];
        if (typeof student.progresos === 'string') {
            try { progresosLimpios = JSON.parse(student.progresos || '[]'); } catch(e) { progresosLimpios = []; }
        } else if (Array.isArray(student.progresos)) {
            progresosLimpios = [...student.progresos];
        }

        // 🔪 Eliminamos quirúrgicamente usando el índice real exacto (_originalIndex)
        progresosLimpios.splice(progressIndex, 1);

        // Actualizamos en Supabase en la tabla 'alumnos' y columna 'progresos'
        const { error } = await supabaseClient
            .from('alumnos')
            .update({ progresos: progresosLimpios })
            .eq('id', studentId);

        if (error) throw error;

        student.progresos = progresosLimpios;

        // Refrescamos la vista del alumno y la tabla del coach
        if (typeof syncStudentView === 'function') {
            syncStudentView(studentId);
        }
        if (typeof renderTrainerTable === 'function') {
            renderTrainerTable();
        }

        showToast("Registro eliminado correctamente", "fa-trash-can");

    } catch (err) {
        console.error("Error al eliminar el progreso:", err);
        showToast("Error al eliminar el registro", "fa-circle-xmark");
    }
}

// ==========================================
// MÓDULO QR (ESCANÉO Y GENERACIÓN)
// ==========================================
let html5QrCode = null;

async function openQRScanner() {
    const modal = document.getElementById('modal-qr-scanner');
    if (modal) modal.classList.remove('hidden');

    // 1. Limpiamos cualquier instancia previa de forma segura
    if (html5QrCode) {
        try {
            await html5QrCode.stop();
            html5QrCode.clear();
        } catch (err) {
            console.log("Limpiando escáner previo:", err);
        }
        html5QrCode = null;
    }

    // 2. Inicializamos la instancia limpia apuntando al elemento correcto
    html5QrCode = new Html5Qrcode("qr-reader");

    // 3. Configuración optimizada con qrbox dinámico para lectura fluida en móviles
    const config = {
        fps: 15,
        qrbox: (viewfinderWidth, viewfinderHeight) => {
            let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
            let qrBoxSize = Math.floor(minEdgeSize * 0.7);
            return { width: qrBoxSize, height: qrBoxSize };
        }
    };

    try {
        await html5QrCode.start(
            { facingMode: "environment" }, // <--- Fuerza la cámara trasera
            config, 
            onScanSuccess,
            (errorMessage) => {
                // Errores de lectura por cada frame (se ignoran para no saturar la consola)
            }
        );
    } catch (err) {
        console.warn("Error al iniciar la cámara o permisos denegados:", err);
        if (err && err.toString().includes("NotAllowedError")) {
            showToast("⚠️ Habilita los permisos de cámara en tu dispositivo.", "fa-triangle-exclamation");
        } else {
            showToast("⚠️ No se pudo acceder a la cámara trasera.", "fa-triangle-exclamation");
        }
    }
}

async function closeQRScanner() {
    const modal = document.getElementById('modal-qr-scanner');
    if(modal) modal.classList.add('hidden');
    
    if (html5QrCode) {
        try {
            await html5QrCode.stop();
            html5QrCode.clear();
        } catch (error) {
            console.error("Error al cerrar la cámara:", error);
        } finally {
            html5QrCode = null;
        }
    }
}

function onScanFailure(error) {
    // Silencioso para evitar saturar la consola
}

// ==========================================
// SINTETIZADOR DE AUDIO NATIVO (BEEP / ALARMA)
// ==========================================
function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        if (type === 'success') {
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } else {
            osc.frequency.setValueAtTime(250, ctx.currentTime);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        }
    } catch(e) {
        console.log("Audio no soportado por políticas del navegador");
    }
}

// ==========================================
// CORREGIDO: QR GRANDE Y NITIDO PARA VERCEL Y APK
// ==========================================
async function openStudentQRModal() {
    const student = studentsList.find(s => s.id === currentStudentId);
    if (!student) return;
    
    document.getElementById('qr-student-name').innerText = student.name;
    document.getElementById('qr-student-plan').innerText = student.plan;
    
    const firmaSecreta = await hashPassword(student.id + "_omarfit_key_" + student.phone);
    const contenidoQR = `OMARFIT_${student.id}_${firmaSecreta}`;
    
    const qrImg = document.getElementById('student-qr-img');
    // Aumentado a 400x400 para alta definición en cualquier pantalla
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(contenidoQR)}`;
    
    // Forzamos clases responsivas limpias para que el contenedor ocupe buen espacio visual
    qrImg.className = "w-full h-auto max-w-[240px] aspect-square mx-auto rounded-xl bg-white p-3 shadow-lg object-contain";
    
    document.getElementById('modal-student-qr').classList.remove('hidden');
}

function closeStudentQRModal() {
    document.getElementById('modal-student-qr').classList.add('hidden');
}

// ==========================================
// ESCANEO INTELIGENTE ÚNICO Y DEFINITIVO (DÍAS DE LA SEMANA)
// ==========================================
async function onScanSuccess(decodedText, decodedResult) {
    if (html5QrCode) {
        try {
            await html5QrCode.stop();
            html5QrCode.clear();
        } catch (e) {
            console.log("Error al detener tras éxito:", e);
        }
        html5QrCode = null;
    }
    
    if (!decodedText.startsWith("OMARFIT_")) {
        playSound('error');
        alert("⚠️ Código QR falso o no pertenece a la app Omar Fit.");
        closeQRScanner();
        return;
    }

    const partes = decodedText.split("_");
    const scannedId = parseInt(partes[1]);

    const student = studentsList.find(s => s.id === scannedId);
    if (!student) {
        playSound('error');
        alert(`❌ Alumno no encontrado en la base de datos (ID: ${scannedId})`);
        closeQRScanner();
        return;
    }
    
    try {
        const diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
        const hoyIndex = new Date().getDay(); 
        const diaActual = diasSemana[hoyIndex];

        if (diaActual === 'domingo') {
            playSound('error');
            alert(`⚠️ Hoy es domingo, no hay control de asistencia programado.`);
            closeQRScanner();
            return;
        }

        // Supabase espera un valor booleano (true) en estas columnas
        const objetoActualizacion = {};
        objetoActualizacion[diaActual] = true;

        const { error: updateError } = await supabaseClient
            .from('alumnos')
            .update(objetoActualizacion)
            .eq('id', scannedId);

        if (updateError) {
            console.error("DETALLE DE SUPABASE (ASISTENCIA DÍA):", updateError);
            alert(`⚠️ Error al registrar asistencia: ${updateError.message}`);
            closeQRScanner();
            return;
        }

        // Actualizamos estado local
        student[diaActual] = true;
        
        if (typeof syncStudentView === 'function') syncStudentView(scannedId);
        if (typeof renderTrainerTable === 'function') renderTrainerTable();

    } catch (dbErr) {
        console.error("Error crítico al registrar asistencia:", dbErr);
    }

    playSound('success');
    speakWelcome(student.name); 
    alert(`✅ ¡Asistencia registrada (${student.name}) para hoy!`);
    closeQRScanner();
}

// ==========================================
// CORREGIDO: SINTETIZADOR DE VOZ INTELIGENTE
// ==========================================
function speakWelcome(studentName) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Detiene cualquier audio anterior para evitar bloqueos
        
        const text = `Bienvenido ${studentName}, a darle con todo con el entrenador Omar.`;
        const utterance = new SpeechSynthesisUtterance(text);
        
        utterance.lang = 'es-LA'; // Configurado en español latino para compatibilidad total con móviles
        utterance.rate = 1.0;     // Velocidad natural de lectura
        utterance.pitch = 1.0;    // Tono normal
        
        // Forzar la carga de voces en algunos navegadores móviles que lo requieren
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Speech synthesis no soportado en este navegador.");
    }
}

// ==========================================
// FUNCIÓN PARA REDIRIGIR AL WHATSAPP DEL COACH
// ==========================================
function enviarRecuperacionWhatsApp() {
    const userInput = document.getElementById('login-username');
    const valorUsuario = userInput ? userInput.value.trim() : "";
    let textoMensaje = "Hola Coach Omar, olvidé mi contraseña en la app Omar Fit y necesito ayuda para restablecerla.";
    if (valorUsuario) {
        textoMensaje += ` Mi usuario o celular registrado es: ${valorUsuario}`;
    }
    const urlWhatsApp = `https://wa.me/51914774277?text=${encodeURIComponent(textoMensaje)}`;
    window.open(urlWhatsApp, '_blank');
}


// ==========================================
// CARGAR NUEVOS ARCHIVOS CON LÍMITE DE PESO (OPTIMIZADO)
// ==========================================
    function handleNewMediaUpload(event, mediaType) {
    const file = event.target.files[0];
    if (!file) return;

    // 🔒 LÍMITE DE SEGURIDAD: 
    // Si es video, limitamos a 15 MB máximo para que la app no se vuelva lenta.
    // Si es foto, limitamos a 5 MB.
    const maxSizeMB = mediaType === 'video' ? 15 : 5;
    const fileSizeMB = file.size / (1024 * 1024);

    if (fileSizeMB > maxSizeMB) {
        alert(`⚠️ El archivo es demasiado pesado (${fileSizeMB.toFixed(1)} MB).\nPor rendimiento de la app, el límite máximo es de ${maxSizeMB} MB.`);
        event.target.value = ''; // Limpiamos el input
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const fileUrl = e.target.result; 
        
        const nuevoMedio = {
            type: mediaType,
            src: fileUrl,
            title: mediaType === 'image' ? 'Foto de Asesoría Omar Fit' : 'Video de Entrenamiento Omar Fit'
        };

        if (typeof galleryFiles !== 'undefined') {
            galleryFiles.unshift(nuevoMedio);
        }

        const fullGalleryModal = document.getElementById('modal-full-gallery');
        if (fullGalleryModal && !fullGalleryModal.classList.contains('hidden')) {
            openFullGalleryModal('all'); 
        }

        if (typeof showToast === 'function') {
            showToast(mediaType === 'image' ? "¡Foto añadida con éxito! 📸" : "¡Video optimizado y añadido! 🎥", "fa-circle-check");
        }
    };

    reader.readAsDataURL(file);
    event.target.value = '';
}

function deleteGalleryItem(index) {
    // Doble validación de seguridad por si acaso
    if (typeof currentUserRole !== 'undefined' && currentUserRole !== 'coach') {
        showToast("Acción no autorizada.", "fa-lock");
        return;
    }

    if (confirm("¿Estás seguro de eliminar este archivo multimedia de la galería?")) {
        galleryFiles.splice(index, 1);
        openFullGalleryModal('all');
        showToast("Archivo eliminado de la galería 🗑️", "fa-trash-can");
    }
}
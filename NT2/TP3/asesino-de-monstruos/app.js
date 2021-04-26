new Vue({

    el: '#app',

    data: {

        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
        valorCuracion: 10,
        limiteInferiorCuracion: 90,
        limiteSuperiorCuracion: 100,
        valorSaludDerrota: 0,

    },

    methods: {

        getSalud(salud) {
            return `${salud}%`
        },

        empezarPartida: function () {
            this.hayUnaPartidaEnJuego = true
            this.saludJugador = 100
            this.saludMonstruo = 100
            this.turnos = []
        },

        atacar: function () {
            var dmg = this.calcularHeridas(this.rangoAtaque)
            this.saludMonstruo -= dmg
            this.registrarEvento('atacar', dmg)
            this.ataqueDelMonstruo()
            this.verificarGanador()
        },

        ataqueEspecial: function () {
            var dmg = this.calcularHeridas(this.rangoAtaqueEspecial)
            this.saludMonstruo -= dmg
            this.registrarEvento('ataqueEspecial', dmg)
            this.ataqueDelMonstruo()
            this.verificarGanador()
        },

        curar: function () {
            if (this.saludJugador <= this.limiteInferiorCuracion) {
                this.saludJugador += this.valorCuracion
            } else {
                this.saludJugador = this.limiteSuperiorCuracion
            }
            this.registrarEvento('curar')
            this.ataqueDelMonstruo()
            this.verificarGanador()
        },

        registrarEvento(evento, valor) {
            switch (evento) {
                case 'atacar':
                    this.turnos.unshift({
                        esJugador: true,
                        text: 'El jugador golpea al monstruo por ' + valor
                    })
                    break
                case 'ataqueEspecial':
                    this.turnos.unshift({
                        esJugador: true,
                        text: 'El jugador ejecuta su ataque especial y golpea al monstruo por ' + valor
                    })
                    break
                case 'curar':
                    this.turnos.unshift({
                        esJugador: true,
                        text: 'El jugador se ha curado. Ahora su puntuacion de salud es de ' + this.saludJugador
                    })
                    break
                case 'ataqueDelMonstruo':
                    this.turnos.unshift({
                        esJugador: false,
                        text: 'El monstruo golpea al jugador por ' + valor
                    })
                    break
            }
        },

        terminarPartida: function () {
            this.hayUnaPartidaEnJuego = false
        },

        ataqueDelMonstruo: function () {
            var dmg = this.calcularHeridas(this.rangoAtaqueDelMonstruo)
            this.saludJugador -= dmg
            this.registrarEvento('ataqueDelMonstruo', dmg)
            this.verificarGanador()
        },

        calcularHeridas: function (rango) {
            return Math.max(Math.floor(Math.random() * rango[1]) + 1, rango[0])
        },

        verificarGanador: function () {
            if (this.saludMonstruo <= this.valorSaludDerrota) {
                if (confirm('Ganaste! Jugas de nuevo?')) {
                    this.empezarPartida()
                } else {
                    this.terminarPartida()
                }
                return true
            } else if (this.saludJugador <= this.valorSaludDerrota) {
                if (confirm('Perdiste! Jugas de nuevo?')) {
                    this.empezarPartida()
                } else {
                    this.terminarPartida()
                }
                return true
            }
            return false;
        },

        cssEvento(turno) {
            //Este return de un objeto es porque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible que en el codigo HTML.
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        }

    }

});
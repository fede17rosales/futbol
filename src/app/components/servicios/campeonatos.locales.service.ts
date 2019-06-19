import { Injectable } from '@angular/core';


@Injectable()

export class CampeonatosLocales {

    constructor() {
        console.log('Campeonatos locales listos para usar!');
    }


    private locales: Locales [] = [
        {   nombre: 'Superliga',
            sede: 'Argentina',
            img: 'assets/img/locales/superliga.png',
            imgtrofeo: 'assets/img/locales/trofeo1.png',
            historia: 'La Primera División de Argentina, llamada oficialmente Campeonato de Primera División «Superliga», o simplemente Superliga Argentina (Superliga Quilmes Clásica por motivos de patrocinio),a partir de la temporada 2017-18, es el torneo de la primera categoría del fútbol argentino, organizado por el ente homónimo, que se maneja con autonomía y con su propio estatuto,aunque vinculado contractualmente a la Asociación del Fútbol Argentino, institución que organizó el certamen desde su creación hasta la temporada 2016-17. Es el máximo escalón del sistema de competiciones de dicho deporte en el país.',
            fundacion: '1891',
            campeonActual: 'Racing Club (2018/2019)',
            campeones: ['River Plate (36)',
                        'Boca Juniors (33)',
                        'Racing Club (18)',
                        'Independiente (16)',
                        'San Lorenzo (15)',
                        'Vélez Sarsfield (10)',
                        'Estudiantes de La Plata (6)',
                        'Newells Old Boys (6)',
                        'Huracán (5)',
                        'Rosario Central (3)',
                        'Argentinos Juniors (2)',
                        'Lanús (1)',
                        'Banfield (1)',
                        'Arsenal (1)',
            ] ,
            goleadores: [       'Arsenio Erico (295): Independiente - Huracán',
                                'Ángel Labruna (293): River Plate',
                                'Herminio Masantonio (256): Huracán - Banfield',
                                'Manuel Pelegrina (245): Estudiantes de La Plata - Huracán',
                                'Martín Palermo (236): Estudiantes de La Plata - Boca Juniors',
                                'José Sanfilippo (226): San Lorenzo - Boca Juniors - Banfield',
                                'Ricardo Infante (217): Estudiantes de La Plata - Huracán - Gimnasia y Esgrima La Plata',
                                'Oscar Más (215): River Plate - Quilmes - Sarmiento - Mariano Moreno - Huracán Las Heras',
                                'Bernabé Ferreyra (206): Tigre - River Plate',
                                'Carlos Bianchi (206): Vélez Sarsfield'],
            entrenadores: ['Carlos Bianchi(7): 1993(C)-1995(A)-1996(C)-1998(A)-1999(C)-2000(A)-2003(A)',
                            'Ramón Ángel Díaz(7): 1996(A)-1997(C)-1997(A)-1999(A)-2002(C)-2007(C)-2014(F)',
                            'Ángel Labruna(7): 1971(N)-1975(M)-1975(N)-1977(M)-1979(M)-1979(N)-1980(M)',
                            'José María Minella(6): 1947 - 1952 - 1955 - 1957',
                            'Américo Gallego(4): 1994(A)-2000(C)-2002(A)-2004(A)',
                            'Ricardo Gareca(4): 2009(C)-2011(C)-2012(I)-2012/13',
                            'Juan Carlos Lorenzo(4): 1972(M)-1972(N)-1976(M)-1976(N)'
                        ]
                        },
        {   nombre: 'Copa de la Superliga Argentina',
            sede: 'Argentina',
            img: 'assets/img/locales/copasuperliga.png',
            imgtrofeo: 'assets/img/locales/trofeo2.png',
            historia: 'La Copa de la Superliga Argentina es un torneo oficial organizado por el ente homónimo en representación de la Asociación del Fútbol Argentino, que se agrega a las copas nacionales en disputa. La juegan los equipos que participen del campeonato de Primera División.            La primera edición se jugó por eliminación directa y los seis primeros de la tabla final de posiciones clasificaron directamente a los octavos de final, mientras que los veinte restantes disputaron una ronda preliminar. La primera fase, los octavos, cuartos y semifinales fueron de ida y vuelta, y la final se jugó a partido único, en cancha neutral.Por su parte, la prevista segunda edición cambiará el formato de disputa, con los 24 equipos que participen del torneo regular 2019-20 divididos en dos zonas de 12 cada una, que jugarán mediante el sistema de todos contra todos a una sola rueda. Asimismo, se postergó la decisión sobre la posibilidad de jugar clásicos interzonales y no quedó establecido cómo se disputará la final del torneo, si clasificarán los dos primeros o se organizará un cuadrangular entre los dos mejor ubicados de cada zona.El campeón obtiene una plaza para la Copa Libertadores, mientras que el subcampeón clasifica a la Copa Sudamericana.',
            fundacion: '2018',
            campeonActual: 'Tigre (2019)',
            campeones: ['Tigre (1)',
            ] ,
            goleadores: ['Javier Toledo (6): Atlético Tucumán'],
            entrenadores: ['Nestor Gorosito: 2019'],
        },
        {   nombre: 'Copa Argentina',
            sede: 'Argentina',
            img: 'assets/img/locales/copaargentina.png',
            imgtrofeo: 'assets/img/locales/trofeo3.png',
            historia: 'La Copa Argentina es un torneo oficial organizado por la Asociación del Fútbol Argentino, que se juega por el sistema de eliminación directa, cuyo ganador obtiene la clasificación para la Copa Libertadores y participa de la disputa de la Supercopa Argentina. ',
            fundacion: '1969',
            campeonActual: 'Rosario Central(2018)',
            campeones: ['Boca Juniors (3)',
                        'River Plate (2)',
                        'Rosario Central (1)',
                        'Arsenal (1)',
                        'Huracán (1)',
                        ] ,

            goleadores: ['Ramon Ábila (12): Huracán - Boca Junios',
                                'Martín Cauteruccio (11): San Lorenzo',
                                'Ignacio Scocco (9): River Plate',
                                'Marco Ruben (8): Rosario Central',
                                'Nicolás Blandi (8): San Lorenzo',
                                'Lucas Alario (8): Colon - River Plante '],
            entrenadores: ['Marcelo Gallardo(2): 2016 - 2017',
                            'Julio César Falcioni(1): 2012',
                            'Gustavo Alfaro(1): 2013',
                            'Aduardo Domínguez(1): 2014',
                            'Rodolfo Arruabarrena(1): 2015',
                            'Edgardo Bauza(1): 2018'],
                            },
        {   nombre: 'Supercopa Argentina',
            sede: 'Argentina',
            img: 'assets/img/locales/supercopaargentina.png',
            imgtrofeo: 'assets/img/locales/trofeo4.png',
            historia: 'La Supercopa Argentina es una competición oficial de fútbol, organizada por la Asociación de Fútbol Argentino desde 2012. Se juega a un solo encuentro, en cancha neutral, que, de ser necesario, se desempata con tiros desde el punto penal. En las distintas temporadas enfrentó al campeón de la Copa Argentina con otro equipo proveniente del certamen de Primera División. En el caso de que un mismo equipo gane tanto la copa como el campeonato, su rival será el subcampeón de este último.',
            fundacion: '2012',
            campeonActual: 'Boca Juniors(2019)',
            campeones: [
                'Arsenal (1)',
                'Vélez Sarsfield (1)',
                'Huracán (1)',
                'San Lorenzo (1)',
                'Lanús (1)',
                'River Plate (1)',
                'Boca Juniors (1)'
              ],
            goleadores: ['Pablo Barrientos(2): San Lorenzo ',
                                'Héctor Canteros(1): Vélez Sarsfield',
                                'Edson Puch(1): Huracán',
                                'Fernando Belluschi(1): San Lorenzo',
                                'Nicolás Blandi(1): San Lorenzo',
                                'Luciano Acosta(1): Lanús',
                                'Nicolás Pasquini(1): Lanús',
                                'José Sand(1): Lanús',
                                'Gonzalo Martínez(1): River Plate',
                                'Ignacio Scocco(1): River Plate'],
            entrenadores: ['Gustavo Alfaro(2): 2019-2013',
                            'Ricardo Gareca(1): 2014',
                            'Eduardo Dominguez(1): 2015',
                            'Pablo Guede(1): 2016',
                            'Jorge Almiron(1): 2017',
                            'Marcelo Gallardo(1): 2018',
                            ],
                            }
    ];

    // metodo que retorna el array de locales
    getLocal(): Locales[] {
        return this.locales;
    }
    // para tomar el id de campeonatos locales
    getLocales( idx: string) {
        return this.locales[idx];
    }
}

export interface Locales {
    nombre: string;
    sede: string;
    img: string;
    imgtrofeo: string;
    historia: string;
    fundacion: string;
    campeonActual: string;
    campeones: any;
    goleadores: any;
    entrenadores: any;
}

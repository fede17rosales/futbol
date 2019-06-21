import { Injectable } from '@angular/core';


@Injectable()

export class Seleccion {
    constructor() {
        console.log('seleccion lista para jugar');

    }
    private select: SeleccionArg [] = [
        {
          nombre: 'Selección de fútbol de Argentina',
          img: 'assets/img/afalogo.png',
          historia: 'La selección de fútbol de Argentina es el equipo representativo de dicho país en la categoría masculina de la disciplina. Su organización está a cargo desde 1893 por la Asociación del Fútbol Argentino (AFA), perteneciente a la Confederación Sudamericana de Fútbol (Conmebol), ente rector de este deporte en América del Sur, y afiliado a la Federación Internacional de Fútbol Asociación (FIFA). Disputó el primer partido internacional fuera de Argentina el 16 de mayo de 1901, en Montevideo, contra Uruguay.          La Albiceleste es el cuarto equipo nacional más exitoso en la historia de la Copa Mundial: la conquistó en dos oportunidades (1978 y 1986) y fue finalista en otras tres ocasiones (1930, 1990 y 2014). Además, es el segundo seleccionado que más veces se adjudicó la Copa América, lográndola en catorce ocasiones (1921, 1925, 1927, 1929, 1937, 1941, 1945, 1946, 1947, 1955, 1957, 1959-I, 1991 y 1993), y el que más subcampeonatos logró en la competición, con catorce (1916, 1917, 1920, 1923, 1924, 1926, 1935, 1942, 1959-II, 1967, 2004, 2007, 2015 y 2016). También, en 1992 se adjudicó la «Copa Rey Fahd» —renombrada y oficializada a partir de 1997 como Copa FIFA Confederaciones—, en tanto que en 1995 y 2005 disputó el partido definitorio de dicho torneo.',
          camiseta: 'assets/img/camisetaargentina.jpg',
          campeonesmundiales: [
              'Campeón Mundial de Argentina 1978 - Arqueros: 3 Héctor Baley, 5 Ubaldo Fillol, 13 Ricardo La Volpe.Defensas: 6 Américo Gallego, 7 Luis Galván, 11 Daniel Killer, 15 Jorge Olguín, 17 Miguel Oviedo, 18 Rubén Pagnanini, 19 Daniel Passarella, 20 Alberto Tarantini.Mediocampistas: 1 Norberto Alonso, 2 Osvaldo Ardiles, 8 Rubén Galván, 12 Omar Larrosa, 16 Oscar Ortiz, 21 José Valencia, 22 Ricardo Villa.Delanteros: 4 Daniel Bertoni, 9 René Houseman, 10 Mario Kempes, 14 Leopoldo Luque .Entrenador: César Luis Menotti.',
              'Campeón Mundial de Mexico 1986 - Arqueros: 15 Luis Islas, 18 Nery Pumpido, 22 Héctor Zelada.Defensas: 5 José Luis Brown, 6 Daniel Passarella, 8 Néstor Clausen, 9 José Luis Cuciuffo, 13 Oscar Garré, 19 Oscar Ruggeri.Mediocampistas: 2 Sergio Batista, 3 Ricardo Bochini, 4 Claudio Borghi, 7 Jorge Burruchaga, 10 Diego Maradona, 12 Héctor Enrique, 14 Ricardo Giusti, 16 Julio Olarticoechea, 20 Carlos Tapia, 21 Marcelo Trobbiani.Delanteros: 1 Sergio Omar Almirón, 11 Jorge Valdano, 17 Pedro Pasculli.Entrenador: Carlos Salvador Bilardo.'
            ],
          mayorespresencias: [
                              'Javier Mascherano: 147 partidos - 3 goles ',
                              'Javier Zanetti: 143 partidos - 4 goles',
                              'Lionel Messi: 132 partidos - 68 goles',
                              'Roberto Ayala: 116 partidos - 7 goles',
                              'Diego Simeone: 108 partidos - 11 goles',
                              'Ángel Di María: 99 partidos - 20 goles',
                              'Oscar Ruggeri: 97 partidos - 7 goles',
                              'Sergio Romero: 96 partidos - 0 goles',
                              'Sergio Agüero: 92 partidos - 39 goles',
                              'Diego Armando Maradona: 91 partidos - 34 goles'
                            ],
          goleadoresmaximos: [
                              'Lionel Messi: 68 goles',
                              'Gabriel Batistuta: 56 goles',
                              'Sergio Agüero: 39 goles',
                              'Hernán Crespo: 35 goles',
                              'Diego Maradona: 32 goles',
                              'Gonzalo Higuaín: 75 goles',
                              'Luis Artime: 24 goles',
                              'Daniel Passarella: 23 goles',
                              'Leopoldo Jacinto Luque: 22 goles',
                              'Herminio Masantonio: 21 goles',
                              'José Sanfilippo: 21 goles'
                        ],
          aportesseleccion: [
                            'River Plate: 148 jugadores',
                            'Boca Junios: 142 jugadores',
                            'Independiente: 105 jugadores',
                            'Racing Club: 101 jugadores',
                            'San Lorenzo: 89 jugadores',
                            'Huracán: 52 jugadores',
                            'Newells Old Boys: 65 jugadores',
                            'Estudiantes de La Plata: 74 jugadores',
                            'Vélez Sarsfield: 77 jugadores',
                            'Rosario Central: 55 jugadores'
                        ],
          jugadoresnotables: [
                            'Américo Tesoriere: Jugó para Argentina entre 1919 y 1925, ganó dos Copas América. ',
                            'Domingo Tarasconi: Jugó para Argentina entre 1922 y 1929, Fue goleador de los Juegos Olímpicos de 1928 en donde Argentina obtuvo la Medalla de Plata y ganó tres Copas América. ',
                            'Manuel Seoane: ganó las Copas América de 1925 , 1927 y 1929, siendo designado el mejor jugador del torneo en las dos primeras. ',
                            'Luis Monti: Obtuvo la Medalla de Plata en los Juegos Olímpicos de 1928, fue Sub campeón en el Mundial de 1930, marcando el primer gol Argentino en la historia de los mundiales y ganó el Campeonato Sudamericano de 1927. ',
                            'Cesáreo Onzari: marcó el primer "Gol Olímpico" vs. Uruguay en 1924 y obtuvo el Campeonato Sudamericano (hoy Copa América) en 1925. ',
                            'Guillermo Stábile: fue máximo goleador con 8 tantos del Mundial de 1930 en donde el seleccionado fue subcampeón. Como técnico dirigió al equipo entre 1939 y 1960, y ganó siete títulos oficiales. ',
                            'Carlos Peucelle: ganador de dos Copas América y sub campeón en el Mundial de 1930. ',
                            'Antonio Sastre: considerado el jugador más completo en la historia del fútbol argentino, ganó la Copa América en 1937, 1941 y 1947. ',
                            'Enrique "Chueco" García: también apodado "el Poeta de la Zurda", fue campeón Sudamericano en 1937 y 1941.García, también apodado "el Poeta de la Zurda", fue campeón Sudamericano en 1937 y 1941.',
                            'El notable insider Vicente de la Mata: fue campeón y mejor jugador del Campeonato Sudamericano 1937.',
                            'Herminio Masantonio: ganó con la Selección Argentina el Campeonato Sudamericano de 1937 y 1941, y fue el máximo goleador en los Sudamericanos de 1935 y 1942. ',
                            'José Manuel Moreno: ganador de dos Copas América en 1941 y 1947 (elegido como el mejor jugador de la última), anotó 19 goles en 34 partidos con la selección. La IFFHS lo ubicó entre los mejores jugadores de Sudamérica en el Siglo XX junto a Diego Maradona y Pelé. ',
                            'Adolfo Pedernera: tres veces campeón de la Copa América y mejor jugador de la edición 1946. Fue distinguido con el Diploma al Mérito Konex como uno de los 5 mejores jugadores del fútbol argentino. ',
                            'Norberto "Tucho" Méndez: máximo goleador histórico de la Copa América con 17 goles, ganó tres veces de manera consecutiva dicho trofeo continental. ',
                            'René Pontoni: considerado el mejor centrodelantero de América en los años 40, fue tricampeón Sudamericano en 1945, 1946 y 1947. ',
                            'Rinaldo Martino: con la selección argentina ganó los Campeonatos Sudamericanos de 1945 y 1946, jugó también en la selección italiana. ',
                            'Félix Loustau: tricampeón sudamericano con la Selección Argentina en 1945, 1946 y 1947. Para muchos, el mejor wing izquierdo de la historia en el fútbol argentino. ',
                            'Angel Perucca: centrocampista defensivo campeón en las Copas América de 1945 en Chile (donde la prensa trascandina lo bautizó como "el Portón de América") y 1947 en Guayaquil. ',
                            'Alfredo Di Stéfano: fue campeón y goleador de la Copa América 1947 antes de consagrarse en el Real Madrid como uno de los más grandes futbolistas de la historia.',
                            'Nestor "Pipo" Rossi: uno de los mejores volantes centrales de la historia, jugó 26 partidos internacionales y ganó dos títulos de la Copa América en 1947 y 1957. ',
                            'Omar Sívori: Campeón y Mejor Jugador de la Copa América 1957. Luego brilló en la Juventus y obtuvo el Balón de Oro europeo en 1961.El gran puntero derecho Orestes Omar Corbatta fue internacional en numerosas oportunidades y consiguió las Copas América de 1957 y 1959. ',
                            'Silvio Marzolini: jugó los Mundiales de 1962 y 1966. ',
                            'Ubaldo Fillol: arquero titular de la Copa del Mundo de 1978, en donde la selección obtuvo su primer mundial. Jugó tres Mundiales. Con 58 partidos es el segundo con más presencias en su puesto. ',
                            'Mario Alberto Kempes: es un comentarista, entrenador y exfutbolista argentino Apodado "El Matador", jugaba de mediocampista ofensivo o delantero por la izquierda. Fue el conductor de la Selección Argentina que ganó la Copa de Mundo de 1978, siendo el máximo goleador y mejor jugador del torneo.',                            
                            'Daniel Bertoni: campeón del Mundo en 1978, señalando dos goles (uno de ellos en la final ante Holanda). Jugó dos Mundiales. ',
                            'Daniel Passarella: capitán del equipo que obtuvo el Mundial 1978, fue el único jugador que integró los dos planteles campeones del mundo. Jugó tres mundiales.',
                            'Jorge Valdano: campeón del Mundo en 1986, fue autor de 4 goles en ese campeonato, y señaló el segundo gol argentino en la final ante Alemania. Jugó 2 mundiales. ',
                            'Diego Armando Maradona: capitán, líder y figura del equipo que obtuvo el Mundial de 1986. Además fue subcampeón del mundo en 1990, y obtuvo la Copa Artemio Franchi en 1993. Muchos sostienen que es el mejor jugador de la historia del deporte. Jugó cuatro Mundiales. ',
                            'Oscar Ruggeri líder: campeón del Mundo en 1986 y subcampeón en 1990, ganó las Copas América de 1991 y de 1993, y la Copa Confederaciones 1992. Jugó tres Mundiales',
                            'Jorge Burruchaga: campeón del Mundo en 1986 (anotando el gol de la victoria de Argentina ante Alemania en la final de la Copa) y sub campeón en Italia 1990, en sus únicos dos mundiales disputados.',
                            'Claudio Caniggia: jugó en tres Mundiales, fue subcampeón en Italia 90 y obtuvo tres títulos oficiales con la selección. ',
                            'Diego Simeone: jugó 108 partidos, participó en los Mundiales de 1994, 1998 y 2002, y obtuvo cuatro títulos oficiales con la selección, entre los que se incluyen dos Copas América (1991 y 1993), una Copa Confederaciones, y una Copa Artemio Franchi. ',
                            'Gabriel Omar Batistuta: es el segundo máximo goleador histórico de la selección con 54 goles, participó en tres Mundiales y ganó cuatro títulos oficiales con la selección, entre los que se incluyen dos Copas América (1991 y 1993), una Copa Confederaciones, y una Copa Artemio Franchi.',
                            'Fernando Redondo: campeón de la Copa Confederaciones 1992 y la Copa América 1993. Fue considerado por muchos como el mejor volante central de Europa en la década de los 90. ',
                            'Javier Zanetti: es el segundo jugador con más presencias en el seleccionado, con 143 partidos disputados. Hizo 5 goles y jugó dos Mundiales.',
                            'Roberto Ayala: participó en 10 competiciones oficiales entre 1994 y 2007, tiempo en el que también fue capitán. Jugó 116 partidos, incluyendo tres Mundiales. ',
                            'Hernán Crespo: cuarto máximo goleador histórico con 35 goles, jugó tres Mundiales. Es actualmente el máximo anotador de la selección en eliminatorias. ',
                            'Javier Mascherano: capitán del equipo entre 2008 y 2011, es el futbolista con mas presencias en la selección, con 147 partidos jugados. Participó en cuatro Mundiales, siendo subcampeón en 2014. Junto al polista Juan Nelson es el único deportista argentino en ser bicampeón olímpico.',
                            'Lionel Messi: actual capitán del seleccionado, es el máximo goleador histórico del combinado nacional con 65 goles. Campeón olímpico, ha participado en cuatro Mundiales, y fue subcampeón en el Mundial de 2014 y las Copas América de 2007, 2015 y 2016. Al igual que con su compatriota Diego Maradona, muchos sostienen que es el mejor jugador de la historia del fútbol. ',
                            'Sergio Romero: es el arquero con mayor cantidad de presencias (94) en su puesto, con la que fue subcampeón en el Mundial de 2014 y las Copas América de 2015 y 2016. ',
                            'Sergio Agüero: actual centrodelantero del seleccionado, jugó tres Mundiales, incluyendo la final de Brasil 2014. Ocupa el tercer puesto entre los máximos goleadores históricos con 39 goles. '
                        ]
    }
    ];

    getSeleccion(): SeleccionArg[] {
        return this.select;
    }
}
export interface SeleccionArg {
            nombre: string;
            img: string;
            historia: string;
            camiseta: string;
            campeonesmundiales: any;
            mayorespresencias: any;
            goleadoresmaximos: any;
            aportesseleccion: any;
            jugadoresnotables: any;
 }

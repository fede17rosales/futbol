import { Injectable } from '@angular/core';


@Injectable()

export class CampeonatosInternacionales {
    constructor() {
        console.log('Campeonatos internacionales listos para usar!');
    }

    private inters: Internacionales [] = [
                            {   nombre: 'Copa Libertadores de América',
                                sede: 'Afiliados a la Conmebol',
                                img: 'assets/img/inter/libertadores.png',
                                imgtrofeo: 'assets/img/inter/copaliber.png',
                                historia: 'Los choques por la Copa Aldao entre los clubes campeones de Argentina y Uruguay, encendieron la idea de organizar una competencia continental en los años 1930. En 1948 fue jugado un torneo que fue el antecedente más concreto: el Campeonato Sudamericano de Campeones, organizado por Colo-Colo de Chile. Su sede fue la ciudad de Santiago y la disputaron los campeones de cada país de la temporada anterior, ganándola Vasco da Gama de Brasil.En 1959 fueron sentadas las bases de la competencia, que fue fundada en 1960 y lleva su nombre en homenaje a los héroes de la historia sudamericana: Simón Bolívar, José de San Martín, Pedro I, José Bonifácio, Bernardo OHiggins, José Artigas, entre otros.',
                                fundacion: '19 de abril de 1960',
                                campeonActual: 'River Plate (2018)',
                                campeones: ['Independiente(7): 1964 - 1965 - 1972 - 1973 - 1974 - 1975 - 1984',
                                            'Boca Juniors(6): 1977 - 1978 - 2000 - 2001 - 2003 - 2007',
                                            'Peñarol(5): 1960 - 1961 - 1966 - 1982 - 1987',
                                            'River Plate(4): 1986 - 1996 - 2015 - 2018',
                                            'Estudiantes(4): 1968 - 1969 - 1970 - 2009',
                                            'Olimpia(3): 1979 - 1990 - 2002',
                                            'Nacional(3): 1971 - 1980 - 1988',
                                            'Sao Paulo(3): 1992 - 1993 - 2005',
                                            'Gremio(3): 1983 - 1995 - 2017',
                                            'Santos(3): 1962 - 1963 - 2011',
                                            'Cruzeiro(2): 1976 - 1997',
                                            'Internacional(2): 2006 - 2010',
                                            'Atlético Nacional(2): 1989 - 2016',
                                            'Palmeiras(1): 1999',
                                            'Colo-Colo(1): 1991',
                                            'Racing Club(1): 1967',
                                            'Flamengo(1): 1981',
                                            'Argentinos Juniors(1): 1985',
                                            'Vélez Sarsfield(1): 1994',
                                            'Vasco da Gama(1): 1998',
                                            'Once Caldas(1): 2004',
                                            'Liga de Quito(1): 2008',
                                            'Corinthians(1): 2012',
                                            'Atlético Mineiro(1): 2013',
                                            'San Lorenzo(1): 2014'],
                                goleadores: ['Alberto Spencer(54): Peñarol',
                                            'Fernando Morena(37): Peñarol',
                                            'Pedro Rocha(36): Peñarol - Sao Paulo - Palmeiras',
                                            'Daniel Onega(31): River Plate',
                                            'Julio César Morales(30): Nacional',
                                            'Juan Carlos Sarnari(29): River Plate - Universidad Católica de Chile - Independite Santa Fe ',
                                            'Antony de Ávila(29): América de Cali',
                                            'Luis Artime(26): Independiente - Nacional',
                                            'Alberto Acosta(25): San Lorenzo - Universidad Católica de Chile - Boca Juniors',
                                            'Juan Román Riquelme(25): Boca Juniors'],
                                entrenadores: [],
                            },
                            {   nombre: 'Copa Sudamericana',
                                sede: 'Afiliados a la Conmebol',
                                img: 'assets/img/inter/sudamericana.png',
                                imgtrofeo: 'assets/img/inter/copasuda.png',
                                historia: 'En el año 2001, la Conmebol decidió unificar los torneos del segundo semestre instituyendo la Copa Panamericana, que pretendía confrontar a clubes de esa Confederación junto a otros de la Concacaf. Esta copa iba a tener el formato de eliminación directa, pero no logró organizarse correctamente debido a las grandes distancias que dividían a los participantes, y a las diferencias económicas con la Concacaf. El torneo se aplazó para 2003, pero nunca se llegó a realizar.                                Ya pasados algunos meses del año 2002, la Conmebol decidió organizar la Copa Sudamericana exclusivamente con clubes pertenecientes a federaciones propias, que eran las mismas que participaban en las copas Mercosur, Merconorte, y anteriormente en la Copa Conmebol y la Supercopa Sudamericana.Debido a la demora en la organización, los clubes brasileños no participaron en la primera edición de esta competición, ya que tenían establecido su calendario, que no era compatible con un torneo más. Estos equipos recién se sumaron a partir de la edición 2003. Entre 2005 y 2008 se contó con la participación de clubes miembros de la Concacaf en calidad de invitados; mayormente, equipos de México, pero también con representantes de Estados Unidos, Costa Rica y Honduras.',
                                fundacion: '28 de agosto de 2002',
                                campeonActual: 'Atletico Paranaense (2018)',
                                campeones: ['Boca Junios(2): 2004 - 2005',
                                'Independiente (2): 2010 - 2017',
                                'Liga de Quito(1): 2009',
                                'River Plate(1): 2014',
                                'San Lorenzo(1): 2002',
                                'Cienciano(1): 2003',
                                'Pachuca(1): 2006',
                                'Arsenal(1): 2007',
                                'Internacional(1): 2008',
                                'Universidad de Chile(1): 2011',
                                'Sao Paulo(1): 2012',
                                'Lanús(1): 2013',
                                'Santa Fe(1): 2015',
                                'Chapecoense(1): 2016',
                                'Atlético Paranaense(1): 2018'],
                    goleadores: ['Hernán Barcos(19): Liga de Quito - Palmeiras - Atlético Nacional',
                                'Rodrigo Lopez(16): Libertad - América - Vélez Sarsfield',
                                'Rafael Moura(14): Corinthians - Atlético Paranaense - Goiás - Figueirense ',
                                'Rodrigo Mora(13): Defensor Sporting - River Plate',
                                'Miler Bolaños(13): Liga de Quito - Emelec',
                                'Claudio Bieler(12): Liga de Quito - Belgrano',
                                'Eduardo Vargas(11): Universidad de Chile',
                                'Bruno Marioni(10): Colo-Colo',
                                'Matías Fernández(9): Colo-Colo'],
                                entrenadores: [],
                            },
                            {   nombre: 'Recopa Sudamericana',
                                sede: 'Afiliados a la Conmebol',
                                img: 'assets/img/inter/recopasudalogo.png',
                                imgtrofeo: 'assets/img/inter/recopa.png',
                                historia: 'Anteriormente se había disputado un torneo llamado "Recopa Sudamericana de Clubes" o "Copa Ganadores de Copa", también organizado por la Confederación Sudamericana de Fútbol, donde se enfrentaban equipos los ganadores de las Copas Nacionales. Se lo realizó en 1970 y parcialmente en 1971. Pese al nombre y a que fue organizado por la Conmebol, este torneo no se relaciona en nada con el actual, el formato era distinto; pero ambas competiciones son reconocidas como torneos oficiales por el ente Federativo Sudamericano. Pero para diferenciarla de la actual, a la antecesora se la denomina Copa Ganadores de Copa.                                La Recopa Sudamericana se realizó por primera vez en 1989, siendo el primer campeón Nacional de Uruguay que venció a Racing Club.En sus inicios, en el torneo se enfrentaba al campeón de la Copa Libertadores con el campeón de la Supercopa Sudamericana. Cuando esta fue discontinuada, la Recopa dejó de disputarse por 4 años, hasta que a partir del 2003 hasta la actualidad, el torneo enfrenta a los ganadores de la Copa Libertadores y la Copa Sudamericana. ',
                                fundacion: '31 de enero de 1989',
                                campeonActual: 'River Plante',
                                campeones: ['Boca Juniors(4): 1990 - 2005 - 2006 - 2008',
                                            'River Plate(3): 2015 - 2016 - 2019',
                                            'Sao Paulo(2): 1993 - 1994',
                                            'Internacional(2): 2007 - 2011',
                                            'Olimpia(2): 1991 - 2003',
                                            'Liga de Quito(2): 2009 - 2010',
                                            'Gremio(2): 1996 - 2018',
                                            'Independiente(1): 1995',
                                            'Cruzeiro(1): 1998',
                                            'Vélez Sarsfield(1): 1997',
                                            'Atlético Nacional(1): 2017',
                                            'Nacional(1): 1989',
                                            'Colo-Colo(1): 1992',
                                            'Cienciano(1): 2004',
                                            'Santos(1): 2012',
                                            'Corinthians(1): 2013',
                                            'Atlético Mineiro(1): 2014'],
                                goleadores: ['Rodrigo Palacio(5): Boca Juniors',
                                             'Leandro Damiao(3): Internacional',
                                            'Geovanni(2): Cruzeiro',
                                            'Christian Giménez(2): Pachuca',
                                            'Claudio Bieler(2): Liga de Quito',
                                            'Hernán Barcos(2): Liga de Quito',
                                            'Diego Tardelli(2): Atlético Mineiro',
                                            'Carlos Sánchez(2): River Plate',
                                            'Andrés Ibarguen(2): Atlético Nacional',
                                            'Alexandre Pato(2): Internacional',
                                            'Martín Palermo(2): Boca Juniors',
                                            'Maximiliano Velázquez(2): Independiente',
                                            'Dayro Moreno(2): Once Caldas'],
                                entrenadores: [],
                            },
    ];

    getInter(): Internacionales[] {
        return this.inters;
    }

    // para tomar el id de campeonatos locales
    getInters( idx: string) {
        return this.inters[idx];
    }
}

export interface Internacionales {
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



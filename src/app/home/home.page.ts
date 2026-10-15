import { Component } from '@angular/core';

interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  icono: string;
}

interface Habilidad {
  nombre: string;
  icono: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  // Datos del portafolio: edita aquí para personalizar la página.
  perfil = {
    nombre: 'Josué Pérez Tapia',
    iniciales: 'JP',
    carrera: 'Ingeniería en Desarrollo y Gestión de Software',
    universidad: 'Universidad Tecnológica de Gutiérrez Zamora',
    sobreMi:
      'Estudiante de desarrollo de software. Me gusta crear aplicaciones web y móviles, ' +
      'y videojuegos sencillos. Este portafolio es una app Ionic compilada con Node ' +
      'y publicada con Nginx dentro de un contenedor Docker.',
    github: 'https://github.com/josuetapia-dev',
  };

  habilidades: Habilidad[] = [
    { nombre: 'Ionic', icono: 'phone-portrait-outline' },
    { nombre: 'Angular', icono: 'logo-angular' },
    { nombre: 'TypeScript', icono: 'code-slash-outline' },
    { nombre: 'Laravel / PHP', icono: 'server-outline' },
    { nombre: 'MySQL', icono: 'albums-outline' },
    { nombre: 'Firebase', icono: 'flame-outline' },
    { nombre: 'Unity / C#', icono: 'game-controller-outline' },
    { nombre: 'Docker', icono: 'cube-outline' },
    { nombre: 'Git y GitHub', icono: 'git-branch-outline' },
  ];

  proyectos: Proyecto[] = [
    {
      nombre: 'Clima PWA',
      descripcion: 'Aplicación web progresiva que consulta y muestra el clima de una ciudad.',
      tecnologias: ['Ionic', 'Angular', 'API REST'],
      icono: 'partly-sunny-outline',
    },
    {
      nombre: 'Gaya Vainilla',
      descripcion: 'App para dar a conocer y vender productos de vainilla de la región.',
      tecnologias: ['Ionic', 'Angular'],
      icono: 'leaf-outline',
    },
    {
      nombre: 'Login con Firebase',
      descripcion: 'Registro e inicio de sesión de usuarios con Firebase Authentication.',
      tecnologias: ['Ionic', 'Firebase'],
      icono: 'lock-closed-outline',
    },
    {
      nombre: 'Juegos en Unity',
      descripcion: 'Serpiente y Breakout: videojuegos 2D clásicos hechos desde cero.',
      tecnologias: ['Unity', 'C#'],
      icono: 'game-controller-outline',
    },
  ];

  anio = new Date().getFullYear();
}

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';

timer("24 march 2022");
menu();
modal();
validation();
tabs();
slider('.portfolio-content', '.portfolio-item');
calc(100);
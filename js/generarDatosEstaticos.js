import * as gPresupuesto from './gestionPresupuesto.js';
import * as gPresupuestoWeb from './gestionPresupuestoWeb.js';

gPresupuesto.actualizarPresupuesto();
let g1 = new gPresupuesto.Gasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let g2 = new gPresupuesto.Gasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let g3 = new gPresupuesto.Gasto("Bonobús", 18.60, "2020-05-26", "transporte");
let g4 = new gPresupuesto.Gasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let g5 = new gPresupuesto.Gasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let g6 = new gPresupuesto.Gasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

gPresupuestoWeb.anyadirGasto(g1);
gPresupuestoWeb.anyadirGasto(g2);
gPresupuestoWeb.anyadirGasto(g3);
gPresupuestoWeb.anyadirGasto(g4);
gPresupuestoWeb.anyadirGasto(g5);
gPresupuestoWeb.anyadirGasto(g6);

gPresupuestoWeb.mostrarDatoEnId("presupuesto", gPresupuesto.mostrarPresupuesto());

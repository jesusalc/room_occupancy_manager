const clientes = [
  23,
  45,
  155,
  374,
  22,
  99,
  100,
  101,
  115,
  209
]

function checarHabitaciones(Premium, Economy) {
  clientes.map()
}
describe("Prueba 1", () => {
  test("Habitaciones gratuitas Premium: 3 Habitaciones gratuitas Economy: 3",() => {
    const Premium = 3;
    const Economy = 3;
    expect(checarHabitaciones(Premium, Economy)).toBe([738, 167]);
  });
});
describe("Prueba 2", () => {
  test("Habitaciones Premium gratuitas: 7 Habitaciones Economy gratuitas: 5",() => {});
});
describe("Prueba 3", () => {
  test("Habitaciones Premium gratuitas: 2 Habitaciones Economy gratuitas: 7",() => {});
});
describe("Prueba 4", () => {
  test("Habitaciones Premium gratuitas: 7 Habitaciones Economy gratuitas: 1",() => {});
});

import { Team } from "../Team";
import { Character } from "../Character";

describe("Класс Team для добавления персонажей в команду", () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character("Character 1", 100);
        character2 = new Character("Character 2", 200);
        character3 = new Character("Character 3", 150);
    });

    test('метод add должен добавлять персонажа в команду', () => {
        team.add(character1);
        expect(team.members.has(character1)).toBe(true);
    });

    test('метод add должен пробрасывать ошибку, если персонаж уже есть в команде', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow(`Персонаж ${character1.name} уже добавлен в команду`);
    });

    test('метод addAll должен добавлять несколько персонажей в команду', () => {
        team.addAll(character1, character2, character3);
        expect(team.members.has(character1)).toBe(true);
        expect(team.members.has(character2)).toBe(true);
        expect(team.members.has(character3)).toBe(true);
    });

    test('метод addAll должен игнорировать дубликаты', () => {
        team.addAll(character1, character3);
        expect(team.members.has(character3)).toBe(true);
        expect(team.members.size).toBe(2);
    });

    test('метод toArray должен производить конвертацию в массив', () => {
        team.addAll(character1, character2);
        expect(Array.isArray(team.toArray())).toBe(true);
        expect(team.toArray()).toEqual([character1, character2]);
    });
});

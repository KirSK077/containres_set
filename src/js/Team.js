export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error(`Персонаж ${character.name} уже добавлен в команду`);
        }
        this.members.add(character);
    }

    addAll(...characters) {
        for (const character of characters) {
            this.members.add(character);
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}

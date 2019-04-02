export class Pokemon {
    id: number;
    name: string;
    height: string;
    weight: string;
    color: string;
    sprite: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    types: string[];
    constructor(id, name, height, weight, color, sprite, hp, attack, defense, speed, types) {
      this.id = id;
      this.name = name;
      this.height = height;
      this.weight = weight;
      this.color = color;
      this.sprite = sprite;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
      this.types = types;
    };
  };
  export const POKEMON: Pokemon[] = [];
  
  
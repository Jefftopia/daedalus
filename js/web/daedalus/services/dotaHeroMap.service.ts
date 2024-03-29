export enum imageSize {
    sb = 0,
    lg = 1,
    full = 2
}

export class HeroMap {
    
    public heroDict: { [key: number]: string };
    
    public static HERO_IMG_BASE_URL: string = 'http://cdn.dota2.com/apps/dota2/images/heroes/';
    
    constructor() {
    
        this.heroDict = {
            1: 'antimage',
            2: 'axe',
            3: 'bane',
            4: 'bloodseeker',
            5: 'crystal_maiden',
            6: 'drow_ranger',
            7: 'earthshaker',
            8: 'juggernaut',
            9: 'mirana',
            10: 'morphling',
            11: 'nevermore',
            12: 'phantom_lancer',
            13: 'puck',
            14: 'pudge',
            15: 'razor',
            16: 'sand_king',
            17: 'storm_spirit',
            18: 'sven',
            19: 'tiny',
            20: 'vengefulspirit',
            21: 'windrunner',
            22: 'zeus',
            23: 'kunkka',
            24: '',
            25: 'lina',
            26: 'lion',
            27: 'shadow_shaman',
            28: 'slardar',
            29: 'tidehunter',
            30: 'witch_doctor',
            31: 'lich',
            32: 'riki',
            33: 'enigma',
            34: 'tinker',
            35: 'sniper',
            36: 'necrolyte',
            37: 'warlock',
            38: 'beastmaster',
            39: 'queenofpain',
            40: 'venomancer',
            41: 'faceless_void',
            42: 'skeleton_king',
            43: 'death_prophet',
            44: 'phantom_assassin',
            45: 'pugna',
            46: 'templar_assassin',
            47: 'viper',
            48: 'luna',
            49: 'dragon_knight',
            50: 'dazzle',
            51: 'rattletrap',
            52: 'leshrac',
            53: 'furion',
            54: 'life_stealer',
            55: 'dark_seer',
            56: 'clinkz',
            57: 'omniknight',
            58: 'enchantress',
            59: 'huskar',
            60: 'night_stalker',
            61: 'broodmother',
            62: 'bounty_hunter',
            63: 'weaver',
            64: 'jakiro',
            65: 'batrider',
            66: 'chen',
            67: 'spectre',
            68: '',
            69: 'doom_bringer',
            70: 'ursa',
            71: 'spirit_breaker',
            72: 'gyrocopter',
            73: 'alchemist',
            74: 'invoker',
            75: 'silencer',
            76: 'obsidian_destroyer',
            77: 'lycan',
            78: 'brewmaster',
            79: 'shadow_demon',
            80: 'lone_druid',
            81: 'chaos_knight',
            82: 'meepo',
            83: 'treant',
            84: 'ogre_magi',
            85: 'undying',
            86: 'rubick',
            87: 'disruptor',
            88: 'nyx_assassin',
            89: 'naga_siren',
            90: 'keeper_of_the_light',
            91: 'wisp',
            92: 'visage',
            93: 'slark',
            94: 'medusa',
            95: 'troll_warlord',
            96: 'centaur',
            97: 'magnataur',
            98: 'shredder',
            99: 'bristleback',
            100: 'tusk',
            101: 'skywrath_mage',
            102: 'abaddon',
            103: 'elder_titan',
            104: 'legion_commander',
            105: 'techies',
            106: 'ember_spirit',
            107: 'earth_spirit',
            108: '',
            109: 'terrorblade',
            110: 'phoenix',
            111: 'oracle',
            112: 'winter_wyvern'        
        }
    
    }
    
    public getHeroById(id: number): string {
    
        return this.heroDict[id];
    
    }
    
    public getHeroIdByString(heroName: string): string {
        let heroes = this.heroDict;
        
        for (let prop in heroes) {
            
            if (heroes.hasOwnProperty(prop)) {
                
                if (heroes[prop] === heroName)
                    return prop;
                
            }
            
        }
        
        return '-1';
    
    }
    
    public toPhotoString(heroId: string|number, size: imageSize, heroName?: boolean): string {
        if (!heroName) 
            heroId = this.getHeroById(<number>heroId);
        
        return heroId + '_' + imageSize[size] + '.png';
        
    }    
 
}
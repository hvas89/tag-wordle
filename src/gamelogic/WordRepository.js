const words = [
    "apple", "bread", "candy", "dance", "eagle", "flame", "globe", "house", "igloo", "jelly", 
    "knock", "lemon", "magic", "night", "ocean", "piano", "queen", "rider", "stone", "tiger", 
    "uncle", "vivid", "whale", "xenon", "yacht", "zebra", "alarm", "brave", "charm", "dream", 
    "every", "fancy", "grape", "heart", "image", "jumpy", "kings", "laugh", "movie", "noble", 
    "olive", "punch", "quick", "rival", "sword", "table", "unity", "vocal", "wider", "xerox", 
    "yield", "zonal", "again", "blame", "claim", "drift", "event", "flown", "great", "hasty", 
    "input", "jolly", "kneel", "laser", "mirth", "nifty", "onset", "point", "quilt", "ready", 
    "storm", "trend", "urban", "vigor", "watch", "xenon", "youth", "zeros", "abide", "baker", 
    "cheer", "dough", "eaten", "frost", "giant", "habit", "index", "jokes", "knots", "leapt", 
    "miner", "north", "opals", "press", "query", "relay", "shell", "tango", "upset", "valve", 
    "wrist", "xerox", "zones", "alert", "blend", "crash", "douse", "entry", "freed", "glint", 
    "hurry", "inbox", "jumps", "kitty", "liver", "match", "niece", "orbit", "peach", "quote", 
    "range", "shift", "trick", "ultra", "vivid", "weary", "xylol", "yawns", "zappy", "acorn", 
    "blush", "creed", "dizzy", "enact", "fable", "gloom", "honor", "inset", "jewel", "knead", 
    "leaky", "maple", "nasty", "opera", "plead", "ranch", "scout", "thigh", "utter", "verse", 
    "wrung", "xenia", "zippy", "aglow", "boast", "crust", "delay", "equip", "famed", "grill", 
    "hobby", "ivory", "jazzy", "knees", "layer", "mango", "nerdy", "ounce", "petty", "razor", 
    "shine", "toast", "udder", "vicar", "witty", "xeric", "yikes", "azure", "alike", "bloom", 
    "chess", "dodge", "eight", "filth", "grind", "humor", "input", "jolly", "khaki", "light", 
    "motel", "ninth", "other", "penny", "quick", "radio", "shady", "tasty", "unity", "vixen", 
    "wound", "xylem", "yarns", "zones", "alien", "beard", "clown", "drill", "eject", "forty", 
    "gland", "honey", "inter", "jiffy", "kayak", "loyal", "mirth", "natal", "overt", "piper", 
    "quack", "relax", "satin", "third", "upset", "vague", "whisk", "xenia", "yolks", "zoned", 
    "amuse", "bison", "crane", "diner", "error", "fizzy", "grape", "haunt", "imply", "jolly", 
    "kinky", "lucid", "minor", "noble", "ovoid", "poker", "quash", "reuse", "sheep", "twist", 
    "unite", "vigor", "wince", "xylol", "yacht", "zesty", "angel", "broom", "choke", "drier", 
    "evoke", "flash", "grain", "holly", "irony", "joker", "kebab", "large", "merry", "naive", 
    "often", "piano", "queen", "rapid", "slice", "today", "upset", "valor", "weary", "xerox", 
    "yeast", "zones", "apple", "bleak", "curve", "drake", "ethic", "flint", "glide", "hotel", 
    "ideal", "jumpy", "kitty", "linen", "meant", "noise", "onion", "plant", "query", "right", 
    "straw", "twice", "urged", "vivid", "worry", "xylem", "yummy", "azure", "aroma", "blend", 
    "clamp", "drain", "elbow", "flick", "glory", "hatch", "input", "jiffy", "knife", "liver", 
    "mover", "niche", "otter", "pinky", "quilt", "risky", "slick", "tango", "under", "vigor", 
    "wrist", "xenon", "youth", "zonal", "avoid", "bride", "creak", "dance", "exalt", "frame", 
    "grasp", "hurry", "infer", "jazzy", "knoll", "logic", "money", "night", "ocean", "print", 
    "queen", "roast", "stack", "title", "urine", "valor", "waste", "xerox", "yield", "zones", 
    "alert", "brisk", "cloud", "ditch", "exact", "forth", "gleam", "honor", "inlet", "joker", 
    "kinky", "lemon", "mirth", "noble", "opine", "poker", "query", "react", "shell", "tweak", 
    "union", "vigor", "witty", "xylol", "yacht", "zesty", "amble", "baker", "cheat", "drawn", 
    "eater", "flick", "grove", "hence", "imply", "jazzy", "kneel", "locus", "marry", "north", 
    "oxide", "pluck", "quirk", "relay", "slant", "towel", "unfit", "vivid", "wager", "xerox", 
    "yeast", "zones", "aorta", "brine", "cagey", "dread", "equal", "flame", "grime", "honey", 
    "ivory", "jumpy", "kneel", "lemon", "mercy", "nerve", "onset", "plush", "quilt", "rusty", 
    "spite", "train", "urban", "valor", "wrist", "xerox", "yield", "zones", "apple", "brash", 
    "clerk", "ditch", "exert", "fiery", "grape", "hound", "inter", "jazzy", "knoll", "lunar", 
    "mirth", "nerdy", "opium", "plume", "quilt", "ridge", "shady", "tango", "unity", "vigor", 
    "wrack", "xylol", "yacht", "zesty", "amber", "baker", "chore", "doubt", "exile", "flame", 
    "globe", "hurry", "infer", "joker", "kinky", "loyal", "mirth", "noble", "oasis", "poker", 
    "query", "risky", "stalk", "total", "unite", "vivid", "wrist", "xerox", "yacht", "zones"
];

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
}



Wordle Game Official Site: https://www.nytimes.com/games/wordle/index.html


0:00 Intro to Wordle
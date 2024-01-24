//ALL
const loadingContainer = document.querySelector('.loading-container');
const navBar = document.querySelector('.navBar');

//Birthdate Container 
const birthDateContainer = document.querySelector('.birthdate-container');
const dateContainer = document.querySelector('.date-container');
const dateSelect = document.querySelectorAll('.date-container .inside');
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const zodiacButton = document.getElementById('zodiac-button');
const errorMessage = document.getElementById('error-message');

//Zodiac Display Container
const headerContainer = document.querySelector('.header-container');
const textContainer = document.querySelector('.text-container');
const zodiacImage = document.querySelector('.zodiac-image');
const zodiacTitle = document.querySelectorAll('.zodiacTitle');
const zodiacDescription = document.querySelector('.zodiacDescription');
const zodiacSubText = document.querySelector('.zodiacSubText');
//Months
const months = {
    'JAN': {
        day: '31'
    },
    'FEB': {
        day: '29'
    },
    'MAR': {
        day: '31'
    },
    'APR': {
        day: '30'
    },
    'MAY': {
        day: '31'
    },
    'JUN': {
        day: '30'
    },
    'JUL': {
        day: '31'
    },
    'AUG': {
        day: '31'
    },
    'SEP': {
        day: '30'
    },
    'OCT': {
        day: '31'
    },
    'NOV': {
        day: '30'
    },
    'DEC': {
        day: '31'
    }
};

//Zodiacs
const zodiacSigns = {
    'Aries': {
        nickname: 'The Ram',
        description: "As the first sign in the zodiac, Aries' presence always marks the beginning of something energetic and turbulent. They are continuously seeking dynamic experiences, speed, and competition, always striving to be first in everything from work to social gatherings. With its ruling planet Mars and belonging to the element of Fire (like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before thinking things through.\n\nThe Flying Ram is the symbol for Aries, guided by the story of the Golden Fleece. An Aries is ready to be the hero of the day, to fly away and carry many endangered and powerless people on their back. The power of the ram is carried on its back, for it is the gold itself, shiny and attractive to those ready for betrayal. The story of glory that isn't easy to carry is in the ram's two horns, and if this animal doesn't get shorn, allowing change and giving someone a warm shoulder, they won't have much to receive from the world. Each Aries has the task of willingly sharing their position, power, gold, or physical strength with others, or else the energy will be stopped in its natural flow, fear will take over, and the process of giving and receiving will hold balance at zero.",
        startMonth: 'MAR',
        startDay: '21',
        endMonth: 'APR',
        endDay: '19',
        top: '0%'
    },
    'Taurus': {
        nickname: 'The Bull',
        description: "Taurus is a practical and well-grounded zodiac sign that values the fruits of their labor. They have a strong desire to be surrounded by love and beauty, and are drawn to the material world and physical pleasures. Individuals born under this sign are sensual and tactile, placing great importance on touch and taste as their primary senses. They are also known for being stable and conservative, making them one of the most dependable signs of the zodiac. Taurus individuals are committed to their choices and will endure until they reach a point of personal satisfaction.\n\nTaurus – the Wandering Bull in mythology, Taurus betrayed their best friend, goddess Hera, and was condemned to wander the earth in search of freedom. Taurus often feels a sense of unease, as if something is constantly reminding them of past happiness, and they may retreat into their own world, feeling lonely and disconnected from their true selves. To find love and happiness, Taurus individuals need to travel the world, shift their perspective, or make adjustments to their belief system and values.",
        startMonth: 'APR',
        startDay: '20',
        endMonth: 'MAY',
        endDay: '20',
        top: '0%'
    },
    'Gemini': {
        nickname: 'The Twins',
        description: " Gemini is a zodiac sign that represents two different personalities in one, making them expressive and quick-witted. They are sociable, communicative, and always ready for fun, but can suddenly become serious, thoughtful, and restless. Their curiosity about the world knows no bounds, and they often feel like there is not enough time to experience everything they want to see.\n\nGemini - the Caring Twins - signifying the innocent nature of their character that celebrates brotherhood, love between friends, and differences that need mending. They are always ready to give their life for a brother a friend or a lover. Gemini sees communication and verbal contact as important as physical contact with their partner. They are always ready for an intellectual challenge, and once they find someone who can match their energy and intellect, they become faithful and determined to treasure their heart. Geminis need excitement, variety, and passion in their relationships and may spend a lot of time in search for their other half.",
        startMonth: 'MAY',
        startDay: '21',
        endMonth: 'JUN',
        endDay: '21',
        top: '0%'
    },
    'Cancer': {
        nickname: 'The Crab',
        description: "Cancer is a zodiac sign that is deeply intuitive and sentimental, making them one of the most challenging signs to get to know. They are highly emotional and sensitive, and prioritize matters related to family and home. Those born with their Sun in Cancer are very loyal and empathetic to the pain and suffering of others.\n\nCancer - the Brave Crab, as Cancer is sometimes called, is a creature sent to this earth for a greater purpose. However, they are often unaware of their own positive qualities and may endanger their own comfort in service of someone eases cause. They know where they are going, but sometimes find themselves heading in the wrong direction until they learn their lessons and begin to rely solely on themselves.",
        startMonth: 'JUN',
        startDay: '22',
        endMonth: 'JUL',
        endDay: '22',
        top: '300%'
    },
    'Leo': {
        nickname: 'The Lion',
        description: "Individuals born under the sign of Leo are known for their natural leadership abilities. They possess qualities such as creativity, self confidence, dominance and a strong presence that is hard to resist. Leos are capable of achieving anything they set their minds to in all aspects of their lives. The strength of a Leo lies in their \"king of the jungle\" status. They are typically generous and loyal, which enables them to have many friends. Their self confidence and attractiveness make them capable of bringing different groups of people together and leading them towards a common goal. Additionally Leos have a healthy sense of humor which makes it easier for them to collaborate with others.\n\nThe Lion in the Cave -The story of the lion has always been associated with bravery. As an animal, it is fearless and almost impossible to challenge, hurt, or destroy. The only weaknesses of a lion are fear and aggression towards those they confront. Like a lion living in a cave a Leo needs a place to retreat to and find comfort during difficult times. However they should not remain in their safe space for too long. With their heads held high they must face others with dignity and respect, never resorting to violence or aggression, and walk bravely through the forest that they rule.",
        startMonth: 'JUL',
        startDay: '23',
        endMonth: 'AUG',
        endDay: '22',
        top: '300%'
    },
    'Virgo': {
        nickname: 'The Maiden',
        description: "Virgos are known for their meticulous attention to detail and their deep sense of humanity, which makes them one of the most caring signs of the zodiac. Their methodical approach to love and life ensures that nothing is left to chance. Although they can be tender, they may keep their heart closed to the outer world. This sign is often misunderstood not because they lack the ability to express themselves, but because they don't always trust their feelings and tend to prioritize reason over emotions. The symbolism behind their name reflects their nature as individuals who approach everything as if it were their first time experiencing it.\n\nVirgo – the Disappointed Goddess seeking goodness in humankind. From their cloud, they came to Earth with a mission to use their existence for good and discover justice and purity in other people. However, after encountering disappointment too many times, Virgos may turn back get lost or simply separate themselves from others if not self guided to the right path.",
        startMonth: 'AUG',
        startDay: '24',
        endMonth: 'SEP',
        endDay: '22',
        top: '300%'
    },
    'Libra': {
        nickname: 'The Scales',
        description: "Individuals born under the sign of Libra are known for their peaceful and fair nature, and they generally dislike being alone. Partnership is crucial for them, and they seek someone who can reflect their inner selves. Librans are fascinated by balance and symmetry, and they are constantly striving for justice and equality, realizing that the most important thing in life is their own inner personality. They are willing to go to great lengths to avoid conflict and maintain peace whenever possible.\n\nLibra – The Measure of Our Souls The shortest myth of them all appears to provide a good analogy to the shortest constellation in the sky, which might even be considered non-existent, represented by the claws of Scorpio. Libra is a single point of balance amidst the sea of different extremes, symbolized only by the fifteenth degree of this magnificent sign, an object among animals and humans. There is something incredibly uncertain about Libra, as if they are unsure which side to choose next, recognizing that life's experiences teach us to be careful around others. Whatever we do during our lifetime serves only to guide our souls towards a \"higher power\" that will ultimately measure our existence, revealing where we went wrong or what we did right. Librans unconsciously teach us that true liberation is found in lightness.",
        startMonth: 'SEP',
        startDay: '23',
        endMonth: 'OCT',
        endDay: '23',
        top: '300%'
    },
    'Scorpio': {
        nickname: 'The Scorpion',
        description: "Scorpios are known for their passionate and assertive nature with a level of determination and focus that is often unmatched by the other zodiac signs. They are known to delve deeply into research to uncover the truth behind anything they consider to be important. Scorpios are great leaders and guides who are resourceful, dedicated and fearless when faced with challenges.\n\nScorpio - the Deadly Warrior They are known to be sent by the goddess to accomplish a lethal mission and they are fearless and unstoppable in their pursuit. They fight relentlessly for their cause, without concern for failure or the consequences. With deep self-awareness, Scorpios uncover ways to confront their deepest, darkest motives and to hide their talents and dark desires. They must break free from restrictions and taboos to discover the freedom to fight for their beliefs and find peace and happiness.",
        startMonth: 'OCT',
        startDay: '24',
        endMonth: 'NOV',
        endDay: '21',
        top: '300%'
    },
    'Sagittarius': {
        nickname: 'The Archer',
        description: "Sagittarius individuals are known for their curiosity and energy, making them natural travelers of the zodiac. Their open mind and philosophical views drive them to explore the world in search of the meaning of life. As extroverts, they are optimistic, enthusiastic, and always ready for change. While they are often preoccupied with mental work, they have the ability to turn their visions and thoughts into concrete actions and circumstances.\n\nSagittarius - the Misunderstood Healer Guided by the centaurs and the story of Chiron, Sagittarius is the sign of teaching and healing. They are always ready to lend a helping hand and are natural benefactors, but their selflessness is often misunderstood by the common people. Pain is often hidden behind their smile, and they would willingly give everything they have to help others heal, and seek a life free from pain. Despite being blessed with many incredible things, Sagittarius individuals may still feel like something is missing to make their life complete.",
        startMonth: 'NOV',
        startDay: '22',
        endMonth: 'DEC',
        endDay: '21',
        top: '300%'
    },
    'Capricorn': {
        nickname: 'The Goat',
        description: "Capricorn is a sign that is associated with time and responsibility. Capricorn individuals are typically traditional and serious in nature, possessing an inner sense of independence that allows them to make significant progress in both their personal and professional lives. They are skilled in self-control, can make realistic plans, and are capable of managing many people at once. Capricorns learn from their mistakes and rely on their experience and expertise to achieve success.\n\nCapricorn – the Goat of Fear with a tail of a fish. This symbol represents the decision to protect oneself from monsters in our minds, lives, and physical surroundings. Capricorns are always ready to transform themselves to confront and conquer their fears. However, this defensive mechanism can lead to a chain reaction of fear. Capricorns face the world with bravery, never running away but constantly battling their inner monsters in secrecy.",
        startMonth: 'DEC',
        startDay: '22',
        endMonth: 'JAN',
        endDay: '19',
        top: '0%'
    },
    'Aquarius': {
        nickname: 'The Water Bearer',
        description: "Aquarius is one of the most unique signs of the zodiac, and people born under this sign experience a sense of uniqueness. This makes them eccentric and energetic in their fight for freedom, or at times shy and quiet, afraid to express their true personality. In both cases, they are deep thinkers and highly intellectual people who love to fight for idealistic causes. They can see people without prejudice, making them truly special. Although they can easily adapt to the energy that surrounds them, Aquarius representatives have a deep need for alone time to restore their inner power.\n\nAquarius - the Pretty Protégé While the beautiful Ganymede, the cupbearer to the greek gods may have appeared thin and weak, this does not diminish the strength of character in these individuals. They always have someone to support and guide them towards enlightenment. They are often in positions of power, and their issues with authority usually stem from their relationship with other people rather than the leadership structure itself. To find their center, they must be willing to dig deep, and embrace their own essence.",
        startMonth: 'JAN',
        startDay: '20',
        endMonth: 'FEB',
        endDay: '18',
        top: '0%'
    },
    'Pisces': {
        nickname: 'The Fishes',
        description: "Pisces is a very friendly sign, often finding themselves in the company of diverse people. They are selfless and always willing to help others, which is admirable as long as they don't expect too much in return. Individuals born with their Sun in Pisces possess an intuitive understanding of the life cycle, forming incredible emotional relationships with others based on the natural order and their senses.\n\nPisces - the Loving Fish represents two people skinny dipping and suddenly transforming into two fish swimming around each other in a crystal-clear lake. The sign is often associated with its historical and mythological background as the follower of Capricorn. Fear can drive Pisces individuals away from loved ones, push them into romance, or leave them feeling unwilling and powerless. Still, love helps them swim through even the muddiest waters to find the one their heart desire. They are not in search of just any love, but rather their soulmate, someone who connects with them at a deep level, ready to exchange everything they have with their Pisces partner throughout their entire shared lifetime and beyond.",
        startMonth: 'FEB',
        startDay: '19',
        endMonth: 'MAR',
        endDay: '20',
        top: '0%'
    },
};
//Functions
$(window).on('load', () => {
    let zodiacSign = getLocalStorage('zodiacSign');

    displayZodiac('Capricorn');
    $(monthSelect).on('change', (event) => {
        let monthValue = $(monthSelect).val();
        if(monthValue) {
            $(daySelect).prop('disabled', false).html('');

            for(let i = 0; i <= months[monthValue].day; i++) {
                let option = $("<option>");
                if(i == 0) {
                    option.val("").text("Day");
                }
                else {
                    option.val(i).text(i);
                }
                $(daySelect).append(option);
            }
        }
        else {
            $(daySelect).prop('disabled', 'true').html('');

            let option = $("<option>");
            option.val("").text("Day");

            $(daySelect).append(option);
        }
    });

    $(zodiacButton).on('click', (event) => {
        event.preventDefault();

        let monthValue = $(monthSelect).val();
        let dayValue = $(daySelect).val();
        let numericDayValue = parseInt(dayValue, 10);
        let zodiacSign = "";

        if(monthValue !== "" && dayValue !== "") {
            for (const zodiac in zodiacSigns) {
                const {startMonth, startDay, endMonth, endDay} = zodiacSigns[zodiac];   
                const isWithinStartRange = (monthValue === startMonth && numericDayValue >= startDay);
                const isWithinEndRange = (monthValue === endMonth && numericDayValue <= endDay);

                if (isWithinStartRange || isWithinEndRange) {
                    zodiacSign = zodiac;
                    break;
                }
            }
        }

        if(zodiacSign) {
            setLocalStorage('zodiacSign', zodiacSign);

            $(zodiacButton).prop('disabled', 'true');
            setTimeout(() => {
                $(zodiacButton).prop('disabled', 'false');
            }, 1500);

            
        }
        else {
            errorCheck(monthValue, dayValue);
        }
    });

    let splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        fixedWidth: '100%',
        fixedHeight: '88vh',
        paginationKeyboard: true,
        preloadPages: 1,
        keyboard: 'global',
    });
    splide.mount();
});
function displayZodiac(zodiacSign) {
    let zodiacUpperCase = zodiacSign.toUpperCase();
    let zodiacLowerCase = zodiacSign.toLowerCase();

    let imgSrc = `styles/res/${zodiacLowerCase}/background.jpg`;

    $(zodiacImage).css('background-image', `url(${imgSrc})`);
    $(textContainer).css('transform', `translateY(${zodiacSigns[zodiacSign].top})`);
    $(zodiacTitle).html(zodiacUpperCase);
    $(zodiacSubText).html(zodiacSigns[zodiacSign].nickname);
    $(zodiacDescription).html(zodiacSigns[zodiacSign].description);
}
function errorCheck(monthValue, dayValue) {
    const toggleErrorMessage = (message, delay = 0) => {
        $(errorMessage).html(message).css('visibility', 'visible');
        setTimeout(() => {
            $(errorMessage).css('visibility', 'hidden');
        }, delay);
    }

    const toggleElements = (action) => {
        [navBar, errorMessage, dateContainer, zodiacButton, dateSelect].forEach(element => {
            $(element)[action]('error');
        });
        [monthSelect, daySelect, zodiacButton].forEach(element => {
            $(element).prop('disabled', action === 'addClass');
        });
    };

    toggleElements('addClass');

    toggleErrorMessage((dayValue === "" && monthValue !== "") ? 'PLEASE SELECT A DAY' : 'PLEASE SELECT A MONTH AND DAY', 1300);

    setTimeout(() => {
        toggleElements('removeClass')
    }, 1500);
}
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
function getLocalStorage(key) {
    return localStorage.getItem(key);
}
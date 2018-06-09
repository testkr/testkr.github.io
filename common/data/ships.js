window.ships = [

    // Do NOT change the order of the ships
    
    { // 0
        name: '통통배',
        thumb: 'ship_0001_c.png',
        description: '파티의 체력을 X1.3, 선장의 회복을 120 증가',
        hp: function(p) {
            return p.boatLevel < 6  ? 1.0  :
                   p.boatLevel < 10 ? 1.1 :
                                      1.3 ;
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ][p.boatLevel - 1];
        }
    },

    { // 1
        name: '고잉 메리호',
        thumb: 'ship_0002_c.png',
        description: '파티의 공격력X1.5, 선장의 회복을 300증가',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 100, 130, 150, 170, 190, 210, 230, 250, 270, 300 ][p.boatLevel - 1];
        },
        atk: function(p) {
            return p.boatLevel < 6  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 2
        name: '해군선',
        thumb: 'ship_0003_c.png',
        description: '파티의 체력X1.5, 사격유형 캐릭터의 공격력 100증가',
        atkStatic: function(p) {
            return !p.unit.class.has('사격') ? 0 :
                [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ][p.boatLevel -1];
        },
        hp: function(p) {
            return p.boatLevel < 5  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 3
        name: '발라티에',
        thumb: 'ship_0004_c.png',
        description: '선장의 체력을 2000증가',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    { // 4
        name: '관선',
        thumb: 'ship_0005_c.png',
        description: '참격유형 캐릭터의 공격과 체력 X1.5 , 선장의 회복력 700 감소',
        atk: function(p) {
            return !p.unit.class.has('참격') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('참격') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 : -700;
        }
    },

    { // 5
        name: 'Miss 러브덕 호',
        thumb: 'ship_0006_c.png',
        description: '받는 데미지 10% 감소, 타격유형 캐릭터의 공격 100증가',
        atkStatic: function(p) {
            return !p.unit.class.has('타격') ? 0 : [ 0, 0, 0, 0, 0, 0, 50, 50, 50, 100 ][p.boatLevel -1];
        }
    },

    { // 6
        name: '고잉 메리호 비행모델',
        thumb: 'ship_0007_c.png',
        description: '일당의 공격력 1.2배 증가, 턴 종료 후 체력을 350 회복한다.',
        atk: function(p) {
            return p.boatLevel < 7 ? 1 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        },
        heal: function(p) {
            return [ 50, 100, 125, 150, 175, 200, 250, 275, 300, 350 ][p.boatLevel - 1];
        }
    },

    { // 7
        name: '모비딕',
        thumb: 'ship_0008_c1.png',
        description: '일당의 공격력 1.5배 증가, 체력 1.4배 증가, 전투 사작시 체력이 50% 상태로 된다.',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    { // 8
        name: '빅 탑',
        thumb: 'ship_0009_c1.png',
        description: '코스트 20이하 캐릭터의 공격력이 1.5배 증가,  4성 이하 캐릭터의 체력이 1.4배증가',
        atk: function(p) {
            var matching = p.unit.cost <= 15 || (p.unit.cost <= 20 && p.boatLevel >= 6);
            return matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.stars <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        }
    },

    { // 9
        name: '베잔 블랙',
        thumb: 'ship_0010_c1.png',
        description: '전투 시작시 스킬 1턴 단축, 속 속성 공격력 1.4배, 체력 1.3배 증가',
        atk: function(p) {
            return p.unit.type != '속도' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != '속도' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 10
        name: '아오키지의 자전거',
        thumb: 'ship_0011_c1.png',
        description: '타격타입의 공격력과 체력 1.5배 증가, [고기]슬롯 출현률 현저히 감소',
        atk: function(p) {
            return !p.unit.class.has('타격') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('타격') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        }
    },

    { // 11
        name: '에이스의 스트라이커',
        thumb: 'ship_0012_c1.png',
        description: '사격타입의 공격력 1.5배, 체력 1.3배 증가, 전투 시작전 사격타입 스킬 1턴 단축',
        atk: function(p) {
            return !p.unit.class.has('사격') ? 1 :
                [ 1.2, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('사격') ? 1 :
                [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 12
        name: '드레드노트 샤벨',
        thumb: 'ship_0014_c1.png',
        description: '일당의 체력 1.5배 증가, 턴 종료 후 무속성 데미지 5,000',
        hp: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5][p.boatLevel - 1];
        }
    },

    { // 13
        name: '싸우전드 써니호',
        thumb: 'ship_0013_c.png',
        description: '일당의 공격력 1.5배, 필살기: 적 전체에 50,000의 무속성 데미지 (쿨타임: 15 턴)',
        atk: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5 ][p.boatLevel - 1];
        }
    },
    
    { //14
        name: '쿠자 해적선',
        thumb: 'ship_0015_c1.png',
        description: '자유타입의 공격력 1.5배, 체력 1.35배 증가, 자유타입외 체력 99% 감소. 필살기: 체력 6,500 회복 (쿨타임: 15 턴).',
        atk: function(p) {
            return !p.unit.class.has('자유') ? 1 :
            [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('자유') ? 0.01 :
                [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { //15
        name: '방주 맥심',
        thumb: 'ship_0016_c1.png',
        description: '속 속성, 심 속성 공격력 1.5배, 체력 1.2배 증가. 필살기: 적 전체에 56,560의 고정 데미지 (쿨타임: 17 턴)',
        atk: function(p) {
            return p.unit.type == "마음" || p.unit.type == "속도" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "마음" || p.unit.type == "속도" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 1] : 1;
        }
    },
    
    { // 16
        name: '레드 포스',
        thumb: 'ship_0017_c1.png',
        description: '박식 타입의 공격력 1.5배, 체력 1.35배 증가 , 자슬롯 출현율 증가.',
        atk: function(p) {
            return  !p.unit.class.has('박식') ? 1 : [ 1.0, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('박식') ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { // 17
        name: '2주년 사우전드 써니호(약화)',
        thumb: 'ship_0018_c1.png',
        description: '일당의 공격력 1.2배.',
        atk: function(p) { return 1.2; },
    }, 
    {
        name: '태양 해적단 호',
        thumb: 'ship_0019_c.png',
        description: '팀에 격투타입 캐릭터가 많을수록 체력, 공격력 각각 최대 1.5배증가 (격투타입 6명팀 기준). 격투타입이 아닐시 체력,공격력 격감(약95%). ',
        atk: function(p) {
            return !p.unit.class.has('격투') ? .05 :
                [ p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.01 : p.classCount.격투 == 3 ? 1.02 : p.classCount.격투 == 4 ? 1.03 : p.classCount.격투 == 5 ? 1.04 : p.classCount.격투 == 6 ? 1.05 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.02 : p.classCount.격투 == 3 ? 1.03 : p.classCount.격투 == 4 ? 1.04 : p.classCount.격투 == 5 ? 1.05 : p.classCount.격투 == 6 ? 1.1 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.02 : p.classCount.격투 == 3 ? 1.03 : p.classCount.격투 == 4 ? 1.05 : p.classCount.격투 == 5 ? 1.1 : p.classCount.격투 == 6 ? 1.15 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.02 : p.classCount.격투 == 3 ? 1.05 : p.classCount.격투 == 4 ? 1.1 : p.classCount.격투 == 5 ? 1.15 : p.classCount.격투 == 6 ? 1.2 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.05 : p.classCount.격투 == 3 ? 1.1 : p.classCount.격투 == 4 ? 1.15 : p.classCount.격투 == 5 ? 1.2 : p.classCount.격투 == 6 ? 1.25 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.05 : p.classCount.격투 == 3 ? 1.1 : p.classCount.격투 == 4 ? 1.15 : p.classCount.격투 == 5 ? 1.2 : p.classCount.격투 == 6 ? 1.3 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.15 : p.classCount.격투 == 4 ? 1.2 : p.classCount.격투 == 5 ? 1.25 : p.classCount.격투 == 6 ? 1.35 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.15 : p.classCount.격투 == 4 ? 1.2 : p.classCount.격투 == 5 ? 1.3 : p.classCount.격투 == 6 ? 1.4 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.15 : p.classCount.격투 == 4 ? 1.2 : p.classCount.격투 == 5 ? 1.3 : p.classCount.격투 == 6 ? 1.45 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.2 : p.classCount.격투 == 4 ? 1.3 : p.classCount.격투 == 5 ? 1.4 : p.classCount.격투 == 6 ? 1.5 : 0][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('격투') ? .05 :
                 [ p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.01 : p.classCount.격투 == 3 ? 1.02 : p.classCount.격투 == 4 ? 1.03 : p.classCount.격투 == 5 ? 1.04 : p.classCount.격투 == 6 ? 1.05 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.02 : p.classCount.격투 == 3 ? 1.03 : p.classCount.격투 == 4 ? 1.04 : p.classCount.격투 == 5 ? 1.05 : p.classCount.격투 == 6 ? 1.1 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.02 : p.classCount.격투 == 3 ? 1.03 : p.classCount.격투 == 4 ? 1.05 : p.classCount.격투 == 5 ? 1.1 : p.classCount.격투 == 6 ? 1.15 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.02 : p.classCount.격투 == 3 ? 1.05 : p.classCount.격투 == 4 ? 1.1 : p.classCount.격투 == 5 ? 1.15 : p.classCount.격투 == 6 ? 1.2 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.05 : p.classCount.격투 == 3 ? 1.1 : p.classCount.격투 == 4 ? 1.15 : p.classCount.격투 == 5 ? 1.2 : p.classCount.격투 == 6 ? 1.25 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.05 : p.classCount.격투 == 3 ? 1.1 : p.classCount.격투 == 4 ? 1.15 : p.classCount.격투 == 5 ? 1.2 : p.classCount.격투 == 6 ? 1.3 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.15 : p.classCount.격투 == 4 ? 1.2 : p.classCount.격투 == 5 ? 1.25 : p.classCount.격투 == 6 ? 1.35 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.15 : p.classCount.격투 == 4 ? 1.2 : p.classCount.격투 == 5 ? 1.3 : p.classCount.격투 == 6 ? 1.4 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.15 : p.classCount.격투 == 4 ? 1.2 : p.classCount.격투 == 5 ? 1.3 : p.classCount.격투 == 6 ? 1.45 : 0, p.classCount.격투 == 1 ? 1 : p.classCount.격투 == 2 ? 1.1 : p.classCount.격투 == 3 ? 1.2 : p.classCount.격투 == 4 ? 1.3 : p.classCount.격투 == 5 ? 1.4 : p.classCount.격투 == 6 ? 1.5 : 0][p.boatLevel - 1];
        }
    },
    
    { // 19
        name: "돈키호테 해적단선",
        thumb: 'ship_0020_c.png',
        description: '야심 타입 캐릭터의 공격력을 최대 1.5배, 체력을 1.35배 증가시킨다. 필살기: 야심타입의 퍼펙트 적중률을 쉽게 만들어준다,2턴 동안 체인 계수가 +0.2 (발동: 15턴)',
        atk: function(p) { return !p.unit.class.has('야심') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('야심') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    { // 19
        name: "돈키호테 해적단선 - 필살기 활성화",
        thumb: 'ship_0020_c.png',
        description: '야심 타입 캐릭터의 공격력을 최대 1.5배, 체력을 1.35배 증가시킨다. 필살기: 야심타입의 퍼펙트 적중률을 쉽게 만들어준다,2턴 동안 체인 계수가 +0.2 (발동: 15턴)',
        atk: function(p) { return !p.unit.class.has('야심') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('야심') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 20
        name: '로켓맨',
        thumb: 'ship_0021_c.png',
        description: '강인 캐릭터의 공격력을 1.55배 상승시키고, 다른 유형의 체력이 크게 줄어든다. 강인 타입 캐릭터 수에 따라 체력이 회복된다. 필살기: 무속성 단체 대미지(17턴)',
      atk: function(p) {
            return !p.unit.class.has('강인') ? 1 : [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.class.has('강인') ? 1 : 0.01;
        },
        heal: function(p) {
            return p.classCount.강인 == 1 ? 1 : p.classCount.강인 == 2 ? 10 : p.classCount.강인 == 3 ? 20 : p.classCount강인 == 4 ? 30 : p.classCount.강인 == 5 ? 100 : p.classCount.강인 == 6 ? 900 : 0;  
        },
        
    },
    
    { // 21
        name: '모비딕호 정상 전쟁의 용자(약화)',
        thumb: 'ship_0022_c.png',
        description: '채력 1.3배 상승',
        hp: function(p) {
            return 1.3;
        },
    },
    
    { // 22
        name: '가프의 군함',
        thumb: 'ship_0023_c.png',
        description: '힘 속성 캐릭터와 마음 속성 캐릭터의 공격을 1.5배, 체력 1.25배로 상승시킨다.',
        atk: function(p) {
             return p.unit.type == "마음" || p.unit.type == "힘" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
          },
        hp: function(p) {
            return p.unit.type == "마음" || p.unit.type == "힘" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
          },
    },
    
     { //23
        name: '폴라탱호',
        thumb: 'ship_0024_c.png',
        description: '자유와 참격 캐릭터의 공격력 1.5배, 체력 1.25배로 만들고, 퍼펙트 타이밍이 쉬워 진다. 필살기 : 일당의 체력이 매우 적을 떄 체력이 7,000 회복된다. (18턴)',
        atk: function(p) {
            return !(p.unit.class.has('참격') || p.unit.class.has('자유')) ? 1 : [ 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('참격') || p.unit.class.has('자유')) ? 1 : [ 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25 ][p.boatLevel - 1];
        },
    },
    { // 24
        name: '빅톱호(약화)',
        thumb: 'ship_0025_c.png',
        description: '코스트 20이하의 캐릭터 공격력이 1.2배',
        atk: function(p) {
            return p.unit.cost <= 20 ? 1.2 : 1;
        }
    },
    { // 25
        name: '싸우전드 써니호 - 코팅 선',
        thumb: 'ship_0026_c.png',
        description: '일당의 공격력이 1.5배 상승한다. 필살기: 1턴 동안 받는 대미지 반감 (16턴)',
        atk: function(p) {
            return [ 1.3, 1.3, 1.3, 1.3, 1.35, 1.35, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1];
        }
    },
    { // 26
        name: '키자루 상륙 선전포고의 포탄',
        thumb: 'ship_0027_c.png',
        description: '사격 캐릭터의 공격력이 1.55배, 체력이 1.2배 상승한다. 전투 시작시 사격 캐릭터의 필살기 쿨감소 2턴 필살기 : 적 전체 체력을 7% 줄인다.(15턴)',
        atk: function(p) {
            return !(p.unit.class.has('사격')) ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('사격')) ? 1 : [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    { // 27
        name: '고잉 루피 선배호!',
        thumb: 'ship_0028_c.png',
        description: '타격 캐릭터 6기 편성일 때 공격력 1.5배, 체력 1.2배 상승한다. 모험을 시작할 때 타격 캐릭터의 필살기를 1턴 단축시킨다. 필살기 : 1턴 동안 각각의 적에 대해 1만의 넘는 대미지 초 격감(쿨타임: 17 턴).',
        atk: function(p) {
            return !(p.classCount.타격 == 6) ? 1 : !p.unit.class.has('타격') ? 1 :
                [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.classCount.타격 == 6) ? 1 : !p.unit.class.has('타격') ? 1 :
                [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    { //28
        name: "스릴러 바크",
        thumb: 'ship_0029_c.png',
        description: '[기술][지능]속성 캐릭터의 공격력 1.5배, 체력 1.25배 상승.',
        atk: function(p) {
            return p.unit.type == '기술' || p.unit.type == "지능" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == '기술' || p.unit.type == "지능" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    { //29
        name: "까마귀 마루호 (약화)",
        thumb: 'ship_0030_c.png',
        //description: 'Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (cooldown: 12 turns).',
        description: '사격 캐릭터의 공격력 1.2배 상승. 필살기: 적 공격을 1턴 늦춘다. (쿨타임: 16 턴).',
        /*atk: function(p) {
            return !(p.unit.class.has('참격') || p.unit.class.has('타격') || p.unit.class.has('격투') || p.unit.class.has('자유') || p.unit.class.has('박식') || p.unit.class.has('강인') || p.unit.class.has('야심')) ? 2 : 1.5;
        },
        hp: function(p) {
            return !(p.unit.class.has('참격') || p.unit.class.has('타격') || p.unit.class.has('격투') || p.unit.class.has('자유') || p.unit.class.has('박식') || p.unit.class.has('강인') || p.unit.class.has('야심')) ? 2 : 1.02;
        },*/
        atk: function(p) { return p.unit.class.has("사격") ? 1.2 : 1; },
    },
    
    { //29.2
        name: "까마귀 마루호 - (필살기 활성화)(약화)",
        thumb: 'ship_0030_c.png',
        //description: 'Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (cooldown: 12 turns).',
        description: '사격 캐릭터의 공격력 1.2배 상승. 필살기 활성화: 적 공격을 1턴 늦춘다. (쿨타임: 16 턴).',
        /*atk: function(p) {
            return !(p.unit.class.has('참격') || p.unit.class.has('타격') || p.unit.class.has('격투') || p.unit.class.has('자유') || p.unit.class.has('박식') || p.unit.class.has('강인') || p.unit.class.has('야심')) ? 2 : 1.5;
        },
        hp: function(p) {
            return !(p.unit.class.has('참격') || p.unit.class.has('타격') || p.unit.class.has('격투') || p.unit.class.has('자유') || p.unit.class.has('박식') || p.unit.class.has('강인') || p.unit.class.has('야심')) ? 2 : 1.02;
        },*/
        atk: function(p) { return p.unit.class.has("사격") ? 1.2 : 1; },
    },
    
    
    
    { //30
        name: "3주년 싸우전드 써니호(약화)",
        thumb: 'ship_0032_c.png',
        //description: 'Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        description: '공격력 1.2배 상승.',
        atk: function(p) { return 1.2; },
    },
    
    
    
    { //31
        name: "플라잉 더치맨호",
        thumb: 'ship_0033_c.png',
        description: '공격력 1.5배 상승, 획득 해적 EXP 1.5배 상승. 필살기: 1턴 동안 적 전체의 방어력 25% 감소 (쿨타임: 16 턴).',
        atk: function(p) { return [ 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1]; },
    },
    
    
    
    { //31.2
        name: "플라잉 더치맨호 - (필살기 활성화)",
        thumb: 'ship_0033_c.png',
        description: '공격력 1.5배 상승, 획득 해적 EXP 1.5배 상승. 필살기 활성화: 1턴 동안 적 전체의 방어력 25% 감소 (쿨타임: 16 턴)',
        atk: function(p) { return [ 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1]; },
    },
    
    
    
    { //32
        name: "마샬 D. 티치 해적선(통나무배)",
        thumb: 'ship_0034_c.png',
        description: '일당의 체력을 1.25배 상승시키고, 모험이 시작될 때 필살기 1턴 단축. 격투, 참격, 타격, 사격 타입이 있을 때 일당의 공격력 1.55배 상승.',
        atk: function(p) { 
            return (p.classCount.타격 >= 1 && p.classCount.격투 >= 1 && p.classCount.사격 >= 1 && p.classCount.참격 >= 1) ? [ 1.2, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.5, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.25 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //33
        name: "혁명군의 검은까마귀",
        thumb: 'ship_0035_c.png',
        description: '일당의 체력을 1.2배 상승시키고, 모험이 시작될 때 필살기 1턴 단축. 힘,기술,속도 속성 캐릭터가 있을 때 일당의 공격력 1.55배 상승.',
        atk: function(p) { 
            return (p.colorCount.힘>=1 && p.colorCount.기술>=1 && p.colorCount.속도>=1) ? [ 1.2, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.5, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },

 { //34
        name: "쥬니샤",
        thumb: 'ship_0036_c.png',
        description: 'Boost ATK of Powerhouse and Cerebral units by 1.55x and their HP by 1.25x, makes PERFECTS easier to hit, and makes TND and Meat orbs beneficial to Powerhouse and Cerebral units.',
        atk: function(p) {
            return !(p.unit.class.has('Powerhouse') || p.unit.class.has('Cerebral')) ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Powerhouse') || p.unit.class.has('Cerebral')) ? 1 : [ 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //35
        name: "라분",
        thumb: 'ship_0038_c.png',
        description: 'Boosted Ability: Boosts ATK of all units by 1.5x. At the start of the adventure, all specials start at MAX charge. Default Ability: Boosts ATK of all units by 1.2x',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //36
        name: "섹시 폭시",
        thumb: 'ship_0037_c.png',
        description: 'Boosts ATK of all units by 1.5x. Boosts EXP gained by 1.2x and Beli gained by 2x.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //38
        name: "4주년 싸우전드 써니호",
        thumb: null,
        description: 'Boosted Ability 1: Boosts ATK of all units by 1.5x. Boosts EXP gained by 3x and Beli gained by 3x. Boosted Ability 2: Boosts ATK of all units by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //38
        name: "노스트라 카스텔로",
        thumb: null,
        description: 'Boosts ATK of all units by 1.55x and their HP by 1.3x. Makes PERFECTS easier to Hit. Cuts the current HP of each enemy by 3% at the end of each turn. Reduces ATK based on how many Slasher, Free Spirit or Powerhouse characters you have on your crew.',
        atk: function(p) {
            var reduction = 1;
            if(p.classCount.Slasher > 0) reduction *= 0.5;
            if(p.classCount.FreeSpirit > 0) reduction *= 0.5;
            if(p.classCount.Powerhouse > 0) reduction *= 0.5;
            return [ 1.1, 1.2, 1.25, 1.3, 1.4, 1.4, 1.5, 1.5, 1.5, 1.55 ][p.boatLevel - 1] * reduction;
        },
        hp: function(p) {
            return [ 1, 1, 1, 1, 1, 1, 1, 1.1, 1.2, 1.3 ][p.boatLevel - 1];
        },
    },

];


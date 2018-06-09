window.sailors = {
    311: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("박식") ? 50 : 0; },
    },
    312: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("박식") ? 50 : 0; },
    },
    360: {
        hpStatic: function(p) { return p.unit.class.has("강인") ? 100 : 0; },
    },
    361: {
        hpStatic: function(p) { return p.unit.class.has("강인") ? 100 : 0; },
    },
    364: {
        rcvStatic: function(p) { return 10; },
    },
    365: {
        rcvStatic: function(p) { return 10; },
    },
    450: {
        atkStatic: function(p) { return p.unit.class.has("격투") ? 20 : 0; },
    },
    451: {
        atkStatic: function(p) { return p.unit.class.has("격투") ? 20 : 0; },
    },
    525: {
        rcvStatic: function(p) { return p.unit.type == "마음" ? 15 : 0; },
    },
    526: {
        rcvStatic: function(p) { return p.unit.type == "마음" ? 15 : 0; },
    },
    527: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    528: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    553: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 20 : 0; },
    },
    554: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 20 : 0; },
    },
    555: {
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 10 : 0; },
    },
    556: {
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 10 : 0; },
    },
    559: {
        atkStatic: function(p) { return p.unit.class.has("사격") ? 20 : 0; },
    },
    560: {
        atkStatic: function(p) { return p.unit.class.has("사격") ? 20 : 0; },
    },
    640: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("격투") ? 100 : 0; },
    },
    641: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("격투") ? 100 : 0; },
    },
    644: {
        rcvStatic: function(p) { return p.unit.type == "지능" ? 20 : 0; },
        atkStatic: function(p) { return p.unit.type == "지능" ? 20 : 0; },
    },
    645: {
        rcvStatic: function(p) { return p.unit.type == "지능" ? 20 : 0; },
        atkStatic: function(p) { return p.unit.type == "지능" ? 20 : 0; },
    },
    646: {
        hpStatic: function(p) { return p.unit.type == "힘" ? 30 : 0; },
    },
    647: {
        hpStatic: function(p) { return p.unit.type == "힘" ? 30 : 0; },
    },
    1172: {
        rcvStatic: function(p) { return p.unit.type == "마음" ? 15 : 0; },
    },
    1173: {
        rcvStatic: function(p) { return p.unit.type == "마음" ? 15 : 0; },
    },
    1174: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 20 : 0; },
    },
    1175: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 20 : 0; },
    },
    1176: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    1177: {
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    1183: {
        atkStatic: function(p) { return p.percHP >= 99.0 && p.unit.type == "마음" ? 75 : 0; },
    },
    1184: {
        atkStatic: function(p) { return p.percHP >= 99.0 && p.unit.type == "마음" ? 75 : 0; },
    },
    1187: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    1188: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    1189: {
        atkStatic: function(p) { return p.unit.type == "속도" ? 40 : 0; },
    },
    1190: {
        atkStatic: function(p) { return p.unit.type == "속도" ? 40 : 0; },
    },
    1209: {
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 10 : 0; },
    },
    1210: {
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 10 : 0; },
    },
    1211: {
        atkStatic: function(p) { return p.unit.class.has("사격") ? 20 : 0; },
    },
    1212: {
        atkStatic: function(p) { return p.unit.class.has("사격") ? 20 : 0; },
    },
    1231: {
        atkStatic: function(p) { return p.unit.class.has("타격") ? 50 : 0; },
    },
    1232: {
        atkStatic: function(p) { return p.unit.class.has("타격") ? 50 : 0; },
    },
    1233: {
        rcvStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
    },
    1234: {
        rcvStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
    },
    1255: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("격투") ? 40 : 0; },
    },
    1256: {
        rcvStatic: function(p) { return p.unit.class.has("야심") ? 10 : 0; },
        atkStatic: function(p) { return p.unit.class.has("야심") ? 10 : 0; },
    },
    1271: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("야심") ? 100 : 0 : 0; },
    },
    1270: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("야심") ? 100 : 0 : 0; },
    },
    1273: {
        hpStatic: function(p) { return 75; },
    },
    1274: {
        hpStatic: function(p) { return 75; },
    },
    1277: {
        rcvAdded: function(p) { return 150; },
    },
    1278: {
        rcvAdded: function(p) { return 150; },
    },
    1317: {
        hpStatic: function(p) { return 75; },
    },
    1318: {
        hpStatic: function(p) { return 75; },
    },
    1321: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("박식") ? p.unit.class.has("참격") || p.unit.class.has("박식") ? 75 : 0 : 0 : 0; },
    },
    1322: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("박식") ? p.unit.class.has("참격") || p.unit.class.has("박식") ? 75 : 0 : 0 : 0; },
    },
    1363: {
        hpStatic: function(p) { return p.unit.type == "마음" ? 100 : 0; },
    },
    1364: {
        hpStatic: function(p) { return p.unit.type == "마음" ? 100 : 0; },
    },
    1367: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1368: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1377: {
        rcvAdded: function(p) { return 125; },
    },
    1378: {
        rcvAdded: function(p) { return 125; },
    },
    1405: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("사격") ? 100 : 0; },
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("사격") ? 100 : 0; },
    },
    1406: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("사격") ? 100 : 0; },
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.unit.class.has("사격") ? 100 : 0; },
    },
    1435: {
        atkStatic: function(p) { return p.classCount.강인 == 6 ? 150 : 0; },
    },
    1436: {
        atkStatic: function(p) { return p.classCount.강인 == 6 ? 150 : 0; },
    },
    1443: {
        hpStatic: function(p) { return p.classCount.강인 == 6 ? 150 : 0; },
        atkStatic: function(p) { return p.classCount.강인 == 6 ? 50 : 0; },
    },
    1444: {
        hpStatic: function(p) { return p.classCount.강인 == 6 ? 150 : 0; },
        atkStatic: function(p) { return p.classCount.강인 == 6 ? 50 : 0; },
    },
    1464: {
        rcvAdded: function(p) { return 100; },
    },
    1465: {
        rcvAdded: function(p) { return 100; },
    },
    1476: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1477: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1507: {
        atkStatic: function(p) { return 15; },
    },
    1508: {
        atkStatic: function(p) { return 15; },
    },
    1510: {
        atkStatic: function(p) { return p.percHP >= 70.0 && p.unit.class.has("타격") ? 20 : 0; },
    },
    1511: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("강인") ? p.unit.class.has("강인") ? 20 : 0 : 0 : 0; },
    },
    1523: {
        rcvAdded: function(p) { return 124; },
    },
    1524: {
        rcvAdded: function(p) { return 124; },
    },
    1529: {
        atk: function(p) { return p.captain != null ? p.captain.type == "힘" || p.captain.type == "속도" ? .5 : 1 : 1; },
    },
    1530: {
        atk: function(p) { return p.captain != null ? p.captain.type == "힘" || p.captain.type == "속도" ? .5 : 1 : 1; },
    },
    1537: {
        hpStatic: function(p) { return p.unit.type == "힘" ? 150 : 0; },
    },
    1538: {
        hpStatic: function(p) { return p.unit.type == "힘" ? 150 : 0; },
    },
    1539: {
        atkStatic: function(p) { return p.unit.type == "지능" ? 50 : 0; },
    },
    1540: {
        atkStatic: function(p) { return p.unit.type == "지능" ? 50 : 0; },
    },
    1574: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 : 0; },
    },
    1575: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 : 0; },
    },
    1613: {//not working
        staticMult: function(p) { return 2; }
    },
    1614: {//not working
        staticMult: function(p) { return 2; }
    },
    1655: {
        atkStatic: function(p) { return p.unit.type == "속도" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "속도" ? 75 : 0; },
    },
    1656: {
        atkStatic: function(p) { return p.unit.type == "속도" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "속도" ? 75 : 0; },
    },
    1681: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1682: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1699: {
        atkStatic: function(p) { return p.unit.class.has("격투") ? 75 : 0; },
    },
    1700: {
        atkStatic: function(p) { return p.unit.class.has("격투") ? 75 : 0; },
    },
    1705: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1706: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1728: {
        atkStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 30 : 0; },
    },
    1729: {
        atkStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 30 : 0; },
    },
    1744: {
        atkStatic: function(p) { return p.unit.class.has("사격") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("사격") ? 30 : 0; },
    },
    1745: {
        atkStatic: function(p) { return p.unit.class.has("사격") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("사격") ? 30 : 0; },
    },
    1752: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 20 : 0; },
    },
    1753: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 20 : 0; },
    },
    1754: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
    1755: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
    1773: {
        atkStatic: function(p) { return p.unit.class.has("자유") ? 25 : 0; },
    },
    1774: {
        atkStatic: function(p) { return p.unit.class.has("자유") ? 25 : 0; },
    },
    1797: {
        atkStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 75 : 0; },
    },
    1798: {
        atkStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "힘" || p.unit.type == "기술" || p.unit.type == "속도" ? 75 : 0; },
    },
    1890: {
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 50 : 0; },
    },
    1891: {
        rcvStatic: function(p) { return p.unit.class.has("사격") ? 50 : 0; },
    },
    1892: {
        atk: function(p) { return p.percHP <= 50.0 && p.slot == p.sourceSlot ? 1.25 : 1; },
    },
    1893: {
        atk: function(p) { return p.percHP <= 50.0 && p.slot == p.sourceSlot ? 1.25 : 1; },
    },
    1907: {
        atkStatic: function(p) { return p.slot <= 1 ? 100 : 0; },
    },
    1908: {
        atkStatic: function(p) { return p.slot <= 1 ? 100 : 0; },
    },
    1973: {
        atkStatic: function(p) { return p.unit.class.has("박식") ? 75 : 0; },
    },
    1974: {
        atkStatic: function(p) { return p.unit.class.has("박식") ? 75 : 0; },
    },
    1975: {
        atkStatic: function(p) { return p.percHP <= 30.0 ? 40 : 0; },
    },
    1976: {
        atkStatic: function(p) { return p.percHP <= 30.0 ? 40 : 0; },
    },
    1983: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
    },
    1984: {
        atkStatic: function(p) { return p.unit.class.has("자유") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("자유") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("자유") ? 150 : 0; },
    },
    1985: {
        atkStatic: function(p) { return p.unit.class.has("자유") ? 150 : 0; },
        hpStatic: function(p) { return p.unit.class.has("자유") ? 150 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("자유") ? 150 : 0; },
    },
    1992: {
        atkStatic: function(p) { return p.unit.class.has("자유") ? 50 : 0; },
    },
    1993: {
        atkStatic: function(p) { return p.unit.class.has("자유") ? 50 : 0; },
    },
    2006: {
        atkStatic: function(p) { return (p.colorCount.STR>=4 && p.unit.type == "힘") ? 125 : (p.colorCount.DEX>=4 && p.unit.type == "기술") ? 125 : (p.colorCount.QCK>=4 && p.unit.type == "속도") ? 125 : (p.colorCount.PSY>=4 && p.unit.type == "마음") ? 125 : (p.colorCount.INT>=4 && p.unit.type == "지능") ? 125 : 0; },
        type: "type",
    },
    2007: {
        atkStatic: function(p) { return (p.colorCount.STR>=4 && p.unit.type == "힘") ? 125 : (p.colorCount.DEX>=4 && p.unit.type == "기술") ? 125 : (p.colorCount.QCK>=4 && p.unit.type == "속도") ? 125 : (p.colorCount.PSY>=4 && p.unit.type == "마음") ? 125 : (p.colorCount.INT>=4 && p.unit.type == "지능") ? 125 : 0; },
        type: "type",
    },
    2026: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 50 : 0; },
    },
    2027: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 50 : 0; },
    },
    2031: {
        atkStatic: function(p) { return p.unit.type == "지능"  ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "지능"  ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "지능"  ? 50 : 0; },
    },
    2038: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 40 : 0; },
        hpStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 40 : 0; },
    },
    2039: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 40 : 0; },
        hpStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "속도" ? 40 : 0; },
    },
    2040: {
        atkStatic: function(p) { return p.unit.class.has("격투") ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("격투") ? 40 : 0; },
        hpStatic: function(p) { return p.unit.class.has("격투") ? 40 : 0; },
    },
    2041: {
        atkStatic: function(p) { return p.unit.class.has("격투") ? 40 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("격투") ? 40 : 0; },
        hpStatic: function(p) { return p.unit.class.has("격투") ? 40 : 0; },
    },
    2042: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    2043: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    2067: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
    },
    2068: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
        hpStatic: function(p) { return p.unit.class.has("참격") ? 30 : 0; },
    },
    2081: {
        atkStatic: function(p) { return p.unit.class.has("참격") ? 40 : 0; },
    },
    2110: {
        atkStatic: function(p) { return p.unit.type == "기술" ? 20 : 0; },
        rcvStatic: function(p) { return p.unit.type == "기술" ? 20 : 0; },
        hpStatic: function(p) { return p.unit.type == "기술" ? 20 : 0; },
    },
    2111: {
        atkStatic: function(p) { return p.unit.type == "기술" ? 20 : 0; },
        rcvStatic: function(p) { return p.unit.type == "기술" ? 20 : 0; },
        hpStatic: function(p) { return p.unit.type == "기술" ? 20 : 0; },
    },
    2122: {
        atkStatic: function(p) { return p.unit.class.has("박식") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("박식") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("박식") ? 50 : 0; },
    },
    2123: {
        atkStatic: function(p) { return p.unit.class.has("박식") ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.class.has("박식") ? 50 : 0; },
        hpStatic: function(p) { return p.unit.class.has("박식") ? 50 : 0; },
    },
    5000: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 50 : 0; },
    },
    5001: {
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 30 : 0; },
    },
    5002: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
    },
    5003: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "지능" ? 75 : 0; },
    },
    5012: {
        atkStatic: function(p) { return p.unit.type == "마음" ? 30 : 0; },
    },
    5013: {
        atkStatic: function(p) { return p.unit.type == "기술" ? 30 : 0; },
    },
    5014: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "기술" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "기술" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "기술" ? 50 : 0; },
    },
    5015: {
        atkStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "기술" ? 50 : 0; },
        hpStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "기술" ? 50 : 0; },
        rcvStatic: function(p) { return p.unit.type == "마음" || p.unit.type == "기술" ? 50 : 0; },
    },
};
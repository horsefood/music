class Accidental {
    constructor() {}

    static parseAccidental(acc) {
        switch (acc) {
            case 'sharp' :
                return '#';
            case 'natural' :
                return 'n';
            case 'flat' :
                return 'b';
            case 'double-sharp' :
                return '##';
            case 'sharp-sharp' :
                return '##';
            case 'flat-flat' :
                return 'bb';
            case 'quarter-sharp' :
                return '+';
            case 'three-quarters-flat' :
                return 'db';
            case 'three-quarters-sharp' :
                return '++';
            case 'slash-sharp' :
                return '++-';
            case 'slash-flat' :
                return 'bs';
            case 'double-slash-flat' :
                return 'bss';
            default :
                return '';
        }
    }

    static parseAlter(alter) {
        switch (alter) {
            case '1' :
                return '#';
            case '2' :
                return '##';
            case '-1' :
                return 'b';
            case '-2' :
                return 'bb';
            default :
                return '';
        }
    }
}

class Duration {
    constructor() {}

    static parseDuration(type) {
        if ('undefined' == typeof type) {
            return 'w';
        }

        switch (type) {
            case 'maxima' :
                return '1/8';
            case 'long' :
                return '1/4';
            case 'breve' :
                return '1/2';
            case 'whole' :
                //return '1';
                return 'w';
            case 'half' :
                //return '2';
                return 'h';
            case 'quarter' :
                //return '4';
                return 'q';
            case 'eighth' :
                return '8';
            case '16th' :
                return '16';
            case '32nd' :
                return '32';
            case '64th' :
                return '64';
            case '128th' :
                return '128';
            case '256th' :
                //return '256';
                return 'b';
            case '512th' :
                return '512';
            case '1024th' :
                return '1024';
        }
    }
}

class Clef {
    constructor() {}

    static parseClef(clef) {
        if ('undefind' == typeof clef) {
            return 'treble';
        }

        const sign = clef.sign;
        const line = clef.line;

        if ('G' == sign) {
            if ('1' == line) {
                return 'french';
            } else { //else if ('2' == line) {
                return 'treble';
            }
        } else if ('F' == sign) {
            if ('3' == line) {
                return 'baritone-f';
            } else if ('5' == line) {
                return 'subbass';
            } else { //else if ('4' == line) {
                return 'bass';
            }
        } else if ('C' == sign) {
            if ('1' == line) {
                return 'soprano';
            } else if ('2' == line) {
                return 'mezzo-soprano';
            } else if ('3' == line) {
                return 'alto';
            } else if ('4' == line) {
                return 'tenor';
            } else { //else if ('5' == line) {
                return 'baritone-c';
            }
        } else {
            return 'percussion';
        }
    }
}

class Key {
    constructor() {}

    static parseKey(key) {
        if ('undefind' == typeof key) {
            return 'C';
        }

        const fifths = key.fifths;
        const mode = key.mode;

        if ('major' == mode) {
            if ('0' == fifths) {
                return 'C';  //0
            } else if ('1' == fifths) {
                return 'G';  //1
            } else if ('2' == fifths) {
                return 'D';  //2
            } else if ('3' == fifths) {
                return 'A';  //3
            } else if ('4' == fifths) {
                return 'E';  //4
            } else if ('5' == fifths) {
                return 'B';  //5
            } else if ('6' == fifths) {
                return 'F#'; //6
            } else if ('7' == fifths) {
                return 'C#'; //7
            } else if ('-1' == fifths) {
                return 'F';  //1
            } else if ('-2' == fifths) {
                return 'Bb'; //2
            } else if ('-3' == fifths) {
                return 'Eb'; //3
            } else if ('-4' == fifths) {
                return 'Ab'; //4
            } else if ('-5' == fifths) {
                return 'Db'; //5
            } else if ('-6' == fifths) {
                return 'Gb'; //6
            } else if ('-7' == fifths) {
                return 'Cb'; //7
            }
        } else if ('minor' == mode) {
            if ('0' == fifths) {
                return 'Am';  //0
            } else if ('1' == fifths) {
                return 'Em';  //1
            } else if ('2' == fifths) {
                return 'Bm';  //2
            } else if ('3' == fifths) {
                return 'F#m'; //3
            } else if ('4' == fifths) {
                return 'C#m'; //4
            } else if ('5' == fifths) {
                return 'G#m'; //5
            } else if ('6' == fifths) {
                return 'D#m'; //6
            } else if ('7' == fifths) {
                return 'A#m'; //
            } else if ('-1' == fifths) {
                return 'Dm';  //1
            } else if ('-2' == fifths) {
                return 'Gm';  //2
            } else if ('-3' == fifths) {
                return 'Cm';  //3
            } else if ('-4' == fifths) {
                return 'Fm';  //4
            } else if ('-5' == fifths) {
                return 'Bbm'; //5
            } else if ('-6' == fifths) {
                return 'Ebm'; //6
            } else if ('-7' == fifths) {
                return 'Abm'; //
            }
        }
    }

    static ksCount(signature) {
        if ('undefind' == typeof signature) {
            return 0;
        }

        switch (signature) {
            case 'C' :
            case 'a' :
                return 0;
            case 'G' :
            case 'F' :
            case 'e' :
            case 'd' :
                return 1;
            case 'D' :
            case 'Bb':
            case 'b' :
            case 'g' :
                return 2;
            case 'A' :
            case 'Eb':
            case 'f#':
            case 'c' :
                return 3;
            case 'E' :
            case 'Ab':
            case 'c#':
            case 'f' :
                return 4;
            case 'B' :
            case 'Db':
            case 'g#':
            case 'bb':
                return 5;
            case 'F#':
            case 'Gb':
            case 'd#':
            case 'eb':
                return 6;
            case 'C#':
            case 'Cb':
                return 7;
            default :
                return 0;
        }
    }

    static keyPosition(signature) {
        let kmap = new HashMap();
        kmap.set('A', 0).set('B', 0).set('C', 0).set('D', 0).set('E', 0).set('F', 0).set('G', 0);

        if ('undefind' == typeof signature) {
            return kmap;
        }

        switch (signature) {
            case 'C' :
                break;
            case 'G' :
                kmap.set('F', 1);
                break;
            case 'D' :
                kmap.set('F', 1).set('C', 1);
                break;
            case 'A' :
                kmap.set('F', 1).set('C', 1).set('G', 1);
                break;
            case 'E' :
                kmap.set('F', 1).set('C', 1).set('G', 1).set('D', 1);
                break;
            case 'B' :
                kmap.set('F', 1).set('C', 1).set('G', 1).set('D', 1).set('A', 1);
                break;
            case 'F#':
                kmap.set('F', 1).set('C', 1).set('G', 1).set('D', 1).set('A', 1).set('E', 1);
                break;
            case 'C#':
                kmap.set('F', 1).set('C', 1).set('G', 1).set('D', 1).set('A', 1).set('E', 1).set('B', 1);
                break;
            case 'Cb':
                kmap.set('B', 1).set('E', 1).set('A', 1).set('D', 1).set('G', 1).set('C', 1).set('F', 1);
                break;
            case 'Gb':
                kmap.set('B', 1).set('E', 1).set('A', 1).set('D', 1).set('G', 1).set('C', 1);
                break;
            case 'Db':
                kmap.set('B', 1).set('E', 1).set('A', 1).set('D', 1).set('G', 1);
                break;
            case 'Ab':
                kmap.set('B', 1).set('E', 1).set('A', 1).set('D', 1);
                break;
            case 'Eb':
                kmap.set('B', 1).set('E', 1).set('A', 1);
                break;
            case 'Bb':
                kmap.set('B', 1).set('E', 1);
                break;
            case 'F':
                kmap.set('B', 1);
                break;
            default :
                break;
        }

        return kmap;
    }
}

class Time {
    constructor() {}

    static parseTime(time) {
        if ('undefind' == typeof time) {
            return '4/4';
        }

        const beats = time.beats;
        const type = time.type;
        return beats + '/' + type;
    }

    static parseType(type) {
        if ('undefined' == typeof type) {
            return 'whole';
        }

        switch (type) {
            case '1' :
                return 'whole';
            case '2' :
                return 'half';
            case '4' :
                return 'quarter';
            case '8' :
                return 'eighth';
            case '16' :
                return '16th';
            case '32' :
                return '32nd';
            case '64' :
                return '64th';
            case '128' :
                return '128th';
            case '256' :
                return '256th';
            case '512' :
                return '512th';
            case '1024' :
                return '1024th';
        }
    }

    static parseNumType(type) {
        if ('undefined' == typeof type) {
            return '1';
        }

        switch (type) {
            case 'whole' :
                return '1';
            case 'half' :
                return '2';
            case 'quarter' :
                return '4';
            case 'eighth' :
                return '8';
            case '16th' :
                return '16';
            case '32nd' :
                return '32';
            case '64th' :
                return '64';
            case '128th' :
                return '128';
            case '256th' :
                return '256';
            case '512th' :
                return '512';
            case '1024th' :
                return '1024';
        }
    }
}

class Score {

    constructor() {}

    display(VF, contexts, jstruct, options) {
        let systemcnt = 0;
        const stavecnt = new Array(jstruct.part.length);
        const bucket = new Array(jstruct.part.length);
        const mSize = new Array(jstruct.part.length);
        const lastpart = Number(jstruct.part.length) - 1;

        // part 정보 셋팅
        const [partnames, partbarlines, partsymbols] = this.setPartAttr(jstruct.partlist, jstruct.part.length);
        bucket.partnames = partnames;
        bucket.partbarlines = partbarlines;
        bucket.partsymbols = partsymbols;

        //console.log("partnames=",partnames," partbarlines=",partbarlines," partsymbols=",partsymbols);

        // 음표, 조표 갯수 등에 따른 마디 사이즈 계산
        for (let p in jstruct.part) {
            const measures = jstruct.part[p].measure;
            const size = measures.length;
            const mswidth = Number(jstruct.view.width) - 50;
            bucket[p] = new Array(size);
            mSize[p] = new Array(size);
            stavecnt[p] = 1;

            let kscount = 0;

            for (let m in measures) {
                const measure = measures[m];

                bucket[p][m] = {};
                bucket[p][m].newpage = false;
                bucket[p][m].newsystem = false;

                if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].staves)
                    stavecnt[p] = Number(measure.attr[0].staves);
                if ('undefined' != typeof measure.newsystem)
                    bucket[p][m].newsystem = measure.newsystem;
                if ('undefined' != typeof measure.newpage)
                    bucket[p][m].newpage = measure.newpage;

                if (bucket[p][m].newpage)
                    bucket[p][m].newsystem = true;
                if (bucket[p][m].newsystem)
                    systemcnt++;

                const notelen = new Array(stavecnt[p]);
                for (let i = 0; i < stavecnt[p]; i++) notelen[i] = 0;

                for (let i in measure.note) {
                    if ('undefined' == typeof measure.note[i].chord) {
                        if ('undefined' != typeof measure.note[i].staff) notelen[Number(measure.note[i].staff)-1]++;
                        else notelen[0]++;
                    }
                }

                let max = notelen[0];
                for (let i = 1; i < notelen.length; i++)
                    if (max < notelen[i])
                        max = notelen[i];
                bucket[p][m].notelen = max;

                // 노트가 3개 이하인 경우 마디가 너무 좁게 그려짐
                if (4 > bucket[p][m].notelen) bucket[p][m].notelen += 1;
                // clef 를 포함할 경우 마디 사이즈 조정
                if (-1 < measure.order.indexOf('cf') || bucket[p][m].newsystem) bucket[p][m].notelen += 2;

                if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].key) {
                    const signature = Key.parseKey(measure.attr[0].key);
                    kscount = Key.ksCount(signature);
                }

                const next = Number(m) + 1;
                if (bucket[p][m].newsystem || size == next) {
                    let sum = 0, start = 0, end = 0;
                    if (bucket[p][m].newsystem && size == next) {
                        end = m - 1;
                        bucket[p][m].size = mswidth;
                    } else {
                        end = ((size == next) ? m : (m - 1));
                    }

                    for (let i = end; 0 <= i && 'undefined' == typeof bucket[p][i].size; i--) {
                        sum += bucket[p][i].notelen;
                        start = i;
                    }

                    const adjust = 12 + kscount * 12;
                    const each = (mswidth - adjust) / sum;
                    sum = 0;
                    for (let i = start; i <= end; i++) {
                        bucket[p][i].size = Math.floor(bucket[p][i].notelen * each);
                        sum += bucket[p][i].size;
                    }
                    bucket[p][start].size += (mswidth - sum);  // add remains at first
                }
            }

            //stavecnt[p] = 1; //stavecnt 배열로 처리하여 불필요
        }
        bucket.mswidth = mSize; //measure 사이즈 반환

        // 1-1. 파트가 여러개 일 경우 파트별 avg 값으로 넒이 재계산
        if (options.combineparts) {
            const measure = jstruct.part[0].measure;
            const size = measure.length;
            let start = 0, end = 0;

            for (let m in measure) {
                const next = Number(m) + 1;
                let rlmswidth = Number(jstruct.view.width) - 50;

                if (bucket[0][m].newsystem || size == next) {
                    var sum = 0, mscnt = 0, perc =0;
                    end = ((size == next) ? m : (m - 1));

                    // part name 만큼 넓이 조절
                    if (0 == start && 'undefined' != typeof partnames[0].name) {
                        rlmswidth -= options.namesize; /*100*/
                    } else if ('undefined' != typeof partnames[0].abbreviation) {
                        rlmswidth -= options.abbrsize; /*70*/
                    }

                    // 마디의 끝부터 처음까지 넓이 분배
                    mscnt = Number(end) - Number(start) + 1;
                    var max = new Array(mscnt);
                    for (let i = end; i >= start; i--) {
                        if ('undefined' == typeof max[i]) max[i] = 0;

                        for (let p in jstruct.part) {
                            if (max[i] < bucket[p][i].notelen)
                                max[i] = bucket[p][i].notelen;
                        }

                        sum += max[i];
                    }

                    perc = Math.round(rlmswidth / sum * 100) / 100; //소숫점 둘째자리까지
                    sum = 0;

                    //console.log("start=", start, "end=", end);
                    for (let i = end; i >= start; i--) {
                        var width = Math.floor(max[i] * perc);
                        sum += width;

                        //console.log("max[i]=", max[i], "width=", width, " sum=", sum);
                        for (let p in jstruct.part) {
                            bucket[p][i].size = width;
                            if (i == start)
                              bucket[p][i].size += (rlmswidth - sum);

                              mSize[p][i] = bucket[p][i].size;
                        }
                    }

                    start = m;
                }
            }
        }

        /* 2. 오선지 그리기 */
        // var top = options.topmargin/*60*/, startx = 49;
        const measure = jstruct.part[0].measure;
        const size = measure.length;
        let msnumber = 0;  // 마디 번호 출력을 위함.
        let barline_ending = new Array();
        var top = new Array(),
            startx = new Array(), //시작위치
            parth = new Array(), //part의 높이
            lineh = options.lineheight;

        for (let i in jstruct.part) {
            barline_ending[i] = {
                continue : false,
                number : 0
            };  // 라인 연속성을 위함.

            startx[i] = 49;
        }

        for (let m in measure) {
            for (let p in jstruct.part) {
                const measure = jstruct.part[p].measure[m];
                const prep = (0 == p ? lastpart : Number(p) - 1);

                //stavecnt 배열로 처리하여 불필요
                // if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].staves)
                //     stavecnt[p] = Number(measure.attr[0].staves);

                if (0 == m) { //최초 한번 만 셋팅
                    if (options.combineparts) {
                        parth[p] = options.staveheight/*150*/ * stavecnt[p]; //part의 높이
                        top[p] = (0 == p ? options.topmargin/*60*/ : top[prep] + parth[prep]); //이전파트의 전체 높이

                        if ('undefined' != typeof partnames[p].name) { // part name 만큼  startx 조절
                            startx[p] += options.namesize; /*100*/
                        }
                        //console.log("top[",p,"] : ",top[p]);
                    } else {
                        top[p] = options.topmargin;/*60*/
                    }
                }

                bucket[p][m].times  = new Array(stavecnt[p]);
                bucket[p][m].tmcnt  = new Array(stavecnt[p]);
                bucket[p][m].keys   = new Array(stavecnt[p]);
                bucket[p][m].kscnt  = new Array(stavecnt[p]);
                // bucket[p][m].keypos = new Array(stavecnt[p]);
                bucket[p][m].staves = new Array(stavecnt[p]);
                bucket[p][m].top = new Array(stavecnt[p]);

                if ('undefined' == typeof bucket[p][m].clef)
                    bucket[p][m].clef = new Array();

                bucket[p][m].clef_pos = new Array();
                bucket[p][m].clef_note = new Array();
                bucket[p][m].clef_staff = new Array();

                // order in measure
                let order = measure.order.split(',');
                let clef_pos = -1, ncnt = 0;
                if ('undefined' != typeof measure.attr) {
                    for (let i in measure.attr) {
                        if ('undefined' != typeof measure.attr[i].clef) {
                            const olen = order.length;
                            for (let o in order) {
                                if ('ne' == order[o]) ncnt++;
                                if ('cf' == order[o]) {
                                    o = Number(o);
                                    if (olen == o+2 || 'bp' == order[o+1])  //end
                                        clef_pos = 10000;
                                    else
                                        clef_pos = ncnt;
                                    //order.splice(o, 1);
                                    order.splice(0, Number(o)+1);
                                    bucket[p][m].clef_pos.push(clef_pos);
                                    break;
                                }
                            }

                            for (let c in measure.attr[i].clef) {
                                let staff = 0;
                                if ('undefined' != typeof measure.attr[i].clef[c].number)
                                    staff = Number(measure.attr[i].clef[c].number) - 1;

                                if (0 == bucket[p][m].clef_pos[0]) {
                                    bucket[p][m].clef[staff] = Clef.parseClef(measure.attr[i].clef[c]);  //head
                                } else {
                                    m = Number(m);
                                    if (size > m+1 && 'undefined' == typeof bucket[p][m+1].clef)
                                        bucket[p][m+1].clef = new Array();

                                    const clef = Clef.parseClef(measure.attr[i].clef[c]);
                                    bucket[p][m].clef_note.push(clef);
                                    bucket[p][m].clef_staff.push(staff);
                                    if (size > m+1)
                                        bucket[p][m+1].clef[staff] = clef;  //head
                                }
                                
                            }
                        }
                    }
                }
                
                for (let i = 0; i < stavecnt[p]; i++) {
                    bucket[p][m].staves[i] = new VF.Stave(startx[p], top[p], bucket[p][m].size); //마디 사이즈
                    bucket[p][m].top[i] = (bucket[p][m].staves[i].y * options.ratio.h) + contexts[0].element.offsetTop;
                    top[p] += options.staveheight/*150*/;

                    if (-1 == measure.number.indexOf('X')) {  // 도돌이표가 끝나고 그 다음 마디 번호 (X1, X2...)가 아니면
                        msnumber = measure.number;
                    }

                    if ('undefined' == typeof bucket[p][m].clef[i]) {
                        bucket[p][m].clef[i] = bucket[p][m-1].clef[i];
                    }

                    if (1 == measure.number) {  // vexflow 마디 번호 0번 표시 지원 안함.
                        if (options.combineparts) {
                            bucket[0][m].staves[0].setMeasure(msnumber);
                        } else {
                            bucket[p][m].staves[0].setMeasure(msnumber);
                        }
                    }

                    if (0 == m || bucket[p][m].newsystem) {
                        if (options.combineparts) {
                            bucket[0][m].staves[0].setMeasure(msnumber);
                        } else {
                            bucket[p][m].staves[0].setMeasure(msnumber);
                        }
                        bucket[p][m].staves[i].addClef(bucket[p][m].clef[i]);
                    }

                    if (0 < bucket[p][m].clef_pos.length) {
                        for (let c in bucket[p][m].clef_pos) {
                            const staff = bucket[p][m].clef_staff[c];
                            if (staff == i && 10000 == bucket[p][m].clef_pos[c]) {
                                bucket[p][m].staves[staff].addEndClef(bucket[p][m].clef_note[c], 'small');
                                break;
                            }
                        }
                    }

                    if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].time) {
                        bucket[p][m].times[i] = Time.parseTime(measure.attr[0].time);
                        bucket[p][m].tmcnt = 1;
                        bucket[p][m].staves[i].addTimeSignature(bucket[p][m].times[i]);
                    } else {
                        bucket[p][m].times[i] = bucket[p][m-1].times[i];
                        bucket[p][m].tmcnt = 0;
                    }

                    if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].key) {
                        bucket[p][m].keys[i] = Key.parseKey(measure.attr[0].key);
                        bucket[p][m].kscnt[i] = Key.ksCount(bucket[p][m].keys[i]);
                        // bucket[p][m].keypos[i] = Key.keyPosition(bucket[p][m].keys[i]);
                        bucket[p][m].staves[i].addKeySignature(bucket[p][m].keys[i]);
                    } else {
                        bucket[p][m].keys[i] = bucket[p][m-1].keys[i];
                        // bucket[p][m].keypos[i] = Key.keyPosition(bucket[p][m].keys[i]);
                        if (0 == m || bucket[p][m].newsystem) {
                            bucket[p][m].kscnt[i] = Key.ksCount(bucket[p][m].keys[i]);
                            bucket[p][m].staves[i].addKeySignature(bucket[p][m].keys[i]);
                        } else {
                            bucket[p][m].kscnt[i] = 0;
                        }
                    }

                    if ('undefined' != typeof measure.barline) { //barline 연결
                        for (let b in measure.barline) {
                            if ('undefined' != typeof measure.barline[b].ending && 0 == i && (!options.combineparts || (options.combineparts && 0 == p))) { // part 결합의 경우 첫번째 part 에서만 표시
                                switch (measure.barline[b].ending.type) {
                                    case 'start' :
                                        let draw = true;
                                        for (let c = Number(b) + 1; c < measure.barline.length; c++) {
                                            if ('undefined' != typeof measure.barline[c].ending && 'stop' == measure.barline[c].ending.type) {
                                                measure.barline[c].ending.type = 'custom_start_stop';
                                                draw = false;
                                                break;
                                            }
                                        }
                                        if (draw) {
                                            bucket[p][m].staves[i].setVoltaType(VF.Volta.type.BEGIN, measure.barline[b].ending.number + '.', 10);
                                            barline_ending[p].continue = true;
                                            barline_ending[p].number = measure.barline[b].ending.number;
                                        }
                                        break;
                                    case 'discontinue' :
                                        bucket[p][m].staves[i].setVoltaType(VF.Volta.type.MID, measure.barline[b].ending.number + '.', 10);
                                        barline_ending[p].continue = false;
                                        barline_ending[p].number = 0;
                                        break;
                                    case 'stop' :
                                        bucket[p][m].staves[i].setVoltaType(VF.Volta.type.END, measure.barline[b].ending.number + '.', 10);
                                        barline_ending[p].continue = false;
                                        barline_ending[p].number = 0;
                                        break;
                                    case 'custom_start_stop' :
                                        bucket[p][m].staves[i].setVoltaType(VF.Volta.type.BEGIN_END, measure.barline[b].ending.number + '.', 10);
                                        barline_ending[p].continue = false;
                                        barline_ending[p].number = 0;
                                        break;
                                    default :
                                        console.log('[missing] barline ending type ==> ', measure.barline[b].ending.type);
                                        barline_ending[p].continue = false;
                                        barline_ending[p].number = 0;
                                        break;
                                }
                            } else if (barline_ending[p].continue && 0 == i) {
                                bucket[p][m].staves[i].setVoltaType(VF.Volta.type.MID, barline_ending[p].number + '.', 10);
                            }

                            if ('undefined' != typeof measure.barline[b].repeat) {
                                switch (measure.barline[b].repeat.direction) {
                                    case 'forward' :
                                        bucket[p][m].staves[i].setBegBarType(VF.Barline.type.REPEAT_BEGIN);
                                        bucket[p][m].staves[i].modifiers[0].padding = 3;
                                        break;
                                    case 'backward' :
                                        bucket[p][m].staves[i].setEndBarType(VF.Barline.type.REPEAT_END);
                                        break;
                                }
                            } else if (1 == stavecnt[p] && 'undefined' != typeof measure.barline[i].location) {
                                switch (measure.barline[i].location) {
                                    case 'left' :
                                        if ('undefined' != typeof measure.barline[i].style) {
                                            switch (measure.barline[i].style) {
                                                case 'light-light' :
                                                    bucket[p][m].staves[i].setBegBarType(VF.Barline.type.DOUBLE);
                                                    break;
                                                case 'heavy-light' :
                                                    bucket[p][m].staves[i].setBegBarType(VF.Barline.type.DOUBLE);
                                                    break;
                                                case 'none' :
                                                    bucket[p][m].staves[i].setBegBarType(VF.Barline.type.NONE);
                                                    break;
                                                default :
                                                    console.log('[missing] barline left style ==> ', measure.barline[i].style);
                                                    break;
                                            }
                                        }
                                        break;
                                    case 'right' :
                                        if ('undefined' != typeof measure.barline[i].style) {
                                            switch (measure.barline[i].style) {
                                                case 'light-light' :
                                                    bucket[p][m].staves[i].setEndBarType(VF.Barline.type.DOUBLE);
                                                    break;
                                                case 'light-heavy' :
                                                    bucket[p][m].staves[i].setEndBarType(VF.Barline.type.END);
                                                    break;
                                                case 'none' :
                                                    bucket[p][m].staves[i].setEndBarType(VF.Barline.type.NONE);
                                                    break;
                                                default :
                                                    console.log('[missing] barline right style ==> ', measure.barline[i].style);
                                                    break;
                                            }
                                        }
                                        break;
                                }
                            }
                        }
                    } else if (barline_ending[p].continue && 0 == i && (!options.combineparts || (options.combineparts && 0 == p))) {
                        bucket[p][m].staves[i].setVoltaType(VF.Volta.type.MID, barline_ending[p].number + '.', 10);
                    }
                }

                if ('undefined' != typeof measure.direction) {
                    let order = measure.order.split(',');
                    let ncnt = 0, dcnt = 0;
                    let pre_pos_x = 1000, pre_pos_y = 1000;
                    for (let o in order) {
                        if ('ws' == order[o]) {
                            let position = VF.Modifier.Position.ABOVE;
                            if ('below' == measure.direction[dcnt].placement) {
                                position = VF.Modifier.Position.BELOW;
                            }

                            let staff = 0;
                            if ('undefined' != typeof measure.direction[dcnt].staff) {
                                staff = Number(measure.direction[dcnt].staff) - 1;
                            }

                            let justification = VF.TextNote.Justification.LEFT;
                            switch (measure.direction[dcnt].words) {
                                case 'D.C.' :
                                case 'D.C. al' :
                                case 'D.C. al Fine' :
                                case 'D.S.' :
                                case 'D.S. al Coda' :
                                case 'D.S. al Fine' :
                                case 'Fine' :
                                    justification = VF.TextNote.Justification.RIGHT;
                                    break;
                                case 'cresc.' :
                                case 'dim.' :
                                    justification = VF.TextNote.Justification.CENTER;
                                    break;
                                default :
                                    break;
                            }

                            let shift_x = 0, shift_y = -6;
                            if ('undefined' != typeof measure.direction[dcnt].default && 'undefined' != typeof measure.direction[dcnt].default.y) {
                                if (0 > Number(measure.direction[dcnt].default.y)) {
                                    position = VF.Modifier.Position.BELOW;
                                    shift_y = 25;
                                }
                            }

                            if ('undefined' != typeof measure.direction[dcnt].relative && 'undefined' != typeof measure.direction[dcnt].relative.x) {}

                            if (VF.TextNote.Justification.LEFT == justification) {
                                shift_x = 6;
                                if (VF.Modifier.Position.ABOVE == position) {
                                    if (1000 == pre_pos_y) {
                                        shift_y = -6;
                                        pre_pos_y = -6;
                                    } else if (-6 == pre_pos_y) {
                                        shift_y = -26;
                                        pre_pos_y = -26;
                                    } else if (-26 == pre_pos_y) {
                                        shift_y = -46;
                                    }
                                }
                            }

                            try{
                                bucket[p][m].staves[staff].setText(measure.direction[dcnt].words, position, {justification: justification, shift_x: shift_x, shift_y: shift_y});
                            } catch (e) {
                                console.error(p,m,staff,dcnt,e);
                            }

                            //bucket[p][m].staves[staff].setText(measure.direction[dcnt].words, position, {justification: justification, shift_x: shift_x, shift_y: shift_y});
                            dcnt++;
                        } else if ('rl' == order[o]) {
                            dcnt++;
                        } else if ('bt' == order[o]) {
                            // console.log(measure.direction[dcnt]);
                            dcnt++;
                        } else if ('pl' == order[o]) {
                            dcnt++;
                        } else if ('dy' == order[o]) {
                            dcnt++;
                        } else if ('we' == order[o]) {
                            dcnt++;
                        } else if ('od' == order[o]) {
                            dcnt++;
                        } else if ('os' == order[o]) {
                            //octave shift
                            let os = measure.direction[dcnt].octaveshift;

                            if ('up' == os.type || 'down' == os.type) {
                                if ('down' == os.type) {
                                    bucket[p][m].osdownnum = os.number;
                                    bucket[p][m].osdownstart = ncnt;    
                                    bucket[p][m].osdownval = -1;
                                    bucket[p][m].osdownstaff = measure.direction[dcnt].staff - 1;
                                } else if ('up' == os.type) {
                                    bucket[p][m].osupnum = os.number;
                                    bucket[p][m].osupstart = ncnt;
                                    bucket[p][m].osupval = 1;
                                    bucket[p][m].osupstaff = measure.direction[dcnt].staff - 1;
                                }
                         
                            } else if ('stop' == os.type) {
                                if ('undefined' != typeof bucket[p][m].osdownstart && bucket[p][m].osdownnum == os.number) 
                                    bucket[p][m].osdownstop = ncnt;
                                
                                if ('undefined' != typeof bucket[p][m].osupstart && bucket[p][m].osupnum == os.number) 
                                    bucket[p][m].osupstop = ncnt;
                                
                            } else if ('continue' == os.type) {

                            } else {
                                console.log('unknown octaveshift type : ' + measure.direction[dcnt].octaveshift.type);
                            }
               
                            dcnt++;
                        } else if ('me' == order[o]) {
                            dcnt++;
                        } else if ('ne' == order[o]) {
                            ncnt++;
                        }
                    }
                }

                for (let i = 0; i < stavecnt[p]; i++) {
                    bucket[p][m].staves[i].setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                }

                top[p] -= (options.staveheight/*150*/ * stavecnt[p]); // 초기 설정으로...
                startx[p] += bucket[p][m].size;

                // 새로운 라인을 그리기 위한 줄 간격 계산
                const next = Number(m) + 1;
                if ('undefined' != typeof bucket[p][next] && bucket[p][next].newsystem) {
                   startx[p] = 49;

                   if (options.combineparts) {
                       top[p] = (0 == p) ? lineh + top[prep] + parth[prep] : top[prep] + parth[prep]; //이전파트의 전체 높이 (첫part만 +줄간격)
                       if ('undefined' != typeof partnames[p].abbreviation) { // part 약식 name 만큼  startx 조절
                           startx[p] += options.abbrsize; /*70*/
                       }
                   } else {
                       if (2 == stavecnt[p])
                          top[p] += options.systemheight.s2/*330*/;
                       else
                          top[p] += options.systemheight.s1/*170*/;
                   }
                }

                // part-group에 따라 partsymbol 표시
                let hasbarline = false;
                let bstart = 0;
                let bstop = 0;
                //console.log("bstart=", bstart," bstop=", bstop);
                if (options.combineparts) {
                    //part name 표기
                    if (0 == m && 'undefined' != typeof partnames[p].name) {
                        //console.log("name=",partnames[p].name);
                        bucket[p][m].staves[0].setText(partnames[p].name, VF.Modifier.Position.LEFT).setContext(contexts[0]).draw();
                    } else if (bucket[p][m].newsystem && 'undefined' != typeof partnames[p].abbreviation) {
                        //console.log(partnames[p].abbreviation);
                        bucket[p][m].staves[0].setText(partnames[p].abbreviation, VF.Modifier.Position.LEFT).setContext(contexts[0]).draw();
                    }

                    if (0 == m || bucket[p][m].newsystem) { 
                        // 맨 앞 라인 연결
                        if (lastpart == p)
                            new VF.StaveConnector(bucket[0][m].staves[0], bucket[lastpart][m].staves[bucket[lastpart][m].staves.length - 1]).setType(VF.StaveConnector.type.SINGLE_LEFT).setContext(contexts[0]).draw();

                        // Symbol 그리기
                        if(partsymbols[p].enable) {
                            let symbol = VF.StaveConnector.type.BRACKET;
                            switch (partsymbols[p].symbol) {
                                case 'brace' :
                                    symbol = VF.StaveConnector.type.BRACE;
                                    break;
                                case 'line' :
                                    symbol = VF.StaveConnector.type.SINGLE;
                                    break;
                                case 'square' :
                                    break; 
                            }

                            new VF.StaveConnector(bucket[partsymbols[p].start][m].staves[0], bucket[partsymbols[p].stop][m].staves[bucket[partsymbols[p].stop][m].staves.length - 1]).setType(symbol).setContext(contexts[0]).draw();
                        }
                    }
                    
                    // barline 그리기
                    if (partbarlines[p].enable) {
                        hasbarline = true;
                        bstart = partbarlines[p].start;
                        bstop = partbarlines[p].stop;
                    }
                }
                
                // 1) 피아노의 경우(2 == stavecnt[p]) 오른손 왼손이 이어져 있어야함.
                // 2) part 결합의 경우(hasbarline == true) barline 표시
                let lconnector = null, rconnector = null;
                if (2 == stavecnt[p] || hasbarline) {
                    if (2 == stavecnt[p] && (0 == m || bucket[p][m].newsystem)) {
                        new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.BRACE).setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                        new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.SINGLE_LEFT).setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                    }

                    if ('undefined' != typeof measure.barline) {
                        for (let i in measure.barline) {
                            switch (measure.barline[i].location) {
                                case 'left' :
                                    if ('undefined' != typeof measure.barline[i].style) {
                                        lconnector = hasbarline ? new VF.StaveConnector(bucket[bstart][m].staves[0], bucket[bstop][m].staves[bucket[bstop][m].staves.length - 1]).setType(VF.StaveConnector.type.SINGLE_LEFT)
                                                                : new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.SINGLE_LEFT);
                                        switch (measure.barline[i].style) {
                                            case 'light-light' :
                                                lconnector.setType(VF.StaveConnector.type.THIN_DOUBLE);
                                                break;
                                            case 'heavy-light' :
                                                lconnector.setType(VF.StaveConnector.type.BOLD_DOUBLE_LEFT);
                                                if (hasbarline)
                                                    lconnector.setXShift(bucket[bstart][m].staves[0].start_x - bucket[bstart][m].staves[0].x - 5.5);
                                                else
                                                    lconnector.setXShift(bucket[p][m].staves[0].start_x - bucket[p][m].staves[0].x - 5.5);
                                                break;
                                            case 'none' :
                                                lconnector.setType(VF.StaveConnector.type.NONE);
                                                break;
                                            default :
                                                console.log('[missing] barline left style ==> ', measure.barline[i].style);
                                                break;
                                        }
                                    }
                                    break;
                                case 'right' :
                                    if ('undefined' != typeof measure.barline[i].style) {
                                        rconnector = hasbarline ? new VF.StaveConnector(bucket[bstart][m].staves[0], bucket[bstop][m].staves[bucket[bstop][m].staves.length - 1]).setType(VF.StaveConnector.type.SINGLE_RIGHT)
                                                                : new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.SINGLE_RIGHT);
                                        switch (measure.barline[i].style) {
                                            case 'light-light' :
                                                rconnector.setType(VF.StaveConnector.type.THIN_DOUBLE);
                                                break;
                                            case 'light-heavy' :
                                                rconnector.setType(VF.StaveConnector.type.BOLD_DOUBLE_RIGHT);
                                                break;
                                            case 'none' :
                                                rconnector.setType(VF.StaveConnector.type.NONE);
                                                break;
                                            default :
                                                console.log('[missing] barline right style ==> ', measure.barline[i].style);
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }

                    if (null == lconnector)
                        lconnector = hasbarline ? new VF.StaveConnector(bucket[bstart][m].staves[0], bucket[bstop][m].staves[bucket[bstop][m].staves.length - 1]).setType(VF.StaveConnector.type.SINGLE_LEFT)
                                                : new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.SINGLE_LEFT);
                    if (null == rconnector)
                        rconnector = hasbarline ? new VF.StaveConnector(bucket[bstart][m].staves[0], bucket[bstop][m].staves[bucket[bstop][m].staves.length - 1]).setType(VF.StaveConnector.type.SINGLE_RIGHT)
                                                : new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.SINGLE_RIGHT);

                    lconnector.setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                    rconnector.setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                    
                } else {

                }

                // redraw를 위한 데이터 변수 저장
                bucket[p][m].lconnector = lconnector;
                bucket[p][m].rconnector = rconnector;
            }
            //stavecnt[p] = 1;
            //startx = 49;
            //top = 60;//top += 270;
        }

        /* 3. 음표 및 악보 그리기 */
        for (let p in jstruct.part) {
            const measures = jstruct.part[p].measure;
            const ties   = new Array();
            const slurs  = new Array();
            const wedges = new Array();
            const pedals = new Array();
            const glisss = new Array();
            const vibs   = new Array();
            const octaveshifts = new Array();
            const osinfo = new Array(stavecnt[p]);

            let prenotes = null;
            let pdlnotes = null;
            let osup = null;
            let osdown = null;
            let tremolo = {
                continue : false,
                number : 0
            };

            for (let i=0; i<stavecnt[p]; i++) {
                osinfo[i] = {
                    has : false,
                    val : 0,
                    staff : 0,
                    end : null
                };
            }

            for (let m in measures) {
                const measure = measures[m];

                const voice_number = new Array();
                const notelen = Number(measure.note.length);
                let maxlyric = 0; //note 속 lyric의 최대 갯수
                for (let i = 0; i < notelen; i++) {
                    voice_number[Number(measure.note[i].voice)] = true;

                    // lyric의 길이
                    if ('undefined' != typeof measure.note[i].lyric) {
                        if (measure.note[i].lyric.length > maxlyric) {
                            maxlyric = measure.note[i].lyric.length;
                        }
                    }
                }

                const voice_cnt = new Array();
                for (let i = 1; i < voice_number.length; i++) if (null != voice_number[i]) voice_cnt.push(i);

                const pos = new Array(voice_cnt.length);
                const notes = new Array();
                const voices = new Array(voice_cnt.length);
                const lyrics = new Array(maxlyric);
                const beams = new Array();
                const tuplets = new Array();

                // clef for each voice
                const clef_notes = bucket[p][m].clef_note.slice(0);
                const clefs = {};

                if (bucket[p][m].newsystem) {
                    for (let i in ties)   ties[i].newsystem = true;
                    for (let i in slurs)  slurs[i].newsystem = true;
                    for (let i in wedges) wedges[i].newsystem = true;
                }

                for (let i = 0; i < voice_cnt.length; i++) {
                    const voice = voice_cnt[i].toString();
                    //console.log('voice ==> ' + voice);
                    const time = bucket[p][m].times[0].split('/');
                    const beats = time[0] || 4;
                    const value = time[1] || 4;
                    //console.log('beats ==> ' + beats + ', value ==> ' + value);

                    try {
                        voices[i] = new VF.Voice({num_beats: beats, beat_value: value, resolution: VF.RESOLUTION});
                    } catch (e) { console.log(e); }

                    const each_voice_notes = new Array();
                    const each_voice_lyrics = new Array(maxlyric);
                    const beam_notes = new Array();
                    const tuplet_notes = new Array();
                    const tuplet_options = new Array();

                    let graces = new Array();
                    let lyric = new Array(notelen);
                    let prelyric = new Array();
                    for (let l = 0; l < maxlyric; l++) each_voice_lyrics[l] = new Array();

                    // clef for each voice
                    //const clefs = {};
                    // 첫 voice는 defalt로 셋팅
                    if (i == 0) {
                        clefs.clef  = bucket[p][m].clef.slice(0);
                        clefs.pos   = bucket[p][m].clef_pos.slice(0);
                        clefs.note  = bucket[p][m].clef_note.slice(0);
                        clefs.count = Number(clefs.pos.length);
                    }
                    
                    for (let x = 0; x < notelen; x++) {
                        const note = measure.note[x];
                        if (voice == note.voice) {
                            if ('undefined' == typeof note.chord) {
                                if ('undefined' != typeof note.staff)
                                    pos[i] = Number(note.staff)-1;
                                else
                                    pos[i] = 0;

                                let note_jstruct = {};
                                let middle_clef = null, clef_group = null;

                                // if (0 < clef_len) {
                                //     for (let c in bucket[p][m].clef_pos) {
                                //         if (0 < x && x == bucket[p][m].clef_pos[c]) {
                                //             middle_clef = bucket[p][m].clef_note[0];
                                //             const clef_note = new VF.ClefNote(middle_clef, 'small');
                                //             clef_group = new VF.NoteSubGroup([clef_note]);
                                //
                                //             bucket[p][m].clef_pos.splice(c, 1);
                                //             bucket[p][m].clef_note.splice(c, 1);
                                //             clef_len = Number(bucket[p][m].clef_pos.length);
                                //             break;
                                //         }
                                //     }
                                // }

                                // // if ('undefined' != typeof note.staff) {
                                //     if (null != middle_clef) {
                                //         bucket[p][m].clef[pos[i]] = middle_clef;
                                //     }
                                //     note_jstruct.clef = bucket[p][m].clef[pos[i]];
                                // // }

                                if (0 < clefs.count) {
                                    for (let c in clefs.pos) {
                                        if (0 < x && x == clefs.pos[c]) {
                                            //middle_clef = clefs.note[0];
                                            middle_clef = clefs.note[c];
                                            clefs.clef[pos[i]] = middle_clef;
                                            clefs.note.splice(c, 1);
                                            clefs.pos.splice(c, 1);
                                            clefs.count = Number(clefs.pos.length);

                                            // for drawing
                                            if (0 < clef_notes.length) {
                                                const clef_note = new VF.ClefNote(middle_clef, 'small');
                                                clef_group = new VF.NoteSubGroup([clef_note]);
                                                clef_notes.splice(c, 1);
                                            }
                                            break;
                                        }
                                    }
                                }

                                note_jstruct.clef = clefs.clef[pos[i]];
                                note_jstruct.duration = Duration.parseDuration(note.type);
                                if ('undefined' != typeof note.dot)  note_jstruct.duration = note_jstruct.duration + 'd';
                                if ('undefined' != typeof note.rest) {
                                    note_jstruct.duration = note_jstruct.duration + 'r';
                                    
                                    // octave shift start [va]
                                    if ('undefined' != typeof bucket[p][m].osdownstart) {
                                        if (x == bucket[p][m].osdownstart) {
                                            osinfo[pos[i]].has = true;
                                            osinfo[pos[i]].val = bucket[p][m].osdownval;
                                            osinfo[pos[i]].staff = bucket[p][m].osdownstaff;
                                        }
                                    } 

                                    // octave shift start [vb]
                                    if ('undefined' != typeof bucket[p][m].osupstart) {
                                        if (x == bucket[p][m].osupstart) {
                                            osinfo[pos[i]].has = true;
                                            osinfo[pos[i]].val = bucket[p][m].osupval;
                                            osinfo[pos[i]].staff = bucket[p][m].osupstaff;
                                        }
                                    }

                                    // octave shift stop [va]
                                    if ('undefined' != typeof bucket[p][m].osdownstop) {
                                        if (x == bucket[p][m].osdownstop) {
                                            osinfo[pos[i]].has = false;
                                            osinfo[pos[i]].val = 0;
                                            osinfo[pos[i]].staff = 0;
                                            osinfo[pos[i]].stop = null;      
                                        }
                                    }

                                    // octave shift stop [vb]
                                    if ('undefined' != typeof bucket[p][m].osupstop) {
                                        if (x == bucket[p][m].osupstop) {
                                            osinfo[pos[i]].has = false;
                                            osinfo[pos[i]].val = 0;
                                            osinfo[pos[i]].staff = 0;
                                            osinfo[pos[i]].stop = null;
                                        }
                                    }
                                }

                                if ('undefined' != typeof note.stem) {
                                    note_jstruct.stem_direction = 1;
                                    if('down' == note.stem) note_jstruct.stem_direction = -1;
                                }

                                let head_number = 0;
                                note_jstruct.accidental = new Array();
                                note_jstruct.accidental_number = new Array();

                                note_jstruct.keys = ["B/4"];
                                if ('bass' == note_jstruct.clef) note_jstruct.keys = ["D/3"];

                                if ('undefined' != typeof note.pitch) {
                                    for (let n = x; n < notelen; n++) {
                                        const head = measure.note[n];
                                        let octave = null;

                                        if (x == n) {
                                            octave = head.pitch.octave;

                                            // octave shift start [va]
                                            if ('undefined' != typeof bucket[p][m].osdownstart) {
                                                if (x == bucket[p][m].osdownstart) {
                                                    osinfo[pos[i]].has = true;
                                                    osinfo[pos[i]].val = bucket[p][m].osdownval;
                                                    osinfo[pos[i]].staff = bucket[p][m].osdownstaff;
                                                }
                                            } 

                                            // octave shift start [vb]
                                            if ('undefined' != typeof bucket[p][m].osupstart) {
                                                if (x == bucket[p][m].osupstart) {
                                                    osinfo[pos[i]].has = true;
                                                    osinfo[pos[i]].val = bucket[p][m].osupval;
                                                    osinfo[pos[i]].staff = bucket[p][m].osupstaff;
                                                }
                                            }

                                            // octaveshift일 경우 한 octave 올리거나 내려줌
                                            if (osinfo[pos[i]].has && osinfo[pos[i]].staff == pos[i]) 
                                                octave = Number(octave) + osinfo[pos[i]].val;
                                            note_jstruct.keys = [head.pitch.step + '/' + octave];

                                            // octave shift stop [va]
                                            if ('undefined' != typeof bucket[p][m].osdownstop) {
                                                if (x == bucket[p][m].osdownstop) {
                                                    osinfo[pos[i]].stop = bucket[p][m].osdownstop;
                                          
                                                    // 화음으로 연결되어 있는 경우 화음이 끝나면 octave shift를 종료
                                                    for (let next = n+1; next < notelen; next++) {
                                                        if ('undefined' == typeof measure.note[next].chord) 
                                                            break;
                                                        osinfo[pos[i]].stop = next;
                                                    }
                                               
                                                    if (x == osinfo[pos[i]].stop) {
                                                        osinfo[pos[i]].has = false;
                                                        osinfo[pos[i]].val = 0;
                                                        osinfo[pos[i]].staff = 0;
                                                        osinfo[pos[i]].stop = null;
                                                    } 
                                                }
                                            }

                                            // octave shift stop [vb]
                                            if ('undefined' != typeof bucket[p][m].osupstop) {
                                                if (x == bucket[p][m].osupstop) {
                                                    osinfo[pos[i]].stop = bucket[p][m].osupstop;
          
                                                    // 화음으로 연결되어 있는 경우 화음이 끝나면 octave shift를 종료
                                                    for (let next = n+1; next < notelen; next++) {
                                                        if ('undefined' == typeof measure.note[next].chord) 
                                                            break;
                                                        osinfo[pos[i]].stop = next;
                                                    }
                                                
                                                    if (x == osinfo[pos[i]].stop) {
                                                        osinfo[pos[i]].has = false;
                                                        osinfo[pos[i]].val = 0;
                                                        osinfo[pos[i]].staff = 0;
                                                        osinfo[pos[i]].stop = null;
                                                    } 
                                                }
                                            }

                                        } else {
                                            if ('undefined' != typeof head.chord && 'undefined' != typeof head.pitch) {
                                                octave = head.pitch.octave;
                                                //octaveshift일 경우 한 octave 올리거나 내려줌
                                                if (osinfo[pos[i]].has && osinfo[pos[i]].staff == pos[i]) 
                                                    octave = Number(octave) + osinfo[pos[i]].val;
                                                note_jstruct.keys.push(head.pitch.step + '/' + octave);
                                                //note_jstruct.keys.push(head.pitch.step + '/' + head.pitch.octave);

                                                // octave shift stop
                                                if (n == osinfo[pos[i]].stop) {
                                                    osinfo[pos[i]].has = false;
                                                    osinfo[pos[i]].val = 0;
                                                    osinfo[pos[i]].stop = null;
                                                }

                                                head_number++;
                                            } else {
                                                break;
                                            }
                                        }

                                        if ('undefined' != typeof head.accidental) {
                                            note_jstruct.accidental_number.push(head_number);
                                            const acc = Accidental.parseAccidental(head.accidental);
                                            note_jstruct.accidental.push(new VF.Accidental(acc));
                                            // if ('n' != acc) {
                                            //     bucket[p][m].keypos[pos[i]].set(head.pitch.step, 1);
                                            // } else {
                                            //     bucket[p][m].keypos[pos[i]].set(head.pitch.step, 0);
                                            // }
                                        }
                                        // else if ('undefined' != typeof head.pitch.alter) {
                                        //     if (0 == bucket[p][m].keypos[pos[i]].get(head.pitch.step)) {
                                        //         note_jstruct.accidental_number.push(head_number);
                                        //         const acc = Accidental.parseAlter(head.pitch.alter);
                                        //         note_jstruct.accidental.push(new VF.Accidental(acc));
                                        //     }
                                        // }
                                    }
                                }

                                if ('undefined' != typeof note.beam) {
                                    for (let y in note.beam) {
                                        if ('begin' == note.beam[y].type) {
                                            const beam_cnt = beam_notes.length;
                                            beam_notes[beam_cnt] = new Array();
                                            beam_notes[beam_cnt].push(x);

                                            let end = false;
                                            for (let n = Number(x) + 1; n < notelen && !end; n++) {
                                                const head = measure.note[n];
                                                if (voice == head.voice && 'undefined' != typeof head.beam) {
                                                    for (let b in head.beam) {
                                                        if (note.beam[y].number == head.beam[b].number) {
                                                            if ('continue' == head.beam[b].type) {
                                                                beam_notes[beam_cnt].push(n);
                                                            } else if ('end' == head.beam[b].type) {
                                                                beam_notes[beam_cnt].push(n);
                                                                end = true;
                                                            }
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        } else if ('forward hook' == note.beam[y].type || 'backward hook' == note.beam[y].type) {
                                            //console.log(note.beam[y].type);
                                        }
                                    }
                                }

                                if ('undefined' != typeof note.tuplet) {
                                    for (let y in note.tuplet) {
                                        if ('start' == note.tuplet[y].type && note.tuplet[y].show_number) {
                                            const tuplet_cnt = tuplet_notes.length;
                                            tuplet_notes[tuplet_cnt] = new Array();
                                            tuplet_notes[tuplet_cnt].push(x);
                                            tuplet_options[tuplet_cnt] = {
                                                num_notes: note.time.actual_notes
                                                , notes_occupied: note.time.normal_notes
                                                //, ratioed: true
                                                , location: note_jstruct.stem_direction == 1 ? -1 : 1
                                                , bracketed: note.tuplet[y].bracket
                                                , bracketed: false
                                            };

                                            let end = false;
                                            for (let n = Number(x) + 1; n < notelen && !end; n++) {
                                                const head = measure.note[n];
                                                if (voice == head.voice && 'undefined' == typeof head.chord && 'undefined' == typeof head.grace && head.print) {
                                                    tuplet_notes[tuplet_cnt].push(n);
                                                    if ('undefined' != typeof head.tuplet) {
                                                        for (let t in head.tuplet) {
                                                            if (note.tuplet[y].number == head.tuplet[t].number) {
                                                                if ('stop' == head.tuplet[t].type)
                                                                    end = true;
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                if ('undefined' != typeof note.nts) {  // notations
                                    let symbol = null, type = null, number = 0;

                                    const position = ((note_jstruct.stem_direction == 1) ? 'below' : 'above');
                                    if ('undefined' != typeof note.nts.fermata) {
                                        if ('above' == position) symbol = 'a@a';
                                        else symbol = 'a@u';
                                    } else if ('undefined' != typeof note.nts.articulations) {
                                        const ar = note.nts.articulations;
                                        if ('undefined' != typeof ar.staccato) {
                                            symbol = 'a.';
                                        } else if ('undefined' != typeof ar.staccatissimo) {
                                            symbol = 'av';
                                        } else if ('undefined' != typeof ar.accent) {
                                            symbol = 'a>';
                                        } else if ('undefined' != typeof ar.tenuto) {
                                            symbol = 'a-';
                                        } else if ('undefined' != typeof ar.marcato) {
                                            symbol = 'a^';
                                        } else {
                                            console.log('p : ', p, ', m : ', m, ', unknown articulations : ', ar);
                                        }
                                    } else if ('undefined' != typeof note.nts.technical) {
                                        const te = note.nts.technical;
                                        if ('undefined' != typeof te.up_bow) {
                                            symbol = 'a|';
                                        } else if ('undefined' != typeof te.down_bow) {
                                            symbol = 'am';
                                        } else if ('undefined' != typeof te.fingering) {
                                            note_jstruct.handfinger = new VF.FretHandFinger(te.fingering.number).setPosition(position);
                                        }
                                    }

                                    if (null != symbol) {
                                        note_jstruct.articulation = new VF.Articulation(symbol).setPosition(position);
                                    }

                                    if ('undefined' != typeof note.nts.ornaments) {
                                        const or = note.nts.ornaments;
                                        if ('undefined' != typeof or.trill_mark) {
                                            type = 'tr';
                                        } else if ('undefined' != typeof or.mordent) {
                                            type = 'mordent';
                                        } else if ('undefined' != typeof or.inverted_mordent) {
                                            type = 'mordent_inverted';
                                        } else if ('undefined' != typeof or.turn) {
                                            type = 'turn';
                                        } else if ('undefined' != typeof or.tremolo) {
                                            if ('start' == or.tremolo.type) {
                                                type = 'tremolo';
                                                number = or.tremolo.number;
                                                tremolo.number = number;
                                                tremolo.continue = true;
                                            } else if ('stop' == or.tremolo.type) {
                                                type = 'tremolo';
                                                number = or.tremolo.number;
                                                tremolo.number = 0;
                                                tremolo.continue = false;
                                            } else if ('single' == or.tremolo.type) {
                                                type = 'tremolo';
                                                number = or.tremolo.number;
                                            } else {
                                                console.log('p : ', p, ', m : ', m, ', unknown tremolo : ', or.tremolo);
                                            }
                                        } else if ('undefined' != typeof or.wavy_line) {
                                            // handle it below
                                        } else {
                                            console.log('p : ', p, ', m : ', m, ', unknown ornaments : ', or);
                                        }
                                    }

                                    if (null != type) {
                                        if ('tremolo' == type) {
                                            note_jstruct.ornament = new VF.Tremolo(number);
                                        } else {
                                            note_jstruct.ornament = new VF.Ornament(type);
                                        }
                                        // note_jstruct.ornament.setUpperAccidental(accid);
                                        // note_jstruct.ornament.setLowerAccidental(accid);
                                    }

                                    if ('undefined' != typeof note.nts.arpeggiate) {
                                        note_jstruct.arpeggiate = new VF.Stroke(VF.Stroke.Type.ROLL_UP, {});
                                        if ('undefined' != typeof note.nts.arpeggiate.direction) {
                                            if ('up' == note.nts.arpeggiate.direction) {
                                                note_jstruct.arpeggiate = new VF.Stroke(VF.Stroke.Type.ROLL_DOWN, {});
                                            }
                                        }
                                    }
                                } else if (tremolo.continue) {
                                    note_jstruct.ornament = new VF.Tremolo(tremolo.number);
                                }

                                if (!note.print) {
                                    try {
                                        notes[x] = new VF.GhostNote(note_jstruct);
                                    } catch (e) { console.log(m, x, note_jstruct, e); }
                                    each_voice_notes.push(notes[x]);
                                } else if ('undefined' != typeof note.grace) {
                                    if(options.slashon) note_jstruct.slash = note.grace.slash;
                                    let grace = null;
                                    try {
                                        grace = new VF.GraceNote(note_jstruct);
                                    } catch (e) { console.log(m, x, note_jstruct, e); }
                                    //if ('undefined' != typeof note.dot) grace.addDotToAll();
                                    if ('undefined' != typeof note.dot) for(let d=0; d<note.dot.cnt; d++) grace.addDotToAll();
                                    if ('undefined' != typeof note_jstruct.articulation) grace.addArticulation(0, note_jstruct.articulation);
                                    if ('undefined' != typeof note_jstruct.ornament) grace.addModifier(0, note_jstruct.ornament);
                                    if ('undefined' != typeof note_jstruct.handfinger) grace.addModifier(0, note_jstruct.handfinger);
                                    if ('undefined' != typeof note_jstruct.arpeggiate) grace.addModifier(0, note_jstruct.arpeggiate);
                                    if (0 < note_jstruct.accidental.length) grace.addAccidental(0, note_jstruct.accidental[0]);
                                    if (null != clef_group) grace.addModifier(0, clef_group);
                                    graces.push(grace);

                                    if ('undefined' != typeof note.tie) {
                                        const note_key = note.pitch.step+'/'+note.pitch.octave;
                                        for (let y in note.tie) {
                                            if ('start' == note.tie[y].type) {
                                                ties.push({'first_note':grace, 'first_indices':[0], 'key':note_key, 'voice':note.voice, 'newsystem':false, 'done':false});
                                            } else {  //stop
                                                const length = ties.length - 1;
                                                for (let t = length; 0 <= t; t--) {
                                                    if (!ties[t].done && ties[t].key == note_key /*&& ties[t].voice == note.voice*/) {
                                                        if (!ties[t].newsystem) {
                                                            ties[t].done = true;
                                                            ties[t].last_note = grace; ties[t].last_indices = [0];
                                                        } else {
                                                            ties[t].done = true;
                                                            ties.push({'last_note':grace, 'last_indices':[0], 'done':true});
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    if ('undefined' != typeof note.slur) {
                                        for (let y in note.slur) {
                                            if ('start' == note.slur[y].type) {
                                                slurs.push({'first_note':grace, 'last_note':null, 'number':note.slur[y].number, 'voice':note.voice, 'newsystem':false, 'done':false});
                                            } else {  //stop
                                                const length = slurs.length - 1;
                                                for (let s = length; 0 <= s; s--) {
                                                    if (!slurs[s].done && slurs[s].number == note.slur[y].number /*&& slur[s].voice == note.voice*/) {
                                                        if (!slurs[s].newsystem) {
                                                            slurs[s].done = true;
                                                            slurs[s].last_note = grace;
                                                        } else {
                                                            slurs[s].done = true;
                                                            slurs.push({'first_note':null, 'last_note':grace, 'done':true});
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    try {
                                        notes[x] = new VF.StaveNote(note_jstruct);
                                    } catch (e) { console.log(m, x, note_jstruct, e); }
                                    if ('undefined' != typeof note.dot) for(let d=0; d<note.dot.cnt; d++) notes[x].addDotToAll();
                                    if ('undefined' != typeof note_jstruct.articulation) notes[x].addArticulation(0, note_jstruct.articulation);
                                    if ('undefined' != typeof note_jstruct.ornament) notes[x].addModifier(0, note_jstruct.ornament);
                                    if ('undefined' != typeof note_jstruct.handfinger) notes[x].addModifier(0, note_jstruct.handfinger);
                                    if ('undefined' != typeof note_jstruct.arpeggiate) notes[x].addModifier(0, note_jstruct.arpeggiate);
                                    each_voice_notes.push(notes[x]);

                                    if (null != clef_group)
                                        notes[x].addModifier(0, clef_group);
                                    if (0 < graces.length) {
                                        try {
                                            notes[x].addModifier(0, new VF.GraceNoteGroup(graces, false).beamNotes());
                                        } catch (e) { console.warn(e); }
                                        graces = new Array();
                                    }
                                    for (let a in note_jstruct.accidental)
                                        notes[x].addAccidental(note_jstruct.accidental_number[a], note_jstruct.accidental[a]);

                                    head_number = 0;
                                    for (let n = x; n < notelen; n++) {
                                        const head = measure.note[n];
                                        if (x < n) {
                                            if ('undefined' != typeof head.chord && 'undefined' != typeof head.pitch) {
                                                head_number++;
                                            } else {
                                                break;
                                            }
                                        }

                                        if ('undefined' != typeof head.tie) {
                                            const note_key = head.pitch.step+'/'+head.pitch.octave;
                                            for (let y in head.tie) {
                                                if ('start' == head.tie[y].type) {
                                                    ties.push({'first_note':notes[x], 'first_indices':[head_number], 'key':note_key, 'voice':head.voice, 'newsystem':false, 'done':false});
                                                } else {  //stop
                                                    const length = ties.length - 1;
                                                    for (let t = length; 0 <= t; t--) {
                                                        if (!ties[t].done && ties[t].key == note_key /*&& ties[t].voice == head.voice*/) {
                                                            if (!ties[t].newsystem) {
                                                                ties[t].done = true;
                                                                ties[t].last_note = notes[x]; ties[t].last_indices = [head_number];
                                                            } else {
                                                                ties[t].done = true;
                                                                ties.push({'last_note':notes[x], 'last_indices':[head_number], 'done':true});
                                                            }
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                        if ('undefined' != typeof head.slur) {
                                            for (let y in head.slur) {
                                                if ('start' == head.slur[y].type) {
                                                    slurs.push({'first_note':notes[x], 'last_note':null, 'number':head.slur[y].number, 'voice':head.voice, 'newsystem':false, 'done':false});
                                                } else {  //stop
                                                    const length = slurs.length - 1;
                                                    for (let s = length; 0 <= s; s--) {
                                                        if (!slurs[s].done && slurs[s].number == head.slur[y].number /*&& slur[s].voice == head.voice*/) {
                                                            if (!slurs[s].newsystem) {
                                                                slurs[s].done = true;
                                                                slurs[s].last_note = notes[x];
                                                            } else {
                                                                slurs[s].done = true;
                                                                slurs.push({'first_note':null, 'last_note':notes[x], 'done':true});
                                                            }
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                        if ('undefined' != typeof head.nts) {  // notations
                                            if ('undefined' != typeof head.nts.glissando) {
                                                const gl = head.nts.glissando;
                                                if ('start' == gl.type) {
                                                    glisss.push({'first_note':notes[x], 'first_indices':[head_number], 'number':gl.number, 'line_type':gl.line_type, 'text':gl.text, 'done':false});
                                                } else {  //stop
                                                    const length = glisss.length - 1;
                                                    for (let g = length; 0 <= g; g--) {
                                                        if (!glisss[g].done && glisss[g].number == gl.number) {
                                                            glisss[g].done = true;
                                                            glisss[g].last_note = notes[x]; glisss[g].last_indices = [head_number];
                                                        }
                                                    }
                                                }
                                            }
                                            if ('undefined' != typeof head.nts.ornaments && 'undefined' != typeof head.nts.ornaments.wavy_line) {
                                                const wa = head.nts.ornaments.wavy_line;
                                                if ('start' == wa.type) {
                                                    vibs.push({'start':notes[x], 'number':wa.number, 'done':false});
                                                } else {  //stop
                                                    const length = vibs.length - 1;
                                                    for (let v = length; 0 <= v; v--) {
                                                        if (!vibs[v].done && vibs[v].number == wa.number) {
                                                            vibs[v].done = true;
                                                            vibs[v].stop = notes[x];
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                /* 가사 작성 추가 */
                                const lyricline = 12;
                                let lyricarr = new Array(maxlyric);
                                let lyric = new Array(maxlyric);

                                for (let l = 0; l < maxlyric; l++) {
                                    lyric[l] = {
                                        text : "",
                                        line : lyricline,
                                        clef : note_jstruct.clef,
                                        keys : note_jstruct.keys,
                                        duration : note_jstruct.duration,
                                        smooth : true,
                                        justification : VF.TextNote.Justification.LEFT,
                                        font : {
                                            family: "Alegreya",
                                            size: 12,
                                            weight: ""
                                        }
                                    };

                                    if ('undefined' != typeof note.lyric) {
                                        for (let k = 0; k < note.lyric.length; k++) {
                                            let num = Number(note.lyric[k].number) - 1;

                                            if (l == num) {
                                                lyric[l].text = note.lyric[k].text;
                                                lyric[l].line = lyricline + (l*2);

                                                //Lyric hyphenation
                                                if ('undefined' != typeof note.lyric[k].syllabic) {
                                                    if ('begin' == note.lyric[k].syllabic || 'middle' == note.lyric[k].syllabic) {
                                                        lyric[l].text += '-';
                                                    }
                                                }

                                                //Justification
                                                if ('undefined' != typeof note.lyric[k].justify) {
                                                    switch (note.lyric[k].justify) {
                                                        case 'center' :
                                                            lyric[l].justification = VF.TextNote.Justification.CENTER;
                                                            break;
                                                        case 'right' :
                                                            lyric[l].justification = VF.TextNote.Justification.RIGHT;
                                                            break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    //grace 일 경우 다음 note에 표시
                                    if ('undefined' != typeof note.grace) {
                                        prelyric.push(lyric[l]);
                                        continue;
                                    }

                                    //이전 note가 grace이면 해당 값으로 표기
                                    if (0 < prelyric.length) {
                                        //console.log(prelyric[l]);
                                        lyric[l].text = prelyric[l].text;
                                        lyric[l].justification = prelyric[l].justification;
                                        prelyric = new Array();
                                    }

                                    lyricarr[l] = new VF.TextNote(lyric[l]);
                                    lyricarr[l].setStave(bucket[p][m].staves[0]);
                                    each_voice_lyrics[l].push(lyricarr[l]);

                                } // 가사 작성 끝
                            }
                        }
                    }  // for (let x = 0; x < notelen; x++)

                    let beam_cnt = 0;
                    const each_beam_notes = new Array(beam_notes.length);
                    for (let y in beam_notes) {
                        for (let x in beam_notes[y]) {
                            if (null == each_beam_notes[beam_cnt]) each_beam_notes[beam_cnt] = new Array();
                            each_beam_notes[beam_cnt].push(notes[beam_notes[y][x]]);
                        }
                        beams.push(new VF.Beam(each_beam_notes[beam_cnt]));
                        beam_cnt++;
                    }

                    let tuplet_cnt = 0;
                    const each_tuplet_notes = new Array(tuplet_notes.length);
                    for (let y in tuplet_notes) {
                        for (let x in tuplet_notes[y]) {
                            if (null == each_tuplet_notes[tuplet_cnt]) each_tuplet_notes[tuplet_cnt] = new Array();
                            each_tuplet_notes[tuplet_cnt].push(notes[tuplet_notes[y][x]]);
                        }
                        tuplets.push(new VF.Tuplet(each_tuplet_notes[tuplet_cnt], tuplet_options[tuplet_cnt]));
                        tuplet_cnt++;
                    }

                    try {
                       voices[i].setMode(VF.Voice.Mode.SOFT);
                       voices[i].addTickables(each_voice_notes);

                       for (let l = 0; l < maxlyric; l++) {
                           lyrics[l] = new VF.Voice({num_beats: beats, beat_value: value, resolution: VF.RESOLUTION});
                           lyrics[l].setMode(VF.Voice.Mode.SOFT);
                           lyrics[l].addTickables(each_voice_lyrics[l]);
                           //console.log("lyrics[", m, "]", lyrics[l]);
                       }
                       //console.log("voices[", m, "]", voices[i]);

                    } catch (e) {
                       console.log(e);
                    }
                }  // for (let i = 0; i < voice_cnt.length; i++)

                if ('undefined' != typeof measure.direction) {
                    let order = measure.order.split(','), ncnt = 0, dcnt = 0;
                    //let pdlnotes = null;

                    for (let o in order) {
                        if ('we' == order[o]) {
                            //console.log(measure.direction[dcnt].staff);
                            const wedge = measure.direction[dcnt].wedge;
                            if ('crescendo' == wedge.type || 'diminuendo' == wedge.type) {
                                const type = ('crescendo' == wedge.type) ? 1 : 2;
                                let fnote = notes[ncnt];
                                if ('undefined' == typeof fnote) {  // gracenote
                                    for (let i = ncnt + 1; i < notes.length; i++) {
                                        if ('undefined' != typeof notes[i]) {
                                            fnote = notes[i];
                                            break;
                                        }
                                    }
                                }
                                wedges.push({'type':type, 'number':wedge.number, 'first_note':fnote, 'last_note':null, 'newsystem':false, 'done':false});
                            } else if ('stop' == wedge.type) {
                                for (let i = wedges.length - 1; 0 <= i; i--) {
                                    if (!wedges[i].done && wedges[i].number == wedge.number) {
                                        if (!wedges[i].newsystem) {
                                            if (0 == ncnt) {
                                                for (let n = prenotes.length - 1; 0 <= n; n--) {
                                                    if ('undefined' != typeof prenotes[n]) {
                                                        wedges[i].last_note = prenotes[n];
                                                        wedges[i].done = true;
                                                        break;
                                                    }
                                                }
                                            } else {
                                                for (let n = ncnt - 1; 0 <= n; n--) {
                                                    if ('undefined' != typeof notes[n]) {
                                                        wedges[i].last_note = notes[n];
                                                        wedges[i].done = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (!wedges[i].done) {
                                                  wedges.splice(i, 1);
                                                  console.warn('wedge error. couldnt find last note. measure number : ' + measure.number);
                                            }
                                        } else {
                                            wedges.splice(i, 1);
                                            console.warn('wedge error. newsystem. measure number : ' + measure.number);
                                        }
                                        break;
                                    }
                                }
                            } else {
                                console.log('unknown wedge type : ' + measure.direction[dcnt].wedge.type);
                            }
                            dcnt++;
                        } else if ('pl' == order[o]) {
                            let pedal = measure.direction[dcnt].pedal;
                            if ('start' == pedal.type) {
                                pdlnotes = new Array();
                                pdlnotes.push(notes[ncnt]);
                            } else if ('stop' == pedal.type) {
                                let line = ('yes' == pedal.line) ? true : false;
                                pdlnotes.push(notes[ncnt]);
                                pedals.push({'notes':pdlnotes, 'line':line});
                                pdlnotes = null;
                            } else {
                                console.log('unknown pedal type : ' + measure.direction[dcnt].pedal.type);
                            }
                            dcnt++;
                        } else if ('dy' == order[o]) {
                            const ann = new VF.Annotation(measure.direction[dcnt].dynamics);
                            ann.setFont(/*'Times New Roman'*/'Alegreya', 14, 'bold italic');
                            ann.setJustification(VF.Annotation.Justify.CENTER/*CENTER_STEM*/);
                            ann.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
                            for (let x = ncnt; x < Number(measure.note.length); x++) {
                                if ('undefined' != typeof notes[x] && 'GhostNote' != notes[x].attrs.type) {
                                    notes[x].addAnnotation(0, ann);
                                    break;
                                }
                            }
                            dcnt++;
                        } else if ('ws' == order[o]) {
                            dcnt++;
                        } else if ('rl' == order[o]) {
                            dcnt++;
                        } else if ('me' == order[o]) {
                            dcnt++;
                        } else if ('bt' == order[o]) {
                            dcnt++;
                        } else if ('od' == order[o]) {
                            dcnt++;
                        } else if ('os' == order[o]) {
                            //octave shift
                            let os = measure.direction[dcnt].octaveshift;
                            let osinit = {
                                start: notes[ncnt],
                                stop: null,
                                number: os.number,
                                text: os.size,
                                //line: 3,
                                font : {
                                    family: 'Serif',
                                    size: 15,
                                    weight: 'italic'
                                }
                            };

                            if ('up' == os.type || 'down' == os.type) {
                                if ('down' == os.type) {
                                    osdown = osinit;
                                    osdown.superscript = 'va';
                                    osdown.position = VF.TextBracket.Positions.TOP;
                                } else if ('up' == os.type) {
                                    osup = osinit;
                                    osup.superscript = 'vb';
                                    osup.position = VF.TextBracket.Positions.BOTTOM;
                                }

                            } else if ('stop' == os.type) {
                                if (null == osdown && null == osup) continue;
                                
                                if (null != osdown && osdown.number == os.number) {
                                    osdown.stop = notes[ncnt];
                                    octaveshifts.push(new VF.TextBracket(osdown).setLine(3));
                                    osdown = null;
                                }
                                
                                if (null != osup && osup.number == os.number) {
                                    osup.stop = notes[ncnt];
                                    octaveshifts.push(new VF.TextBracket(osup).setLine(3));
                                    osup = null;
                                }

                            } else if ('continue' == os.type) {

                            } else {
                                console.log('unknown octaveshift type : ' + measure.direction[dcnt].octaveshift.type);
                            }

                            dcnt++;
                        } else if ('ne' == order[o]) {
                            // if (null != pdlnotes) {
                            //     let fnote = notes[ncnt];
                            //     if ('undefined' != typeof fnote) {  // gracenote
                            //         pdlnotes.push(fnote);
                            //     }
                            // }
                            ncnt++;
                        }
                    }
                }

                try {
                    let formatter = new VF.Formatter();
                    for (let i = 0; i < voices.length; i++) formatter.joinVoices([voices[i]]);
                    for (let l = 0; l < lyrics.length; l++) formatter.joinVoices([lyrics[l]]);


                    let kssize = bucket[p][m].kscnt[0] * 12, tmsize = bucket[p][m].tmcnt * 20;
                    let adjust = 15 + kssize + tmsize;

                    if (0 == m || bucket[p][m].newsystem) {
                        adjust += 30;  // normal clef size : 30
                        if (10000 == bucket[p][m].clef_pos[bucket[p][m].clef_pos.length-1]) adjust += 20;  // small clef size : 20
                    } else if (0 < bucket[p][m].clef_pos.length) {
                        adjust += 20;
                        if (10000 == bucket[p][m].clef_pos[bucket[p][m].clef_pos.length-1]) adjust += 10;
                    }

                    formatter.format(voices, bucket[p][m].size - adjust);
                    for (let l = 0; l < lyrics.length; l++) {
                        formatter.format([voices[0], lyrics[l]], bucket[p][m].size - adjust);
                    }


                } catch (e) {
                    console.warn(p, m, e);
                }

                for (let i in voices) {
                    try {
                        voices[i].draw(options.combineparts ? contexts[0] : contexts[p], bucket[p][m].staves[pos[i]]);
                    } catch (e) {
                        console.warn(p, m, e);
                    }
                }

                for (let i in lyrics) {
                    try {
                        lyrics[i].setContext(options.combineparts ? contexts[0] : contexts[p]).draw(); //첫번째 part에만 그려지도록
                    } catch (e) {
                        console.warn(p, m, e);
                    }
                }

                beams.forEach(function(beam) {
                    try {
                        beam.setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                    } catch (e) {
                        console.warn(p, m, e);
                    }
                });

                tuplets.forEach(function(tuplet) {
                    try {
                        tuplet.setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                    } catch (e) {
                        console.warn(p, m, e);
                    }
                });

                // redraw를 위한 데이터 변수 저장
                bucket[p][m].pos = pos;
                bucket[p][m].voices = voices;
                bucket[p][m].lyrics = lyrics;
                bucket[p][m].beams = beams;
                bucket[p][m].tuplets = tuplets;

                prenotes = notes;
            }  // for (let m in measures) {

            ties.forEach(function(tie) {
                try {
                    new VF.StaveTie(tie).setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            if (options.sluron) {
                slurs.forEach(function(slur) {
                    try {
                        new VF.Curve(slur.first_note, slur.last_note, {cps: [{x: 0, y: 20}, {x: 0, y: 20}]}).setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });
            }

            wedges.forEach(function(wedge) {
                try {
                    new VF.StaveHairpin({first_note: wedge.first_note, last_note: wedge.last_note}, wedge.type).setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            vibs.forEach(function(vib) {
                try {
                    new VF.VibratoBracket(vib).setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            glisss.forEach(function(gliss) {
                try {
                    let sline = new VF.StaveLine(gliss);
                    if ('undefined' != typeof gliss.text) {
                        sline.setText(gliss.text);
                        sline.setFont({family:'Alegreya', size:8, weight:'lighter italic'});
                    }
                    sline.setContext(options.combineparts ? contexts[0] : contexts[p]);
                    sline.applyFontStyle();
                    sline.draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            pedals.forEach(function(pedal) {
                try {
                    let pmark = new VF.PedalMarking(pedal.notes);
                    if (pedal.line) {
                        pmark.setStyle(VF.PedalMarking.Styles.MIXED);
                    } else {
                        pmark.setStyle(VF.PedalMarking.Styles.TEXT);
                    }
                    
                    pmark.setLine(4);
                    pmark.setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            octaveshifts.forEach(function(octaveshift) {
                try {
                    octaveshift.setContext(options.combineparts ? contexts[0] : contexts[p]).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            // redraw를 위한 데이터 변수 저장
            bucket[p].ties = ties;
            bucket[p].slurs = slurs;
            bucket[p].wedges = wedges;
            bucket[p].vibs = vibs;
            bucket[p].glisss = glisss;
            bucket[p].pedals = pedals;
            bucket[p].octaveshifts = octaveshifts;
        }

        return bucket;
    }

    setPartAttr(partlist, size) {
        //partname, partline, partsymbol setting
        const partnames = new Array(size);
        const partbarlines = new Array(size);
        const partsymbols = new Array(size); 
        let c = 0, g = 0;

        for (let l in partlist) {
            if ('undefined' == typeof partbarlines[c]) {
                partbarlines[c] = { enable : false, number : -1, start : -1, stop : -1 };
            }

            if ('undefined' == typeof partsymbols[c]) {
                partsymbols[c] = { enable : false, number : -1, symbol : 'none', start : -1, stop : -1 };
            }
    
            //group으로 그려질 part 정보
            if ('undefined' != typeof partlist[l].partgroup) {
                g = 'undefined' != typeof partlist[l].partgroup.number ? Number(partlist[l].partgroup.number) - 1 : 0 ;
    
                switch (partlist[l].partgroup.type) {
                    case 'start' :
                        if ('yes' == partlist[l].partgroup.barline) {
                            partbarlines[c] = {
                                enable : false,
                                number : g,
                                start  : c,
                                stop   : 0
                            };
                        }
    
                        if ('none' != partlist[l].partgroup.symbol) {
                            partsymbols[c] = {
                                enable : false,
                                number : g,
                                symbol : partlist[l].partgroup.symbol,
                                start  : c,
                                stop   : 0
                            };
                        }
    
                        break;
    
                    case 'stop' :
                        for (let b in partbarlines) {
                            if (g == partbarlines[b].number) {
                                let idx = Number(c) - 1;
                                partbarlines[idx].number = partbarlines[b].number;
                                partbarlines[idx].start = partbarlines[b].start;
                                partbarlines[idx].enable = true;
                                partbarlines[idx].stop = idx;
                                break;
                            }
                        }
    
                        for (let b in partsymbols) {
                            if (g == partsymbols[b].number) {
                                let idx = Number(c) - 1;
                                partsymbols[idx].number = partsymbols[b].number;
                                partsymbols[idx].start = partsymbols[b].start;
                                partsymbols[idx].symbol = partsymbols[b].symbol;
                                partsymbols[idx].enable = true;
                                partsymbols[idx].stop = idx;
                                break;
                            }
                        }
    
                        break;
                }
            }
    
            if ('undefined' != typeof partlist[l].scorepart) { 
                partnames[c] = {
                    name : undefined,
                    abbreviation : undefined
                };
    
                if ('undefined' != typeof partlist[l].scorepart.name) //part명
                    partnames[c].name = partlist[l].scorepart.name;

    
                if ('undefined' != typeof partlist[l].scorepart.abbreviation) //part 요약명
                    partnames[c].abbreviation = partlist[l].scorepart.abbreviation;
  
                c++;
            }
        }

        return [partnames, partbarlines, partsymbols];
    }

    getY(bucket, point) {
        const strs = point.split('-');
        return bucket[strs[0]][strs[1]].top[strs[2]];
    }

}

class Newcombine {

    constructor() {}

    static redraw(VF, context, bucket, options) {
        //console.log("options.pickparts=",options.pickparts);
        //console.log("options=",options);
        //console.log("bucket=",bucket);
        const psize = bucket.length;
        const msize = bucket[0].length;
        let drawpart = new Array(psize).fill(true); // 전체선택
        let firstp = -1, lastp, pre;
        let barlines = new Array(psize);
        let symbols = new Array(psize);
        let top = new Array(psize),
            startx = new Array(psize), //시작위치
            parth = new Array(psize), //part의 높이
            prep = new Array(psize), //이전 part의 값
            lineh = options.lineheight;
        
        for (let i=0; i<psize; i++) {
            barlines[i] = {enable : false, start : -1, stop : -1};
            symbols[i] = {enable : false, start : -1, stop : -1, length : 0 };
        }

        // 선택된 part 정리(part결합 선택 시 해당 파트만 그리기)
        if ('undefined' != typeof options.pickparts && options.pickparts.length > 0) 
            drawpart = options.pickparts;

        for (let p in drawpart) {
            
            if (drawpart[p]) {
                prep[p] = pre;
                startx[p] = 49;

                if (-1 == firstp) firstp = p;
                pre = lastp = p;

                //barline 정보 셋팅
                for (let b=0; b<psize; b++) {
                    if(bucket.partbarlines[b].enable) {
                        if (p >= bucket.partbarlines[b].start && p <= bucket.partbarlines[b].stop) {
                            barlines[b].enable = true;
                            if (-1 == barlines[b].start) barlines[b].start = p;
                            barlines[b].stop = p;
                        }
                        break;
                    }
                }

                //BLANKET 정보 셋팅
                for (let b=0; b<psize; b++) {
                    if(bucket.partsymbols[b].enable) {
                        if (p >= bucket.partsymbols[b].start && p <= bucket.partsymbols[b].stop) {
                            symbols[b].enable = true;
                            if (-1 == symbols[b].start) symbols[b].start = p;
                            symbols[b].stop = p;
                            symbols[b].length++; 
                        }
                        break;
                    }
                }
            }
        }
        prep[firstp] = lastp;
        //console.log("firstp=",firstp," lastp=",lastp," prep=",prep);

        // barline, blanket 정보 재 셋팅
        for (let b=0; b<psize; b++) {
            if (barlines[b].enable && barlines[b].stop != b) {
                barlines[barlines[b].stop] = {enable : true, start : barlines[b].start, stop : barlines[b].stop};
                barlines[b] = {enable : false, start : -1, stop : -1};
            }

            if (symbols[b].enable && symbols[b].stop != b) {
                symbols[symbols[b].stop] = {enable : true, start : symbols[b].start, stop : symbols[b].stop, length : symbols[b].length};
                symbols[b] = {enable : false, start : -1, stop : -1, length : 0 };
            }
        }

        // console.log("barlines=",barlines);
        // console.log("symbols=",symbols);
        
        // 1.오선지 그리기
        for (let m=0; m<msize; m++) {
            for (let p in bucket) {
                //선택된 part만 그리기
                if (drawpart[p]) {
                    const stavecnt = bucket[p][m].staves.length;

                    if (0 == m) { //최초 한번 만 셋팅
                        parth[p] = options.staveheight/*150*/ * stavecnt; //part의 높이
                        top[p] = (p == firstp ? options.topmargin/*60*/ : top[prep[p]] + parth[prep[p]]); //이전파트의 전체 높이
                        if ('undefined' != typeof bucket.partnames[p].name) // part name 만큼  startx 조절
                            startx[p] += options.namesize; /*100*/
                            //console.log("top[",p,"] : ",top[p]);
                    }

                    // 첫 part에서 그려지는 속성 재 셋팅
                    if (0 != firstp) {
                        if (p == firstp) { // part가 0이 아닌 파트를 첫 파트로 셋팅
                            //measure number resetting
                            bucket[firstp][m].staves[0].setMeasure(bucket[0][m].staves[0].measure);

                            //volta resetting
                            const modifier = bucket[0][m].staves[0].getModifiers();
                            for (let i in modifier) {
                                if ("voltas" == modifier[i].getCategory())
                                    bucket[firstp][m].staves[0].addModifier(modifier[i]);
                            }
                        }
                    } else {
                        if (p != firstp) { // part가 0이면 이전 part의 첫파트 속성 삭제
                            bucket[p][m].staves[0].setMeasure("");

                            //volta resetting(삭제)
                            const modifier = bucket[p][m].staves[0].getModifiers();
                            for (let i = (modifier.length-1); i >= 0; i--) {
                                if ("voltas" == modifier[i].getCategory())
                                    bucket[p][m].staves[0].getModifiers().splice(i,1);
                            }
                        }
                    }

                    //stave draw
                    for (let i = 0; i < stavecnt; i++) {
                        //bucket[p][m].staves[i] = new VF.Stave(startx[p], top[p], bucket[p][m].size); //마디 사이즈
                        bucket[p][m].staves[i].setX(startx[p]);
                        bucket[p][m].staves[i].setY(top[p]);
                        bucket[p][m].staves[i].setWidth(bucket[p][m].size);
                        top[p] += options.staveheight/*150*/;

                        bucket[p][m].staves[i].setContext(context).draw();
                    }

                    top[p] -= (options.staveheight/*150*/ * stavecnt); // 초기 설정으로...
                    startx[p] += bucket[p][m].size;

                    // 새로운 라인을 그리기 위한 줄 간격 계산
                    const next = Number(m) + 1;
                    if ('undefined' != typeof bucket[p][next] && bucket[p][next].newsystem) {
                       startx[p] = 49;
                       top[p] = (p == firstp) ? lineh + top[prep[p]] + parth[prep[p]] : top[prep[p]] + parth[prep[p]]; //이전파트의 전체 높이 (첫part만 +줄간격)

                       if ('undefined' != typeof bucket.partnames[p].abbreviation) // part 약식 name 만큼  startx 조절
                           startx[p] += options.abbrsize; /*70*/
                    }

                    // part-group에 따라 partsymbol 표시
                    let hasbarline = false;
                    let bstart = 0;
                    let bstop = 0;
                    if (0 == m || bucket[p][m].newsystem) {
                        // 맨 앞 라인 연결
                        if (p == lastp) 
                            new VF.StaveConnector(bucket[firstp][m].staves[0], bucket[lastp][m].staves[bucket[lastp][m].staves.length - 1]).setType(VF.StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
                        
                        //BRACKET 그리기
                        if(symbols[p].enable && symbols[p].length > 1)
                            new VF.StaveConnector(bucket[symbols[p].start][m].staves[0], bucket[symbols[p].stop][m].staves[bucket[symbols[p].stop][m].staves.length - 1]).setType(VF.StaveConnector.type.BRACKET).setContext(context).draw();
                    }

                    // barline 그리기
                    if (barlines[p].enable) {
                        hasbarline = true;
                        bstart = barlines[p].start;
                        bstop = barlines[p].stop;
                    }

                    // console.log(p," : stavecnt=",stavecnt," hasbarline=",hasbarline);

                    // 1) 피아노의 경우(2 == stavecnt[p]) 오른손 왼손이 이어져 있어야함.
                    // 2) part 결합의 경우(hasbarline == true) barline 표시
                    if (2 == stavecnt || hasbarline) {
                        if (2 == stavecnt && (0 == m || bucket[p][m].newsystem)) {
                            new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.BRACE).setContext(context).draw();
                            new VF.StaveConnector(bucket[p][m].staves[0], bucket[p][m].staves[1]).setType(VF.StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
                        }

                        if (hasbarline) { //시작, 끝 재셋팅
                            // 마지막 part에 저장되어 있는 barline 정보 가져오기
                            bucket[p][m].lconnector = bucket[psize-1][m].lconnector;
                            bucket[p][m].rconnector = bucket[psize-1][m].rconnector;
                            bucket[p][m].lconnector.top_stave = bucket[p][m].rconnector.top_stave = bucket[bstart][m].staves[0];
                            bucket[p][m].lconnector.bottom_stave = bucket[p][m].rconnector.bottom_stave = bucket[bstop][m].staves[bucket[bstop][m].staves.length - 1];
                        } else if (2 == stavecnt) {
                            bucket[p][m].lconnector.top_stave = bucket[p][m].rconnector.top_stave = bucket[p][m].staves[0];
                            bucket[p][m].lconnector.bottom_stave = bucket[p][m].rconnector.bottom_stave = bucket[p][m].staves[1];
                        }

                        bucket[p][m].lconnector.setContext(context).draw();
                        bucket[p][m].rconnector.setContext(context).draw();

                    } else {

                    }

                } //if (drawpart[p])
            }
        }

        // 2.악보 그리기
        for (let p in bucket) {
            if (drawpart[p]) {
                const ties = bucket[p].ties;
                const slurs = bucket[p].slurs;
                const wedges = bucket[p].wedges;
                const vibs = bucket[p].vibs;
                const glisss = bucket[p].glisss;
                const pedals = bucket[p].pedals;
                const octaveshifts = bucket[p].octaveshifts;

                for (let m=0; m<msize; m++) {
                    const voices = bucket[p][m].voices;
                    const pos = bucket[p][m].pos;
                    const lyrics = bucket[p][m].lyrics;
                    const beams = bucket[p][m].beams;
                    const tuplets = bucket[p][m].tuplets;

                    for (let i in voices) {
                        try {
                            voices[i].draw(context, bucket[p][m].staves[pos[i]]);
                        } catch (e) {
                            console.warn(p, m, e);
                        }
                    }

                    for (let i in lyrics) {
                        try {
                            lyrics[i].setContext(context).draw();
                        } catch (e) {
                            console.warn(p, m, e);
                        }
                    }

                    beams.forEach(function(beam) {
                        try {
                            beam.setContext(context).draw();
                        } catch (e) {
                            console.warn(p, m, e);
                        }
                    });

                    tuplets.forEach(function(tuplet) {
                        try {
                            tuplet.setContext(context).draw();
                        } catch (e) {
                            console.warn(p, m, e);
                        }
                    });
                } //for (let m=0; m<msize; m++)

                ties.forEach(function(tie) {
                    try {
                        new VF.StaveTie(tie).setContext(context).draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });

                if (options.sluron) {
                    slurs.forEach(function(slur) {
                        try {
                            new VF.Curve(slur.first_note, slur.last_note, {cps: [{x: 0, y: 20}, {x: 0, y: 20}]}).setContext(context).draw();
                        } catch (e) {
                            console.warn(p, e);
                        }
                    });
                }

                wedges.forEach(function(wedge) {
                    try {
                        new VF.StaveHairpin({first_note: wedge.first_note, last_note: wedge.last_note}, wedge.type).setContext(context).draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });

                vibs.forEach(function(vib) {
                    try {
                        new VF.VibratoBracket(vib).setContext(context).draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });

                glisss.forEach(function(gliss) {
                    try {
                        let sline = new VF.StaveLine(gliss);
                        if ('undefined' != typeof gliss.text) {
                            sline.setText(gliss.text);
                            sline.setFont({family:'Alegreya', size:8, weight:'lighter italic'});
                        }
                        sline.setContext(context);
                        sline.applyFontStyle();
                        sline.draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });

                pedals.forEach(function(pedal) {
                    try {
                        let pmark = new VF.PedalMarking(pedal.notes);
                        if (pedal.line) {
                            pmark.setStyle(VF.PedalMarking.Styles.MIXED);
                        } else {
                            pmark.setStyle(VF.PedalMarking.Styles.TEXT);
                        }

                        pmark.setLine(4);
                        pmark.setContext(context).draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });

                octaveshifts.forEach(function(octaveshift) {
                    try {
                        octaveshift.setContext(context).draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });

            } //if (drawpart[p])
        } //for (let p in bucket)

        return bucket;
    }
}

class Measure {

    constructor(VF, target, xmldata, options) {
        this._VF = VF;
        //this._context = context;
        this._target = target;
        this._xmldata = xmldata;
        this._options = options;
        this._height = 200;
        this._width = options.mswidth;
        //this._options.width = this._xmldata.view.width;
    }

    searchMelodys(keyval, type, sPos) {
        // 1. head clef setting
        const headClef = this.setHeadClef();
        const p = this._options.part;
        const sm = this._options.mstart;
        const em = this._options.mend;
        const mcount = this._options.count;

        let mendidxArr = new Array();
        let midiArr = new Array();
        let midilist = new Array(mcount);
        let mlist = new Array();
        let emptyMelody = true;
        let v = 0, idx = 0;

        // 2. melody 구간 연결
        console.log('sm=',sm,' em=',em);
        for (let m=sm; m<=em; m++) {
            const measure = this._xmldata.part[p].measure[m];
            midilist[idx] = new Array();

            if ('undefined' != typeof measure.melody) {
                const melody = measure.melody;

                try {
                    for (let voice in melody) {
                        if (!emptyMelody) break; //첫 멜로디만 검색.. 멜로디 번호를 맞추는 부분은 생각해 볼 필요가 있음..
                        
                        if (null != melody[voice]) {
                            let pitchs = melody[voice].pitchs.split('|');
                            v = voice;
                            console.log('pitchs=',pitchs);

                            // melody 특정 값으로 변환
                            for (let n in pitchs) {
                                let pitch = pitchs[n];
                                if (pitch != '') {
                                    emptyMelody = false;
                                    const [step, octave, alter] = pitch.split(':');
                                    const conv = this.convMidiNum(step, Number(octave), alter);
                                    midiArr.push(conv);
                                    midilist[idx].push(conv);
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.warn(p, m, e);
                }

                emptyMelody = true;
            }
            
            mendidxArr.push(midiArr.length); //각 마디의 마지막 인덱스 찾는데 활용
            mlist.push({'pms':p + "-" + m + "-" + 0 + "-" + v, 'nelist':""});
            idx++;
        }
        //console.log(mendidxArr);

        /* ================================================ 
         * 1. 상대 음(음 간격)으로 검색
         * ================================================= */
        if(type == '1') mlist = this.searchByPitch(keyval, midiArr, mendidxArr, mlist, sPos); 

        /* ================================================ 
         * 2. Beat 위치의 음표로 검색
         * ================================================= */
        if(type == '2') mlist = this.searchByBeat(keyval, midilist, mlist, headClef); 

        /* ================================================ 
         * 3. Downbeat(센 박자) 음표로 검색
         * 4. 마디 첫 음만으로 검색
         * include : week (약한 박자 포함) , strong (첫음만 추출)
         * ================================================= */
        if(type == '3') mlist = this.searchByDownbeat(keyval, midilist, mlist, headClef, 'week'); 
        if(type == '4') mlist = this.searchByDownbeat(keyval, midilist, mlist, headClef, 'strong'); 

        console.log("headClef = ",headClef);
        //console.log("mlist = ",mlist);
        return [headClef, mlist];
    }

    setHeadClef() {
        const headClef = new Array(this._xmldata.part.length);

        // head clef setting
        for (let p in this._xmldata.part) {
            const measures = this._xmldata.part[p].measure;
            const size = this._xmldata.part[0].measure.length;
            headClef[p] = {};
            headClef[p].stavecnt = 1;

            for (let m in measures) {
                const measure = measures[m];

                if ('undefined' == typeof headClef[p][m]) 
                    headClef[p][m] = {};
                headClef[p][m].times  = new Array();
                headClef[p][m].tmcnt  = new Array();
                headClef[p][m].keys   = new Array();
                headClef[p][m].kscnt  = new Array();
    
                if ('undefined' == typeof headClef[p][m].clef)
                    headClef[p][m].clef = new Array();
    
                headClef[p][m].clef_pos = new Array();
                headClef[p][m].clef_note = new Array();
                headClef[p][m].clef_staff = new Array();

                // order in measure
                let order = measure.order.split(',');
                let clef_pos = -1, ncnt = 0;
                if ('undefined' != typeof measure.attr) {
                    for (let i in measure.attr) {
                        if (m == 0 && 'undefined' != typeof measure.attr[0].staves)
                            headClef[p].stavecnt = Number(measure.attr[0].staves);

                        if ('undefined' != typeof measure.attr[i].clef) {
                            const olen = order.length;
                            for (let o in order) {
                                if ('ne' == order[o]) ncnt++;
                                if ('cf' == order[o]) {
                                    o = Number(o);
                                    if (olen == o+2 || 'bp' == order[o+1])  //end
                                        clef_pos = 10000;
                                    else
                                        clef_pos = ncnt;
                                    //order.splice(o, 1);
                                    order.splice(0, Number(o)+1);
                                    headClef[p][m].clef_pos.push(clef_pos);
                                    break;
                                }
                            }
    
                            for (let c in measure.attr[i].clef) {
                                let staff = 0;
                                if ('undefined' != typeof measure.attr[i].clef[c].number)
                                    staff = Number(measure.attr[i].clef[c].number) - 1;
    
                                if (0 == headClef[p][m].clef_pos[0]) {
                                    headClef[p][m].clef[staff] = Clef.parseClef(measure.attr[i].clef[c]);  //head
                                } else {
                                    m = Number(m);
                                    if (size > m+1 && 'undefined' == typeof headClef[p][m+1]) {
                                        headClef[p][m+1] = {};
                                        headClef[p][m+1].clef = new Array();
                                    }
    
                                    const clef = Clef.parseClef(measure.attr[i].clef[c]);
                                    headClef[p][m].clef_note.push(clef);
                                    headClef[p][m].clef_staff.push(staff);
                                    if (size > m+1)
                                        headClef[p][m+1].clef[staff] = clef;  //head
                                }
                                
                            }
                        }
                    }
                }

                for (let i = 0; i < headClef[p].stavecnt; i++) {
                    if ('undefined' == typeof headClef[p][m].clef[i]) {
                        headClef[p][m].clef[i] = headClef[p][m-1].clef[i];
                    }

                    if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].time) {
                        headClef[p][m].times[i] = Time.parseTime(measure.attr[0].time);
                        headClef[p][m].tmcnt = 1;
                    } else {
                        headClef[p][m].times[i] = headClef[p][m-1].times[i];
                        headClef[p][m].tmcnt = 0;
                    }

                    if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].key) {
                        headClef[p][m].keys[i] = Key.parseKey(measure.attr[0].key);
                        headClef[p][m].kscnt[i] = Key.ksCount(headClef[p][m].keys[i]);
                    } else {
                        headClef[p][m].keys[i] = headClef[p][m-1].keys[i];
                        headClef[p][m].kscnt[i] = Key.ksCount(headClef[p][m].keys[i]);
                    }
                }

            }
        } //for (let p in this._xmldata.part)

        return headClef;
    }

    searchByPitch(keyval, midiArr, mendidxArr, mlist, sPos) {
        const p = this._options.part;
        const sm = this._options.mstart;
        const em = this._options.mend;
        let midiStringArr = new Array();
        let start, end, pos = 0;
        let v = mlist[0].pms.split('-')[3];
        let nelist = [];

        // 3. melody 음 간격 구하기
        for(let i=0;i<midiArr.length-1;i++) 
            midiStringArr.push(parseInt(midiArr[i+1]) - parseInt(midiArr[i]));
    
        let midiString = midiStringArr.join('|');
        console.log("midiString=",midiString);

        // 4. 구간 검색
        console.log('keyval=',keyval);
        console.log('midiString=',midiString);
        let index = midiString.indexOf(keyval, sPos);
        console.log('index=',index);
        
        if (index > -1) {
            let keylen = keyval.split('|').length; 
            let searchlen = 0;                     
            start = midiString.substr(0,index).split('|').length == 0 ? 0 : midiString.substr(0,index).split('|').length - 1;
            end = Number(start) + Number(keylen) + 1;
            console.log("start=",start," end=",end);

            let idx = 0;
            for (let m=sm; m<=em; m++) {
                const measure = this._xmldata.part[p].measure[m];
                if (keylen <= (searchlen-1)) { //다 찾았으면 그만 찾음.
                    mlist[idx].nelist = nelist;
                    continue;
                }
    
                if ('undefined' != typeof measure.melody) {
                    const melody = measure.melody;

                    if (end > mendidxArr[idx]) {
                        nelist = nelist.concat(melody[v].nnum.split('|').slice(start, mendidxArr[idx]));
                        start = 0;
                        end = end - mendidxArr[idx];
                    } else {
                        nelist = nelist.concat(melody[v].nnum.split('|').slice(start, end));
                    }
                    console.log('nelist=',nelist);
                    searchlen += nelist.length;
                    mlist[idx].nelist = nelist;
                    nelist =[];
                    idx++;
                }
            }
        }     

        return mlist;
    }

    searchByBeat(keyval, midilist, mlist, headClef) {
        const p = this._options.part;
        const sm = this._options.mstart;
        const em = this._options.mend;
        let noteArr = new Array();
        let beatMidiArr = new Array();
        let mendidxArr = new Array();
        let midiStringArr = new Array();
        let start, end, pos = 0;
        let v = mlist[0].pms.split('-')[3];
        let nelist = [];

        for (let m=sm; m<=em; m++) {
            const measure = this._xmldata.part[p].measure[m];
            const melody = measure.melody;
            const note = measure.note;
            let strongBeatArr = new Array();
            let duration = measure.backup[0].duration;
            let beatType = headClef[p][m].times[0].split('/')[1];
            let strongBeat = -1;
            let tupletSum = 0;
            let tuplet = false;
            //console.log("beatType=",beatType);

            // 1. 강박자 beat의 duration 찾기
            let leng = melody[v].nnum.split('|').length;
            let nnumArr = melody[v].nnum.split('|');
            for (let i in nnumArr) {
                if (i == (leng-1)) break; //마지막은 공백이라 제외
                let idx = nnumArr[i];
                let notetype = Time.parseNumType(note[idx].type);
                let noteduration = note[idx].duration;
                console.log("notetype=",notetype);

                tuplet = (!tuplet && 'undefined' == typeof note[idx].tuplet) ? false : true;
                console.log("tuplet=",tuplet);
                
                if(tuplet) {
                    tupletSum += Number(note[idx].duration);

                    if ('undefined' != typeof note[idx].tuplet && note[idx].tuplet[0].type == 'stop') {
                        tuplet = false;
                        console.log("tupletSum=",tupletSum);
                        noteduration = tupletSum / note[idx].time.normal_notes
                    } else {
                        continue;
                    }
                }

                if (notetype % beatType != 0) continue;
                strongBeat = noteduration * (notetype / beatType);
                break;
            }

            if (strongBeat == -1 && duration == 1024) 
                strongBeat = duration / beatType;

            console.log("strongBeat=",strongBeat);

            // 1.강박자 위치의 음 추출
            if (strongBeat > -1) {
                let strongBeatPos = 0;
                let durationSum = 0;

                // 강박자 위치 Array
                while (strongBeatPos != duration) {
                    strongBeatArr.push(strongBeatPos);
                    strongBeatPos += Number(strongBeat);
                }
                //console.log("strongBeatArr=",strongBeatArr);

                for (let i in nnumArr) {
                    if (i == (leng-1)) break; //마지막은 공백이라 제외
                    let idx = nnumArr[i];
                    let noteDuration = note[idx].duration;
    
                    // 강박자에 있는 음표 찾기
                    if (strongBeatArr.includes(durationSum)) {
                        //console.log("Pos=",durationSum);
                        beatMidiArr.push(midilist[pos][i]);
                        
                        if ('undefined' != typeof note[idx].rest) { 
                            //rest고 마지막 음표가 아니면 다음 음 추출
                            if (i != leng-2) noteArr.push(Number(idx)+1);     
                        } else {
                            noteArr.push(idx);
                        } 
                    }
                    durationSum += Number(noteDuration);
                } 
                
                mendidxArr.push(beatMidiArr.length); //각 마디의 마지막 인덱스 찾는데 활용
            }
            pos++;
        }

        // 2. melody 음 간격 구하기
        for(let i=0;i<beatMidiArr.length-1;i++) 
            midiStringArr.push(parseInt(beatMidiArr[i+1]) - parseInt(beatMidiArr[i]));
    
        let midiString = midiStringArr.join('|');
        console.log("midiString=",midiString);

        // 3. 구간 검색
        console.log('keyval=',keyval);
        let index = midiString.indexOf(keyval);
        console.log('index=',index);

        if (index > -1) {
            let keylen = keyval.split('|').length;      
            let searchlen = 0;               
            start = midiString.substr(0,index).split('|').length == 0 ? 0 : midiString.substr(0,index).split('|').length - 1;
            end = Number(start) + Number(keylen) + 1;

            let idx = 0;
            for (let m=sm; m<=em; m++) {
                if (keylen <= (searchlen-1)) { //다 찾았으면 그만 찾음.
                    mlist[idx].nelist = nelist;
                    continue;
                }

                if (end > mendidxArr[idx]) {
                    console.log("1 : start=",start," end=",mendidxArr[idx]);
                    nelist = nelist.concat(noteArr.slice(start, mendidxArr[idx]));
                    start = Number(mendidxArr[idx]);
                } else {
                    console.log("2 : start=",start," end=",end);
                    nelist = nelist.concat(noteArr.slice(start, end));
                }
                console.log('nelist=',nelist);
                searchlen += nelist.length;
                mlist[idx].nelist = nelist;
                nelist =[];
                idx++;
            }
        }

        return mlist;
    }

    searchByDownbeat(keyval, midilist, mlist, headClef, include) {
        const p = this._options.part;
        const sm = this._options.mstart;
        const em = this._options.mend;
        let noteArr = new Array();
        let beatMidiArr = new Array();
        let mendidxArr = new Array();
        let midiStringArr = new Array();
        let start, end, pos = 0;
        let v = mlist[0].pms.split('-')[3];
        let nelist = [];

        for (let m=sm; m<=em; m++) {
            const measure = this._xmldata.part[p].measure[m];
            const melody = measure.melody;
            const note = measure.note;
            let downBeatArr = new Array();
            let duration = measure.backup[0].duration;
            let beats = headClef[p][m].times[0].split('/')[0];
            //console.log("m=",m," pos=",pos," midilist=",midilist[pos]);

            // 1. Downbeat의 duration 찾기
            /*
            - 2/4, 3/4, 3/8, 3/16 등은 다 첫 박자에 Downbeat이 있다고 볼 수 있다.
            - 4/4 박자는 1, 3박자에 Downbeat
            - 6/8 박자는 1, 4박자에 Downbeat(1, 2, 3, 4, 5, 6 중에서 1, 4)
            - 9/8 박자는 1, 4, 7박자
            - 12/8 박자는 1, 7박자
            - 이밖에 5/4, 7/4, 5/8, 7/8 박자는 상황에 따라 나누는 방법이 달라지므로 각각의 beat를 다 쓰기로 한다.
            - 분모가 16이 넘어가면 분모가 8일 때 적용한 방법에 비례 해서 쓴다.
            */
            
            // 1.Downbeat 위치의 음 추출
            let durationSum = 0;

            // Downbeat 위치 Array
            downBeatArr.push(0);
            if ('week' == include) { // 약한 downbeat 포함일 경우
                if (Number(beats) >= 4) {
                    let tmpArr = new Array();
                    let beatDuration = duration / beats;
                    for (let i=0; i<beats; i++) 
                        tmpArr.push(beatDuration * i);

                    switch (beats) {
                        case '4' :
                            downBeatArr.push(tmpArr[2]);
                            break;
                        case '6' :
                            downBeatArr.push(tmpArr[3]);
                            break;
                        case '9' :
                            downBeatArr.push(tmpArr[3]);
                            downBeatArr.push(tmpArr[6]);
                            break;
                        case '10' :
                            downBeatArr.push(tmpArr[5]);
                            break;
                        case '12' :
                            downBeatArr.push(tmpArr[6]);
                            break;
                        case '14' :
                            downBeatArr.push(tmpArr[7]);
                            break;
                        default :
                            break;
                    }
                }
            }
            console.log("downBeatArr=",downBeatArr);

            // 1. downbeat의 duration 찾기
            let leng = melody[v].nnum.split('|').length;
            let nnumArr = melody[v].nnum.split('|');
            for (let i in nnumArr) {
                if (i == (leng-1)) break; //마지막은 공백이라 제외
                let idx = nnumArr[i];
                let noteDuration = note[idx].duration;

                // downbeat에 있는 음표 찾기
                if (downBeatArr.includes(durationSum)) {
                    beatMidiArr.push(midilist[pos][i]);
                    
                    if ('undefined' != typeof note[idx].rest) { 
                        //rest고 마지막 음표가 아니면 다음 음 추출
                        if (i != leng-2) noteArr.push(Number(idx)+1);     
                    } else {
                        noteArr.push(idx);
                    } 
                }
                durationSum += Number(noteDuration);
            } 
            
            mendidxArr.push(beatMidiArr.length); //각 마디의 마지막 인덱스 찾는데 활용
            pos++;
        }

        // 2. melody 음 간격 구하기
        for(let i=0;i<beatMidiArr.length-1;i++) 
            midiStringArr.push(parseInt(beatMidiArr[i+1]) - parseInt(beatMidiArr[i]));
    
        let midiString = midiStringArr.join('|');
        console.log("midiString=",midiString);

        // 3. 구간 검색
        console.log('keyval=',keyval);
        let index = midiString.indexOf(keyval);
        console.log('index=',index);

        if (index > -1) {
            let keylen = keyval.split('|').length;   
            let searchlen = 0;                  
            start = midiString.substr(0,index).split('|').length == 0 ? 0 : midiString.substr(0,index).split('|').length - 1;
            end = Number(start) + Number(keylen) + 1;

            let idx = 0;
            for (let m=sm; m<=em; m++) {
                if (keylen <= (searchlen-1)) { //다 찾았으면 그만 찾음.
                    mlist[idx].nelist = nelist;
                    continue;
                }

                if (end > mendidxArr[idx]) {
                    console.log("1 : start=",start," end=",mendidxArr[idx]);
                    nelist = nelist.concat(noteArr.slice(start, mendidxArr[idx]));
                    start = Number(mendidxArr[idx]);
                } else {
                    console.log("2 : start=",start," end=",end);
                    nelist = nelist.concat(noteArr.slice(start, end));
                }
                console.log('nelist=',nelist);
                searchlen += nelist.length;
                mlist[idx].nelist = nelist;
                nelist =[];
                idx++;
            }
        }

        return mlist;
    }

    measureDraw(headClef, mlist, context) {
        const bucket = new Array(mlist.length);
        let startx = 10;
        //const mswidth = Number(this._options.width) - 30;
        //let sum = 0, adjust = 0;

        /* ================================================ 
         * 0. 음표, 조표 갯수 등에 따른 마디 사이즈 계산
         * ================================================= */
        /* 마디 사이즈를 options에서 받아오기 때문에 마디 사이즈 구할 필요 없음
        for (let ms = 0; ms < mlist.length; ms++) {
            bucket[ms] = {};

            const [p, m, sv, v] = mlist[ms].pms.split('-');
            const measure = this._xmldata.part[p].measure[m];
            const noteslen = new Array(headClef[p].stavecnt);
            for (let i = 0; i < headClef[p].stavecnt; i++) noteslen[i] = 0;
            for (let i in measure.note) {
                if ('undefined' == typeof measure.note[i].chord) {
                    if ('undefined' != typeof measure.note[i].staff) noteslen[Number(measure.note[i].staff)-1]++;
                    else noteslen[0]++;
                }
            }

            let kscount = 0;
            let max = noteslen[0];
            for (let i = 1; i < noteslen.length; i++)
                if (max < noteslen[i])
                    max = noteslen[i];
            bucket[ms].notelen = max;

            // 노트가 3개 이하인 경우 마디가 너무 좁게 그려짐
            if (4 > bucket[ms].notelen) bucket[ms].notelen += 1;
            // clef 를 포함할 경우 마디 사이즈 조정
            if (-1 < measure.order.indexOf('cf')) bucket[ms].notelen += 2;

            // if ('undefined' != typeof measure.attr && 'undefined' != typeof measure.attr[0].key) {
            //     const signature = Key.parseKey(measure.attr[0].key);
            //     kscount = Key.ksCount(signature);
            // }
            kscount = headClef[p][m].kscnt[0];
            bucket[ms].adjust = 12 + kscount * 12;
        }
   
        if (mlist.length > 1) { //1개 이상의 마디
            for (let ms = 0; ms < mlist.length; ms++) 
            sum += bucket[ms].notelen;
            const each = (mswidth - bucket[0].adjust) / sum;

            sum = 0;
            for (let ms = 0; ms < mlist.length; ms++) {
                bucket[ms].size = Math.floor(bucket[ms].notelen * each);
                sum += bucket[ms].size;
            }
            bucket[0].size += (mswidth - sum);  // add remains at first
        
        } else { //1개 마디
            bucket[0].notelen += 60;
            bucket[0].adjust = 12 + bucket[0].notelen * 12;
            bucket[0].size = bucket[0].adjust;
        }
        
        //console.log('bucket[0].size =',bucket[0].size );
        */

        /* ================================================ 
         * 1. 악보 그리기
         * ================================================= */
        for (let ms = 0; ms < mlist.length; ms++) {
            console.log('ms=',ms);
            bucket[ms] = {};
        
            const [p, m, sv, v] = mlist[ms].pms.split('-');
            const nelist = mlist[ms].nelist;
            const VF = this._VF;
            const measure = this._xmldata.part[p].measure[m];
          
            bucket[ms].clef = headClef[p][m].clef;
            bucket[ms].kscnt = headClef[p][m].kscnt;
            bucket[ms].tmcnt = headClef[p][m].tmcnt;
            bucket[ms].times = headClef[p][m].times;
            bucket[ms].keys = headClef[p][m].keys;
            bucket[ms].clef_pos = headClef[p][m].clef_pos;
            bucket[ms].clef_note = headClef[p][m].clef_note;
            bucket[ms].clef_staff = headClef[p][m].clef_staff;
            bucket[ms].size = this._width[m] + (ms == 0 ? 200 : 0); //clef가 포함될 수 있으니 여부공간 추가

            bucket[ms].staves = new Array(headClef[p].stavecnt);
            console.log("p=",p," m=",m, " sv=",sv ," v=",v ," nnum=",nelist);

            /* ================================================ 
            * 2. 오선지 그리기
            * ================================================= */
            let msnumber = 0;  // 마디 번호 출력을 위함.
            let barline_ending = {
                continue : false,
                number : 0
            };  // 라인 연속성을 위함.
            console.log('bucket[ms].size=',bucket[ms].size);
            for (let i = 0; i < headClef[p].stavecnt; i++) {
                bucket[ms].staves[i] = new VF.Stave(startx, 30 + (Number(i) * 170), bucket[ms].size); //마디 사이즈

                if (-1 == measure.number.indexOf('X')) {  // 도돌이표가 끝나고 그 다음 마디 번호 (X1, X2...)가 아니면
                    msnumber = measure.number;
                }

                if(ms == 0) {
                    bucket[ms].staves[i].addClef(bucket[ms].clef[i]);
                    bucket[ms].staves[i].addKeySignature(bucket[ms].keys[i]);
                    bucket[ms].staves[0].setMeasure(msnumber); 
                    bucket[ms].staves[i].addTimeSignature(bucket[ms].times[i]);
                } else {
                    bucket[ms].kscnt[i] = 0;
                }

                if (0 < bucket[ms].clef_pos.length) {
                    for (let c in bucket[ms].clef_pos) {
                        const staff = bucket[ms].clef_staff[c];
                        if (staff == i && 10000 == bucket[ms].clef_pos[c]) {
                            bucket[ms].staves[staff].addEndClef(bucket[ms].clef_note[c], 'small');
                            break;
                        }
                    }
                }

                if ('undefined' != typeof measure.barline) { //barline 연결
                    for (let b in measure.barline) {
                        if ('undefined' != typeof measure.barline[b].ending) {
                            switch (measure.barline[b].ending.type) {
                                case 'start' :
                                    let draw = true;
                                    for (let c = Number(b) + 1; c < measure.barline.length; c++) {
                                        if ('undefined' != typeof measure.barline[c].ending && 'stop' == measure.barline[c].ending.type) {
                                            measure.barline[c].ending.type = 'custom_start_stop';
                                            draw = false;
                                            break;
                                        }
                                    }
                                    if (draw) {
                                        bucket[ms].staves[i].setVoltaType(VF.Volta.type.BEGIN, measure.barline[b].ending.number + '.', 10);
                                        barline_ending.continue = true;
                                        barline_ending.number = measure.barline[b].ending.number;
                                    }
                                    break;
                                case 'discontinue' :
                                    bucket[ms].staves[i].setVoltaType(VF.Volta.type.MID, measure.barline[b].ending.number + '.', 10);
                                    barline_ending.continue = false;
                                    barline_ending.number = 0;
                                    break;
                                case 'stop' :
                                    bucket[ms].staves[i].setVoltaType(VF.Volta.type.END, measure.barline[b].ending.number + '.', 10);
                                    barline_ending.continue = false;
                                    barline_ending.number = 0;
                                    break;
                                case 'custom_start_stop' :
                                    bucket[ms].staves[i].setVoltaType(VF.Volta.type.BEGIN_END, measure.barline[b].ending.number + '.', 10);
                                    barline_ending.continue = false;
                                    barline_ending.number = 0;
                                    break;
                                default :
                                    console.log('[missing] barline ending type ==> ', measure.barline[b].ending.type);
                                    barline_ending.continue = false;
                                    barline_ending.number = 0;
                                    break;
                            }
                        } else if (barline_ending.continue && 0 == i) {
                            bucket[ms].staves[i].setVoltaType(VF.Volta.type.MID, barline_ending.number + '.', 10);
                        }

                        if ('undefined' != typeof measure.barline[b].repeat) {
                            switch (measure.barline[b].repeat.direction) {
                                case 'forward' :
                                    bucket[ms].staves[i].setBegBarType(VF.Barline.type.REPEAT_BEGIN);
                                    bucket[ms].staves[i].modifiers[0].padding = 3;
                                    break;
                                case 'backward' :
                                    bucket[ms].staves[i].setEndBarType(VF.Barline.type.REPEAT_END);
                                    break;
                            }
                        } else if (1 == headClef[p].stavecnt && 'undefined' != typeof measure.barline[i].location) {
                            switch (measure.barline[i].location) {
                                case 'left' :
                                    if ('undefined' != typeof measure.barline[i].style) {
                                        switch (measure.barline[i].style) {
                                            case 'light-light' :
                                                bucket[ms].staves[i].setBegBarType(VF.Barline.type.DOUBLE);
                                                break;
                                            case 'heavy-light' :
                                                bucket[ms].staves[i].setBegBarType(VF.Barline.type.DOUBLE);
                                                break;
                                            case 'none' :
                                                bucket[ms].staves[i].setBegBarType(VF.Barline.type.NONE);
                                                break;
                                            default :
                                                console.log('[missing] barline left style ==> ', measure.barline[i].style);
                                                break;
                                        }
                                    }
                                    break;
                                case 'right' :
                                    if ('undefined' != typeof measure.barline[i].style) {
                                        switch (measure.barline[i].style) {
                                            case 'light-light' :
                                                bucket[ms].staves[i].setEndBarType(VF.Barline.type.DOUBLE);
                                                break;
                                            case 'light-heavy' :
                                                bucket[ms].staves[i].setEndBarType(VF.Barline.type.END);
                                                break;
                                            case 'none' :
                                                bucket[ms].staves[i].setEndBarType(VF.Barline.type.NONE);
                                                break;
                                            default :
                                                console.log('[missing] barline right style ==> ', measure.barline[i].style);
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                } else if (barline_ending.continue) {
                    bucket[ms].staves[i].setVoltaType(VF.Volta.type.MID, barline_ending.number + '.', 10);
                }
            }

            if ('undefined' != typeof measure.direction) {
                let order = measure.order.split(',');
                let ncnt = 0, dcnt = 0;
                let pre_pos_x = 1000, pre_pos_y = 1000;
                for (let o in order) {
                    if ('ws' == order[o]) {
                        let position = VF.Modifier.Position.ABOVE;
                        if ('below' == measure.direction[dcnt].placement) {
                            position = VF.Modifier.Position.BELOW;
                        }

                        let staff = 0;
                        if ('undefined' != typeof measure.direction[dcnt].staff) {
                            staff = Number(measure.direction[dcnt].staff) - 1;
                        }

                        let justification = VF.TextNote.Justification.LEFT;
                        switch (measure.direction[dcnt].words) {
                            case 'D.C.' :
                            case 'D.C. al' :
                            case 'D.C. al Fine' :
                            case 'D.S.' :
                            case 'D.S. al Coda' :
                            case 'D.S. al Fine' :
                            case 'Fine' :
                                justification = VF.TextNote.Justification.RIGHT;
                                break;
                            case 'cresc.' :
                            case 'dim.' :
                                justification = VF.TextNote.Justification.CENTER;
                                break;
                            default :
                                break;
                        }

                        let shift_x = 0, shift_y = -6;
                        if ('undefined' != typeof measure.direction[dcnt].default && 'undefined' != typeof measure.direction[dcnt].default.y) {
                            if (0 > Number(measure.direction[dcnt].default.y)) {
                                position = VF.Modifier.Position.BELOW;
                                shift_y = 25;
                            }
                        }

                        if ('undefined' != typeof measure.direction[dcnt].relative && 'undefined' != typeof measure.direction[dcnt].relative.x) {}

                        if (VF.TextNote.Justification.LEFT == justification) {
                            shift_x = 6;
                            if (VF.Modifier.Position.ABOVE == position) {
                                if (1000 == pre_pos_y) {
                                    shift_y = -6;
                                    pre_pos_y = -6;
                                } else if (-6 == pre_pos_y) {
                                    shift_y = -26;
                                    pre_pos_y = -26;
                                } else if (-26 == pre_pos_y) {
                                    shift_y = -46;
                                }
                            }
                        }

                        try{
                            bucket[ms].staves[staff].setText(measure.direction[dcnt].words, position, {justification: justification, shift_x: shift_x, shift_y: shift_y});
                        } catch (e) {
                            console.error(p,m,staff,dcnt,e);
                        }

                        //bucket[ms].staves[staff].setText(measure.direction[dcnt].words, position, {justification: justification, shift_x: shift_x, shift_y: shift_y});
                        dcnt++;
                    } else if ('rl' == order[o]) {
                        dcnt++;
                    } else if ('bt' == order[o]) {
                        // console.log(measure.direction[dcnt]);
                        dcnt++;
                    } else if ('pl' == order[o]) {
                        dcnt++;
                    } else if ('dy' == order[o]) {
                        dcnt++;
                    } else if ('we' == order[o]) {
                        dcnt++;
                    } else if ('od' == order[o]) {
                        dcnt++;
                    } else if ('os' == order[o]) {
                        //octave shift
                        let os = measure.direction[dcnt].octaveshift;

                        if ('up' == os.type || 'down' == os.type) {
                            if ('down' == os.type) {
                                bucket[ms].osdownnum = os.number;
                                bucket[ms].osdownstart = ncnt;    
                                bucket[ms].osdownval = -1;
                                bucket[ms].osdownstaff = measure.direction[dcnt].staff - 1;
                            } else if ('up' == os.type) {
                                bucket[ms].osupnum = os.number;
                                bucket[ms].osupstart = ncnt;
                                bucket[ms].osupval = 1;
                                bucket[ms].osupstaff = measure.direction[dcnt].staff - 1;
                            }
                        
                        } else if ('stop' == os.type) {
                            if ('undefined' != typeof bucket[ms].osdownstart && bucket[ms].osdownnum == os.number) 
                                bucket[ms].osdownstop = ncnt;
                            
                            if ('undefined' != typeof bucket[ms].osupstart && bucket[ms].osupnum == os.number) 
                                bucket[ms].osupstop = ncnt;
                            
                        } else if ('continue' == os.type) {

                        } else {
                            console.log('unknown octaveshift type : ' + measure.direction[dcnt].octaveshift.type);
                        }
            
                        dcnt++;
                    } else if ('me' == order[o]) {
                        dcnt++;
                    } else if ('ne' == order[o]) {
                        ncnt++;
                    }
                }
            }

            for (let i = 0; i < headClef[p].stavecnt; i++) {
                bucket[ms].staves[i].setContext(context).draw();
            }
            
            // 1) 피아노의 경우(2 == headClef[p].stavecnt) 오른손 왼손이 이어져 있어야함. (---stave 1개만 그릴 시 주석 처리)
            // // 2) part 결합의 경우(hasbarline == true) barline 표시
            let lconnector = null, rconnector = null;
            if (2 == headClef[p].stavecnt) {
                if (2 == headClef[p].stavecnt) {
                    //new VF.StaveConnector(bucket[ms].staves[0], bucket[ms].staves[1]).setType(VF.StaveConnector.type.BRACE).setContext(context).draw();
                    new VF.StaveConnector(bucket[ms].staves[0], bucket[ms].staves[1]).setType(VF.StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
                }

                if ('undefined' != typeof measure.barline) {
                    for (let i in measure.barline) {
                        switch (measure.barline[i].location) {
                            case 'left' :
                                if ('undefined' != typeof measure.barline[i].style) {
                                    lconnector = new VF.StaveConnector(bucket[ms].staves[0], bucket[ms].staves[1]).setType(VF.StaveConnector.type.SINGLE_LEFT);
                                    switch (measure.barline[i].style) {
                                        case 'light-light' :
                                            lconnector.setType(VF.StaveConnector.type.THIN_DOUBLE);
                                            break;
                                        case 'heavy-light' :
                                            lconnector.setType(VF.StaveConnector.type.BOLD_DOUBLE_LEFT);
                                            if (hasbarline)
                                                lconnector.setXShift(bucket[ms][bstart][m].staves[0].start_x - bucket[ms][bstart][m].staves[0].x - 5.5);
                                            else
                                                lconnector.setXShift(bucket[ms].staves[0].start_x - bucket[ms].staves[0].x - 5.5);
                                            break;
                                        case 'none' :
                                            lconnector.setType(VF.StaveConnector.type.NONE);
                                            break;
                                        default :
                                            console.log('[missing] barline left style ==> ', measure.barline[i].style);
                                            break;
                                    }
                                }
                                break;
                            case 'right' :
                                if ('undefined' != typeof measure.barline[i].style) {
                                    rconnector = new VF.StaveConnector(bucket[ms].staves[0], bucket[ms].staves[1]).setType(VF.StaveConnector.type.SINGLE_RIGHT);
                                    switch (measure.barline[i].style) {
                                        case 'light-light' :
                                            rconnector.setType(VF.StaveConnector.type.THIN_DOUBLE);
                                            break;
                                        case 'light-heavy' :
                                            rconnector.setType(VF.StaveConnector.type.BOLD_DOUBLE_RIGHT);
                                            break;
                                        case 'none' :
                                            rconnector.setType(VF.StaveConnector.type.NONE);
                                            break;
                                        default :
                                            console.log('[missing] barline right style ==> ', measure.barline[i].style);
                                            break;
                                    }
                                }
                                break;
                        }
                    }
                }

                if (null == lconnector)
                    lconnector = new VF.StaveConnector(bucket[ms].staves[0], bucket[ms].staves[1]).setType(VF.StaveConnector.type.SINGLE_LEFT);
                if (null == rconnector)
                    rconnector = new VF.StaveConnector(bucket[ms].staves[0], bucket[ms].staves[1]).setType(VF.StaveConnector.type.SINGLE_RIGHT);

                lconnector.setContext(context).draw();
                rconnector.setContext(context).draw();
                
            } else {

            }

            /* ================================================ 
            * 2. 음표 및 악보 그리기
            * ================================================= */
            const ties   = new Array();
            const slurs  = new Array();
            const wedges = new Array();
            const pedals = new Array();
            const glisss = new Array();
            const vibs   = new Array();
            const octaveshifts = new Array();
            const voice_number = new Array();
            const osinfo = new Array(headClef[p].stavecnt);

            let keyidx = 0;
            let prenotes = null;
            let pdlnotes = null;
            let osup = null;
            let osdown = null;
            let tremolo = {
                continue : false,
                number : 0
            };

            for (let i=0; i<headClef[p].stavecnt; i++) {
                osinfo[i] = {
                    has : false,
                    val : 0,
                    staff : 0,
                    end : null
                };
            }

            const notelen = Number(measure.note.length);
                
            let maxlyric = 0; //note 속 lyric의 최대 갯수
            for (let i = 0; i < notelen; i++) {
                voice_number[Number(measure.note[i].voice)] = true;

                // lyric의 길이
                if ('undefined' != typeof measure.note[i].lyric) {
                    if (measure.note[i].lyric.length > maxlyric) {
                        maxlyric = measure.note[i].lyric.length;
                    }
                }
            }

            const voice_cnt = new Array();
            for (let i = 1; i < voice_number.length; i++) if (null != voice_number[i]) voice_cnt.push(i);

            //const voice_sel = voice_cnt[sv]; //selected draw stave
            const pos = new Array(voice_cnt.length);
            const notes = new Array();
            const voices = new Array();
            const lyrics = new Array(maxlyric);
            const beams = new Array();
            const tuplets = new Array();

            // clef for each voice
            const clef_notes = bucket[ms].clef_note.slice(0);
            const clefs = {};

        // if (bucket[ms].newsystem) {
            for (let i in ties)   ties[i].newsystem = true;
            for (let i in slurs)  slurs[i].newsystem = true;
            for (let i in wedges) wedges[i].newsystem = true;
        // }

            for (let i = 0; i < voice_cnt.length; i++) {
                const voice = voice_cnt[i].toString();
                //console.log('voice ==> ' + voice);
                const time = bucket[ms].times[0].split('/');
                const beats = time[0] || 4;
                const value = time[1] || 4;
                //console.log('beats ==> ' + beats + ', value ==> ' + value);

                try {
                    voices[i] = new VF.Voice({num_beats: beats, beat_value: value, resolution: VF.RESOLUTION});
                } catch (e) { console.log(e); }

                const each_voice_notes = new Array();
                const each_voice_lyrics = new Array(maxlyric);
                const beam_notes = new Array();
                const tuplet_notes = new Array();
                const tuplet_options = new Array();

                let graces = new Array();
                let prelyric = new Array();
                for (let l = 0; l < maxlyric; l++) each_voice_lyrics[l] = new Array();

                // clef for each voice
                // 첫 voice는 defalt로 셋팅
                if (i == 0) {
                    clefs.clef  = bucket[ms].clef.slice(0);
                    clefs.pos   = bucket[ms].clef_pos.slice(0);
                    clefs.note  = bucket[ms].clef_note.slice(0);
                    clefs.count = Number(clefs.pos.length);
                }

                for (let x = 0; x < notelen; x++) {
                    const note = measure.note[x];
                    if (voice == note.voice) {
                        if ('undefined' == typeof note.chord) {
                            if ('undefined' != typeof note.staff)
                                pos[i] = Number(note.staff)-1;
                            else
                                pos[i] = 0;

                            let note_jstruct = {};
                            let middle_clef = null, clef_group = null;
                            
                            if (0 < clefs.count) {
                                for (let c in clefs.pos) {
                                    if (0 < x && x == clefs.pos[c]) {   
                                        middle_clef = clefs.note[c];
                                        clefs.clef[pos[i]] = middle_clef;
                                        clefs.note.splice(c, 1);
                                        clefs.pos.splice(c, 1);
                                        clefs.count = Number(clefs.pos.length);

                                        // for drawing
                                        if (0 < clef_notes.length) {
                                            const clef_note = new VF.ClefNote(middle_clef, 'small');
                                            clef_group = new VF.NoteSubGroup([clef_note]);
                                            clef_notes.splice(c, 1);
                                        }
                                        break;
                                    }
                                }
                            }

                            note_jstruct.clef = clefs.clef[pos[i]];
                            note_jstruct.duration = Duration.parseDuration(note.type);
                            if ('undefined' != typeof note.dot)  note_jstruct.duration = note_jstruct.duration + 'd';
                            if ('undefined' != typeof note.rest) {
                                note_jstruct.duration = note_jstruct.duration + 'r';
                                
                                // octave shift start [va]
                                if ('undefined' != typeof bucket[ms].osdownstart) {
                                    if (x == bucket[ms].osdownstart) {
                                        osinfo[pos[i]].has = true;
                                        osinfo[pos[i]].val = bucket[ms].osdownval;
                                        osinfo[pos[i]].staff = bucket[ms].osdownstaff;
                                    }
                                } 

                                // octave shift start [vb]
                                if ('undefined' != typeof bucket[ms].osupstart) {
                                    if (x == bucket[ms].osupstart) {
                                        osinfo[pos[i]].has = true;
                                        osinfo[pos[i]].val = bucket[ms].osupval;
                                        osinfo[pos[i]].staff = bucket[ms].osupstaff;
                                    }
                                }

                                // octave shift stop [va]
                                if ('undefined' != typeof bucket[ms].osdownstop) {
                                    if (x == bucket[ms].osdownstop) {
                                        osinfo[pos[i]].has = false;
                                        osinfo[pos[i]].val = 0;
                                        osinfo[pos[i]].staff = 0;
                                        osinfo[pos[i]].stop = null;      
                                    }
                                }

                                // octave shift stop [vb]
                                if ('undefined' != typeof bucket[ms].osupstop) {
                                    if (x == bucket[ms].osupstop) {
                                        osinfo[pos[i]].has = false;
                                        osinfo[pos[i]].val = 0;
                                        osinfo[pos[i]].staff = 0;
                                        osinfo[pos[i]].stop = null;
                                    }
                                }
                            }

                            if ('undefined' != typeof note.stem) {
                                note_jstruct.stem_direction = 1;
                                if('down' == note.stem) note_jstruct.stem_direction = -1;
                            }

                            let head_number = 0;
                            note_jstruct.accidental = new Array();
                            note_jstruct.accidental_number = new Array();

                            note_jstruct.keys = ["B/4"];
                            if ('bass' == note_jstruct.clef) note_jstruct.keys = ["D/3"];

                            if ('undefined' != typeof note.pitch) {
                                for (let n = x; n < notelen; n++) {
                                    const head = measure.note[n];
                                    let octave = null;

                                    if (x == n) {
                                        octave = head.pitch.octave;

                                        // octave shift start [va]
                                        if ('undefined' != typeof bucket[ms].osdownstart) {
                                            if (x == bucket[ms].osdownstart) {
                                                osinfo[pos[i]].has = true;
                                                osinfo[pos[i]].val = bucket[ms].osdownval;
                                                osinfo[pos[i]].staff = bucket[ms].osdownstaff;
                                            }
                                        } 

                                        // octave shift start [vb]
                                        if ('undefined' != typeof bucket[ms].osupstart) {
                                            if (x == bucket[ms].osupstart) {
                                                osinfo[pos[i]].has = true;
                                                osinfo[pos[i]].val = bucket[ms].osupval;
                                                osinfo[pos[i]].staff = bucket[ms].osupstaff;
                                            }
                                        }

                                        //octaveshift일 경우 한 octave 올리거나 내려줌
                                        if (osinfo[pos[i]].has && osinfo[pos[i]].staff == pos[i]) 
                                            octave = Number(octave) + osinfo[pos[i]].val;
                                        note_jstruct.keys = [head.pitch.step + '/' + octave];

                                        // octave shift stop [va]
                                        if ('undefined' != typeof bucket[ms].osdownstop) {
                                            if (x == bucket[ms].osdownstop) {
                                                osinfo[pos[i]].stop = bucket[ms].osdownstop;
                                    
                                                // 화음으로 연결되어 있는 경우 화음이 끝나면 octave shift를 종료
                                                for (let next = n+1; next < notelen; next++) {
                                                    if ('undefined' == typeof measure.note[next].chord) 
                                                        break;
                                                    osinfo[pos[i]].stop = next;
                                                }
                                        
                                                if (x == osinfo[pos[i]].stop) {
                                                    osinfo[pos[i]].has = false;
                                                    osinfo[pos[i]].val = 0;
                                                    osinfo[pos[i]].staff = 0;
                                                    osinfo[pos[i]].stop = null;
                                                } 
                                            }
                                        }

                                        // octave shift stop [vb]
                                        if ('undefined' != typeof bucket[ms].osupstop) {
                                            if (x == bucket[ms].osupstop) {
                                                osinfo[pos[i]].stop = bucket[ms].osupstop;
    
                                                // 화음으로 연결되어 있는 경우 화음이 끝나면 octave shift를 종료
                                                for (let next = n+1; next < notelen; next++) {
                                                    if ('undefined' == typeof measure.note[next].chord) 
                                                        break;
                                                    osinfo[pos[i]].stop = next;
                                                }
                                            
                                                if (x == osinfo[pos[i]].stop) {
                                                    osinfo[pos[i]].has = false;
                                                    osinfo[pos[i]].val = 0;
                                                    osinfo[pos[i]].staff = 0;
                                                    osinfo[pos[i]].stop = null;
                                                } 
                                            }
                                        }

                                    } else {
                                        if ('undefined' != typeof head.chord && 'undefined' != typeof head.pitch) {
                                            octave = head.pitch.octave;
                                            //octaveshift일 경우 한 octave 올리거나 내려줌
                                            if (osinfo[pos[i]].has && osinfo[pos[i]].staff == pos[i]) 
                                                octave = Number(octave) + osinfo[pos[i]].val;
                                            note_jstruct.keys.push(head.pitch.step + '/' + octave);
                                            //note_jstruct.keys.push(head.pitch.step + '/' + head.pitch.octave);

                                            // octave shift stop
                                            if (n == osinfo[pos[i]].stop) {
                                                osinfo[pos[i]].has = false;
                                                osinfo[pos[i]].val = 0;
                                                osinfo[pos[i]].stop = null;
                                            }

                                            head_number++;
                                        } else {
                                            break;
                                        }
                                    }

                                    if ('undefined' != typeof head.accidental) {
                                        note_jstruct.accidental_number.push(head_number);
                                        const acc = Accidental.parseAccidental(head.accidental);
                                        note_jstruct.accidental.push(new VF.Accidental(acc));
                                    }
                                }
                            }

                            if ('undefined' != typeof note.beam) {
                                for (let y in note.beam) {
                                    if ('begin' == note.beam[y].type) {
                                        const beam_cnt = beam_notes.length;
                                        beam_notes[beam_cnt] = new Array();
                                        beam_notes[beam_cnt].push(x);

                                        let end = false;
                                        for (let n = Number(x) + 1; n < notelen && !end; n++) {
                                            const head = measure.note[n];
                                            if (voice == head.voice && 'undefined' != typeof head.beam) {
                                                for (let b in head.beam) {
                                                    if (note.beam[y].number == head.beam[b].number) {
                                                        if ('continue' == head.beam[b].type) {
                                                            beam_notes[beam_cnt].push(n);
                                                        } else if ('end' == head.beam[b].type) {
                                                            beam_notes[beam_cnt].push(n);
                                                            end = true;
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    } else if ('forward hook' == note.beam[y].type || 'backward hook' == note.beam[y].type) {
                                        //console.log(note.beam[y].type);
                                    }
                                }
                            }

                            if ('undefined' != typeof note.tuplet) {
                                for (let y in note.tuplet) {
                                    if ('start' == note.tuplet[y].type && note.tuplet[y].show_number) {
                                        const tuplet_cnt = tuplet_notes.length;
                                        tuplet_notes[tuplet_cnt] = new Array();
                                        tuplet_notes[tuplet_cnt].push(x);
                                        tuplet_options[tuplet_cnt] = {
                                            num_notes: note.time.actual_notes
                                            , notes_occupied: note.time.normal_notes
                                            //, ratioed: true
                                            , location: note_jstruct.stem_direction == 1 ? -1 : 1
                                            , bracketed: note.tuplet[y].bracket
                                            , bracketed: false
                                        };

                                        let end = false;
                                        for (let n = Number(x) + 1; n < notelen && !end; n++) {
                                            const head = measure.note[n];
                                            if (voice == head.voice && 'undefined' == typeof head.chord && 'undefined' == typeof head.grace && head.print) {
                                                tuplet_notes[tuplet_cnt].push(n);
                                                if ('undefined' != typeof head.tuplet) {
                                                    for (let t in head.tuplet) {
                                                        if (note.tuplet[y].number == head.tuplet[t].number) {
                                                            if ('stop' == head.tuplet[t].type)
                                                                end = true;
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            if ('undefined' != typeof note.nts) {  // notations
                                let symbol = null, type = null, number = 0;

                                const position = ((note_jstruct.stem_direction == 1) ? 'below' : 'above');
                                if ('undefined' != typeof note.nts.fermata) {
                                    if ('above' == position) symbol = 'a@a';
                                    else symbol = 'a@u';
                                } else if ('undefined' != typeof note.nts.articulations) {
                                    const ar = note.nts.articulations;
                                    if ('undefined' != typeof ar.staccato) {
                                        symbol = 'a.';
                                    } else if ('undefined' != typeof ar.staccatissimo) {
                                        symbol = 'av';
                                    } else if ('undefined' != typeof ar.accent) {
                                        symbol = 'a>';
                                    } else if ('undefined' != typeof ar.tenuto) {
                                        symbol = 'a-';
                                    } else if ('undefined' != typeof ar.marcato) {
                                        symbol = 'a^';
                                    } else {
                                        console.log('p : ', p, ', m : ', m, ', unknown articulations : ', ar);
                                    }
                                } else if ('undefined' != typeof note.nts.technical) {
                                    const te = note.nts.technical;
                                    if ('undefined' != typeof te.up_bow) {
                                        symbol = 'a|';
                                    } else if ('undefined' != typeof te.down_bow) {
                                        symbol = 'am';
                                    } else if ('undefined' != typeof te.fingering) {
                                        note_jstruct.handfinger = new VF.FretHandFinger(te.fingering.number).setPosition(position);
                                    }
                                }

                                if (null != symbol) {
                                    note_jstruct.articulation = new VF.Articulation(symbol).setPosition(position);
                                }

                                if ('undefined' != typeof note.nts.ornaments) {
                                    const or = note.nts.ornaments;
                                    if ('undefined' != typeof or.trill_mark) {
                                        type = 'tr';
                                    } else if ('undefined' != typeof or.mordent) {
                                        type = 'mordent';
                                    } else if ('undefined' != typeof or.inverted_mordent) {
                                        type = 'mordent_inverted';
                                    } else if ('undefined' != typeof or.turn) {
                                        type = 'turn';
                                    } else if ('undefined' != typeof or.tremolo) {
                                        if ('start' == or.tremolo.type) {
                                            type = 'tremolo';
                                            number = or.tremolo.number;
                                            tremolo.number = number;
                                            tremolo.continue = true;
                                        } else if ('stop' == or.tremolo.type) {
                                            type = 'tremolo';
                                            number = or.tremolo.number;
                                            tremolo.number = 0;
                                            tremolo.continue = false;
                                        } else if ('single' == or.tremolo.type) {
                                            type = 'tremolo';
                                            number = or.tremolo.number;
                                        } else {
                                            console.log('p : ', p, ', m : ', m, ', unknown tremolo : ', or.tremolo);
                                        }
                                    } else if ('undefined' != typeof or.wavy_line) {
                                        // handle it below
                                    } else {
                                        console.log('p : ', p, ', m : ', m, ', unknown ornaments : ', or);
                                    }
                                }

                                if (null != type) {
                                    if ('tremolo' == type) {
                                        note_jstruct.ornament = new VF.Tremolo(number);
                                    } else {
                                        note_jstruct.ornament = new VF.Ornament(type);
                                    }
                                    // note_jstruct.ornament.setUpperAccidental(accid);
                                    // note_jstruct.ornament.setLowerAccidental(accid);
                                }

                                if ('undefined' != typeof note.nts.arpeggiate) {
                                    note_jstruct.arpeggiate = new VF.Stroke(VF.Stroke.Type.ROLL_UP, {});
                                    if ('undefined' != typeof note.nts.arpeggiate.direction) {
                                        if ('up' == note.nts.arpeggiate.direction) {
                                            note_jstruct.arpeggiate = new VF.Stroke(VF.Stroke.Type.ROLL_DOWN, {});
                                        }
                                    }
                                }
                            } else if (tremolo.continue) {
                                note_jstruct.ornament = new VF.Tremolo(tremolo.number);
                            }

                            if (!note.print) {
                                try {
                                    notes[x] = new VF.GhostNote(note_jstruct);
                                } catch (e) { console.log(m, x, note_jstruct, e); }
                                each_voice_notes.push(notes[x]);
                            } else if ('undefined' != typeof note.grace) {
                                if(this._options.slashon) note_jstruct.slash = note.grace.slash;
                                let grace = null;
                                try {
                                    grace = new VF.GraceNote(note_jstruct);
                                } catch (e) { console.log(m, x, note_jstruct, e); }
                                if ('undefined' != typeof note.dot) grace.addDotToAll();
                                if ('undefined' != typeof note_jstruct.articulation) grace.addArticulation(0, note_jstruct.articulation);
                                if ('undefined' != typeof note_jstruct.ornament) grace.addModifier(0, note_jstruct.ornament);
                                if ('undefined' != typeof note_jstruct.handfinger) grace.addModifier(0, note_jstruct.handfinger);
                                if ('undefined' != typeof note_jstruct.arpeggiate) grace.addModifier(0, note_jstruct.arpeggiate);
                                if (0 < note_jstruct.accidental.length) grace.addAccidental(0, note_jstruct.accidental[0]);
                                graces.push(grace);

                                if ('undefined' != typeof note.tie) {
                                    const note_key = note.pitch.step+'/'+note.pitch.octave;
                                    for (let y in note.tie) {
                                        if ('start' == note.tie[y].type) {
                                            ties.push({'first_note':grace, 'first_indices':[0], 'key':note_key, 'voice':note.voice, 'newsystem':false, 'done':false});
                                        } else {  //stop
                                            const length = ties.length - 1;
                                            for (let t = length; 0 <= t; t--) {
                                                if (!ties[t].done && ties[t].key == note_key ) {
                                                    if (!ties[t].newsystem) {
                                                        ties[t].done = true;
                                                        ties[t].last_note = grace; ties[t].last_indices = [0];
                                                    } else {
                                                        ties[t].done = true;
                                                        ties.push({'last_note':grace, 'last_indices':[0], 'done':true});
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }

                                if ('undefined' != typeof note.slur) {
                                    for (let y in note.slur) {
                                        if ('start' == note.slur[y].type) {
                                            slurs.push({'first_note':grace, 'last_note':null, 'number':note.slur[y].number, 'voice':note.voice, 'newsystem':false, 'done':false});
                                        } else {  //stop
                                            const length = slurs.length - 1;
                                            for (let s = length; 0 <= s; s--) {
                                                if (!slurs[s].done && slurs[s].number == note.slur[y].number ) {
                                                    if (!slurs[s].newsystem) {
                                                        slurs[s].done = true;
                                                        slurs[s].last_note = grace;
                                                    } else {
                                                        slurs[s].done = true;
                                                        slurs.push({'first_note':null, 'last_note':grace, 'done':true});
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                try {
                                    notes[x] = new VF.StaveNote(note_jstruct);

                                    // 일치하는 패턴에 색상 표시
                                    if (keyidx < nelist.length && x == nelist[keyidx]) {
                                        notes[x].setKeyStyle(0, { shadowBlur: 15, shadowColor: 'red', fillStyle: 'red' });
                                        keyidx++;
                                    }        
                                    
                                } catch (e) { console.log(m, x, note_jstruct, e); }
                                if ('undefined' != typeof note.dot) for(let d=0; d<note.dot.cnt; d++) notes[x].addDotToAll();
                                if ('undefined' != typeof note_jstruct.articulation) notes[x].addArticulation(0, note_jstruct.articulation);
                                if ('undefined' != typeof note_jstruct.ornament) notes[x].addModifier(0, note_jstruct.ornament);
                                if ('undefined' != typeof note_jstruct.handfinger) notes[x].addModifier(0, note_jstruct.handfinger);
                                if ('undefined' != typeof note_jstruct.arpeggiate) notes[x].addModifier(0, note_jstruct.arpeggiate);
                                each_voice_notes.push(notes[x]);

                                if (null != clef_group)
                                    notes[x].addModifier(0, clef_group);
                                if (0 < graces.length) {
                                    try {
                                        notes[x].addModifier(0, new VF.GraceNoteGroup(graces, false).beamNotes());
                                    } catch (e) { console.warn(e); }
                                    graces = new Array();
                                }
                                for (let a in note_jstruct.accidental)
                                    notes[x].addAccidental(note_jstruct.accidental_number[a], note_jstruct.accidental[a]);

                                head_number = 0;
                                for (let n = x; n < notelen; n++) {
                                    const head = measure.note[n];
                                    if (x < n) {
                                        if ('undefined' != typeof head.chord && 'undefined' != typeof head.pitch) {
                                            head_number++;
                                        } else {
                                            break;
                                        }
                                    }

                                    if ('undefined' != typeof head.tie) {
                                        const note_key = head.pitch.step+'/'+head.pitch.octave;
                                        for (let y in head.tie) {
                                            if ('start' == head.tie[y].type) {
                                                ties.push({'first_note':notes[x], 'first_indices':[head_number], 'key':note_key, 'voice':head.voice, 'newsystem':false, 'done':false});
                                            } else {  //stop
                                                const length = ties.length - 1;
                                                for (let t = length; 0 <= t; t--) {
                                                    if (!ties[t].done && ties[t].key == note_key ) {
                                                        if (!ties[t].newsystem) {
                                                            ties[t].done = true;
                                                            ties[t].last_note = notes[x]; ties[t].last_indices = [head_number];
                                                        } else {
                                                            ties[t].done = true;
                                                            ties.push({'last_note':notes[x], 'last_indices':[head_number], 'done':true});
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    if ('undefined' != typeof head.slur) {
                                        for (let y in head.slur) {
                                            if ('start' == head.slur[y].type) {
                                                slurs.push({'first_note':notes[x], 'last_note':null, 'number':head.slur[y].number, 'voice':head.voice, 'newsystem':false, 'done':false});
                                            } else {  //stop
                                                const length = slurs.length - 1;
                                                for (let s = length; 0 <= s; s--) {
                                                    if (!slurs[s].done && slurs[s].number == head.slur[y].number ) {
                                                        if (!slurs[s].newsystem) {
                                                            slurs[s].done = true;
                                                            slurs[s].last_note = notes[x];
                                                        } else {
                                                            slurs[s].done = true;
                                                            slurs.push({'first_note':null, 'last_note':notes[x], 'done':true});
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    if ('undefined' != typeof head.nts) {  // notations
                                        if ('undefined' != typeof head.nts.glissando) {
                                            const gl = head.nts.glissando;
                                            if ('start' == gl.type) {
                                                glisss.push({'first_note':notes[x], 'first_indices':[head_number], 'number':gl.number, 'line_type':gl.line_type, 'text':gl.text, 'done':false});
                                            } else {  //stop
                                                const length = glisss.length - 1;
                                                for (let g = length; 0 <= g; g--) {
                                                    if (!glisss[g].done && glisss[g].number == gl.number) {
                                                        glisss[g].done = true;
                                                        glisss[g].last_note = notes[x]; glisss[g].last_indices = [head_number];
                                                    }
                                                }
                                            }
                                        }
                                        if ('undefined' != typeof head.nts.ornaments && 'undefined' != typeof head.nts.ornaments.wavy_line) {
                                            const wa = head.nts.ornaments.wavy_line;
                                            if ('start' == wa.type) {
                                                vibs.push({'start':notes[x], 'number':wa.number, 'done':false});
                                            } else {  //stop
                                                const length = vibs.length - 1;
                                                for (let v = length; 0 <= v; v--) {
                                                    if (!vibs[v].done && vibs[v].number == wa.number) {
                                                        vibs[v].done = true;
                                                        vibs[v].stop = notes[x];
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            // 가사 작성 추가
                            const lyricline = 12;
                            let lyricarr = new Array(maxlyric);
                            let lyric = new Array(maxlyric);

                            for (let l = 0; l < maxlyric; l++) {
                                lyric[l] = {
                                    text : "",
                                    line : lyricline,
                                    clef : note_jstruct.clef,
                                    keys : note_jstruct.keys,
                                    duration : note_jstruct.duration,
                                    smooth : true,
                                    justification : VF.TextNote.Justification.LEFT,
                                    font : {
                                        family: "Alegreya",
                                        size: 12,
                                        weight: ""
                                    }
                                };

                                if ('undefined' != typeof note.lyric) {
                                    for (let k = 0; k < note.lyric.length; k++) {
                                        let num = Number(note.lyric[k].number) - 1;

                                        if (l == num) {
                                            lyric[l].text = note.lyric[k].text;
                                            lyric[l].line = lyricline + (l*2);

                                            //Lyric hyphenation
                                            if ('undefined' != typeof note.lyric[k].syllabic) {
                                                if ('begin' == note.lyric[k].syllabic || 'middle' == note.lyric[k].syllabic) {
                                                    lyric[l].text += '-';
                                                }
                                            }

                                            //Justification
                                            if ('undefined' != typeof note.lyric[k].justify) {
                                                switch (note.lyric[k].justify) {
                                                    case 'center' :
                                                        lyric[l].justification = VF.TextNote.Justification.CENTER;
                                                        break;
                                                    case 'right' :
                                                        lyric[l].justification = VF.TextNote.Justification.RIGHT;
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                }

                                //grace 일 경우 다음 note에 표시
                                if ('undefined' != typeof note.grace) {
                                    prelyric.push(lyric[l]);
                                    continue;
                                }

                                //이전 note가 grace이면 해당 값으로 표기
                                if (0 < prelyric.length) {
                                    //console.log(prelyric[l]);
                                    lyric[l].text = prelyric[l].text;
                                    lyric[l].justification = prelyric[l].justification;
                                    prelyric = new Array();
                                }

                                lyricarr[l] = new VF.TextNote(lyric[l]);
                                lyricarr[l].setStave(bucket[ms].staves[0]);
                                each_voice_lyrics[l].push(lyricarr[l]);

                            } // 가사 작성 끝
                        }
                    }
                }  // for (let x = 0; x < notelen; x++)

                let beam_cnt = 0;
                const each_beam_notes = new Array(beam_notes.length);
                for (let y in beam_notes) {
                    for (let x in beam_notes[y]) {
                        if (null == each_beam_notes[beam_cnt]) each_beam_notes[beam_cnt] = new Array();
                        each_beam_notes[beam_cnt].push(notes[beam_notes[y][x]]);
                    }
                    beams.push(new VF.Beam(each_beam_notes[beam_cnt]));
                    beam_cnt++;
                }

                let tuplet_cnt = 0;
                const each_tuplet_notes = new Array(tuplet_notes.length);
                for (let y in tuplet_notes) {
                    for (let x in tuplet_notes[y]) {
                        if (null == each_tuplet_notes[tuplet_cnt]) each_tuplet_notes[tuplet_cnt] = new Array();
                        each_tuplet_notes[tuplet_cnt].push(notes[tuplet_notes[y][x]]);
                    }
                    tuplets.push(new VF.Tuplet(each_tuplet_notes[tuplet_cnt], tuplet_options[tuplet_cnt]));
                    tuplet_cnt++;
                }

                try {
                    voices[i].setMode(VF.Voice.Mode.SOFT);
                    voices[i].addTickables(each_voice_notes);

                    for (let l = 0; l < maxlyric; l++) {
                        lyrics[l] = new VF.Voice({num_beats: beats, beat_value: value, resolution: VF.RESOLUTION});
                        lyrics[l].setMode(VF.Voice.Mode.SOFT);
                        lyrics[l].addTickables(each_voice_lyrics[l]);
                        //console.log("lyrics[", m, "]", lyrics[l]);
                    }
                    //console.log("voices[", m, "]", voices[i]);

                } catch (e) {
                    console.log(e);
                }
            }  // for (let i = 0; i < voice_cnt.length; i++)

            if ('undefined' != typeof measure.direction) {
                let order = measure.order.split(','), ncnt = 0, dcnt = 0;
                //let pdlnotes = null;

                for (let o in order) {
                    if ('we' == order[o]) {
                        //console.log(measure.direction[dcnt].staff);
                        const wedge = measure.direction[dcnt].wedge;
                        if ('crescendo' == wedge.type || 'diminuendo' == wedge.type) {
                            const type = ('crescendo' == wedge.type) ? 1 : 2;
                            let fnote = notes[ncnt];
                            if ('undefined' == typeof fnote) {  // gracenote
                                for (let i = ncnt + 1; i < notes.length; i++) {
                                    if ('undefined' != typeof notes[i]) {
                                        fnote = notes[i];
                                        break;
                                    }
                                }
                            }
                            wedges.push({'type':type, 'number':wedge.number, 'first_note':fnote, 'last_note':null, 'newsystem':false, 'done':false});
                        } else if ('stop' == wedge.type) {
                            for (let i = wedges.length - 1; 0 <= i; i--) {
                                if (!wedges[i].done && wedges[i].number == wedge.number) {
                                    if (!wedges[i].newsystem) {
                                        if (0 == ncnt) {
                                            for (let n = prenotes.length - 1; 0 <= n; n--) {
                                                if ('undefined' != typeof prenotes[n]) {
                                                    wedges[i].last_note = prenotes[n];
                                                    wedges[i].done = true;
                                                    break;
                                                }
                                            }
                                        } else {
                                            for (let n = ncnt - 1; 0 <= n; n--) {
                                                if ('undefined' != typeof notes[n]) {
                                                    wedges[i].last_note = notes[n];
                                                    wedges[i].done = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (!wedges[i].done) {
                                                wedges.splice(i, 1);
                                                console.warn('wedge error. couldnt find last note. measure number : ' + measure.number);
                                        }
                                    } else {
                                        wedges.splice(i, 1);
                                        console.warn('wedge error. newsystem. measure number : ' + measure.number);
                                    }
                                    break;
                                }
                            }
                        } else {
                            console.log('unknown wedge type : ' + measure.direction[dcnt].wedge.type);
                        }
                        dcnt++;
                    } else if ('pl' == order[o]) {
                        let pedal = measure.direction[dcnt].pedal;
                        if ('start' == pedal.type) {
                            pdlnotes = new Array();
                            pdlnotes.push(notes[ncnt]);
                        } else if ('stop' == pedal.type) {
                            let line = ('yes' == pedal.line) ? true : false;
                            
                            // padal의 시작과 끝이 같이 있을 경우만 그린다
                            if (pdlnotes != null) {
                                pdlnotes.push(notes[ncnt]);
                                pedals.push({'notes':pdlnotes, 'line':line});
                            }
                            
                            pdlnotes = null;
                        } else {
                            console.log('unknown pedal type : ' + measure.direction[dcnt].pedal.type);
                        }
                        dcnt++;
                    } else if ('dy' == order[o]) {
                        const ann = new VF.Annotation(measure.direction[dcnt].dynamics);
                        ann.setFont('Alegreya', 14, 'bold italic');
                        ann.setJustification(VF.Annotation.Justify.CENTER);
                        ann.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
                        for (let x = ncnt; x < Number(measure.note.length); x++) {
                            if ('undefined' != typeof notes[x] && 'GhostNote' != notes[x].attrs.type) {
                                notes[x].addAnnotation(0, ann);
                                break;
                            }
                        }
                        dcnt++;
                    } else if ('ws' == order[o]) {
                        dcnt++;
                    } else if ('rl' == order[o]) {
                        dcnt++;
                    } else if ('me' == order[o]) {
                        dcnt++;
                    } else if ('bt' == order[o]) {
                        dcnt++;
                    } else if ('od' == order[o]) {
                        dcnt++;
                    } else if ('os' == order[o]) {
                        //octave shift
                        let os = measure.direction[dcnt].octaveshift;
                        let osinit = {
                            start: notes[ncnt],
                            stop: null,
                            number: os.number,
                            text: os.size,
                            //line: 3,
                            font : {
                                family: 'Serif',
                                size: 15,
                                weight: 'italic'
                            }
                        };

                        if ('up' == os.type || 'down' == os.type) {
                            if ('down' == os.type) {
                                osdown = osinit;
                                osdown.superscript = 'va';
                                osdown.position = VF.TextBracket.Positions.TOP;
                            } else if ('up' == os.type) {
                                osup = osinit;
                                osup.superscript = 'vb';
                                osup.position = VF.TextBracket.Positions.BOTTOM;
                            }

                        } else if ('stop' == os.type) {
                            if (null == osdown && null == osup) continue;
                            
                            if (null != osdown && osdown.number == os.number) {
                                osdown.stop = notes[ncnt];
                                octaveshifts.push(new VF.TextBracket(osdown).setLine(3));
                                osdown = null;
                            }
                            
                            if (null != osup && osup.number == os.number) {
                                osup.stop = notes[ncnt];
                                octaveshifts.push(new VF.TextBracket(osup).setLine(3));
                                osup = null;
                            }

                        } else if ('continue' == os.type) {

                        } else {
                            console.log('unknown octaveshift type : ' + measure.direction[dcnt].octaveshift.type);
                        }

                        dcnt++;
                    } else if ('ne' == order[o]) {
                        // if (null != pdlnotes) {
                        //     let fnote = notes[ncnt];
                        //     if ('undefined' != typeof fnote) {  // gracenote
                        //         pdlnotes.push(fnote);
                        //     }
                        // }
                        ncnt++;
                    }
                }
            }

            try {
                let formatter = new VF.Formatter();
                for (let i = 0; i < voices.length; i++) formatter.joinVoices([voices[i]]);
                for (let l = 0; l < lyrics.length; l++) formatter.joinVoices([lyrics[l]]);


                let kssize = bucket[ms].kscnt[0] * 12, tmsize = bucket[ms].tmcnt * 20;
                let adjust = 15 + kssize + tmsize;

                if (0 == ms) {
                    adjust += 30;  // normal clef size : 30
                    if (10000 == bucket[ms].clef_pos[bucket[ms].clef_pos.length-1]) adjust += 20;  // small clef size : 20
                } else if (0 < bucket[ms].clef_pos.length) {
                    adjust += 20;
                    if (10000 == bucket[ms].clef_pos[bucket[ms].clef_pos.length-1]) adjust += 10;
                }

                console.log("kssize=",kssize," tmsize=",tmsize," adjust=",adjust);

                formatter.format(voices, bucket[ms].size - adjust);
                for (let l = 0; l < lyrics.length; l++) {
                    formatter.format([voices[0], lyrics[l]], bucket[ms].size - adjust);
                }


            } catch (e) {
                console.warn(p, m, e);
            }

            for (let i in voices) {
                try {
                    voices[i].draw(context, bucket[ms].staves[pos[i]]);
                } catch (e) {
                    console.warn(p, m, e);
                }
            }

            // try {
            //     voices[i].draw(context, bucket[ms].staves[sv]);
            // } catch (e) {
            //     console.warn(p, m, e);
            // }

            for (let i in lyrics) {
                try {
                    lyrics[i].setContext(context).draw(); //첫번째 part에만 그려지도록
                } catch (e) {
                    console.warn(p, m, e);
                }
            }

            beams.forEach(function(beam) {
                try {
                    beam.setContext(context).draw();
                } catch (e) {
                    console.warn(p, m, e);
                }
            });

            tuplets.forEach(function(tuplet) {
                try {
                    tuplet.setContext(context).draw();
                } catch (e) {
                    console.warn(p, m, e);
                }
            });

            ties.forEach(function(tie) {
                try {
                    new VF.StaveTie(tie).setContext(context).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            if (this._options.sluron) {
                slurs.forEach(function(slur) {
                    try {
                        new VF.Curve(slur.first_note, slur.last_note, {cps: [{x: 0, y: 20}, {x: 0, y: 20}]}).setContext(context).draw();
                    } catch (e) {
                        console.warn(p, e);
                    }
                });
            }

            wedges.forEach(function(wedge) {
                try {
                    new VF.StaveHairpin({first_note: wedge.first_note, last_note: wedge.last_note}, wedge.type).setContext(context).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            vibs.forEach(function(vib) {
                try {
                    new VF.VibratoBracket(vib).setContext(context).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });

            glisss.forEach(function(gliss) {
                try {
                    let sline = new VF.StaveLine(gliss);
                    if ('undefined' != typeof gliss.text) {
                        sline.setText(gliss.text);
                        sline.setFont({family:'Alegreya', size:8, weight:'lighter italic'});
                    }
                    sline.setContext(context);
                    sline.applyFontStyle();
                    sline.draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });
            /* pedal 그리기 숨김
            pedals.forEach(function(pedal) {
                try {
                    let pmark = new VF.PedalMarking(pedal.notes);
                    if (pedal.line) {
                        pmark.setStyle(VF.PedalMarking.Styles.MIXED);
                    } else {
                        pmark.setStyle(VF.PedalMarking.Styles.TEXT);
                    }

                    pmark.setLine(4);
                    pmark.setContext(context).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });
            */
            octaveshifts.forEach(function(octaveshift) {
                try {
                    octaveshift.setContext(context).draw();
                } catch (e) {
                    console.warn(p, e);
                }
            });
            
            startx += Number(bucket[ms].size);

        }
    }

    convMidiNum(step, octave, alter) {
  
        if('number' != typeof octave) throw new Error('octave must number.');     
        if('string' != typeof step)  throw new Error('step must string.');
        step = step.toUpperCase();
        if(step != 'C' && step != 'D' && step != 'E' && step != 'F' && step != 'G' && step != 'A' && step != 'B') throw new Error('Invalid step.');
        
        // step 계산
        if('undefined' != typeof alter && alter != 0) {
            //console.log('step=',step,' alter=',alter)
            step = this.convStep(step, alter);
        }
        
        if( octave < -1 || octave > 9) {
          throw new Error('Octave out of range.');
        } else if(octave == 9 && (step == 'G#' || step == 'A' || step == 'A#' ||  step == 'B')) {
          throw new Error('Octave out of range.');
        }
        
        var base = {
          'C' : 0,
          'C#': 1,
          'D' : 2,
          'D#': 3,
          'E' : 4,
          'F' : 5,
          'F#': 6,
          'G' : 7,
          'G#': 8,
          'A' : 9,
          'A#': 10,
          'B' : 11
        };
        
        return base[step] + 12 * (octave + 1);
    }
      
    convStep(step, alter) {
        //if(typeof alter !== 'number') throw new Error('alter must number.');
        
        if(alter < -2 || alter > 2) {
            throw new Error(RangeError);
            throw new Error('alter out of range.');
        }
        
        if(alter == 1) {
            if(step == 'E') {
                return 'F';
            } else if(step == 'B') {
                return 'C';
            } else {
                return step+'#';
            }
        } else if(alter == -1) {
            var base = { 
                'C': 'B',
                'D': 'C#',
                'E': 'D#',
                'F': 'E',
                'G': 'F#',
                'A': 'G#',
                'B': 'A#' 
            };
            return base[step];
        } else if(alter == -2) {
            var base = { 
                'C': 'A#',
                'D': 'C',
                'E': 'D',
                'F': 'D#',
                'G': 'F',
                'A': 'G',
                'B': 'A' 
            };
            return base[step];
        } else if(alter == 2) {
            var base = { 
                'C': 'D',
                'D': 'E',
                'E': 'F#',
                'F': 'G',
                'G': 'A',
                'A': 'B',
                'B': 'C#' 
            };
            return base[step];
        } else {
            throw new Error(RangeError);
            throw new Error('alter out of range.');
        }
    }

}


class Upload {

    constructor(jstruct) {
        this.jstruct = jstruct;
        this.Measure = new Measure('', '', this.jstruct, {});
        this.headClef = this.Measure.setHeadClef();
        this.partlength = this.jstruct.part.length;
        this.noteInfo = new Array(); //[Table] score_note_info
    }

    parsingXml() {
        const score = {}; //[Table] score
        const part = this.setPartAttr(this.jstruct.partlist, this.partlength); //[Table] score_part_info
 
        const midiArr = new Array(this.partlength);
        const midiStringArr = new Array(this.partlength);
        const midiString = new Array(this.partlength);
        const midiStringInterval = new Array(this.partlength);
        let beatMidiArr = new Array(this.partlength);
        let nCnt = 0;

        score.part_length = this.partlength;
        score.measure_length = this.jstruct.part[0].measure.length;
        score.part = part;

        for (let p in this.jstruct.part) {
            const measures = this.jstruct.part[p].measure;
            let v = 0;
            
            midiArr[p] = {};
            midiArr[p].pitch = new Array();
            midiArr[p].beat = new Array();
            midiArr[p].weekdown = new Array();
            midiArr[p].strongdown = new Array();

            midiStringArr[p] = {};
            midiStringArr[p].pitch = new Array();
            midiStringArr[p].beat = new Array();
            midiStringArr[p].weekdown = new Array();
            midiStringArr[p].strongdown = new Array();    

            beatMidiArr[p] = {};
            beatMidiArr[p].beat = [];
            beatMidiArr[p].weekdown = [];
            beatMidiArr[p].strongdown = [];

            midiString[p] = new Array();

            for (let m in measures) {
                const measure = measures[m];
                const midilist = new Array();

                if ('undefined' != typeof measure.melody) {
                    const melody = measure.melody;
                    const note = measure.note;
                    let emptyMelody = true;
    
                    try {
                        for (let voice in melody) {
                            if (!emptyMelody) break; //첫 멜로디만 검색.. 멜로디 번호를 맞추는 부분은 생각해 볼 필요가 있음..
                            
                            if (null != melody[voice]) {
                                let pitchs = melody[voice].pitchs.split('|');
                                v = voice;
                                //console.log('pitchs=',pitchs);
    
                                // 1. 상대 음(음 간격)으로 검색용
                                for (let n in pitchs) {
                                    let pitch = pitchs[n];
                                    if (pitch != '') {
                                        emptyMelody = false;
                                        const [step, octave, alter] = pitch.split(':');
                                        const conv = this.convMidiNum(step, Number(octave), alter);
                                        midiArr[p].pitch.push(conv);
                                        midilist.push({'conv':conv, 'nIdx':nCnt});

                                        this.noteInfo.push({'nIdx':nCnt, 'pIdx':p, 'mIdx':m, 'mNum':Number(m)+1, 'midi':conv, 
                                                       'step':step, 'octave':octave, 'alter':alter, 
                                                       'duration':note[n].duration, 'voice': v, 
                                                       'searchA': true, 'searchB': false, 'searchC': false, 'searchD': false});
                                        nCnt++;
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.warn(p, m, e);
                    }
    
                    emptyMelody = true;
                }

                // Beat 위치의 음표 검색
                beatMidiArr[p].beat = beatMidiArr[p].beat.concat(this.searchByBeat(measure, midilist, [p,m,v]));

                // Downbeat 위치의 음표 검색(센 박자)
                beatMidiArr[p].weekdown = beatMidiArr[p].weekdown.concat(this.searchByDownbeat(measure, midilist, [p,m,v], 'week'));
                
                // Downbeat 위치의 음표 검색(첫음만 포함)
                beatMidiArr[p].strongdown = beatMidiArr[p].strongdown.concat(this.searchByDownbeat(measure, midilist, [p,m,v], 'strong'));
            }

            /* ================================================ 
            * 1. 상대 음(음 간격)으로 검색
            * ================================================= */
            for(let i=0;i<midiArr[p].pitch.length-1;i++) 
                midiStringArr[p].pitch.push(parseInt(midiArr[p].pitch[i+1]) - parseInt(midiArr[p].pitch[i]));
            
            let pitch = {'voice': v, 'first':midiArr[p].pitch[0], 'midi':midiArr[p].pitch.join('|'), 'interval':midiStringArr[p].pitch.join('|'), 'search':1};
            midiString[p].push(pitch);

            /* ================================================ 
            * 2. Beat 위치의 음표로 검색
            * ================================================= */    
            for(let i=0;i<beatMidiArr[p].beat.length-1;i++) 
                midiStringArr[p].beat.push(parseInt(beatMidiArr[p].beat[i+1]) - parseInt(beatMidiArr[p].beat[i]));
            
            let beat = {'voice': v, 'first':beatMidiArr[p].beat[0], 'midi':beatMidiArr[p].beat.join('|'), 'interval':midiStringArr[p].beat.join('|'), 'search':2};
            midiString[p].push(beat);

            /* ================================================ 
            * 3. Downbeat(센 박자) 음표로 검색
            * include : week (약한 박자 포함) , strong (첫음만 추출)
            * ================================================= */
            for(let i=0;i<beatMidiArr[p].weekdown.length-1;i++) 
                midiStringArr[p].weekdown.push(parseInt(beatMidiArr[p].weekdown[i+1]) - parseInt(beatMidiArr[p].weekdown[i]));
        
            let weekdown = {'voice': v, 'first':beatMidiArr[p].weekdown[0], 'midi':beatMidiArr[p].weekdown.join('|'), 'interval':midiStringArr[p].weekdown.join('|'), 'search':3};
            midiString[p].push(weekdown);

            /* ================================================ 
            * 4. 마디 첫 음만으로 검색
            * include : week (약한 박자 포함) , strong (첫음만 추출)
            * ================================================= */
            for(let i=0;i<beatMidiArr[p].strongdown.length-1;i++) 
                midiStringArr[p].strongdown.push(parseInt(beatMidiArr[p].strongdown[i+1]) - parseInt(beatMidiArr[p].strongdown[i]));
        
            let strongdown = {'voice': v, 'first':beatMidiArr[p].strongdown[0], 'midi':beatMidiArr[p].strongdown.join('|'), 'interval':midiStringArr[p].strongdown.join('|'), 'search':4};
            midiString[p].push(strongdown);
        }

        score.midiString = midiString; //[Table] score_midi_string
        score.note = this.noteInfo;
        //console.log("score=",score);

        return score;
    }

    searchByPitch(midiArr) {
        let midiStringArr = new Array();

        // melody 음 간격 구하기
        for(let i=0;i<midiArr.length-1;i++) 
                midiStringArr.push(parseInt(midiArr[i+1]) - parseInt(midiArr[i]));

        return midiStringArr.join('|');
    }

    searchByBeat(measure, midilist, [p,m,v]) {
        const melody = measure.melody;
        const note = measure.note;
        let noteArr = new Array();
        let beatMidiArr = new Array();
        let strongBeatArr = new Array();
        let duration = measure.backup[0].duration;
        let beatType = this.headClef[p][m].times[0].split('/')[1];
        let strongBeat = -1;
        let tupletSum = 0;
        let tuplet = false;
        //console.log("beatType=",beatType);

        // 1. 강박자 beat의 duration 찾기
        let leng = melody[v].nnum.split('|').length;
        let nnumArr = melody[v].nnum.split('|');
        for (let i in nnumArr) {
            if (i == (leng-1)) break; //마지막은 공백이라 제외
            let idx = nnumArr[i];
            let notetype = Time.parseNumType(note[idx].type);
            let noteduration = note[idx].duration;
            //console.log("notetype=",notetype);

            tuplet = (!tuplet && 'undefined' == typeof note[idx].tuplet) ? false : true;
            //console.log("tuplet=",tuplet);
            
            if(tuplet) {
                tupletSum += Number(note[idx].duration);

                if ('undefined' != typeof note[idx].tuplet && note[idx].tuplet[0].type == 'stop') {
                    tuplet = false;
                    //console.log("tupletSum=",tupletSum);
                    noteduration = tupletSum / note[idx].time.normal_notes
                } else {
                    continue;
                }
            }

            if (notetype % beatType != 0) continue;
            strongBeat = noteduration * (notetype / beatType);
            break;
        }

        if (strongBeat == -1 && duration == 1024) 
            strongBeat = duration / beatType;
        //console.log("strongBeat=",strongBeat);

        // 1.강박자 위치의 음 추출
        if (strongBeat > -1) {
            let strongBeatPos = 0;
            let durationSum = 0;

            // 강박자 위치 Array
            //console.log("strongBeatPos=",strongBeatPos," duration=",duration);
            if ((duration % strongBeat) == 0) { //strongBeat로 duration을 쪼갤수 있는지 판단
                while (strongBeatPos != duration) {
                    strongBeatArr.push(strongBeatPos);
                    strongBeatPos += Number(strongBeat);
                }
            } else { //오류!!!
                strongBeatArr.push(strongBeatPos);
                console.log("Error[",p,",",m,",",v,"] duration=",duration," strongBeat=",strongBeat);
            }
            
            //console.log("strongBeatArr=",strongBeatArr);

            for (let i in nnumArr) {
                if (i == (leng-1)) break; //마지막은 공백이라 제외
                let idx = nnumArr[i];
                let noteDuration = note[idx].duration;

                // 강박자에 있는 음표 찾기
                if (strongBeatArr.includes(durationSum)) {
                    //console.log("Pos=",durationSum);
                    let noteInfo = this.noteInfo[midilist[i].nIdx];
                    beatMidiArr.push(midilist[i].conv);
                    noteInfo.searchB = true;
                    this.noteInfo[midilist[i].nIdx] = noteInfo;
                    
                    if ('undefined' != typeof note[idx].rest) { 
                        //rest고 마지막 음표가 아니면 다음 음 추출
                        if (i != leng-2) noteArr.push(Number(idx)+1);     
                    } else {
                        noteArr.push(idx);
                    } 
                }
                durationSum += Number(noteDuration);
            } 
        }

        return beatMidiArr;
    }

    searchByDownbeat(measure, midilist, [p,m,v], include) {
        const melody = measure.melody;
        const note = measure.note;
        let noteArr = new Array();
        let beatMidiArr = new Array();
        let downBeatArr = new Array();
        let duration = measure.backup[0].duration;
        let beats = this.headClef[p][m].times[0].split('/')[0];
        //console.log("m=",m," pos=",pos," midilist=",midilist[pos]);

        // 1. Downbeat의 duration 찾기
        /*
        - 2/4, 3/4, 3/8, 3/16 등은 다 첫 박자에 Downbeat이 있다고 볼 수 있다.
        - 4/4 박자는 1, 3박자에 Downbeat
        - 6/8 박자는 1, 4박자에 Downbeat(1, 2, 3, 4, 5, 6 중에서 1, 4)
        - 9/8 박자는 1, 4, 7박자
        - 12/8 박자는 1, 7박자
        - 이밖에 5/4, 7/4, 5/8, 7/8 박자는 상황에 따라 나누는 방법이 달라지므로 각각의 beat를 다 쓰기로 한다.
        - 분모가 16이 넘어가면 분모가 8일 때 적용한 방법에 비례 해서 쓴다.
        */
        
        // 1.Downbeat 위치의 음 추출
        let durationSum = 0;

        // Downbeat 위치 Array
        downBeatArr.push(0);
        if ('week' == include) { // 약한 downbeat 포함일 경우
            if (Number(beats) >= 4) {
                let tmpArr = new Array();
                let beatDuration = duration / beats;
                for (let i=0; i<beats; i++) 
                    tmpArr.push(beatDuration * i);

                switch (beats) {
                    case '4' :
                        downBeatArr.push(tmpArr[2]);
                        break;
                    case '6' :
                        downBeatArr.push(tmpArr[3]);
                        break;
                    case '9' :
                        downBeatArr.push(tmpArr[3]);
                        downBeatArr.push(tmpArr[6]);
                        break;
                    case '10' :
                        downBeatArr.push(tmpArr[5]);
                        break;
                    case '12' :
                        downBeatArr.push(tmpArr[6]);
                        break;
                    case '14' :
                        downBeatArr.push(tmpArr[7]);
                        break;
                    default :
                        break;
                }
            }
        }
        //console.log("downBeatArr=",downBeatArr);

        // 1. downbeat의 duration 찾기
        let leng = melody[v].nnum.split('|').length;
        let nnumArr = melody[v].nnum.split('|');
        for (let i in nnumArr) {
            if (i == (leng-1)) break; //마지막은 공백이라 제외
            let idx = nnumArr[i];
            let noteDuration = note[idx].duration;

            // downbeat에 있는 음표 찾기
            if (downBeatArr.includes(durationSum)) {
                let noteInfo = this.noteInfo[midilist[i].nIdx];
                beatMidiArr.push(midilist[i].conv);
                if('week' == include) noteInfo.searchC = true
                else noteInfo.searchD = true;
                this.noteInfo[midilist[i].nIdx] = noteInfo;
                
                if ('undefined' != typeof note[idx].rest) { 
                    //rest고 마지막 음표가 아니면 다음 음 추출
                    if (i != leng-2) noteArr.push(Number(idx)+1);     
                } else {
                    noteArr.push(idx);
                } 
            }
            durationSum += Number(noteDuration);
        } 

        return beatMidiArr;
    }

    setPartAttr(partlist, size) {
        const part = new Array(size);
        let c = 0;

        for (let l in partlist) {
            if ('undefined' != typeof partlist[l].scorepart) { 
                part[c] = {
                    id : null,
                    index : null,
                    name : null,
                    abbreviation : null
                };

                if ('undefined' != typeof partlist[l].scorepart.id) {
                    part[c].id = partlist[l].scorepart.id;
                    part[c].index = c;
                }
    
                if ('undefined' != typeof partlist[l].scorepart.name) //part명
                    part[c].name = partlist[l].scorepart.name;

    
                if ('undefined' != typeof partlist[l].scorepart.abbreviation) //part 요약명
                    part[c].abbreviation = partlist[l].scorepart.abbreviation;
  
                c++;
            }
        }

        //console.log("part=",part);
        return part;
    }

    convMidiNum(step, octave, alter) {
  
        if('number' != typeof octave) throw new Error('octave must number.');     
        if('string' != typeof step)  throw new Error('step must string.');
        step = step.toUpperCase();
        if(step != 'C' && step != 'D' && step != 'E' && step != 'F' && step != 'G' && step != 'A' && step != 'B') throw new Error('Invalid step.');
        
        // step 계산
        if('undefined' != typeof alter && alter != 0) {
            //console.log('step=',step,' alter=',alter)
            step = this.convStep(step, alter);
        }
        
        if( octave < -1 || octave > 9) {
          throw new Error('Octave out of range.');
        } else if(octave == 9 && (step == 'G#' || step == 'A' || step == 'A#' ||  step == 'B')) {
          throw new Error('Octave out of range.');
        }
        
        var base = {
          'C' : 0,
          'C#': 1,
          'D' : 2,
          'D#': 3,
          'E' : 4,
          'F' : 5,
          'F#': 6,
          'G' : 7,
          'G#': 8,
          'A' : 9,
          'A#': 10,
          'B' : 11
        };
        
        return base[step] + 12 * (octave + 1);
    }
      
    convStep(step, alter) {
        //if(typeof alter !== 'number') throw new Error('alter must number.');
        
        if(alter < -2 || alter > 2) {
            throw new Error(RangeError);
            throw new Error('alter out of range.');
        }
        
        if(alter == 1) {
            if(step == 'E') {
                return 'F';
            } else if(step == 'B') {
                return 'C';
            } else {
                return step+'#';
            }
        } else if(alter == -1) {
            var base = { 
                'C': 'B',
                'D': 'C#',
                'E': 'D#',
                'F': 'E',
                'G': 'F#',
                'A': 'G#',
                'B': 'A#' 
            };
            return base[step];
        } else if(alter == -2) {
            var base = { 
                'C': 'A#',
                'D': 'C',
                'E': 'D',
                'F': 'D#',
                'G': 'F',
                'A': 'G',
                'B': 'A' 
            };
            return base[step];
        } else if(alter == 2) {
            var base = { 
                'C': 'D',
                'D': 'E',
                'E': 'F#',
                'F': 'G',
                'G': 'A',
                'A': 'B',
                'B': 'C#' 
            };
            return base[step];
        } else {
            throw new Error(RangeError);
            throw new Error('alter out of range.');
        }
    }

}


export { Score };

export { Newcombine };

export { Upload };

export { Measure };

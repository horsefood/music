class HighLight {

    constructor(target, renderers, score, options) {
        this._mode = 'NONE';
        this._callback = null;

        this._div_overlays = new Array();
        this._target    = target;
        this._renderers = renderers;
        this._score     = score;
        this._options   = options;

        this._pre_bgcolor = null;
        this._pre_opacity = null;
        this._is_piano = null;
    }

    activeMode(mode, hls, callback) {
        this._mode = mode;
        this._initialize();

        if ('SELECT' == this._mode) {
            this._mode_select(hls, callback);
        } else if ('NEW' == this._mode) {
            this._mode_new(hls, callback);
        }
    }

    _initialize() {
        while (this._div_overlays.firstChild) this._div_overlays.removeChild(this._div_overlays.firstChild);

        for (let p=0; p<this._score.length; p++) {
            this._div_overlays[ p ] = document.createElement('div');
            this._div_overlays[ p ].style.visibility = 'hidden';

            for (let m in this._score[p]) {
                for (let s in this._score[p][m].staves) {
                    const div = document.createElement('div');
                    div.id = 'hl-' + p + '-' + m + '-' + s + '-none';
                    div.style.position = 'absolute';
                    if (this._options.combineparts) {
                        div.style.left   = (this._score[p][m].staves[s].x * this._options.ratio.w) + this._renderers[0].element.offsetLeft + 'px';
                        div.style.top 	 = (this._score[p][m].staves[s].y * this._options.ratio.h) + this._renderers[0].element.offsetTop + 'px';
                    } else {
                        div.style.left   = (this._score[p][m].staves[s].x * this._options.ratio.w) + this._renderers[p].element.offsetLeft + 'px';
                        div.style.top 	 = (this._score[p][m].staves[s].y * this._options.ratio.h) + this._renderers[p].element.offsetTop + 'px';
                    }
                    div.style.width  = (this._score[p][m].staves[s].width  * this._options.ratio.w) + 'px';
                    div.style.height = (this._score[p][m].staves[s].height * this._options.ratio.h) + 'px';
                    div.style.zIndex  = '777';
                    this._div_overlays[ p ].appendChild(div);
                }
            }
            this._target.appendChild(this._div_overlays[ p ]);
        }

        if (this._options.combineparts) {
            for (let p=0; p<this._score.length; p++) this._div_overlays[ p ].style.visibility = 'visible';
        } else {
            this._div_overlays[ 0 ].style.visibility = 'visible';
        }
    }

    _mode_select(hls, callback) {
        if ('SELECT' != this._mode) {
            console.warn('please set right mode. current mode is ==> ', this._mode);
            return;
        }

        const hlcolor = this._options.hlcolor;

        for (let i in hls) {
            for (let h in hls[i]) {
                const id = 'hl-' + hls[ i ][ h ] + '-none';
                const div = document.getElementById(id);

                if (null != div) {
                    div.id = 'hl-' + hls[ i ][ h ] + '-set';
                    div.style.backgroundColor = hlcolor.color;
                    div.style.opacity = hlcolor.opacity;

                    div.addEventListener('mouseover', function( event ) {
                        event.target.style.cursor = 'pointer';

                        const strs = event.target.id.split('-');
                        if ('set' == strs[ strs.length - 1 ]) {
                            event.target.style.backgroundColor = hlcolor.mouseovercolor;
                            event.target.style.opacity = hlcolor.mouseoveropacity;
                        } else if ('focus' == strs[ strs.length - 1 ]) {
                            event.target.style.backgroundColor = hlcolor.focusmouseovercolor;
                            event.target.style.opacity = hlcolor.focusmouseoveropacity;
                        }
                    }, false);

                    div.addEventListener('mouseout', function( event ) {
                        event.target.style.cursor = 'default';

                        const strs = event.target.id.split('-');
                        if ('set' == strs[ strs.length - 1 ]) {
                            event.target.style.backgroundColor = hlcolor.color;
                            event.target.style.opacity = hlcolor.opacity;
                        } else if ('focus' == strs[ strs.length - 1 ]) {
                            event.target.style.backgroundColor = hlcolor.focuscolor;
                            event.target.style.opacity = hlcolor.focusopacity;
                        }
                    }, false);

                    div.addEventListener('mousedown', function( event ) {
                        const strs = event.target.id.split('-');
                        callback(strs[ 1 ] + '-' + strs[ 2 ] + '-' + strs[ 3 ]);
                    }, false);
                }
            }
        }
    }

    _mode_new(hls, callback) {
        if ('NEW' != this._mode) {
            console.warn('please set right mode. current mode is ==> ', this._mode);
            return;
        }

        const hlcolor = this._options.newhlcolor;
        const prebgcolor = new Array();
        const preopacity = new Array();
        const ispiano = new Array();

        this._pre_bgcolor = prebgcolor;
        this._pre_opacity = preopacity;
        this._is_piano = ispiano;

        let starthlid = null;

        function changeIndicator(strs, indicator) {
            let id = '';
            for (let i = 0; i < strs.length; i++) {
                if (i + 1 == strs.length) {
                    id += indicator;
                } else {
                    id += (strs[ i ] + '-');
                }
            }
            return id;
        }

        for (let i in hls) {
            for (let h in hls[i]) {
                const id = 'hl-' + hls[ i ][ h ] + '-none';
                const div = document.getElementById(id);
                if (null != div) {
                    div.style.backgroundColor = this._options.hlcolor.color;
                    div.style.opacity = this._options.hlcolor.opacity;
                }
            }
        }

        for (let p in this._div_overlays) {
            prebgcolor[ p ] = new Array();
            preopacity[ p ] = new Array();

            if (1 == this._score[ p ][ 0 ].staves.length) {
               ispiano[ p ] = false;
            } else {
               ispiano[ p ] = true;
            }

            for (let n = 0; n < this._div_overlays[ p ].childNodes.length; n++) {
                const div = this._div_overlays[ p ].childNodes.item( n );
                prebgcolor[ p ][ n ] = div.style.backgroundColor;
                preopacity[ p ][ n ] = div.style.opacity;

                div.addEventListener('mouseover', function( event ) {
                    // console.log(event.target.id);
                    const strs = event.target.id.split('-');
                    if ('none' == strs[ strs.length - 1 ]) {
                        event.target.style.cursor = 'pointer';
                        event.target.style.backgroundColor = hlcolor.mouseovercolor;
                        event.target.style.opacity = hlcolor.mouseoveropacity;
                    } else {
                        event.target.style.cursor = 'default';
                    }
                }, false);

                div.addEventListener('mouseout', function( event ) {
                    // console.log(event.target.id);
                    const strs = event.target.id.split('-');
                    if ('none' == strs[ strs.length - 1 ]) {
                        event.target.style.cursor = 'default';
                        const p = Number(strs[ 1 ]), m = Number(strs[ 2 ]), s = Number(strs[ 3 ]);
                        if (ispiano[ p ]) {
                            event.target.style.backgroundColor = prebgcolor[ p ][ m * 2 + s ];
                            event.target.style.opacity = preopacity[ p ][ m * 2 + s ];
                        } else {
                            event.target.style.backgroundColor = prebgcolor[ p ][ m ];
                            event.target.style.opacity = preopacity[ p ][ m ];
                        }
                    }
                }, false);

                div.addEventListener('mousedown', function( event ) {
                    // console.log(event.target.id);
                    const strs = event.target.id.split('-');
                    if (null == starthlid) {
                        if ('none' == strs[ strs.length - 1 ]) {
                            event.target.style.backgroundColor = hlcolor.pickfirstcolor;
                            event.target.style.opacity = hlcolor.pickfirstopacity;
                            this.id = changeIndicator(strs, 'slcted');
                            starthlid = this.id;
                        }
                    }
                    // 시작 하이라이트 두번 클릭 시 지워지도록
                    /*
                    else if (this.id == starthlid) {
                        event.target.style.backgroundColor = prebgcolor[ Number(strs[ 1 ]) ][ Number(strs[ 2 ]) * 2 + Number(strs[ 3 ]) ];
                        event.target.style.opacity = preopacity[ Number(strs[ 1 ]) ][ Number(strs[ 2 ]) * 2 + Number(strs[ 3 ]) ];
                        this.id = changeIndicator(strs, 'none');
                        starthlid = null;
                    }
                    */
                    else {
                        const frst = starthlid.split('-');
                        const scnd = event.target.id.split('-');

                        //if (Number(frst[ 2 ]) < Number(scnd[ 2 ])) {  // 시작 하이라이트 두번 클릭 시 지워지도록
                        if (Number(frst[ 2 ]) <= Number(scnd[ 2 ])) {  // 시작 하이라이트 두번 클릭 시 선택되도록
                            const slcts = new Array();
                            const hp = {
                                s : Number(frst[ 1 ]),
                                e : Number(scnd[ 1 ])
                            }
                            const hm = {
                                s : Number(frst[ 2 ]),
                                e : Number(scnd[ 2 ])
                            }
                            
                            for (let p = hp.s; p <= hp.e; p++) {
                                for (let m = hm.s; m <= hm.e; m++) {
                                    let s = Number(frst[ 3 ]);
                                    do {
                                        const id = 'hl-' + p + '-' + m + '-' + s + '-slcted';
                                        let ele = document.getElementById(id);
                                        if (null == ele) ele = document.getElementById('hl-' + p + '-' + m + '-' + s + '-none');
                                        if (null != ele) {
                                            ele.id = id;
                                            ele.style.backgroundColor = hlcolor.picksecondcolor;
                                            ele.style.opacity = hlcolor.picksecondopacity;
                                            slcts.push(p + '-' + m + '-' + s);
                                        }
                                        s++;
                                    } while (s <= Number(scnd[ 3 ]));
                                }
                            }

                            if (0 < slcts.length) {
                                event.target.style.cursor = 'default';
                                starthlid = null;
                                callback(slcts);
                            }
                        }
                    }
                }, false);
            }
        }
    }

    focusHl(hl) {
        if ('SELECT' != this._mode) {
            console.warn('please set right mode. current mode is ==> ', this._mode);
            return;
        }

        const hlcolor = this._options.hlcolor;

        for (let p in this._div_overlays) {
            for (let n = 0; n < this._div_overlays[ p ].childNodes.length; n++) {
                const div = this._div_overlays[ p ].childNodes.item( n );
                const strs = div.id.split('-');

                if ('set' == strs[4] || 'focus' == strs[4]) {
                    div.id = strs[0] + '-' + strs[1] + '-' + strs[2] + '-' + strs[3] + '-set';
                    div.style.backgroundColor = hlcolor.color;
                    div.style.opacity = hlcolor.opacity;
                }
            }
        }

        for (let i in hl) {
            const id = 'hl-' + hl[ i ] + '-set';
            const div = document.getElementById(id);

            if (null != div) {
                const strs = div.id.split('-');
                div.id = strs[0] + '-' + strs[1] + '-' + strs[2] + '-' + strs[3] + '-focus';
                div.style.backgroundColor = hlcolor.focuscolor;
                div.style.opacity = hlcolor.focusopacity;
            }
        }
    }

    clearHl() {
        if ('NEW' != this._mode) {
            console.warn('please set right mode. current mode is ==> ', this._mode);
            return;
        }

        for (let i in this._div_overlays) {
            for (let n = 0; n < this._div_overlays[ i ].childNodes.length; n++) {
                const div = this._div_overlays[ i ].childNodes.item( n );
                const strs = div.id.split('-');

                div.id = strs[0] + '-' + strs[1] + '-' + strs[2] + '-' + strs[3] + '-none';
                div.style.cursor = 'default';
                const p = Number(strs[ 1 ]), m = Number(strs[ 2 ]), s = Number(strs[ 3 ]);
                if (this._is_piano[ p ]) {
                    div.style.backgroundColor = this._pre_bgcolor[ p ][ m * 2 + s ];
                    div.style.opacity = this._pre_opacity[ p ][ m * 2 + s ];
                } else {
                    div.style.backgroundColor = this._pre_bgcolor[ p ][ m ];
                    div.style.opacity = this._pre_opacity[ p ][ m ];
                }
            }
        }
    }

    getAllHl() {
        if ('NEW' != this._mode) {
            console.warn('please set right mode. current mode is ==> ', this._mode);
            return;
        }

        const slcts = new Array();

        for (let p in this._div_overlays) {
            for (let n = 0; n < this._div_overlays[ p ].childNodes.length; n++) {
                const div = this._div_overlays[ p ].childNodes.item( n );
                const strs = div.id.split('-');

                if ('slcted' == strs[ strs.length - 1 ]) {
                    slcts.push(strs[1] + '-' + strs[2] + '-' + strs[3]);
                }
            }
        }

        return slcts;
    }

    getY(point) {
        const strs = point.split('-');
        return this._score[strs[0]][strs[1]].top[strs[2]];
    }
}

export { HighLight };

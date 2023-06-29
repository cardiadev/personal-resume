// Garden Gnome Software - Skin
// Pano2VR 3.1.0/1777M
// Filename: interface_HTML5.ggsk
// Generated mar 13. dic 02:52:06 2011

function pano2vrSkin(player,skinlayer,base) {
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=(skinlayer)?skinlayer:player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._menu_sup_02=document.createElement('div');
		this._menu_sup_02.ggId='menu_sup_02'
		this._menu_sup_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_sup_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 63px;';
		hs+='height: 46px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_sup_02.setAttribute('style',hs);
		this._image_36=document.createElement('div');
		this._image_36.ggId='Image 36'
		this._image_36.ggParameter={ rx:0,ry:0,a:0,sx:100,sy:1 };
		this._image_36.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -120px;';
		hs+='width: 100px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_36.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._image_36.setAttribute('style',hs);
		this._image_36__img=document.createElement('img');
		this._image_36__img.setAttribute('src',basePath + 'images/image_36.png');
		this._image_36__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_36__img);
		this._image_36.appendChild(this._image_36__img);
		this._menu_sup_02.appendChild(this._image_36);
		this._image_2=document.createElement('div');
		this._image_2.ggId='Image 2'
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:100,sy:1 };
		this._image_2.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_2.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._image_2.setAttribute('style',hs);
		this._image_2__img=document.createElement('img');
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._menu_sup_02.appendChild(this._image_2);
		this.divSkin.appendChild(this._menu_sup_02);
		this._menu_sup_01=document.createElement('div');
		this._menu_sup_01.ggId='menu_sup_01'
		this._menu_sup_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_sup_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 675px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_sup_01.setAttribute('style',hs);
		this._image_8=document.createElement('div');
		this._image_8.ggId='Image 8'
		this._image_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_8.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  5px;';
		hs+='width: 128px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_8.setAttribute('style',hs);
		this._image_8__img=document.createElement('img');
		this._image_8__img.setAttribute('src',basePath + 'images/image_8.png');
		this._image_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_8__img);
		this._image_8.appendChild(this._image_8__img);
		this._menu_sup_01.appendChild(this._image_8);
		this._menu_01=document.createElement('div');
		this._menu_01.ggId='menu_01'
		this._menu_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_01.setAttribute('style',hs);
		this._img_01_nor=document.createElement('div');
		this._img_01_nor.ggId='img_01_nor'
		this._img_01_nor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_01_nor.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_01_nor.setAttribute('style',hs);
		this._img_01_nor__img=document.createElement('img');
		this._img_01_nor__img.setAttribute('src',basePath + 'images/img_01_nor.png');
		this._img_01_nor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_01_nor__img);
		this._img_01_nor.appendChild(this._img_01_nor__img);
		this._img_01_nor.onclick=function () {
			me._text_sub_01.innerHTML="LOBBY SPA";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="LOBBY SPA";
				}
			}
			me.player.openNext("VR_01.swf","");
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='inherit';
			me._img_01_sel.ggVisible=true;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='hidden';
			me._img_01_nor.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='hidden';
			me._img_01_nor.ggVisible=false;
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='hidden';
			me._img_02_sel.ggVisible=false;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='inherit';
			me._img_02_nor.ggVisible=true;
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility='inherit';
			me._img_03_nor.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='inherit';
			me._img_04_nor.ggVisible=true;
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='hidden';
			me._img_04_sel.ggVisible=false;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='hidden';
			me._img_03_ove2.ggVisible=false;
		}
		this._menu_01.appendChild(this._img_01_nor);
		this._img_01_sel=document.createElement('div');
		this._img_01_sel.ggId='img_01_sel'
		this._img_01_sel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_01_sel.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._img_01_sel.setAttribute('style',hs);
		this._img_01_sel__img=document.createElement('img');
		this._img_01_sel__img.setAttribute('src',basePath + 'images/img_01_sel.png');
		this._img_01_sel__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_01_sel__img);
		this._img_01_sel.appendChild(this._img_01_sel__img);
		this._menu_01.appendChild(this._img_01_sel);
		this._menu_sup_01.appendChild(this._menu_01);
		this._menu_02=document.createElement('div');
		this._menu_02.ggId='menu_02'
		this._menu_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 268px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_02.setAttribute('style',hs);
		this._img_02_nor=document.createElement('div');
		this._img_02_nor.ggId='img_02_nor'
		this._img_02_nor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_02_nor.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_02_nor.setAttribute('style',hs);
		this._img_02_nor__img=document.createElement('img');
		this._img_02_nor__img.setAttribute('src',basePath + 'images/img_02_nor.png');
		this._img_02_nor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_02_nor__img);
		this._img_02_nor.appendChild(this._img_02_nor__img);
		this._img_02_nor.onclick=function () {
			me._text_sub_01.innerHTML="\xc1REAS HIDROTERMAL";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="\xc1REAS HIDROTERMAL";
				}
			}
			me.player.openNext("VR_02.swf","");
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='inherit';
			me._img_02_sel.ggVisible=true;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='hidden';
			me._img_02_nor.ggVisible=false;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='hidden';
			me._img_02_nor.ggVisible=false;
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='hidden';
			me._img_01_sel.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='inherit';
			me._img_01_nor.ggVisible=true;
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility='inherit';
			me._img_03_nor.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='inherit';
			me._img_04_nor.ggVisible=true;
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='hidden';
			me._img_04_sel.ggVisible=false;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='hidden';
			me._img_03_ove2.ggVisible=false;
		}
		this._menu_02.appendChild(this._img_02_nor);
		this._img_02_sel=document.createElement('div');
		this._img_02_sel.ggId='img_02_sel'
		this._img_02_sel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_02_sel.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._img_02_sel.setAttribute('style',hs);
		this._img_02_sel__img=document.createElement('img');
		this._img_02_sel__img.setAttribute('src',basePath + 'images/img_02_sel.png');
		this._img_02_sel__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_02_sel__img);
		this._img_02_sel.appendChild(this._img_02_sel__img);
		this._menu_02.appendChild(this._img_02_sel);
		this._menu_sup_01.appendChild(this._menu_02);
		this._menu_03=document.createElement('div');
		this._menu_03.ggId='menu_03'
		this._menu_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 468px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_03.setAttribute('style',hs);
		this._img_03_nor=document.createElement('div');
		this._img_03_nor.ggId='img_03_nor'
		this._img_03_nor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_03_nor.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_03_nor.setAttribute('style',hs);
		this._img_03_nor__img=document.createElement('img');
		this._img_03_nor__img.setAttribute('src',basePath + 'images/img_03_nor.png');
		this._img_03_nor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_03_nor__img);
		this._img_03_nor.appendChild(this._img_03_nor__img);
		this._img_03_nor.onclick=function () {
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='inherit';
			me._img_03_sel.ggVisible=true;
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility='hidden';
			me._img_03_nor.ggVisible=false;
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility='hidden';
			me._img_03_nor.ggVisible=false;
			flag=me._menu_sup_01.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_01.style[domTransition]='none';
			} else {
				me._menu_sup_01.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			} else {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=120;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			}
			me._menu_sup_01.ggPositonActive=!flag;
			flag=me._menu_sup_02.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_02.style[domTransition]='none';
			} else {
				me._menu_sup_02.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			} else {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=120;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			}
			me._menu_sup_02.ggPositonActive=!flag;
			flag=me._thumbs_cabinas.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_cabinas.style[domTransition]='none';
			} else {
				me._thumbs_cabinas.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			} else {
				me._thumbs_cabinas.style.opacity='1';
				me._thumbs_cabinas.style.visibility=me._thumbs_cabinas.ggVisible?'inherit':'hidden';
			}
			me._thumbs_cabinas.ggOpacitiyActive=!flag;
			flag=me._thumbs_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_menu.style[domTransition]='none';
			} else {
				me._thumbs_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			} else {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=120;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			}
			me._thumbs_menu.ggPositonActive=!flag;
			me._rest_menu_03.style[domTransition]='none';
			me._rest_menu_03.style.visibility='inherit';
			me._rest_menu_03.ggVisible=true;
		}
		this._menu_03.appendChild(this._img_03_nor);
		this._img_03_ove2=document.createElement('div');
		this._img_03_ove2.ggId='img_03_ove2'
		this._img_03_ove2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_03_ove2.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_03_ove2.setAttribute('style',hs);
		this._img_03_ove2__img=document.createElement('img');
		this._img_03_ove2__img.setAttribute('src',basePath + 'images/img_03_ove2.png');
		this._img_03_ove2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_03_ove2__img);
		this._img_03_ove2.appendChild(this._img_03_ove2__img);
		this._img_03_ove2.onclick=function () {
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='inherit';
			me._img_03_sel.ggVisible=true;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='hidden';
			me._img_03_ove2.ggVisible=false;
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility='hidden';
			me._img_03_nor.ggVisible=false;
			flag=me._menu_sup_01.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_01.style[domTransition]='none';
			} else {
				me._menu_sup_01.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			} else {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=120;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			}
			me._menu_sup_01.ggPositonActive=!flag;
			flag=me._menu_sup_02.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_02.style[domTransition]='none';
			} else {
				me._menu_sup_02.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			} else {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=120;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			}
			me._menu_sup_02.ggPositonActive=!flag;
			flag=me._thumbs_cabinas.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_cabinas.style[domTransition]='none';
			} else {
				me._thumbs_cabinas.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			} else {
				me._thumbs_cabinas.style.opacity='1';
				me._thumbs_cabinas.style.visibility=me._thumbs_cabinas.ggVisible?'inherit':'hidden';
			}
			me._thumbs_cabinas.ggOpacitiyActive=!flag;
			flag=me._thumbs_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_menu.style[domTransition]='none';
			} else {
				me._thumbs_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			} else {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=120;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			}
			me._thumbs_menu.ggPositonActive=!flag;
			me._rest_menu_03.style[domTransition]='none';
			me._rest_menu_03.style.visibility='inherit';
			me._rest_menu_03.ggVisible=true;
		}
		this._menu_03.appendChild(this._img_03_ove2);
		this._img_03_sel=document.createElement('div');
		this._img_03_sel.ggId='img_03_sel'
		this._img_03_sel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_03_sel.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._img_03_sel.setAttribute('style',hs);
		this._img_03_sel__img=document.createElement('img');
		this._img_03_sel__img.setAttribute('src',basePath + 'images/img_03_sel.png');
		this._img_03_sel__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_03_sel__img);
		this._img_03_sel.appendChild(this._img_03_sel__img);
		this._menu_03.appendChild(this._img_03_sel);
		this._menu_sup_01.appendChild(this._menu_03);
		this._menu_04=document.createElement('div');
		this._menu_04.ggId='menu_04'
		this._menu_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 593px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_04.setAttribute('style',hs);
		this._img_04_nor=document.createElement('div');
		this._img_04_nor.ggId='img_04_nor'
		this._img_04_nor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_04_nor.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 140px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_04_nor.setAttribute('style',hs);
		this._img_04_nor__img=document.createElement('img');
		this._img_04_nor__img.setAttribute('src',basePath + 'images/img_04_nor.png');
		this._img_04_nor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_04_nor__img);
		this._img_04_nor.appendChild(this._img_04_nor__img);
		this._img_04_nor.onclick=function () {
			me._text_sub_01.innerHTML="BOUTIQUE";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="BOUTIQUE";
				}
			}
			me.player.openNext("VR_08.swf","");
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='inherit';
			me._img_04_sel.ggVisible=true;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='hidden';
			me._img_04_nor.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='hidden';
			me._img_04_nor.ggVisible=false;
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='hidden';
			me._img_01_sel.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='inherit';
			me._img_01_nor.ggVisible=true;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='inherit';
			me._img_02_nor.ggVisible=true;
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='hidden';
			me._img_02_sel.ggVisible=false;
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility='inherit';
			me._img_03_nor.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='hidden';
			me._img_03_ove2.ggVisible=false;
			me._reset_thumbs.onclick();
		}
		this._menu_04.appendChild(this._img_04_nor);
		this._img_04_sel=document.createElement('div');
		this._img_04_sel.ggId='img_04_sel'
		this._img_04_sel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_04_sel.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 140px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._img_04_sel.setAttribute('style',hs);
		this._img_04_sel__img=document.createElement('img');
		this._img_04_sel__img.setAttribute('src',basePath + 'images/img_04_sel.png');
		this._img_04_sel__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_04_sel__img);
		this._img_04_sel.appendChild(this._img_04_sel__img);
		this._menu_04.appendChild(this._img_04_sel);
		this._menu_sup_01.appendChild(this._menu_04);
		this._img_04_ove=document.createElement('div');
		this._img_04_ove.ggId='img_04_ove'
		this._img_04_ove.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_04_ove.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 593px;';
		hs+='top:  0px;';
		hs+='width: 140px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_04_ove.setAttribute('style',hs);
		this._img_04_ove__img=document.createElement('img');
		this._img_04_ove__img.setAttribute('src',basePath + 'images/img_04_ove.png');
		this._img_04_ove__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._img_04_ove__img);
		this._img_04_ove.appendChild(this._img_04_ove__img);
		this._img_04_ove.onclick=function () {
			me._text_sub_01.innerHTML="BOUTIQUE";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="BOUTIQUE";
				}
			}
			me.player.openNext("VR_08.swf","");
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='inherit';
			me._img_04_sel.ggVisible=true;
			me._img_04_ove.style[domTransition]='none';
			me._img_04_ove.style.visibility='hidden';
			me._img_04_ove.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='hidden';
			me._img_04_nor.ggVisible=false;
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='hidden';
			me._img_01_sel.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='inherit';
			me._img_01_nor.ggVisible=true;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='inherit';
			me._img_02_nor.ggVisible=true;
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='hidden';
			me._img_02_sel.ggVisible=false;
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility='inherit';
			me._img_03_nor.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='hidden';
			me._img_03_ove2.ggVisible=false;
			me._reset_thumbs.onclick();
		}
		this._img_04_ove.onmouseout=function () {
			me._img_04_ove.style[domTransition]='none';
			me._img_04_ove.style.visibility='hidden';
			me._img_04_ove.ggVisible=false;
		}
		this._menu_sup_01.appendChild(this._img_04_ove);
		this._separador=document.createElement('div');
		this._separador.ggId='separador'
		this._separador.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._separador.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  0px;';
		hs+='width: 3px;';
		hs+='height: 39px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._separador.setAttribute('style',hs);
		this._separador__img=document.createElement('img');
		this._separador__img.setAttribute('src',basePath + 'images/separador.png');
		this._separador__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._separador__img);
		this._separador.appendChild(this._separador__img);
		this._menu_sup_01.appendChild(this._separador);
		this._separador_2=document.createElement('div');
		this._separador_2.ggId='separador 2'
		this._separador_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._separador_2.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 268px;';
		hs+='top:  0px;';
		hs+='width: 3px;';
		hs+='height: 39px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._separador_2.setAttribute('style',hs);
		this._separador_2__img=document.createElement('img');
		this._separador_2__img.setAttribute('src',basePath + 'images/separador_2.png');
		this._separador_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._separador_2__img);
		this._separador_2.appendChild(this._separador_2__img);
		this._menu_sup_01.appendChild(this._separador_2);
		this._separador_3=document.createElement('div');
		this._separador_3.ggId='separador 3'
		this._separador_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._separador_3.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 468px;';
		hs+='top:  0px;';
		hs+='width: 3px;';
		hs+='height: 39px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._separador_3.setAttribute('style',hs);
		this._separador_3__img=document.createElement('img');
		this._separador_3__img.setAttribute('src',basePath + 'images/separador_3.png');
		this._separador_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._separador_3__img);
		this._separador_3.appendChild(this._separador_3__img);
		this._menu_sup_01.appendChild(this._separador_3);
		this._separador_4=document.createElement('div');
		this._separador_4.ggId='separador 4'
		this._separador_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._separador_4.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 593px;';
		hs+='top:  0px;';
		hs+='width: 3px;';
		hs+='height: 39px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._separador_4.setAttribute('style',hs);
		this._separador_4__img=document.createElement('img');
		this._separador_4__img.setAttribute('src',basePath + 'images/separador_4.png');
		this._separador_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._separador_4__img);
		this._separador_4.appendChild(this._separador_4__img);
		this._menu_sup_01.appendChild(this._separador_4);
		this._separador_5=document.createElement('div');
		this._separador_5.ggId='separador 5'
		this._separador_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._separador_5.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 733px;';
		hs+='top:  0px;';
		hs+='width: 3px;';
		hs+='height: 39px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._separador_5.setAttribute('style',hs);
		this._separador_5__img=document.createElement('img');
		this._separador_5__img.setAttribute('src',basePath + 'images/separador_5.png');
		this._separador_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._separador_5__img);
		this._separador_5.appendChild(this._separador_5__img);
		this._menu_sup_01.appendChild(this._separador_5);
		this.divSkin.appendChild(this._menu_sup_01);
		this._menu_inf_01=document.createElement('div');
		this._menu_inf_01.ggId='menu_inf_01'
		this._menu_inf_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_inf_01.ggVisible=true;
		this._menu_inf_01.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			h=this.parentNode.offsetHeight;
			this.style.top=(-85 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -85px;';
		hs+='width: 63px;';
		hs+='height: 59px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_inf_01.setAttribute('style',hs);
		this._image_170=document.createElement('div');
		this._image_170.ggId='Image 17'
		this._image_170.ggParameter={ rx:0,ry:0,a:0,sx:100,sy:1 };
		this._image_170.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  19px;';
		hs+='width: 100px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_170.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._image_170.setAttribute('style',hs);
		this._image_170__img=document.createElement('img');
		this._image_170__img.setAttribute('src',basePath + 'images/image_170.png');
		this._image_170__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_170__img);
		this._image_170.appendChild(this._image_170__img);
		this._menu_inf_01.appendChild(this._image_170);
		this._image_16=document.createElement('div');
		this._image_16.ggId='Image 16'
		this._image_16.ggParameter={ rx:0,ry:0,a:0,sx:100,sy:1 };
		this._image_16.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  24px;';
		hs+='width: 100px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_16.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._image_16.setAttribute('style',hs);
		this._image_16__img=document.createElement('img');
		this._image_16__img.setAttribute('src',basePath + 'images/image_16.png');
		this._image_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_16__img);
		this._image_16.appendChild(this._image_16__img);
		this._menu_inf_01.appendChild(this._image_16);
		this._image_17=document.createElement('div');
		this._image_17.ggId='Image 17'
		this._image_17.ggParameter={ rx:0,ry:0,a:0,sx:100,sy:1 };
		this._image_17.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  54px;';
		hs+='width: 100px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_17.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._image_17.setAttribute('style',hs);
		this._image_17__img=document.createElement('img');
		this._image_17__img.setAttribute('src',basePath + 'images/image_17.png');
		this._image_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_17__img);
		this._image_17.appendChild(this._image_17__img);
		this._menu_inf_01.appendChild(this._image_17);
		this._text_sub_01=document.createElement('div');
		this._text_sub_01.ggId='text_sub_01'
		this._text_sub_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_sub_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  30px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._text_sub_01.setAttribute('style',hs);
		this._text_sub_01.innerHTML="LOBBY SPA";
		this._menu_inf_01.appendChild(this._text_sub_01);
		this.divSkin.appendChild(this._menu_inf_01);
		this._menu_inf_02=document.createElement('div');
		this._menu_inf_02.ggId='menu_inf_02'
		this._menu_inf_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_inf_02.ggVisible=true;
		this._menu_inf_02.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			w=this.parentNode.offsetWidth;
			this.style.left=(-64 + w/2) + 'px';
			h=this.parentNode.offsetHeight;
			this.style.top=(-85 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -85px;';
		hs+='width: 100px;';
		hs+='height: 59px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_inf_02.setAttribute('style',hs);
		this.divSkin.appendChild(this._menu_inf_02);
		this._menu_inf_03=document.createElement('div');
		this._menu_inf_03.ggId='menu_inf_03'
		this._menu_inf_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_inf_03.ggVisible=true;
		this._menu_inf_03.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			w=this.parentNode.offsetWidth;
			this.style.left=(-64 + w) + 'px';
			h=this.parentNode.offsetHeight;
			this.style.top=(-85 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -85px;';
		hs+='width: 63px;';
		hs+='height: 59px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_inf_03.setAttribute('style',hs);
		this._image_22=document.createElement('div');
		this._image_22.ggId='Image 22'
		this._image_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_22.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -179px;';
		hs+='top:  29px;';
		hs+='width: 21px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_22.setAttribute('style',hs);
		this._image_22__img=document.createElement('img');
		this._image_22__img.setAttribute('src',basePath + 'images/image_22.png');
		this._image_22__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_22__img);
		this._image_22.appendChild(this._image_22__img);
		this._image_22.onmouseout=function () {
			me.elementMouseDown['image_22']=false;
		}
		this._image_22.onmousedown=function () {
			me.elementMouseDown['image_22']=true;
		}
		this._image_22.onmouseup=function () {
			me.elementMouseDown['image_22']=false;
		}
		this._image_22.ontouchend=function () {
			me.elementMouseDown['image_22']=false;
		}
		this._menu_inf_03.appendChild(this._image_22);
		this._image_23=document.createElement('div');
		this._image_23.ggId='Image 23'
		this._image_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_23.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -141px;';
		hs+='top:  29px;';
		hs+='width: 21px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_23.setAttribute('style',hs);
		this._image_23__img=document.createElement('img');
		this._image_23__img.setAttribute('src',basePath + 'images/image_23.png');
		this._image_23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_23__img);
		this._image_23.appendChild(this._image_23__img);
		this._image_23.onmouseout=function () {
			me.elementMouseDown['image_23']=false;
		}
		this._image_23.onmousedown=function () {
			me.elementMouseDown['image_23']=true;
		}
		this._image_23.onmouseup=function () {
			me.elementMouseDown['image_23']=false;
		}
		this._image_23.ontouchend=function () {
			me.elementMouseDown['image_23']=false;
		}
		this._menu_inf_03.appendChild(this._image_23);
		this._image_24=document.createElement('div');
		this._image_24.ggId='Image 24'
		this._image_24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_24.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -104px;';
		hs+='top:  29px;';
		hs+='width: 21px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_24.setAttribute('style',hs);
		this._image_24__img=document.createElement('img');
		this._image_24__img.setAttribute('src',basePath + 'images/image_24.png');
		this._image_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_24__img);
		this._image_24.appendChild(this._image_24__img);
		this._image_24.onmouseout=function () {
			me.elementMouseDown['image_24']=false;
		}
		this._image_24.onmousedown=function () {
			me.elementMouseDown['image_24']=true;
		}
		this._image_24.onmouseup=function () {
			me.elementMouseDown['image_24']=false;
		}
		this._image_24.ontouchend=function () {
			me.elementMouseDown['image_24']=false;
		}
		this._menu_inf_03.appendChild(this._image_24);
		this._image_25=document.createElement('div');
		this._image_25.ggId='Image 25'
		this._image_25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_25.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -66px;';
		hs+='top:  29px;';
		hs+='width: 21px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_25.setAttribute('style',hs);
		this._image_25__img=document.createElement('img');
		this._image_25__img.setAttribute('src',basePath + 'images/image_25.png');
		this._image_25__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_25__img);
		this._image_25.appendChild(this._image_25__img);
		this._image_25.onmouseout=function () {
			me.elementMouseDown['image_25']=false;
		}
		this._image_25.onmousedown=function () {
			me.elementMouseDown['image_25']=true;
		}
		this._image_25.onmouseup=function () {
			me.elementMouseDown['image_25']=false;
		}
		this._image_25.ontouchend=function () {
			me.elementMouseDown['image_25']=false;
		}
		this._menu_inf_03.appendChild(this._image_25);
		this._image_26=document.createElement('div');
		this._image_26.ggId='Image 26'
		this._image_26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_26.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -14px;';
		hs+='top:  29px;';
		hs+='width: 21px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_26.setAttribute('style',hs);
		this._image_26__img=document.createElement('img');
		this._image_26__img.setAttribute('src',basePath + 'images/image_26.png');
		this._image_26__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_26__img);
		this._image_26.appendChild(this._image_26__img);
		this._image_26.onmouseout=function () {
			me.elementMouseDown['image_26']=false;
		}
		this._image_26.onmousedown=function () {
			me.elementMouseDown['image_26']=true;
		}
		this._image_26.onmouseup=function () {
			me.elementMouseDown['image_26']=false;
		}
		this._image_26.ontouchend=function () {
			me.elementMouseDown['image_26']=false;
		}
		this._menu_inf_03.appendChild(this._image_26);
		this._image_27=document.createElement('div');
		this._image_27.ggId='Image 27'
		this._image_27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_27.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 17px;';
		hs+='top:  29px;';
		hs+='width: 21px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_27.setAttribute('style',hs);
		this._image_27__img=document.createElement('img');
		this._image_27__img.setAttribute('src',basePath + 'images/image_27.png');
		this._image_27__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_27__img);
		this._image_27.appendChild(this._image_27__img);
		this._image_27.onmouseout=function () {
			me.elementMouseDown['image_27']=false;
		}
		this._image_27.onmousedown=function () {
			me.elementMouseDown['image_27']=true;
		}
		this._image_27.onmouseup=function () {
			me.elementMouseDown['image_27']=false;
		}
		this._image_27.ontouchend=function () {
			me.elementMouseDown['image_27']=false;
		}
		this._menu_inf_03.appendChild(this._image_27);
		this.divSkin.appendChild(this._menu_inf_03);
		this._rest_menu_03=document.createElement('div');
		this._rest_menu_03.ggId='rest_menu_03'
		this._rest_menu_03.ggParameter={ rx:0,ry:0,a:0,sx:50,sy:50 };
		this._rest_menu_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._rest_menu_03.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._rest_menu_03.setAttribute('style',hs);
		this._rest_menu_03__img=document.createElement('img');
		this._rest_menu_03__img.setAttribute('src',basePath + 'images/rest_menu_03.png');
		this._rest_menu_03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._rest_menu_03__img);
		this._rest_menu_03.appendChild(this._rest_menu_03__img);
		this._rest_menu_03.onclick=function () {
			me._rest_menu_03.style[domTransition]='none';
			me._rest_menu_03.style.visibility='hidden';
			me._rest_menu_03.ggVisible=false;
			flag=me._menu_sup_01.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_01.style[domTransition]='none';
			} else {
				me._menu_sup_01.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			} else {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			}
			me._menu_sup_01.ggPositonActive=!flag;
			flag=me._menu_sup_02.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_02.style[domTransition]='none';
			} else {
				me._menu_sup_02.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			} else {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			}
			me._menu_sup_02.ggPositonActive=!flag;
			flag=(me._img_03_nor.style.visibility=='hidden');
			me._img_03_nor.style[domTransition]='none';
			me._img_03_nor.style.visibility=flag?'inherit':'hidden';
			me._img_03_nor.ggVisible=flag;
			flag=(me._img_03_sel.style.visibility=='hidden');
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility=flag?'inherit':'hidden';
			me._img_03_sel.ggVisible=flag;
			flag=me._thumbs_cabinas.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_cabinas.style[domTransition]='none';
			} else {
				me._thumbs_cabinas.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			} else {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			}
			me._thumbs_cabinas.ggOpacitiyActive=!flag;
			flag=me._thumbs_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_menu.style[domTransition]='none';
			} else {
				me._thumbs_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			} else {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			}
			me._thumbs_menu.ggPositonActive=!flag;
		}
		this.divSkin.appendChild(this._rest_menu_03);
		this._thumbs_menu=document.createElement('div');
		this._thumbs_menu.ggId='thumbs_menu'
		this._thumbs_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbs_menu.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 63px;';
		hs+='height: 46px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._thumbs_menu.setAttribute('style',hs);
		this._thumbs_areas_humedas=document.createElement('div');
		this._thumbs_areas_humedas.ggId='thumbs_areas_humedas'
		this._thumbs_areas_humedas.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbs_areas_humedas.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -120px;';
		hs+='width: 1023px;';
		hs+='height: 112px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._thumbs_areas_humedas.setAttribute('style',hs);
		this._thumb_01=document.createElement('div');
		this._thumb_01.ggId='thumb_01'
		this._thumb_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 27px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_01.setAttribute('style',hs);
		this._thumb_01__img=document.createElement('img');
		this._thumb_01__img.setAttribute('src',basePath + 'images/thumb_01.png');
		this._thumb_01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_01__img);
		this._thumb_01.appendChild(this._thumb_01__img);
		this._thumb_01.onclick=function () {
			me.player.openNext("VR_02.swf","");
			me._text_sub_01.innerHTML="\xc1rea H\xfameda 1";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="\xc1rea H\xfameda 1";
				}
			}
		}
		this._thumbs_areas_humedas.appendChild(this._thumb_01);
		this._thumb_02=document.createElement('div');
		this._thumb_02.ggId='thumb_02'
		this._thumb_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 187px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_02.setAttribute('style',hs);
		this._thumb_02__img=document.createElement('img');
		this._thumb_02__img.setAttribute('src',basePath + 'images/thumb_02.png');
		this._thumb_02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_02__img);
		this._thumb_02.appendChild(this._thumb_02__img);
		this._thumb_02.onclick=function () {
			me.player.openNext("VR_03.swf","");
			me._text_sub_01.innerHTML="\xc1rea H\xfameda 2";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="\xc1rea H\xfameda 2";
				}
			}
		}
		this._thumbs_areas_humedas.appendChild(this._thumb_02);
		this._thumbs_menu.appendChild(this._thumbs_areas_humedas);
		this._thumbs_cabinas=document.createElement('div');
		this._thumbs_cabinas.ggId='thumbs_cabinas'
		this._thumbs_cabinas.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbs_cabinas.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -120px;';
		hs+='width: 1023px;';
		hs+='height: 112px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._thumbs_cabinas.setAttribute('style',hs);
		this._reset_thumbs=document.createElement('div');
		this._reset_thumbs.ggId='reset_thumbs'
		this._reset_thumbs.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._reset_thumbs.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 869px;';
		hs+='top:  240px;';
		hs+='width: 62px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._reset_thumbs.setAttribute('style',hs);
		this._reset_thumbs.onclick=function () {
			me._thumb_03_bw.style[domTransition]='none';
			me._thumb_03_bw.style.visibility='inherit';
			me._thumb_03_bw.ggVisible=true;
			me._thumb_04_bw.style[domTransition]='none';
			me._thumb_04_bw.style.visibility='inherit';
			me._thumb_04_bw.ggVisible=true;
			me._thumb_05_bw.style[domTransition]='none';
			me._thumb_05_bw.style.visibility='inherit';
			me._thumb_05_bw.ggVisible=true;
			me._thumb_06_bw.style[domTransition]='none';
			me._thumb_06_bw.style.visibility='inherit';
			me._thumb_06_bw.ggVisible=true;
		}
		this._thumbs_cabinas.appendChild(this._reset_thumbs);
		this._thumb_03=document.createElement('div');
		this._thumb_03.ggId='thumb_03'
		this._thumb_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 27px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_03.setAttribute('style',hs);
		this._thumb_03__img=document.createElement('img');
		this._thumb_03__img.setAttribute('src',basePath + 'images/thumb_03.png');
		this._thumb_03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_03__img);
		this._thumb_03.appendChild(this._thumb_03__img);
		this._thumbs_cabinas.appendChild(this._thumb_03);
		this._thumb_03_bw=document.createElement('div');
		this._thumb_03_bw.ggId='thumb_03_BW'
		this._thumb_03_bw.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_03_bw.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 27px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_03_bw.setAttribute('style',hs);
		this._thumb_03_bw__img=document.createElement('img');
		this._thumb_03_bw__img.setAttribute('src',basePath + 'images/thumb_03_bw.png');
		this._thumb_03_bw__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_03_bw__img);
		this._thumb_03_bw.appendChild(this._thumb_03_bw__img);
		this._thumb_03_bw.onclick=function () {
			me.player.openNext("VR_04.swf","");
			me._text_sub_01.innerHTML="CABINA ESTRELLA";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="CABINA ESTRELLA";
				}
			}
			me._rest_menu_03.style[domTransition]='none';
			me._rest_menu_03.style.visibility='hidden';
			me._rest_menu_03.ggVisible=false;
			flag=me._menu_sup_01.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_01.style[domTransition]='none';
			} else {
				me._menu_sup_01.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			} else {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			}
			me._menu_sup_01.ggPositonActive=!flag;
			flag=me._menu_sup_02.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_02.style[domTransition]='none';
			} else {
				me._menu_sup_02.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			} else {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			}
			me._menu_sup_02.ggPositonActive=!flag;
			flag=me._thumbs_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_menu.style[domTransition]='none';
			} else {
				me._thumbs_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			} else {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			}
			me._thumbs_menu.ggPositonActive=!flag;
			flag=me._thumbs_cabinas.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_cabinas.style[domTransition]='none';
			} else {
				me._thumbs_cabinas.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			} else {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			}
			me._thumbs_cabinas.ggOpacitiyActive=!flag;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='inherit';
			me._img_03_ove2.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='hidden';
			me._img_01_sel.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='inherit';
			me._img_01_nor.ggVisible=true;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='inherit';
			me._img_02_nor.ggVisible=true;
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='hidden';
			me._img_02_sel.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='inherit';
			me._img_04_nor.ggVisible=true;
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='hidden';
			me._img_04_sel.ggVisible=false;
			me._thumb_03_bw.style[domTransition]='none';
			me._thumb_03_bw.style.visibility='hidden';
			me._thumb_03_bw.ggVisible=false;
			me._thumb_04_bw.style[domTransition]='none';
			me._thumb_04_bw.style.visibility='inherit';
			me._thumb_04_bw.ggVisible=true;
			me._thumb_05_bw.style[domTransition]='none';
			me._thumb_05_bw.style.visibility='inherit';
			me._thumb_05_bw.ggVisible=true;
			me._thumb_06_bw.style[domTransition]='none';
			me._thumb_06_bw.style.visibility='inherit';
			me._thumb_06_bw.ggVisible=true;
		}
		this._thumb_03_bw.onmousedown=function () {
			flag=me._thumb_03_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_03_bw.style[domTransition]='none';
			} else {
				me._thumb_03_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_03_bw.style.opacity='1';
				me._thumb_03_bw.style.visibility=me._thumb_03_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_03_bw.style.opacity='0.01';
				me._thumb_03_bw.style.visibility=me._thumb_03_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_03_bw.ggOpacitiyActive=!flag;
		}
		this._thumb_03_bw.onmouseup=function () {
			flag=me._thumb_03_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_03_bw.style[domTransition]='none';
			} else {
				me._thumb_03_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_03_bw.style.opacity='1';
				me._thumb_03_bw.style.visibility=me._thumb_03_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_03_bw.style.opacity='1';
				me._thumb_03_bw.style.visibility=me._thumb_03_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_03_bw.ggOpacitiyActive=!flag;
		}
		this._thumbs_cabinas.appendChild(this._thumb_03_bw);
		this._thumb_04=document.createElement('div');
		this._thumb_04.ggId='thumb_04'
		this._thumb_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 187px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_04.setAttribute('style',hs);
		this._thumb_04__img=document.createElement('img');
		this._thumb_04__img.setAttribute('src',basePath + 'images/thumb_04.png');
		this._thumb_04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_04__img);
		this._thumb_04.appendChild(this._thumb_04__img);
		this._thumbs_cabinas.appendChild(this._thumb_04);
		this._thumb_04_bw=document.createElement('div');
		this._thumb_04_bw.ggId='thumb_04_BW'
		this._thumb_04_bw.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_04_bw.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 187px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_04_bw.setAttribute('style',hs);
		this._thumb_04_bw__img=document.createElement('img');
		this._thumb_04_bw__img.setAttribute('src',basePath + 'images/thumb_04_bw.png');
		this._thumb_04_bw__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_04_bw__img);
		this._thumb_04_bw.appendChild(this._thumb_04_bw__img);
		this._thumb_04_bw.onclick=function () {
			me.player.openNext("VR_05.swf","");
			me._text_sub_01.innerHTML="CABINA ARBOL Y AIRE";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="CABINA ARBOL Y AIRE";
				}
			}
			me._rest_menu_03.style[domTransition]='none';
			me._rest_menu_03.style.visibility='hidden';
			me._rest_menu_03.ggVisible=false;
			flag=me._menu_sup_01.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_01.style[domTransition]='none';
			} else {
				me._menu_sup_01.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			} else {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			}
			me._menu_sup_01.ggPositonActive=!flag;
			flag=me._menu_sup_02.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_02.style[domTransition]='none';
			} else {
				me._menu_sup_02.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			} else {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			}
			me._menu_sup_02.ggPositonActive=!flag;
			flag=me._thumbs_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_menu.style[domTransition]='none';
			} else {
				me._thumbs_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			} else {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			}
			me._thumbs_menu.ggPositonActive=!flag;
			flag=me._thumbs_cabinas.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_cabinas.style[domTransition]='none';
			} else {
				me._thumbs_cabinas.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			} else {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			}
			me._thumbs_cabinas.ggOpacitiyActive=!flag;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='inherit';
			me._img_03_ove2.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='hidden';
			me._img_01_sel.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='inherit';
			me._img_01_nor.ggVisible=true;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='inherit';
			me._img_02_nor.ggVisible=true;
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='hidden';
			me._img_02_sel.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='inherit';
			me._img_04_nor.ggVisible=true;
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='hidden';
			me._img_04_sel.ggVisible=false;
			me._thumb_04_bw.style[domTransition]='none';
			me._thumb_04_bw.style.visibility='hidden';
			me._thumb_04_bw.ggVisible=false;
			me._thumb_03_bw.style[domTransition]='none';
			me._thumb_03_bw.style.visibility='inherit';
			me._thumb_03_bw.ggVisible=true;
			me._thumb_05_bw.style[domTransition]='none';
			me._thumb_05_bw.style.visibility='inherit';
			me._thumb_05_bw.ggVisible=true;
			me._thumb_06_bw.style[domTransition]='none';
			me._thumb_06_bw.style.visibility='inherit';
			me._thumb_06_bw.ggVisible=true;
		}
		this._thumb_04_bw.onmousedown=function () {
			flag=me._thumb_04_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_04_bw.style[domTransition]='none';
			} else {
				me._thumb_04_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_04_bw.style.opacity='1';
				me._thumb_04_bw.style.visibility=me._thumb_04_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_04_bw.style.opacity='0.01';
				me._thumb_04_bw.style.visibility=me._thumb_04_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_04_bw.ggOpacitiyActive=!flag;
		}
		this._thumb_04_bw.onmouseup=function () {
			flag=me._thumb_04_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_04_bw.style[domTransition]='none';
			} else {
				me._thumb_04_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_04_bw.style.opacity='1';
				me._thumb_04_bw.style.visibility=me._thumb_04_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_04_bw.style.opacity='1';
				me._thumb_04_bw.style.visibility=me._thumb_04_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_04_bw.ggOpacitiyActive=!flag;
		}
		this._thumbs_cabinas.appendChild(this._thumb_04_bw);
		this._thumb_05=document.createElement('div');
		this._thumb_05.ggId='thumb_05'
		this._thumb_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_05.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 347px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_05.setAttribute('style',hs);
		this._thumb_05__img=document.createElement('img');
		this._thumb_05__img.setAttribute('src',basePath + 'images/thumb_05.png');
		this._thumb_05__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_05__img);
		this._thumb_05.appendChild(this._thumb_05__img);
		this._thumbs_cabinas.appendChild(this._thumb_05);
		this._thumb_05_bw=document.createElement('div');
		this._thumb_05_bw.ggId='thumb_05_BW'
		this._thumb_05_bw.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_05_bw.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 347px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_05_bw.setAttribute('style',hs);
		this._thumb_05_bw__img=document.createElement('img');
		this._thumb_05_bw__img.setAttribute('src',basePath + 'images/thumb_05_bw.png');
		this._thumb_05_bw__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_05_bw__img);
		this._thumb_05_bw.appendChild(this._thumb_05_bw__img);
		this._thumb_05_bw.onclick=function () {
			me.player.openNext("VR_06.swf","");
			me._text_sub_01.innerHTML="CABINA AGUA";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="CABINA AGUA";
				}
			}
			me._rest_menu_03.style[domTransition]='none';
			me._rest_menu_03.style.visibility='hidden';
			me._rest_menu_03.ggVisible=false;
			flag=me._menu_sup_01.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_01.style[domTransition]='none';
			} else {
				me._menu_sup_01.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			} else {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			}
			me._menu_sup_01.ggPositonActive=!flag;
			flag=me._menu_sup_02.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_02.style[domTransition]='none';
			} else {
				me._menu_sup_02.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			} else {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			}
			me._menu_sup_02.ggPositonActive=!flag;
			flag=me._thumbs_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_menu.style[domTransition]='none';
			} else {
				me._thumbs_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			} else {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			}
			me._thumbs_menu.ggPositonActive=!flag;
			flag=me._thumbs_cabinas.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_cabinas.style[domTransition]='none';
			} else {
				me._thumbs_cabinas.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			} else {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			}
			me._thumbs_cabinas.ggOpacitiyActive=!flag;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='inherit';
			me._img_03_ove2.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='hidden';
			me._img_01_sel.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='inherit';
			me._img_01_nor.ggVisible=true;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='inherit';
			me._img_02_nor.ggVisible=true;
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='hidden';
			me._img_02_sel.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='inherit';
			me._img_04_nor.ggVisible=true;
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='hidden';
			me._img_04_sel.ggVisible=false;
			me._thumb_05_bw.style[domTransition]='none';
			me._thumb_05_bw.style.visibility='hidden';
			me._thumb_05_bw.ggVisible=false;
			me._thumb_03_bw.style[domTransition]='none';
			me._thumb_03_bw.style.visibility='inherit';
			me._thumb_03_bw.ggVisible=true;
			me._thumb_04_bw.style[domTransition]='none';
			me._thumb_04_bw.style.visibility='inherit';
			me._thumb_04_bw.ggVisible=true;
			me._thumb_06_bw.style[domTransition]='none';
			me._thumb_06_bw.style.visibility='inherit';
			me._thumb_06_bw.ggVisible=true;
		}
		this._thumb_05_bw.onmousedown=function () {
			flag=me._thumb_05_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_05_bw.style[domTransition]='none';
			} else {
				me._thumb_05_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_05_bw.style.opacity='1';
				me._thumb_05_bw.style.visibility=me._thumb_05_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_05_bw.style.opacity='0.01';
				me._thumb_05_bw.style.visibility=me._thumb_05_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_05_bw.ggOpacitiyActive=!flag;
		}
		this._thumb_05_bw.onmouseup=function () {
			flag=me._thumb_05_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_05_bw.style[domTransition]='none';
			} else {
				me._thumb_05_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_05_bw.style.opacity='1';
				me._thumb_05_bw.style.visibility=me._thumb_05_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_05_bw.style.opacity='1';
				me._thumb_05_bw.style.visibility=me._thumb_05_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_05_bw.ggOpacitiyActive=!flag;
		}
		this._thumbs_cabinas.appendChild(this._thumb_05_bw);
		this._thumb_06=document.createElement('div');
		this._thumb_06.ggId='thumb_06'
		this._thumb_06.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_06.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 507px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_06.setAttribute('style',hs);
		this._thumb_06__img=document.createElement('img');
		this._thumb_06__img.setAttribute('src',basePath + 'images/thumb_06.png');
		this._thumb_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_06__img);
		this._thumb_06.appendChild(this._thumb_06__img);
		this._thumbs_cabinas.appendChild(this._thumb_06);
		this._thumb_06_bw=document.createElement('div');
		this._thumb_06_bw.ggId='thumb_06_BW'
		this._thumb_06_bw.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumb_06_bw.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 507px;';
		hs+='top:  17px;';
		hs+='width: 150px;';
		hs+='height: 95px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumb_06_bw.setAttribute('style',hs);
		this._thumb_06_bw__img=document.createElement('img');
		this._thumb_06_bw__img.setAttribute('src',basePath + 'images/thumb_06_bw.png');
		this._thumb_06_bw__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._thumb_06_bw__img);
		this._thumb_06_bw.appendChild(this._thumb_06_bw__img);
		this._thumb_06_bw.onclick=function () {
			me.player.openNext("VR_07.swf","");
			me._text_sub_01.innerHTML="CABINA FLOTARIUM";
			if (me._text_sub_01.ggUpdateText) {
				me._text_sub_01.ggUpdateText=function() {
					me._text_sub_01.innerHTML="CABINA FLOTARIUM";
				}
			}
			me._rest_menu_03.style[domTransition]='none';
			me._rest_menu_03.style.visibility='hidden';
			me._rest_menu_03.ggVisible=false;
			flag=me._menu_sup_01.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_01.style[domTransition]='none';
			} else {
				me._menu_sup_01.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			} else {
				me._menu_sup_01.ggParameter.rx=0;me._menu_sup_01.ggParameter.ry=0;
				me._menu_sup_01.style[domTransform]=parameterToTransform(me._menu_sup_01.ggParameter);
			}
			me._menu_sup_01.ggPositonActive=!flag;
			flag=me._menu_sup_02.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._menu_sup_02.style[domTransition]='none';
			} else {
				me._menu_sup_02.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			} else {
				me._menu_sup_02.ggParameter.rx=0;me._menu_sup_02.ggParameter.ry=0;
				me._menu_sup_02.style[domTransform]=parameterToTransform(me._menu_sup_02.ggParameter);
			}
			me._menu_sup_02.ggPositonActive=!flag;
			flag=me._thumbs_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_menu.style[domTransition]='none';
			} else {
				me._thumbs_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			} else {
				me._thumbs_menu.ggParameter.rx=0;me._thumbs_menu.ggParameter.ry=0;
				me._thumbs_menu.style[domTransform]=parameterToTransform(me._thumbs_menu.ggParameter);
			}
			me._thumbs_menu.ggPositonActive=!flag;
			flag=me._thumbs_cabinas.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumbs_cabinas.style[domTransition]='none';
			} else {
				me._thumbs_cabinas.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			} else {
				me._thumbs_cabinas.style.opacity='0';
				me._thumbs_cabinas.style.visibility='hidden';
			}
			me._thumbs_cabinas.ggOpacitiyActive=!flag;
			me._img_03_ove2.style[domTransition]='none';
			me._img_03_ove2.style.visibility='inherit';
			me._img_03_ove2.ggVisible=true;
			me._img_03_sel.style[domTransition]='none';
			me._img_03_sel.style.visibility='hidden';
			me._img_03_sel.ggVisible=false;
			me._img_01_sel.style[domTransition]='none';
			me._img_01_sel.style.visibility='hidden';
			me._img_01_sel.ggVisible=false;
			me._img_01_nor.style[domTransition]='none';
			me._img_01_nor.style.visibility='inherit';
			me._img_01_nor.ggVisible=true;
			me._img_02_nor.style[domTransition]='none';
			me._img_02_nor.style.visibility='inherit';
			me._img_02_nor.ggVisible=true;
			me._img_02_sel.style[domTransition]='none';
			me._img_02_sel.style.visibility='hidden';
			me._img_02_sel.ggVisible=false;
			me._img_04_nor.style[domTransition]='none';
			me._img_04_nor.style.visibility='inherit';
			me._img_04_nor.ggVisible=true;
			me._img_04_sel.style[domTransition]='none';
			me._img_04_sel.style.visibility='hidden';
			me._img_04_sel.ggVisible=false;
			me._thumb_06_bw.style[domTransition]='none';
			me._thumb_06_bw.style.visibility='hidden';
			me._thumb_06_bw.ggVisible=false;
			me._thumb_03_bw.style[domTransition]='none';
			me._thumb_03_bw.style.visibility='inherit';
			me._thumb_03_bw.ggVisible=true;
			me._thumb_04_bw.style[domTransition]='none';
			me._thumb_04_bw.style.visibility='inherit';
			me._thumb_04_bw.ggVisible=true;
			me._thumb_05_bw.style[domTransition]='none';
			me._thumb_05_bw.style.visibility='inherit';
			me._thumb_05_bw.ggVisible=true;
		}
		this._thumb_06_bw.onmousedown=function () {
			flag=me._thumb_06_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_06_bw.style[domTransition]='none';
			} else {
				me._thumb_06_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_06_bw.style.opacity='1';
				me._thumb_06_bw.style.visibility=me._thumb_06_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_06_bw.style.opacity='0.01';
				me._thumb_06_bw.style.visibility=me._thumb_06_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_06_bw.ggOpacitiyActive=!flag;
		}
		this._thumb_06_bw.onmouseup=function () {
			flag=me._thumb_06_bw.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._thumb_06_bw.style[domTransition]='none';
			} else {
				me._thumb_06_bw.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumb_06_bw.style.opacity='1';
				me._thumb_06_bw.style.visibility=me._thumb_06_bw.ggVisible?'inherit':'hidden';
			} else {
				me._thumb_06_bw.style.opacity='1';
				me._thumb_06_bw.style.visibility=me._thumb_06_bw.ggVisible?'inherit':'hidden';
			}
			me._thumb_06_bw.ggOpacitiyActive=!flag;
		}
		this._thumbs_cabinas.appendChild(this._thumb_06_bw);
		this._thumbs_menu.appendChild(this._thumbs_cabinas);
		this.divSkin.appendChild(this._thumbs_menu);
		me._img_01_nor.style[domTransition]='none';
		me._img_01_nor.style.visibility='hidden';
		me._img_01_nor.ggVisible=false;
		me._img_02_sel.style[domTransition]='none';
		me._img_02_sel.style.visibility='hidden';
		me._img_02_sel.ggVisible=false;
		me._img_03_ove2.style[domTransition]='none';
		me._img_03_ove2.style.visibility='hidden';
		me._img_03_ove2.ggVisible=false;
		me._img_03_sel.style[domTransition]='none';
		me._img_03_sel.style.visibility='hidden';
		me._img_03_sel.ggVisible=false;
		me._img_04_sel.style[domTransition]='none';
		me._img_04_sel.style.visibility='hidden';
		me._img_04_sel.ggVisible=false;
		me._img_04_ove.style[domTransition]='none';
		me._img_04_ove.style.visibility='hidden';
		me._img_04_ove.ggVisible=false;
		me._rest_menu_03.style[domTransition]='none';
		me._rest_menu_03.style.visibility='hidden';
		me._rest_menu_03.ggVisible=false;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['image_22']) {
			me.player.changePan(0.3,true);
		}
		if (me.elementMouseDown['image_23']) {
			me.player.changePan(-0.3,true);
		}
		if (me.elementMouseDown['image_24']) {
			me.player.changeTilt(0.3,true);
		}
		if (me.elementMouseDown['image_25']) {
			me.player.changeTilt(-0.3,true);
		}
		if (me.elementMouseDown['image_26']) {
			me.player.changeFovLog(-0.3,true);
		}
		if (me.elementMouseDown['image_27']) {
			me.player.changeFovLog(0.3,true);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		if (hotspot.skinid=='hotspot_flecha') {
			this.__div=document.createElement('div');
			this.__div.ggId='hotspot_flecha'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 962px;';
			hs+='top:  648px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_580=document.createElement('div');
			this._image_580.ggId='Image 58'
			this._image_580.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_580.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -62px;';
			hs+='top:  -34px;';
			hs+='width: 126px;';
			hs+='height: 94px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._image_580.setAttribute('style',hs);
			this._image_580__img=document.createElement('img');
			this._image_580__img.setAttribute('src',basePath + 'images/image_580.png');
			this._image_580__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
			me.player.checkLoaded.push(this._image_580__img);
			this._image_580.appendChild(this._image_580__img);
			this._image_580.onclick=function () {
				me.player.openNext("VR_03.swf","");
			}
			this.__div.appendChild(this._image_580);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId='hotspot_flecha2'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 962px;';
			hs+='top:  648px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_58=document.createElement('div');
			this._image_58.ggId='Image 58'
			this._image_58.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_58.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -62px;';
			hs+='top:  -34px;';
			hs+='width: 126px;';
			hs+='height: 94px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._image_58.setAttribute('style',hs);
			this._image_58__img=document.createElement('img');
			this._image_58__img.setAttribute('src',basePath + 'images/image_58.png');
			this._image_58__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
			me.player.checkLoaded.push(this._image_58__img);
			this._image_58.appendChild(this._image_58__img);
			this._image_58.onclick=function () {
				me.player.openNext("VR_02.swf","");
			}
			this.__div.appendChild(this._image_58);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};
/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx0:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
function gz$gwx0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_1
__WXML_GLOBAL__.ops_cached.$gwx0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'imageLoaded']]],[[2,'!='],[[7],[3,'file_type']],[1,'video']]])
Z([[7],[3,'isSave']])
Z([[7],[3,'id']])
Z([3,'detail'])
Z([3,'260'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1'])
Z([[7],[3,'toTop']])
Z([3,'index '])
Z([a,[3,'padding-top: '],[[2,'+'],[[6],[[7],[3,'menuInfo']],[3,'top']],[[6],[[7],[3,'menuInfo']],[3,'height']]],[3,'px']])
Z([[2,'&&'],[[7],[3,'dateShow']],[[2,'!'],[[7],[3,'empty']]]])
Z([3,'tab'])
Z([[2,'=='],[[7],[3,'parameterListIndex']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'tabList']],[3,'length']],[1,1]])
Z([[2,'!'],[[7],[3,'isDateShow']]])
Z([3,'listindex'])
Z([1,4])
Z([3,'key'])
Z([[2,'!'],[[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'listindex']],[1,2]],[[2,'=='],[[7],[3,'selectClassifyId']],[1,2]]],[[2,'&&'],[[2,'=='],[[7],[3,'listindex']],[1,3]],[[2,'=='],[[7],[3,'selectClassifyId']],[1,2]]]]])
Z([3,'itemindex'])
Z([3,'itemlist'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'listindex']],[1,0]],[[7],[3,'list1']],[[2,'?:'],[[2,'=='],[[7],[3,'listindex']],[1,1]],[[7],[3,'list2']],[[2,'?:'],[[2,'=='],[[7],[3,'listindex']],[1,2]],[[7],[3,'list3']],[[7],[3,'list4']]]]])
Z([3,'key2'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'itemlist']])
Z(z[11])
Z([3,'goDetail'])
Z([3,'goodItem'])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'file_type']])
Z([3,'goodItem-view'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'file_type']],[1,'video']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'file_type']],[1,'voice']])
Z([[6],[[7],[3,'item']],[3,'is_top']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'loaded']],[1,true]])
Z([1,true])
Z([3,'0'])
Z([[7],[3,'isDateShow']])
Z(z[9])
Z([3,'listitem'])
Z([[7],[3,'photoListByDate']])
Z(z[11])
Z([[6],[[7],[3,'listitem']],[3,'list']])
Z(z[11])
Z(z[21])
Z([3,'dategoodItem '])
Z([3,'2'])
Z(z[24])
Z([[7],[3,'listindex']])
Z([3,'dategoodItem-view'])
Z(z[29])
Z(z[27])
Z(z[28])
Z(z[30])
Z(z[31])
Z(z[32])
Z([[2,'=='],[[7],[3,'parameterListIndex']],[1,1]])
Z([[2,'>'],[[6],[[7],[3,'albumTabList']],[3,'length']],[1,0]])
Z(z[9])
Z([1,3])
Z(z[11])
Z(z[13])
Z(z[14])
Z([[2,'?:'],[[2,'=='],[[7],[3,'listindex']],[1,0]],[[7],[3,'list1']],[[2,'?:'],[[2,'=='],[[7],[3,'listindex']],[1,1]],[[7],[3,'list2']],[[7],[3,'list3']]]])
Z(z[11])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[11])
Z(z[21])
Z(z[22])
Z([3,'3'])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[31])
Z(z[32])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'albumList']],[3,'length']],[1,0]],[[7],[3,'empty']]])
Z([3,'loadmore'])
Z([[7],[3,'hasMore']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'hasMore']]],[[2,'!'],[[7],[3,'empty']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
function gz$gwx0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_3)return __WXML_GLOBAL__.ops_cached.$gwx0_3
__WXML_GLOBAL__.ops_cached.$gwx0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_3);return __WXML_GLOBAL__.ops_cached.$gwx0_3
}
function gz$gwx0_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_4)return __WXML_GLOBAL__.ops_cached.$gwx0_4
__WXML_GLOBAL__.ops_cached.$gwx0_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_4);return __WXML_GLOBAL__.ops_cached.$gwx0_4
}
function gz$gwx0_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_5)return __WXML_GLOBAL__.ops_cached.$gwx0_5
__WXML_GLOBAL__.ops_cached.$gwx0_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'!'],[[7],[3,'imageLoaded']]],[[2,'!='],[[7],[3,'file_type']],[1,'video']]])
Z([3,'index flex fc ac'])
Z([[7],[3,'video_url']])
Z(z[2])
Z([3,'hotList'])
Z([[7],[3,'list']])
Z([3,'key'])
Z([3,'selectChange'])
Z([a,[3,'item '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'id']],[[7],[3,'id']]],[1,'items'],[1,'']]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'video_url']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'id']],[[7],[3,'id']]])
Z([3,'loadmore'])
Z([[7],[3,'hasMore']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'hasMore']]],[[2,'!'],[[7],[3,'empty']]]])
Z([[7],[3,'isSave']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_5);return __WXML_GLOBAL__.ops_cached.$gwx0_5
}
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/tabindex/detail/index.wxml','./pages/tabindex/isfp/index.wxml','./pages/tabindex/search/index.wxml','./pages/tabindex/voiceDetail/detail/index.wxml','./pages/tabindex/voiceDetail/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_1()
var xC=_n('backbtn')
_rz(z,xC,'model',0,e,s,gg)
_(r,xC)
var oD=_n('loading')
_rz(z,oD,'show',1,e,s,gg)
_(r,oD)
var oB=_v()
_(r,oB)
if(_oz(z,2,e,s,gg)){oB.wxVkey=1
}
var fE=_mz(z,'complaint',['id',3,'tag',1,'top',2],[],e,s,gg)
_(r,fE)
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
var hG=_n('backbtn')
_rz(z,hG,'model',0,e,s,gg)
_(r,hG)
var oH=_n('totop')
_rz(z,oH,'show',1,e,s,gg)
_(r,oH)
var cI=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,4,e,s,gg)){oJ.wxVkey=1
}
var lK=_n('view')
_rz(z,lK,'class',5,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,6,e,s,gg)){aL.wxVkey=1
var eN=_v()
_(aL,eN)
if(_oz(z,7,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(aL,bO)
if(_oz(z,8,e,s,gg)){bO.wxVkey=1
var xQ=_v()
_(bO,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_v()
_(hU,cW)
if(_oz(z,12,cT,fS,gg)){cW.wxVkey=1
var oX=_v()
_(cW,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_v()
_(e2,o4)
var x5=function(f7,o6,c8,gg){
var o0=_mz(z,'view',['bindtap',21,'class',1,'data-action',2,'data-id',3,'data-type',4],[],f7,o6,gg)
var oBB=_n('view')
_rz(z,oBB,'class',26,f7,o6,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,27,f7,o6,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,28,f7,o6,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(oBB,tEB)
if(_oz(z,29,f7,o6,gg)){tEB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
tEB.wxXCkey=1
_(o0,oBB)
var cAB=_v()
_(o0,cAB)
if(_oz(z,30,f7,o6,gg)){cAB.wxVkey=1
var eFB=_mz(z,'loading',['show',31,'zIndex',1],[],f7,o6,gg)
_(cAB,eFB)
}
cAB.wxXCkey=1
cAB.wxXCkey=3
_(c8,o0)
return c8
}
o4.wxXCkey=4
_2z(z,19,x5,t1,aZ,gg,o4,'item','index','key')
return e2
}
oX.wxXCkey=4
_2z(z,15,lY,cT,fS,gg,oX,'itemlist','itemindex','key2')
}
cW.wxXCkey=1
cW.wxXCkey=3
return hU
}
xQ.wxXCkey=4
_2z(z,10,oR,e,s,gg,xQ,'item','listindex','key')
}
var oP=_v()
_(aL,oP)
if(_oz(z,33,e,s,gg)){oP.wxVkey=1
var bGB=_v()
_(oP,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=function(oPB,cOB,lQB,gg){
var tSB=_mz(z,'view',['bindtap',40,'class',1,'data-action',2,'data-id',3,'data-index',4],[],oPB,cOB,gg)
var bUB=_n('view')
_rz(z,bUB,'class',45,oPB,cOB,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,46,oPB,cOB,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(bUB,xWB)
if(_oz(z,47,oPB,cOB,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(bUB,oXB)
if(_oz(z,48,oPB,cOB,gg)){oXB.wxVkey=1
}
oVB.wxXCkey=1
xWB.wxXCkey=1
oXB.wxXCkey=1
_(tSB,bUB)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,49,oPB,cOB,gg)){eTB.wxVkey=1
var fYB=_mz(z,'loading',['show',50,'zIndex',1],[],oPB,cOB,gg)
_(eTB,fYB)
}
eTB.wxXCkey=1
eTB.wxXCkey=3
_(lQB,tSB)
return lQB
}
hMB.wxXCkey=4
_2z(z,38,oNB,oJB,xIB,gg,hMB,'item','index','key')
return fKB
}
bGB.wxXCkey=4
_2z(z,36,oHB,e,s,gg,bGB,'listitem','listindex','key')
}
eN.wxXCkey=1
bO.wxXCkey=1
bO.wxXCkey=3
oP.wxXCkey=1
oP.wxXCkey=3
}
var tM=_v()
_(lK,tM)
if(_oz(z,52,e,s,gg)){tM.wxVkey=1
var cZB=_v()
_(tM,cZB)
if(_oz(z,53,e,s,gg)){cZB.wxVkey=1
}
var o2B=_v()
_(tM,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_v()
_(a6B,e8B)
var b9B=function(xAC,o0B,oBC,gg){
var cDC=_v()
_(oBC,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_mz(z,'view',['bindtap',65,'class',1,'data-action',2,'data-id',3,'data-type',4],[],cGC,oFC,gg)
var tKC=_n('view')
_rz(z,tKC,'class',70,cGC,oFC,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,71,cGC,oFC,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(tKC,bMC)
if(_oz(z,72,cGC,oFC,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(tKC,oNC)
if(_oz(z,73,cGC,oFC,gg)){oNC.wxVkey=1
}
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
_(aJC,tKC)
var xOC=_mz(z,'loading',['show',74,'zIndex',1],[],cGC,oFC,gg)
_(aJC,xOC)
_(oHC,aJC)
return oHC
}
cDC.wxXCkey=4
_2z(z,63,hEC,xAC,o0B,gg,cDC,'item','index','key')
return oBC
}
e8B.wxXCkey=4
_2z(z,59,b9B,l5B,o4B,gg,e8B,'itemlist','itemindex','key')
return a6B
}
o2B.wxXCkey=4
_2z(z,55,c3B,e,s,gg,o2B,'item','listindex','key')
var h1B=_v()
_(tM,h1B)
if(_oz(z,76,e,s,gg)){h1B.wxVkey=1
}
cZB.wxXCkey=1
h1B.wxXCkey=1
}
var oPC=_n('view')
_rz(z,oPC,'class',77,e,s,gg)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,78,e,s,gg)){fQC.wxVkey=1
}
var cRC=_v()
_(oPC,cRC)
if(_oz(z,79,e,s,gg)){cRC.wxVkey=1
}
fQC.wxXCkey=1
cRC.wxXCkey=1
_(lK,oPC)
aL.wxXCkey=1
aL.wxXCkey=3
tM.wxXCkey=1
tM.wxXCkey=3
_(cI,lK)
oJ.wxXCkey=1
_(r,cI)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx0_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx0_5()
var lWC=_n('loading')
_rz(z,lWC,'show',0,e,s,gg)
_(r,lWC)
var aXC=_n('view')
_rz(z,aXC,'class',1,e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,2,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(aXC,eZC)
if(_oz(z,3,e,s,gg)){eZC.wxVkey=1
}
tYC.wxXCkey=1
eZC.wxXCkey=1
_(r,aXC)
var b1C=_n('view')
_rz(z,b1C,'class',4,e,s,gg)
var o2C=_v()
_(b1C,o2C)
var x3C=function(f5C,o4C,c6C,gg){
var o8C=_mz(z,'view',['bindtap',7,'class',1,'data-index',2],[],f5C,o4C,gg)
var c9C=_v()
_(o8C,c9C)
if(_oz(z,10,f5C,o4C,gg)){c9C.wxVkey=1
}
var o0C=_v()
_(o8C,o0C)
if(_oz(z,11,f5C,o4C,gg)){o0C.wxVkey=1
}
c9C.wxXCkey=1
o0C.wxXCkey=1
_(c6C,o8C)
return c6C
}
o2C.wxXCkey=2
_2z(z,5,x3C,e,s,gg,o2C,'item','index','key')
var lAD=_n('view')
_rz(z,lAD,'class',12,e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,13,e,s,gg)){aBD.wxVkey=1
}
var tCD=_v()
_(lAD,tCD)
if(_oz(z,14,e,s,gg)){tCD.wxVkey=1
}
aBD.wxXCkey=1
tCD.wxXCkey=1
_(b1C,lAD)
_(r,b1C)
var oVC=_v()
_(r,oVC)
if(_oz(z,15,e,s,gg)){oVC.wxVkey=1
}
oVC.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/tabindex/detail/index.json'] = {"usingComponents":{"backbtn":"/components/backBtn/backbtn","complaint":"/components/complaint/complaint","loading":"/components/loading/index"},"navigationStyle":"custom","navigationBarTextStyle":"white","navigationBarTitleText":"详情"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tabindex/detail/index.wxml'] = [$gwx0, './pages/tabindex/detail/index.wxml'];else __wxAppCode__['pages/tabindex/detail/index.wxml'] = $gwx0( './pages/tabindex/detail/index.wxml' );
		__wxAppCode__['pages/tabindex/isfp/index.json'] = {"usingComponents":{"backbtn":"/components/backBtn/backbtn","loading":"/components/imgloading/index","totop":"/components/totop/index"},"navigationStyle":"custom","navigationBarTextStyle":"white","navigationBarTitleText":"创作者"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tabindex/isfp/index.wxml'] = [$gwx0, './pages/tabindex/isfp/index.wxml'];else __wxAppCode__['pages/tabindex/isfp/index.wxml'] = $gwx0( './pages/tabindex/isfp/index.wxml' );
		__wxAppCode__['pages/tabindex/search/index.json'] = {"navigationStyle":"default","navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"我的关注","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tabindex/search/index.wxml'] = [$gwx0, './pages/tabindex/search/index.wxml'];else __wxAppCode__['pages/tabindex/search/index.wxml'] = $gwx0( './pages/tabindex/search/index.wxml' );
		__wxAppCode__['pages/tabindex/voiceDetail/detail/index.json'] = {"navigationStyle":"default","navigationBarTextStyle":"white","navigationBarTitleText":"","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tabindex/voiceDetail/detail/index.wxml'] = [$gwx0, './pages/tabindex/voiceDetail/detail/index.wxml'];else __wxAppCode__['pages/tabindex/voiceDetail/detail/index.wxml'] = $gwx0( './pages/tabindex/voiceDetail/detail/index.wxml' );
		__wxAppCode__['pages/tabindex/voiceDetail/index/index.json'] = {"usingComponents":{"loading":"/components/loading/index"},"navigationStyle":"default","navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white","navigationBarTitleText":"表情包"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tabindex/voiceDetail/index/index.wxml'] = [$gwx0, './pages/tabindex/voiceDetail/index/index.wxml'];else __wxAppCode__['pages/tabindex/voiceDetail/index/index.wxml'] = $gwx0( './pages/tabindex/voiceDetail/index/index.wxml' );
	
	__wxRoute = 'pages/tabindex/detail/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tabindex/detail/index.js';	define("pages/tabindex/detail/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var app = getApp();

var apiList = require('../../../utils/api.js');

var login = require('../../../utils/login.js');

var commonUtils = require('../../../utils/common.js');

var adVideoUtils = require('../../../utils/adVideoUtils.js');

Page({
  onShareAppMessage: function onShareAppMessage(shareOption) {
    var code = this.data.code;
    var search_code = app.getCache("search_code") || '';
    var shareUrl = "pages/tabindex/detail/index?id=" + this.data.id + "&code=" + code + "&search_code=" + search_code;
    var path = "pages/index/index?path=" + encodeURIComponent(shareUrl);
    var stime = shareOption.channel == "video" ? "video" + app.getCurrentTime() : app.getCurrentTime();
    path = path + "&stime=" + stime;
    return app.share(shareOption, 0, path, stime);
  },
  data: {
    id: 1,
    windowHeight: 0,
    //胶囊信息
    indexImg: '',
    // 图片
    nickname: '',
    // 名称
    avatar: '',
    // 头像
    type: 0,
    // 图片类型
    imageSrc: '',
    // 缓存照片
    file_type: '',
    video_url: '',
    advTimes: 3
  },
  onLoad: function onLoad(options) {
    var _this = this;

    this.setData({
      id: options.id,
      code: options.code == undefined ? "" : options.code
    });
    var search_code = options.search_code == undefined ? "" : options.search_code;

    if (search_code.length > 0) {
      app.setCache("search_code", search_code);
    }

    login.getUserOpenId(app).then(function (res) {
      _this.init();

      app.uv(_this.data.id);
    }).catch(function (error) {
      if (error.errNo == 21100) {
        _this.setData({
          imageLoaded: true
        });

        commonUtils.showModal("温馨提示", "请先登录账号才可体验小程序", false).then(function () {
          commonUtils.pageBack();
        });
      }
    });
  },
  init: function init() {
    var _this2 = this;

    var info = app.getCache("image-info") || "";

    if (info) {
      this.setData({
        info: info,
        indexImg: info.url,
        nickname: info.nickname,
        avatar: info.avatar,
        file_type: info.file_type,
        video_url: info.video_url
      });
      app.removeCache("image-info");
    } else {
      var param = {
        id: this.data.id,
        version: apiList.version,
        appid: apiList.appId,
        openid: app.getUserOpenId(),
        timestamp: app.getCurrentTime()
      };
      apiList.post(apiList.photoDetail, param, app.getToken()).then(function (ret) {
        _this2.setData({
          indexImg: ret.url,
          nickname: ret.nickname,
          avatar: ret.avatar,
          file_type: ret.file_type,
          video_url: ret.video_url
        });

        var share = ret.share;
        app.globalData.notAdvPlayFinish = ret.notAdvPlayFinish == undefined ? false : ret.notAdvPlayFinish;
        var uv_type = ret.uv_type == undefined ? app.globalData.uv_type : ret.uv_type;
        app.globalData.uv_type = uv_type;

        if (share) {
          app.globalData.share = share;
        }
      }).catch(function (error) {
        console.log("error", error);
        app.showInfo("网络异常,请重试");

        _this2.setData({
          imageLoaded: true
        });
      });
    }
  },
  imageLoad: function imageLoad(e) {
    this.setData({
      imageLoaded: true
    });
  },
  imageError: function imageError(e) {
    this.setData({
      imageLoaded: true
    });
    app.showInfo("图片加载失败");
  },
  goPage: function goPage(e) {
    var name = e.currentTarget.dataset.name; // 下载

    if (name == "save") {
      this.setData({
        isSave: true
      });
    }
  },
  // 图片保存选择
  saveChange: function saveChange(e) {
    if (!app.globalData.isLogin) {
      app.getOpenId();
      return false;
    }

    var index = e.currentTarget.dataset.index;
    this.setData({
      type: index
    });
    this.checkAlbumAuth();
  },
  checkAlbumAuth: function checkAlbumAuth() {
    var _this3 = this;

    wx.authorize({
      scope: "scope.writePhotosAlbum",
      success: function success(res) {
        if (app.globalData.downSuccessStatus == false) {
          _this3.saveImage();
        } else {
          _this3.checkAdv();
        }
      },
      fail: function fail(err) {
        console.log("authorize fail", err);
        wx.showModal({
          title: "温馨提示",
          content: "保存图片需要相册权限,请授权相册权限",
          showCancel: false,
          confirmText: "前往授权",
          success: function success(res) {
            if (res.confirm) {
              wx.openSetting({
                success: function success(authSetting) {
                  var json = authSetting.authSetting;

                  if (json != undefined && json["scope.writePhotosAlbum"]) {} else {
                    console.log(authSetting);
                  }
                }
              });
            }
          }
        });
      }
    });
    this.close();
  },
  close: function close() {
    this.setData({
      isSave: false
    });
  },
  saveImage: function saveImage() {
    var _this4 = this;

    if (this.data.imageSrc) {
      console.log('缓存下载');
      this.saveImageToPhotosAlbum(this.data.imageSrc);
    } else {
      setTimeout(function () {
        app.showLoading("下载中");

        _this4.downloadFile();
      }, 800);
    }
  },
  downloadFile: function downloadFile() {
    var _this5 = this;

    var that = this; // type = 0超清 1普通

    var src = this.data.file_type == 'video' ? this.data.video_url : that.data.indexImg;
    wx.downloadFile({
      url: src,
      success: function success(res) {
        var filePath = res.tempFilePath;
        console.log("filePath", filePath);
        that.setData({
          imageSrc: filePath
        });

        _this5.saveImageToPhotosAlbum(filePath);
      },
      fail: function fail(err) {
        app.globalData.downSuccessStatus = false;
        wx.hideLoading();
        wx.showModal({
          title: "下载出错",
          content: err.errMsg,
          showCancel: false
        });
      }
    });
  },
  // 下载图片
  saveImageToPhotosAlbum: function saveImageToPhotosAlbum(filePath) {
    var _this6 = this;

    var that = this;

    if (that.data.file_type == 'video') {
      wx.saveVideoToPhotosAlbum({
        filePath: filePath,
        // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
        success: function success(res) {
          wx.hideLoading();
          wx.showModal({
            title: "保存成功",
            content: "请到相册中查看",
            showCancel: false
          });
          app.globalData.downSuccessStatus = true;

          _this6.setDownCache();
        },
        fail: function fail(err) {
          wx.hideLoading();
          var errType = err.errMsg.includes("saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";

          if (errType != "取消保存") {
            app.globalData.downSuccessStatus = false;
          }

          wx.showModal({
            title: errType,
            content: err.errMsg,
            showCancel: false
          });
        }
      });
    } else {
      wx.saveImageToPhotosAlbum({
        filePath: filePath,
        // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
        success: function success(res) {
          wx.hideLoading();
          wx.showModal({
            title: "保存成功",
            content: "请到相册中查看",
            showCancel: false
          });
          app.globalData.downSuccessStatus = true;

          _this6.setDownCache();
        },
        fail: function fail(err) {
          wx.hideLoading();
          var errType = err.errMsg.includes("saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";

          if (errType != "取消保存") {
            app.globalData.downSuccessStatus = false;
          }

          wx.showModal({
            title: errType,
            content: err.errMsg,
            showCancel: false
          });
        }
      });
    }
  },
  setDownCache: function setDownCache() {
    var downloadHistory = app.getCache("downloadHistory") || [];

    for (var i = 0; i < downloadHistory.length; i++) {
      if (this.data.indexImg == downloadHistory[i].url) {
        downloadHistory.splice(i, 1);
        break;
      }
    }

    if (downloadHistory.length > 99) {
      downloadHistory.splice(downloadHistory.length - 1, 1);
    }

    var item = {
      url: this.data.indexImg,
      id: this.data.id,
      file_type: this.data.file_type,
      video_url: this.data.video_url,
      search_code: this.data.code != undefined ? this.data.code : ""
    };
    downloadHistory.splice(0, 0, item);
    app.setCache("downloadHistory", downloadHistory);
  },
  goToMini: function goToMini() {
    var search_code = app.getCache("search_code") || '';
    var path = 'pages/tabindex/detail/index?id=' + this.data.id + "&search_code=" + search_code;
    wx.navigateToMiniProgram({
      appId: 'wx91448f2244b5e607',
      path: path,
      success: function success(res) {// 打开成功
      }
    });
  },

  /***广告逻辑开始 */
  checkAdv: function checkAdv() {
    var _this7 = this;

    if (this.data.buttonClicked != undefined && this.data.buttonClicked) {
      app.log("请勿频繁点击");
      return false;
    }

    adVideoUtils.buttonClicked(this);

    if (app.isReachLimitDownTimes()) {
      wx.showModal({
        title: '达到下载上限',
        // 标题
        content: '今日下载次数已经达到上限了,是否继续下载',
        showCancel: true,
        confirmText: "继续下载",
        success: function success(res) {
          if (res.confirm) {
            _this7.goToMini();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
      return false;
    }

    app.isNotLookAdv().then(function (res) {
      if (res) {
        app.log("免看广告");

        _this7.advSuccess();
      } else {
        adVideoUtils.videoAdInit(apiList.advId, _this7); //初始化广告
      }
    }).catch(function (err) {
      _this7.advSuccess();

      console.log("errrr", err);
    });
  },

  /**
   * 广告点击关闭逻辑
   */
  adVideoClose: function adVideoClose(status) {
    var _this8 = this;

    if (this.data.orderSubmited != undefined && this.data.orderSubmited) {
      app.log("订单请勿重复上传");
      return false;
    }

    adVideoUtils.orderSubmited(this);
    adVideoUtils.setAdvOrder(this.data.id, status).then(function (res) {
      if (res) {
        app.log("订单上传成功");

        if (status) {
          _this8.advSuccess();
        }
      } else {
        app.log("订单上传失败");

        if (status) {
          _this8.advSuccess();
        }
      }
    }).catch(function (error) {
      app.log("订单上传失败", error);

      if (status) {
        _this8.advSuccess();
      }
    });
  },

  /**
   * 广告播放完并处理成功订单后的逻辑
   */
  advSuccess: function advSuccess() {
    if (this.data.submitButtonClicked != undefined && this.data.submitButtonClicked) {
      app.log("请勿重复提交");
      return false;
    }

    adVideoUtils.submitButtonClicked(this);
    app.hideLoading();
    this.saveImage();
  },

  /**
   * 广告组件出错
   */
  setAdvError: function setAdvError(err) {
    var _this9 = this;

    adVideoUtils.setAdvError(this.data.id, err).then(function (res) {
      if (res) {
        app.log("广告出错信息上传成功");
      } else {
        app.log("广告出错信息上传失败");
      }

      _this9.advSuccess();
    });
  },

  /***广告逻辑结束 */
  onUnload: function onUnload() {
    adVideoUtils.advDestroy();
  }
}); 
 			}); 	require("pages/tabindex/detail/index.js");
 		__wxRoute = 'pages/tabindex/isfp/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tabindex/isfp/index.js';	define("pages/tabindex/isfp/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _defineProperty2 = require("../../../@babel/runtime/helpers/defineProperty");

var app = getApp();

var apiList = require('../../../utils/api.js');

var login = require('../../../utils/login.js');

var commonUtils = require('../../../utils/common.js');

Page({
  onShareAppMessage: function onShareAppMessage(shareOption) {
    var search_code = app.getCache("search_code") || '';

    if (search_code.length <= 0) {
      search_code = this.data.homepageInfo.search_code;
    }

    var path, shareUrl;

    if (this.data.parameterListIndex == 0) {
      shareUrl = "pages/tabindex/isfp/index?homepage_id=" + this.data.homepage_id + "&search_code=" + search_code;
    } else {
      shareUrl = "pages/tabindex/isfp/index?homepage_id=" + this.data.homepage_id + "&search_code=" + search_code + "&album_id=" + this.data.album_id;
    }

    path = "pages/index/index?path=" + encodeURIComponent(shareUrl);
    var stime = shareOption.channel == "video" ? "video" + app.getCurrentTime() : app.getCurrentTime();
    path = path + "&stime=" + stime;
    return app.share(shareOption, 0, path, stime);
  },
  data: {
    homepage_id: 1,
    isMe: true,
    // 是否为自己的账号
    menuInfo: null,
    goodList: [],
    // 商品列表
    albumList: [],
    // 专辑列表
    totalPhoto: 0,
    // 作品总数量
    totalAlbum: 0,
    // 专辑总数量
    homepageInfo: null,
    // 个人信息
    parameterListIndex: 0,
    // tab索引 0图片 1专辑
    tabList: [],
    // 分类列表
    selectClassifyId: 0,
    // 分类id
    album_id: 0,
    // 专辑id
    page: 1,
    // 页码
    hasMore: true,
    pageSize: 15,
    albumPage: 1,
    albumPaseSize: 15,
    albumHasMore: true,
    albumTabList: [],
    // 专辑列表
    albumTabListIndex: 0,
    // 专辑下标
    photoListByDate: [],
    // 日期列表
    isDateShow: false,
    // 是否显示为日期 
    dateShow: true,
    //排序是否显示
    dataArr: [],
    totop: false,
    bottomDateShow: false
  },
  onLoad: function onLoad(options) {
    var _this = this;

    var search_code = options.search_code == undefined ? "" : options.search_code;

    if (search_code.length > 0) {
      app.setCache("search_code", search_code);
    }

    var menuInfo = wx.getMenuButtonBoundingClientRect(); //胶囊信息

    var selectClassifyId = Number(options.selectClassifyId) || 0;
    var album_id = options.album_id || 0;

    if (album_id) {
      this.setData({
        parameterListIndex: 1
      });
    }

    this.setData({
      menuInfo: menuInfo,
      homepage_id: options.homepage_id,
      selectClassifyId: selectClassifyId,
      album_id: album_id
    });
    login.getUserOpenId(app).then(function (res) {
      _this.getHomepageInfo();
    }).catch(function (error) {
      if (error.errNo == 21100) {
        _this.setData({
          imageLoaded: true
        });

        commonUtils.showModal("温馨提示", "请先登录账号才可体验小程序", false).then(function (res) {
          commonUtils.pageBack();
        });
      } else {
        _this.getHomepageInfo();
      }
    });
  },
  // 监听是否加载到底部
  onReachBottom: function onReachBottom() {
    if (this.data.hasMore) {
      this.init();
    }
  },
  bindscrolltolower: function bindscrolltolower() {
    if (this.data.albumHasMore) {
      this.getHomepageAlbumList();
    }
  },
  setDataList: function setDataList(page, list) {
    var _this$setData;

    var column = 3;

    if (this.data.selectClassifyId == 2) {
      column = 2;
    } else if (this.data.selectClassifyId == 6) {
      column = 4;
    }

    var list1 = []; //第一列

    var list2 = []; //第二列

    var list3 = []; //第3列

    var list4 = []; //第3列

    for (var i = 0; i < list.length; i++) {
      if (i % column == 0) {
        list1.push(list[i]);
      } else if (i % column == 1) {
        list2.push(list[i]);
      } else if (i % column == 2) {
        list3.push(list[i]);
      } else {
        list4.push(list[i]);
      }
    }

    ;
    this.setData((_this$setData = {}, _defineProperty2(_this$setData, 'list1[' + (page - 1) + ']', list1), _defineProperty2(_this$setData, 'list2[' + (page - 1) + ']', list2), _defineProperty2(_this$setData, 'list3[' + (page - 1) + ']', list3), _defineProperty2(_this$setData, 'list4[' + (page - 1) + ']', list4), _this$setData));
  },
  imageLoad: function imageLoad(e) {
    var listIndex = e.currentTarget.dataset.listIndex; //第几列

    var itemIndex = e.currentTarget.dataset.itemIndex; //页码

    var index = e.currentTarget.dataset.index; //第几个

    this.setData(_defineProperty2({}, 'list' + (listIndex + 1) + '[' + itemIndex + '][' + index + '].loaded', true));
  },
  imageLoad2: function imageLoad2(e) {
    var listIndex = e.currentTarget.dataset.listIndex; //第几列

    var index = e.currentTarget.dataset.index; //第几个

    this.setData(_defineProperty2({}, 'photoListByDate' + '[' + listIndex + ']list[' + index + '].loaded', true));
  },
  getHeight: function getHeight(classify_id) {
    var height = 0;

    switch (classify_id) {
      case 1:
        height = 360;
        break;

      case 5:
        height = 360;
        break;

      default:
        height = 230;
    }

    return height;
  },
  // 获取主页信息
  getHomepageInfo: function getHomepageInfo() {
    var _this2 = this;

    var homepageInfo = app.getCache("homepageInfo_" + this.data.homepage_id) || "";

    if (homepageInfo) {
      this.getData(homepageInfo);
      app.removeCache("homepageInfo_" + this.data.homepage_id);
      return false;
    }

    var param = {
      homepage_id: this.data.homepage_id,
      limit: this.data.pageSize,
      search_code: app.getCache("search_code") || '',
      version: apiList.version,
      appid: apiList.appId,
      openid: app.getUserOpenId(),
      timestamp: app.getCurrentTime()
    };
    apiList.post(apiList.homepageInfo, param, app.getToken()).then(function (ret) {
      _this2.getData(ret);
    });
  },
  getData: function getData(ret) {
    var picClassifyList = ret.picClassifyList;

    if (picClassifyList.length == 1) {
      this.setData({
        selectClassifyId: picClassifyList[0].id
      });
    }

    this.setData({
      homepageInfo: ret.homepageInfo,
      tabList: ret.picClassifyList,
      totalPhoto: ret.totalPhoto,
      totalAlbum: ret.totalAlbum
    });

    if (this.data.totalPhoto > 0 || this.data.totalAlbum > 0) {
      this.init();
    } else {
      this.setData({
        hasMore: false,
        empty: true
      });
    }
  },
  // 获取专辑信息
  getHomepageAlbumList: function getHomepageAlbumList() {
    var _this3 = this;

    var param = {
      homepage_id: this.data.homepage_id,
      version: apiList.version,
      appid: apiList.appId,
      openid: app.getUserOpenId(),
      timestamp: app.getCurrentTime(),
      page: this.data.albumPage,
      limit: this.data.albumPaseSize
    };
    apiList.post(apiList.homepageAlbumList, param, app.getToken()).then(function (ret) {
      var albumPage = _this3.data.albumPage;
      var list = ret.albumList;

      var albumTabList = _this3.data.albumTabList.concat(list);

      _this3.setData({
        albumTabList: albumTabList,
        albumPage: albumPage + 1,
        album_id: albumTabList.length > 0 ? albumTabList[_this3.data.albumTabListIndex].id : 0
      });

      if (list.length < _this3.data.albumPaseSize) {
        _this3.setData({
          albumHasMore: false
        });
      }

      if (albumPage == 1) {
        _this3.setData({
          albumTabListIndex: _this3.getTabListIndex(ret.albumList, _this3.data.album_id)
        });

        _this3.getAlbumDataList();
      }
    });
  },
  // 列表
  init: function init() {
    var _this4 = this;

    if (this.data.page == 1) {
      app.showLoading("加载中");
    } // parameterListIndex: 0, // tab索引 0图片 1专辑


    if (this.data.parameterListIndex == 1) {
      if (this.data.totalAlbum > 0) {
        if (this.data.page == 1 && this.data.albumTabList <= 0) {
          this.getHomepageAlbumList();
        } else {
          this.getAlbumDataList();
        }
      } else {
        app.hideLoading();
        this.setData({
          hasMore: false,
          empty: true
        });
      }
    } else {
      if (this.data.totalPhoto <= 0) {
        app.hideLoading();
        this.setData({
          hasMore: false,
          empty: true
        });
        return false;
      }

      var limit = this.data.pageSize;

      if (!this.data.isDateShow) {
        if (this.data.selectClassifyId == 6) {
          limit = 20;
        } else if (this.data.selectClassifyId == 2) {
          limit = 10;
        }
      }

      var param = {
        homepage_id: this.data.homepage_id,
        classify_id: this.data.selectClassifyId,
        album_id: this.data.album_id,
        page: this.data.page,
        limit: limit,
        action: "cover",
        version: apiList.version,
        appid: apiList.appId,
        openid: app.getUserOpenId(),
        timestamp: app.getCurrentTime()
      }; // isDateShow true日期显示  false默认显示

      if (this.data.isDateShow) {
        // 日期列表显示
        apiList.post(apiList.getPhotoListByDate, param, app.getToken()).then(function (ret) {
          var length = ret.photoList.length;

          if (length) {
            var page = _this4.data.page + 1;

            _this4.photoListByDateInit(ret.photoList);

            _this4.setData({
              page: page,
              empty: false
            });
          }

          if (length < limit) {
            _this4.setData({
              hasMore: false
            });
          }

          if (_this4.data.photoListByDate.length <= 0) {
            _this4.setData({
              empty: true
            });
          }
        });
      } else {
        // 默认列表显示
        apiList.post(apiList.photoList, param, app.getToken()).then(function (ret) {
          var length = ret.photoList.length;
          var p = _this4.data.page;

          if (length) {
            var page = _this4.data.page + 1;

            var goodList = _this4.data.goodList.concat(ret.photoList);

            _this4.setData({
              page: page,
              goodList: goodList,
              empty: false
            });
          }

          _this4.setDataList(p, ret.photoList);

          if (length < limit) {
            _this4.setData({
              hasMore: false
            });

            if (_this4.data.goodList.length <= 0) {
              _this4.setData({
                empty: true
              });
            }
          }
        });
      }
    }
  },
  getAlbumDataList: function getAlbumDataList() {
    var _this5 = this;

    if (this.data.page == 1) {
      app.showLoading("加载中");
    }

    var param = {
      homepage_id: this.data.homepage_id,
      album_id: this.data.album_id,
      page: this.data.page,
      limit: this.data.pageSize,
      version: apiList.version,
      appid: apiList.appId,
      action: "cover",
      openid: app.getUserOpenId(),
      timestamp: app.getCurrentTime()
    };
    apiList.post(apiList.albumPhotoList, param, app.getToken()).then(function (ret) {
      var length = ret.list.length;
      var p = _this5.data.page;

      if (length != undefined) {
        var page = _this5.data.page + 1;

        var albumList = _this5.data.albumList.concat(ret.list);

        _this5.setData({
          page: page,
          albumList: albumList,
          dateShow: false,
          hasMore: true,
          empty: false
        });
      }

      _this5.setDataList(p, ret.list);

      if (length < _this5.data.pageSize) {
        _this5.setData({
          hasMore: false
        });

        if (_this5.data.albumList.length <= 0) {
          _this5.setData({
            empty: true
          });
        }
      }
    });
  },
  // 分类改变
  tabListChange: function tabListChange(e) {
    var id = e.currentTarget.dataset.id;

    if (this.data.selectClassifyId == id) {
      return false;
    }

    var page = 1;
    var goodList = [];
    this.setData({
      selectClassifyId: id,
      page: page,
      goodList: goodList,
      photoListByDate: [],
      list1: [],
      list2: [],
      list3: []
    });
    this.init();
    this.setData({
      hasMore: true
    });
    this.resetData();
  },
  // 专辑切换
  albumTabListChange: function albumTabListChange(e) {
    var index = e.currentTarget.dataset.index;
    var album_id = e.currentTarget.dataset.id;
    this.setData({
      albumTabListIndex: index,
      album_id: album_id,
      page: 1,
      albumList: [],
      list1: [],
      list2: [],
      list3: []
    });
    this.init();
  },
  // tabListChange 下一个
  nextItem: function nextItem() {
    if (this.data.albumTabListIndex == this.data.albumTabList.length - 1) {
      return false;
    }

    var album_id = this.data.albumTabList[this.data.albumTabListIndex + 1].id;
    this.setData({
      albumTabListIndex: this.data.albumTabListIndex + 1,
      album_id: album_id,
      page: 1,
      albumList: []
    });
    this.init();
  },
  // 获取专辑getTabListIndex
  getTabListIndex: function getTabListIndex(list, id) {
    var num = 0;
    list.forEach(function (item, index) {
      if (item.id == id) {
        num = index;
      }
    });
    return num;
  },
  // 壁纸详情
  goDetail: function goDetail(e) {
    var id = e.currentTarget.dataset.id;
    var action = parseInt(e.currentTarget.dataset.action); //1-列表 2-日期列表 3-专辑列表

    var index = e.currentTarget.dataset.index;
    var info;

    switch (action) {
      case 1:
        info = this.objectFindByKey(this.data.goodList, "id", id);
        break;

      case 2:
        info = this.objectFindByKey(this.data.photoListByDate[index].list, "id", id);
        break;

      case 3:
        info = this.objectFindByKey(this.data.albumList, "id", id);
        break;

      default:
        info = this.objectFindByKey(this.data.goodList, "id", id);
        break;
    }

    console.log("info", info);
    var type = info.file_type;

    if (info != undefined) {
      info.avatar = this.data.homepageInfo.avatar;
      app.setCache("image-info", info);
    }

    var code = this.data.homepageInfo.search_code;

    if (type == 'voice') {
      var url = '/pages/tabindex/voiceDetail/index/index?id=' + id + '&homepage_id=' + this.data.homepage_id + "&code=" + code;
      commonUtils.pageGo(url);
    } else {
      var _url = '/pages/tabindex/detail/index?id=' + id + "&code=" + code;

      commonUtils.pageGo(_url);
    }
  },
  // 作品 专辑
  parameterListChange: function parameterListChange(e) {
    var index = e.currentTarget.dataset.index;

    if (this.data.parameterListIndex == index) {
      return false;
    }

    var page = 1;
    var goodList = [];
    var albumList = [];
    this.setData({
      parameterListIndex: index,
      page: page,
      goodList: goodList,
      albumList: albumList,
      album_id: this.data.albumTabList.length > 0 ? this.data.albumTabList[this.data.albumTabListIndex].id : 0,
      selectClassifyId: 0,
      hasMore: true,
      isDateShow: false,
      photoListByDate: []
    });
    this.resetData();

    if (index == 0) {
      this.setData({
        album_id: 0,
        dateShow: true
      });
    } else {
      this.setData({
        album_id: this.data.albumTabList.length > 0 ? this.data.albumTabList[this.data.albumTabListIndex].id : 0,
        dateShow: false
      });
    }

    ;
    this.init();
  },
  dateShowChange: function dateShowChange() {
    this.setData({
      isDateShow: !this.data.isDateShow,
      page: 1,
      photoListByDate: [],
      goodList: [],
      hasMore: true
    });
    this.init();
    this.resetData();
  },
  // 日期列表处理
  photoListByDateInit: function photoListByDateInit(arr1) {
    var photoListByDate = this.data.photoListByDate;
    var arr = this.data.dataArr.concat(arr1);
    this.setData({
      dataArr: arr
    });

    if (this.data.page == 1) {
      var obj = {
        data: arr[0].date,
        list: [arr[0]]
      };
      photoListByDate.push(obj);
    }

    var num = photoListByDate.length ? photoListByDate.length - 1 : 0;

    for (var i = num; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i].date == arr[j].date) {
          //第一个等同于第二个，splice方法删除第二个
          photoListByDate[i].list.push(arr[j]);
          arr.splice(j, 1);
          j--;
        } else {
          var _obj = {
            data: arr[j].date,
            list: [arr[j]]
          };
          photoListByDate.push(_obj);
          break;
        }
      }
    }

    this.setData({
      photoListByDate: photoListByDate
    });
  },
  objectFindByKey: function objectFindByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }

    return null;
  },
  resetData: function resetData() {
    this.setData({
      photoListByDate: [],
      dataArr: [],
      list1: [],
      list2: [],
      list3: [],
      list4: []
    });
  },
  //声明
  announce: function announce() {
    wx.showModal({
      title: "声明",
      content: "所有素材均由创作者上传及负责，部分素材来源网络，如有侵权，请联系我们进行删除处理！",
      showCancel: false
    });
  },
  // 监听页面
  onPageScroll: function onPageScroll(e) {
    var t = e.scrollTop;

    if (t > 1000 && !this.data.toTop) {
      this.setData({
        toTop: true
      });
    }

    if (t <= 1000 && this.data.toTop) {
      this.setData({
        toTop: false
      });
    }

    if (t > 500 && !this.data.bottomDateShow) {
      this.setData({
        bottomDateShow: true
      });
    }

    if (t <= 500 && this.data.bottomDateShow) {
      this.setData({
        bottomDateShow: false
      });
    }
  }
}); 
 			}); 	require("pages/tabindex/isfp/index.js");
 		__wxRoute = 'pages/tabindex/search/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tabindex/search/index.js';	define("pages/tabindex/search/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var app = getApp();
Page({
  data: {
    id: 1,
    followList: [0, 1, 2]
  },
  onLoad: function onLoad(options) {
    this.setData({
      id: options.id
    });
  },
  // 搜索
  searchValueChange: function searchValueChange(e) {
    var searchValue = e.detail.value;
    this.setData({
      searchValue: searchValue
    });
  },
  submit: function submit() {
    console.log(this.data.searchValue);
  },
  // 监听是否加载到底部
  onReachBottom: function onReachBottom() {
    console.log('监听是否加载到底部');
    var list = [0, 1, 2];
    var followList = this.data.followList.concat(list); // this.setData({
    //   followList: followList
    // })
  },
  // 关注改变
  followChange: function followChange(e) {
    var index = e.currentTarget.dataset.index;
    console.log('关注改变');
  },
  // 创作者详情
  goisfp: function goisfp(e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/index/isfp/index?id=' + this.data.id // 指定页面的url

    });
  }
}); 
 			}); 	require("pages/tabindex/search/index.js");
 		__wxRoute = 'pages/tabindex/voiceDetail/detail/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tabindex/voiceDetail/detail/index.js';	define("pages/tabindex/voiceDetail/detail/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var app = getApp();

var apiList = require('../../../../utils/api.js');

var adVideoUtils = require('../../../../utils/adVideoUtils.js');

Page({
  data: {
    id: 1,
    indexImg: '',
    // 图片
    imageSrc: '',
    // 缓存照片
    file_type: '',
    video_url: '',
    advTimes: 3
  },
  onLoad: function onLoad(options) {
    this.setData({
      id: options.id,
      video_url: decodeURI(options.url),
      poster: decodeURI(options.poster),
      homepage_id: options.homepage_id
    });
  },
  goPage: function goPage(e) {
    wx.navigateBack({});
  },
  // 图片保存选择
  saveChange: function saveChange(e) {
    if (!app.globalData.isLogin) {
      app.getOpenId();
      return false;
    }

    var index = e.currentTarget.dataset.index;
    this.setData({
      type: index
    });
    this.checkAlbumAuth();
  },
  checkAlbumAuth: function checkAlbumAuth() {
    var _this = this;

    wx.authorize({
      scope: "scope.writePhotosAlbum",
      success: function success(res) {
        if (app.globalData.downSuccessStatus == false) {
          _this.saveImage();
        } else {
          _this.checkAdv();
        }
      },
      fail: function fail(err) {
        console.log("authorize fail", err);
        wx.showModal({
          title: "温馨提示",
          content: "保存图片需要相册权限,请授权相册权限",
          showCancel: false,
          confirmText: "前往授权",
          success: function success(res) {
            if (res.confirm) {
              wx.openSetting({
                success: function success(authSetting) {
                  var json = authSetting.authSetting;

                  if (json != undefined && json["scope.writePhotosAlbum"]) {} else {
                    console.log(authSetting);
                  }
                }
              });
            }
          }
        });
      }
    });
  },
  // 保存图片
  saveImage: function saveImage() {
    var _this2 = this;

    if (this.data.imageSrc) {
      app.log('缓存下载', this.data.imageSrc);
      this.saveImageToPhotosAlbum(this.data.imageSrc);
    } else {
      app.log("图片下载中");
      setTimeout(function () {
        app.showLoading("下载中");

        _this2.downloadFile();
      }, 600);
    }
  },
  downloadFile: function downloadFile() {
    var _this3 = this;

    var that = this; // type = 0超清 1普通

    var src = this.data.video_url;
    wx.downloadFile({
      url: src,
      success: function success(res) {
        var filePath = res.tempFilePath;
        that.setData({
          imageSrc: filePath
        });

        _this3.saveImageToPhotosAlbum(filePath);
      },
      fail: function fail(err) {
        wx.hideLoading();
        wx.showModal({
          title: "下载出错",
          content: err.errMsg,
          showCancel: false
        });
      }
    });
  },
  // 下载图片
  saveImageToPhotosAlbum: function saveImageToPhotosAlbum(filePath) {
    var _this4 = this;

    var that = this;
    wx.saveVideoToPhotosAlbum({
      filePath: filePath,
      // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
      success: function success(res) {
        console.log("下载成功");
        wx.hideLoading();
        wx.showModal({
          title: "保存成功",
          content: "请到相册中查看",
          showCancel: false
        });
        app.globalData.downSuccessStatus = true;

        _this4.setDownCache();
      },
      fail: function fail(err) {
        wx.hideLoading();
        var errType = err.errMsg.includes("saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";

        if (errType != "取消保存") {
          app.globalData.downSuccessStatus = false;
        }

        wx.showModal({
          title: errType,
          content: err.errMsg,
          showCancel: false
        });
      }
    });
  },
  setDownCache: function setDownCache() {
    var downloadHistory = app.getCache("downloadHistory") || [];

    for (var i = 0; i < downloadHistory.length; i++) {
      if (this.data.indexImg == downloadHistory[i].url) {
        downloadHistory.splice(i, 1);
        break;
      }
    }

    if (downloadHistory.length > 99) {
      downloadHistory.splice(downloadHistory.length - 1, 1);
    }

    var item = {
      url: this.data.indexImg,
      id: this.data.id,
      file_type: this.data.file_type,
      video_url: this.data.video_url
    };
    downloadHistory.splice(0, 0, item);
    app.setCache("downloadHistory", downloadHistory);
  },
  goToMini: function goToMini() {
    var search_code = app.getCache("search_code") || '';
    var path = 'pages/tabindex/voiceDetail/index/index?id=' + this.data.id + "&search_code=" + search_code + "&homepage_id=" + this.data.homepage_id;
    console.log("path", path);
    wx.navigateToMiniProgram({
      appId: 'wx91448f2244b5e607',
      path: path,
      success: function success(res) {// 打开成功
      }
    });
  },

  /***广告逻辑开始 */
  checkAdv: function checkAdv() {
    var _this5 = this;

    if (this.data.buttonClicked != undefined && this.data.buttonClicked) {
      app.log("请勿频繁点击");
      return false;
    }

    adVideoUtils.buttonClicked(this);

    if (app.isReachLimitDownTimes()) {
      wx.showModal({
        title: '达到下载上限',
        // 标题
        content: '今日下载次数已经达到上限了,是否继续下载',
        showCancel: true,
        confirmText: "继续下载",
        success: function success(res) {
          if (res.confirm) {
            _this5.goToMini();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
      return false;
    }

    app.isNotLookAdv().then(function (res) {
      if (res) {
        app.log("免看广告");

        _this5.advSuccess();
      } else {
        adVideoUtils.videoAdInit(apiList.advId, _this5); //初始化广告
      }
    }).catch(function (err) {
      _this5.advSuccess();

      console.log("errrr", err);
    });
  },

  /**
  * 广告点击关闭逻辑
  */
  adVideoClose: function adVideoClose(status) {
    var _this6 = this;

    if (this.data.orderSubmited != undefined && this.data.orderSubmited) {
      app.log("订单请勿重复上传");
      return false;
    }

    adVideoUtils.orderSubmited(this);
    adVideoUtils.setAdvOrder(this.data.id, status).then(function (res) {
      if (res) {
        app.log("订单上传成功");

        if (status) {
          _this6.advSuccess();
        }
      } else {
        if (status) {
          _this6.advSuccess();
        }

        app.log("订单上传失败");
      }
    });
  },

  /**
  * 广告播放完并处理成功订单后的逻辑
  */
  advSuccess: function advSuccess() {
    if (this.data.submitButtonClicked != undefined && this.data.submitButtonClicked) {
      app.log("请勿重复提交");
      return false;
    }

    adVideoUtils.submitButtonClicked(this);
    this.saveImage();
  },

  /**
  * 广告组件出错
  */
  setAdvError: function setAdvError(err) {
    var _this7 = this;

    adVideoUtils.setAdvError(this.data.id, err).then(function (res) {
      if (res) {
        app.log("广告出错信息上传成功");
      } else {
        app.log("广告出错信息上传失败");
      }

      _this7.advSuccess();
    });
  },

  /***广告逻辑结束 */
  onUnload: function onUnload() {
    adVideoUtils.advDestroy();
  }
}); 
 			}); 	require("pages/tabindex/voiceDetail/detail/index.js");
 		__wxRoute = 'pages/tabindex/voiceDetail/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tabindex/voiceDetail/index/index.js';	define("pages/tabindex/voiceDetail/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var app = getApp();

var apiList = require('../../../../utils/api.js');

var login = require('../../../../utils/login.js');

var adVideoUtils = require('../../../../utils/adVideoUtils.js');

Page({
  onShareAppMessage: function onShareAppMessage(shareOption) {
    var code = this.data.code;
    var search_code = app.getCache("search_code") || '';
    var shareUrl = "pages/tabindex/voiceDetail/index/index?homepage_id=" + this.data.homepage_id + "&id=" + this.data.id + "&code=" + code + "&search_code=" + search_code;
    var path = "pages/index/index?path=" + encodeURIComponent(shareUrl);
    var stime = shareOption.channel == "video" ? "video" + app.getCurrentTime() : app.getCurrentTime();
    path = path + "&stime=" + stime;
    return app.share(shareOption, 0, path, stime);
  },
  data: {
    id: 1,
    indexImg: '',
    // 图片
    type: 0,
    // 图片类型
    imageSrc: '',
    // 缓存照片
    videoSrc: '',
    // 缓存视频
    // imageVideo
    file_type: '',
    saveFile_type: '',
    // 下载类型
    video_url: '',
    advTimes: 3,
    list: [],
    page: 1,
    // 页码
    hasMore: true,
    pageSize: 20,
    selectClassifyId: 0,
    // 分类id
    listIndex: -1 // 推荐列表下标

  },
  onLoad: function onLoad(options) {
    var _this = this;

    this.setData({
      id: options.id,
      homepage_id: options.homepage_id,
      selectClassifyId: 3,
      code: options.code == undefined ? "" : options.code
    });
    var search_code = options.search_code == undefined ? "" : options.search_code;

    if (search_code.length > 0) {
      app.setCache("search_code", search_code);
    }

    wx.setNavigationBarTitle({
      title: "表情包(" + this.data.code + ")"
    });
    app.showLoading("加载中");
    login.getUserOpenId(app).then(function (res) {
      _this.init();

      app.uv(_this.data.id);
    }).catch(function (error) {
      if (error.errNo == 21100) {
        _this.setData({
          imageLoaded: true
        });

        commonUtils.showModal("温馨提示", "请先登录账号才可体验小程序", false);
      }
    });
  },
  // 监听是否加载到底部
  onReachBottom: function onReachBottom() {
    if (this.data.hasMore) {
      this.getList();
    }
  },
  init: function init() {
    var _this2 = this;

    var info = app.getCache("image-info") || "";

    if (info) {
      this.setData({
        info: info,
        indexImg: info.url,
        file_type: info.file_type,
        video_url: info.video_url
      });
      app.removeCache("image-info");
      this.getList();
      return false;
    }

    var param = {
      id: this.data.id,
      version: apiList.version,
      appid: apiList.appId,
      openid: app.getUserOpenId(),
      timestamp: app.getCurrentTime()
    };
    apiList.post(apiList.photoDetail, param, app.getToken()).then(function (ret) {
      console.log("info", ret);

      _this2.setData({
        indexImg: ret.url,
        file_type: ret.file_type,
        video_url: ret.video_url
      });

      var share = ret.share;
      app.globalData.notAdvPlayFinish = ret.notAdvPlayFinish == undefined ? false : ret.notAdvPlayFinish;
      var uv_type = ret.uv_type == undefined ? app.globalData.uv_type : ret.uv_type;
      app.globalData.uv_type = uv_type;

      if (share) {
        app.globalData.share = share;
      }

      _this2.getList();
    });
  },
  imageLoad: function imageLoad(e) {
    this.setData({
      imageLoaded: true
    });
  },
  imageError: function imageError(e) {
    this.setData({
      imageLoaded: true
    });
    app.showInfo("图片加载失败");
  },
  // 图片保存选择
  saveChange: function saveChange(e) {
    if (!app.globalData.isLogin) {
      app.getOpenId();
      return false;
    }

    var index = e.currentTarget.dataset.index;
    this.setData({
      type: index
    });
    this.checkAlbumAuth();
  },
  checkAlbumAuth: function checkAlbumAuth() {
    var _this3 = this;

    wx.authorize({
      scope: "scope.writePhotosAlbum",
      success: function success(res) {
        if (app.globalData.downSuccessStatus == false) {
          _this3.saveImage();
        } else {
          _this3.checkAdv();
        }
      },
      fail: function fail(err) {
        console.log("authorize fail", err);
        wx.showModal({
          title: "温馨提示",
          content: "保存图片需要相册权限,请授权相册权限",
          showCancel: false,
          confirmText: "前往授权",
          success: function success(res) {
            if (res.confirm) {
              wx.openSetting({
                success: function success(authSetting) {
                  var json = authSetting.authSetting;

                  if (json != undefined && json["scope.writePhotosAlbum"]) {} else {
                    console.log(authSetting);
                  }
                }
              });
            }
          }
        });
      }
    });
    this.close();
  },
  close: function close() {
    this.setData({
      isSave: false
    });
  },
  goTop: function goTop() {
    wx.pageScrollTo({
      scrollTop: 0
    });
  },
  // 保存图片
  saveImage: function saveImage() {
    var _this4 = this;

    if (this.data.saveFile_type == 0) {
      if (this.data.videoSrc) {
        this.saveImageToPhotosAlbum(this.data.videoSrc);
      } else {
        setTimeout(function () {
          app.showLoading("下载中");

          _this4.downloadFile();
        }, 600);
      }
    } else {
      if (this.data.imageSrc) {
        console.log('图片缓存下载');
        this.saveImageToPhotosAlbum(this.data.imageSrc);
      } else {
        console.log("图片下载中");
        setTimeout(function () {
          app.showLoading("下载中");

          _this4.downloadFile();
        }, 600);
      }
    }
  },
  downloadFile: function downloadFile() {
    var _this5 = this;

    var that = this; // type = 0超清 1普通

    var src = this.data.saveFile_type == 0 ? this.data.video_url : that.data.indexImg;
    wx.downloadFile({
      url: src,
      success: function success(res) {
        var filePath = res.tempFilePath;
        console.log("filePath", filePath);

        if (_this5.data.saveFile_type == 0) {
          that.setData({
            videoSrc: filePath
          });
        } else {
          that.setData({
            imageSrc: filePath
          });
        }

        _this5.saveImageToPhotosAlbum(filePath);
      },
      fail: function fail(err) {
        app.globalData.downSuccessStatus = false;
        wx.hideLoading();
        wx.showModal({
          title: "下载出错",
          content: err.errMsg,
          showCancel: false
        });
      }
    });
  },
  // 下载图片
  saveImageToPhotosAlbum: function saveImageToPhotosAlbum(filePath) {
    var _this6 = this;

    var that = this;

    if (that.data.saveFile_type == 0) {
      console.log('下载视频');
      wx.saveVideoToPhotosAlbum({
        filePath: filePath,
        // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
        success: function success(res) {
          wx.hideLoading();
          wx.showModal({
            title: "保存成功",
            content: "请到相册中查看",
            showCancel: false
          });
          app.globalData.downSuccessStatus = true;

          _this6.setDownCache();
        },
        fail: function fail(err) {
          wx.hideLoading();
          var errType = err.errMsg.includes("saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";

          if (errType != "取消保存") {
            app.globalData.downSuccessStatus = false;
          }

          wx.showModal({
            title: errType,
            content: err.errMsg,
            showCancel: false
          });
        }
      });
    } else {
      console.log('下载图片');
      wx.saveImageToPhotosAlbum({
        filePath: filePath,
        // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
        success: function success(res) {
          wx.hideLoading();
          wx.showModal({
            title: "保存成功",
            content: "请到相册中查看",
            showCancel: false
          });
          app.globalData.downSuccessStatus = true;

          _this6.setDownCache();
        },
        fail: function fail(err) {
          wx.hideLoading();
          var errType = err.errMsg.includes("saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";

          if (errType != "取消保存") {
            app.globalData.downSuccessStatus = false;
          }

          wx.showModal({
            title: errType,
            content: err.errMsg,
            showCancel: false
          });
        }
      });
    }
  },
  // 上一张
  preChange: function preChange() {
    var listIndex = this.data.listIndex;
    var list = this.data.list;

    if (listIndex == 0) {
      listIndex = list.length - 1;
    } else {
      listIndex--;
    }

    if (listIndex < 0) {
      return false;
    }

    this.setData({
      indexImg: list[listIndex].url,
      video_url: list[listIndex].video_url,
      listIndex: listIndex,
      id: list[listIndex].id,
      file_type: list[listIndex].file_type,
      imageSrc: '',
      videoSrc: ''
    });
  },
  // 下一张
  nextChange: function nextChange() {
    var listIndex = this.data.listIndex;
    var list = this.data.list;

    if (listIndex == list.length - 1) {
      listIndex = 0;
    } else {
      listIndex++;
    }

    this.setData({
      indexImg: list[listIndex].url,
      video_url: list[listIndex].video_url,
      listIndex: listIndex,
      id: list[listIndex].id,
      file_type: list[listIndex].file_type,
      imageSrc: '',
      videoSrc: ''
    });
  },
  // 推荐选择
  selectChange: function selectChange(e) {
    var index = e.currentTarget.dataset.index;
    var listIndex = index;
    var list = this.data.list;
    this.setData({
      indexImg: list[listIndex].url,
      video_url: list[listIndex].video_url,
      listIndex: listIndex,
      id: list[listIndex].id,
      file_type: list[listIndex].file_type,
      imageSrc: '',
      videoSrc: ''
    });
  },
  // 
  saveBtnChange: function saveBtnChange(e) {
    var index = e.currentTarget.dataset.index; // 0视频 1表情包

    this.setData({
      isSave: true,
      saveFile_type: index
    });
  },
  // 跳转语音表情包详情页
  goPage: function goPage() {
    if (this.data.video_url) {
      var url = this.data.video_url;
      var poster = this.data.indexImg;
      wx.navigateTo({
        url: '/pages/tabindex/voiceDetail/detail/index?id=' + this.data.id + "&url=" + encodeURI(url) + "&poster=" + poster + "&homepage_id=" + this.data.homepage_id
      });
    }
  },
  getList: function getList() {
    var _this7 = this;

    var param = {
      homepage_id: this.data.homepage_id,
      classify_id: this.data.selectClassifyId,
      album_id: 0,
      page: this.data.page,
      limit: this.data.pageSize,
      version: apiList.version,
      appid: apiList.appId,
      openid: app.getUserOpenId(),
      timestamp: app.getCurrentTime()
    };
    apiList.post(apiList.getRecommendList, param, app.getToken()).then(function (ret) {
      var length = ret.photoList.length;

      if (length) {
        var page = _this7.data.page + 1;

        var list = _this7.data.list.concat(ret.photoList);

        _this7.setData({
          page: page,
          list: list,
          empty: false
        });
      }

      if (length < _this7.data.pageSize) {
        _this7.setData({
          hasMore: false
        });

        if (_this7.data.list.length <= 0) {
          _this7.setData({
            empty: true
          });
        }
      }
    });
  },
  setDownCache: function setDownCache() {
    var downloadHistory = app.getCache("downloadHistory") || [];

    for (var i = 0; i < downloadHistory.length; i++) {
      if (this.data.indexImg == downloadHistory[i].url) {
        downloadHistory.splice(i, 1);
        break;
      }
    }

    if (downloadHistory.length > 99) {
      downloadHistory.splice(downloadHistory.length - 1, 1);
    }

    var item = {
      url: this.data.indexImg,
      id: this.data.id,
      file_type: this.data.file_type,
      video_url: this.data.video_url,
      search_code: this.data.code != undefined ? this.data.code : ""
    };
    downloadHistory.splice(0, 0, item);
    app.setCache("downloadHistory", downloadHistory);
  },
  goToMini: function goToMini() {
    var search_code = app.getCache("search_code") || '';
    var path = 'pages/tabindex/voiceDetail/index/index?id=' + this.data.id + "&search_code=" + search_code + "&homepage_id=" + this.data.homepage_id;
    console.log("path", path);
    wx.navigateToMiniProgram({
      appId: 'wx91448f2244b5e607',
      path: path,
      success: function success(res) {// 打开成功
      }
    });
  },

  /***广告逻辑开始 */
  checkAdv: function checkAdv() {
    var _this8 = this;

    if (this.data.buttonClicked != undefined && this.data.buttonClicked) {
      app.log("请勿频繁点击");
      return false;
    }

    adVideoUtils.buttonClicked(this);

    if (app.isReachLimitDownTimes()) {
      wx.showModal({
        title: '达到下载上限',
        // 标题
        content: '今日下载次数已经达到上限了,是否继续下载',
        showCancel: true,
        confirmText: "继续下载",
        success: function success(res) {
          if (res.confirm) {
            _this8.goToMini();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
      return false;
    }

    app.isNotLookAdv().then(function (res) {
      if (res) {
        app.log("免看广告");

        _this8.advSuccess();
      } else {
        adVideoUtils.videoAdInit(apiList.advId, _this8); //初始化广告
      }
    }).catch(function (err) {
      _this8.advSuccess();

      console.log("errrr111255", err);
    });
  },

  /**
  * 广告点击关闭逻辑
  */
  adVideoClose: function adVideoClose(status) {
    var _this9 = this;

    if (this.data.orderSubmited != undefined && this.data.orderSubmited) {
      app.log("订单请勿重复上传");
      return false;
    }

    adVideoUtils.orderSubmited(this);
    adVideoUtils.setAdvOrder(this.data.id, status).then(function (res) {
      if (res) {
        app.log("订单上传成功");

        if (status) {
          _this9.advSuccess();
        }
      } else {
        if (status) {
          _this9.advSuccess();
        }

        app.log("订单上传失败");
      }
    });
  },

  /**
  * 广告播放完并处理成功订单后的逻辑
  */
  advSuccess: function advSuccess() {
    if (this.data.submitButtonClicked != undefined && this.data.submitButtonClicked) {
      app.log("请勿重复提交");
      return false;
    }

    adVideoUtils.submitButtonClicked(this);
    this.saveImage();
  },

  /**
  * 广告组件出错
  */
  setAdvError: function setAdvError(err) {
    var _this10 = this;

    adVideoUtils.setAdvError(this.data.id, err).then(function (res) {
      if (res) {
        app.log("广告出错信息上传成功");
      } else {
        app.log("广告出错信息上传失败");
      }

      _this10.advSuccess();
    });
  },

  /***广告逻辑结束 */
  onUnload: function onUnload() {
    adVideoUtils.advDestroy();
  }
}); 
 			}); 	require("pages/tabindex/voiceDetail/index/index.js");
 	
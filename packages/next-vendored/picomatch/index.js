(()=>{"use strict";var t={170:(t,e,u)=>{const n=u(510);const isWindows=()=>{if(typeof navigator!=="undefined"&&navigator.platform){const t=navigator.platform.toLowerCase();return t==="win32"||t==="windows"}if(typeof process!=="undefined"&&process.platform){return process.platform==="win32"}return false};function picomatch(t,e,u=false){if(e&&(e.windows===null||e.windows===undefined)){e={...e,windows:isWindows()}}return n(t,e,u)}Object.assign(picomatch,n);t.exports=picomatch},154:t=>{const e="\\\\/";const u=`[^${e}]`;const n="\\.";const o="\\+";const s="\\?";const r="\\/";const a="(?=.)";const i="[^/]";const c=`(?:${r}|$)`;const p=`(?:^|${r})`;const l=`${n}{1,2}${c}`;const f=`(?!${n})`;const A=`(?!${p}${l})`;const _=`(?!${n}{0,1}${c})`;const R=`(?!${l})`;const E=`[^.${r}]`;const h=`${i}*?`;const g="/";const b={DOT_LITERAL:n,PLUS_LITERAL:o,QMARK_LITERAL:s,SLASH_LITERAL:r,ONE_CHAR:a,QMARK:i,END_ANCHOR:c,DOTS_SLASH:l,NO_DOT:f,NO_DOTS:A,NO_DOT_SLASH:_,NO_DOTS_SLASH:R,QMARK_NO_DOT:E,STAR:h,START_ANCHOR:p,SEP:g};const C={...b,SLASH_LITERAL:`[${e}]`,QMARK:u,STAR:`${u}*?`,DOTS_SLASH:`${n}{1,2}(?:[${e}]|$)`,NO_DOT:`(?!${n})`,NO_DOTS:`(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,NO_DOT_SLASH:`(?!${n}{0,1}(?:[${e}]|$))`,NO_DOTS_SLASH:`(?!${n}{1,2}(?:[${e}]|$))`,QMARK_NO_DOT:`[^.${e}]`,START_ANCHOR:`(?:^|[${e}])`,END_ANCHOR:`(?:[${e}]|$)`,SEP:"\\"};const y={alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"};t.exports={MAX_LENGTH:1024*64,POSIX_REGEX_SOURCE:y,REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,extglobChars(t){return{"!":{type:"negate",open:"(?:(?!(?:",close:`))${t.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}},globChars(t){return t===true?C:b}}},697:(t,e,u)=>{const n=u(154);const o=u(96);const{MAX_LENGTH:s,POSIX_REGEX_SOURCE:r,REGEX_NON_SPECIAL_CHARS:a,REGEX_SPECIAL_CHARS_BACKREF:i,REPLACEMENTS:c}=n;const expandRange=(t,e)=>{if(typeof e.expandRange==="function"){return e.expandRange(...t,e)}t.sort();const u=`[${t.join("-")}]`;try{new RegExp(u)}catch(e){return t.map((t=>o.escapeRegex(t))).join("..")}return u};const syntaxError=(t,e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;const parse=(t,e)=>{if(typeof t!=="string"){throw new TypeError("Expected a string")}t=c[t]||t;const u={...e};const p=typeof u.maxLength==="number"?Math.min(s,u.maxLength):s;let l=t.length;if(l>p){throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`)}const f={type:"bos",value:"",output:u.prepend||""};const A=[f];const _=u.capture?"":"?:";const R=n.globChars(u.windows);const E=n.extglobChars(R);const{DOT_LITERAL:h,PLUS_LITERAL:g,SLASH_LITERAL:b,ONE_CHAR:C,DOTS_SLASH:y,NO_DOT:$,NO_DOT_SLASH:x,NO_DOTS_SLASH:S,QMARK:H,QMARK_NO_DOT:v,STAR:d,START_ANCHOR:L}=R;const globstar=t=>`(${_}(?:(?!${L}${t.dot?y:h}).)*?)`;const T=u.dot?"":$;const O=u.dot?H:v;let k=u.bash===true?globstar(u):d;if(u.capture){k=`(${k})`}if(typeof u.noext==="boolean"){u.noextglob=u.noext}const m={input:t,index:-1,start:0,dot:u.dot===true,consumed:"",output:"",prefix:"",backtrack:false,negated:false,brackets:0,braces:0,parens:0,quotes:0,globstar:false,tokens:A};t=o.removePrefix(t,m);l=t.length;const w=[];const N=[];const I=[];let B=f;let G;const eos=()=>m.index===l-1;const D=m.peek=(e=1)=>t[m.index+e];const M=m.advance=()=>t[++m.index]||"";const remaining=()=>t.slice(m.index+1);const consume=(t="",e=0)=>{m.consumed+=t;m.index+=e};const append=t=>{m.output+=t.output!=null?t.output:t.value;consume(t.value)};const negate=()=>{let t=1;while(D()==="!"&&(D(2)!=="("||D(3)==="?")){M();m.start++;t++}if(t%2===0){return false}m.negated=true;m.start++;return true};const increment=t=>{m[t]++;I.push(t)};const decrement=t=>{m[t]--;I.pop()};const push=t=>{if(B.type==="globstar"){const e=m.braces>0&&(t.type==="comma"||t.type==="brace");const u=t.extglob===true||w.length&&(t.type==="pipe"||t.type==="paren");if(t.type!=="slash"&&t.type!=="paren"&&!e&&!u){m.output=m.output.slice(0,-B.output.length);B.type="star";B.value="*";B.output=k;m.output+=B.output}}if(w.length&&t.type!=="paren"){w[w.length-1].inner+=t.value}if(t.value||t.output)append(t);if(B&&B.type==="text"&&t.type==="text"){B.output=(B.output||B.value)+t.value;B.value+=t.value;return}t.prev=B;A.push(t);B=t};const extglobOpen=(t,e)=>{const n={...E[e],conditions:1,inner:""};n.prev=B;n.parens=m.parens;n.output=m.output;const o=(u.capture?"(":"")+n.open;increment("parens");push({type:t,value:e,output:m.output?"":C});push({type:"paren",extglob:true,value:M(),output:o});w.push(n)};const extglobClose=t=>{let n=t.close+(u.capture?")":"");let o;if(t.type==="negate"){let s=k;if(t.inner&&t.inner.length>1&&t.inner.includes("/")){s=globstar(u)}if(s!==k||eos()||/^\)+$/.test(remaining())){n=t.close=`)$))${s}`}if(t.inner.includes("*")&&(o=remaining())&&/^\.[^\\/.]+$/.test(o)){const u=parse(o,{...e,fastpaths:false}).output;n=t.close=`)${u})${s})`}if(t.prev.type==="bos"){m.negatedExtglob=true}}push({type:"paren",extglob:true,value:G,output:n});decrement("parens")};if(u.fastpaths!==false&&!/(^[*!]|[/()[\]{}"])/.test(t)){let n=false;let s=t.replace(i,((t,e,u,o,s,r)=>{if(o==="\\"){n=true;return t}if(o==="?"){if(e){return e+o+(s?H.repeat(s.length):"")}if(r===0){return O+(s?H.repeat(s.length):"")}return H.repeat(u.length)}if(o==="."){return h.repeat(u.length)}if(o==="*"){if(e){return e+o+(s?k:"")}return k}return e?t:`\\${t}`}));if(n===true){if(u.unescape===true){s=s.replace(/\\/g,"")}else{s=s.replace(/\\+/g,(t=>t.length%2===0?"\\\\":t?"\\":""))}}if(s===t&&u.contains===true){m.output=t;return m}m.output=o.wrapOutput(s,m,e);return m}while(!eos()){G=M();if(G==="\0"){continue}if(G==="\\"){const t=D();if(t==="/"&&u.bash!==true){continue}if(t==="."||t===";"){continue}if(!t){G+="\\";push({type:"text",value:G});continue}const e=/^\\+/.exec(remaining());let n=0;if(e&&e[0].length>2){n=e[0].length;m.index+=n;if(n%2!==0){G+="\\"}}if(u.unescape===true){G=M()}else{G+=M()}if(m.brackets===0){push({type:"text",value:G});continue}}if(m.brackets>0&&(G!=="]"||B.value==="["||B.value==="[^")){if(u.posix!==false&&G===":"){const t=B.value.slice(1);if(t.includes("[")){B.posix=true;if(t.includes(":")){const t=B.value.lastIndexOf("[");const e=B.value.slice(0,t);const u=B.value.slice(t+2);const n=r[u];if(n){B.value=e+n;m.backtrack=true;M();if(!f.output&&A.indexOf(B)===1){f.output=C}continue}}}}if(G==="["&&D()!==":"||G==="-"&&D()==="]"){G=`\\${G}`}if(G==="]"&&(B.value==="["||B.value==="[^")){G=`\\${G}`}if(u.posix===true&&G==="!"&&B.value==="["){G="^"}B.value+=G;append({value:G});continue}if(m.quotes===1&&G!=='"'){G=o.escapeRegex(G);B.value+=G;append({value:G});continue}if(G==='"'){m.quotes=m.quotes===1?0:1;if(u.keepQuotes===true){push({type:"text",value:G})}continue}if(G==="("){increment("parens");push({type:"paren",value:G});continue}if(G===")"){if(m.parens===0&&u.strictBrackets===true){throw new SyntaxError(syntaxError("opening","("))}const t=w[w.length-1];if(t&&m.parens===t.parens+1){extglobClose(w.pop());continue}push({type:"paren",value:G,output:m.parens?")":"\\)"});decrement("parens");continue}if(G==="["){if(u.nobracket===true||!remaining().includes("]")){if(u.nobracket!==true&&u.strictBrackets===true){throw new SyntaxError(syntaxError("closing","]"))}G=`\\${G}`}else{increment("brackets")}push({type:"bracket",value:G});continue}if(G==="]"){if(u.nobracket===true||B&&B.type==="bracket"&&B.value.length===1){push({type:"text",value:G,output:`\\${G}`});continue}if(m.brackets===0){if(u.strictBrackets===true){throw new SyntaxError(syntaxError("opening","["))}push({type:"text",value:G,output:`\\${G}`});continue}decrement("brackets");const t=B.value.slice(1);if(B.posix!==true&&t[0]==="^"&&!t.includes("/")){G=`/${G}`}B.value+=G;append({value:G});if(u.literalBrackets===false||o.hasRegexChars(t)){continue}const e=o.escapeRegex(B.value);m.output=m.output.slice(0,-B.value.length);if(u.literalBrackets===true){m.output+=e;B.value=e;continue}B.value=`(${_}${e}|${B.value})`;m.output+=B.value;continue}if(G==="{"&&u.nobrace!==true){increment("braces");const t={type:"brace",value:G,output:"(",outputIndex:m.output.length,tokensIndex:m.tokens.length};N.push(t);push(t);continue}if(G==="}"){const t=N[N.length-1];if(u.nobrace===true||!t){push({type:"text",value:G,output:G});continue}let e=")";if(t.dots===true){const t=A.slice();const n=[];for(let e=t.length-1;e>=0;e--){A.pop();if(t[e].type==="brace"){break}if(t[e].type!=="dots"){n.unshift(t[e].value)}}e=expandRange(n,u);m.backtrack=true}if(t.comma!==true&&t.dots!==true){const u=m.output.slice(0,t.outputIndex);const n=m.tokens.slice(t.tokensIndex);t.value=t.output="\\{";G=e="\\}";m.output=u;for(const t of n){m.output+=t.output||t.value}}push({type:"brace",value:G,output:e});decrement("braces");N.pop();continue}if(G==="|"){if(w.length>0){w[w.length-1].conditions++}push({type:"text",value:G});continue}if(G===","){let t=G;const e=N[N.length-1];if(e&&I[I.length-1]==="braces"){e.comma=true;t="|"}push({type:"comma",value:G,output:t});continue}if(G==="/"){if(B.type==="dot"&&m.index===m.start+1){m.start=m.index+1;m.consumed="";m.output="";A.pop();B=f;continue}push({type:"slash",value:G,output:b});continue}if(G==="."){if(m.braces>0&&B.type==="dot"){if(B.value===".")B.output=h;const t=N[N.length-1];B.type="dots";B.output+=G;B.value+=G;t.dots=true;continue}if(m.braces+m.parens===0&&B.type!=="bos"&&B.type!=="slash"){push({type:"text",value:G,output:h});continue}push({type:"dot",value:G,output:h});continue}if(G==="?"){const t=B&&B.value==="(";if(!t&&u.noextglob!==true&&D()==="("&&D(2)!=="?"){extglobOpen("qmark",G);continue}if(B&&B.type==="paren"){const t=D();let e=G;if(B.value==="("&&!/[!=<:]/.test(t)||t==="<"&&!/<([!=]|\w+>)/.test(remaining())){e=`\\${G}`}push({type:"text",value:G,output:e});continue}if(u.dot!==true&&(B.type==="slash"||B.type==="bos")){push({type:"qmark",value:G,output:v});continue}push({type:"qmark",value:G,output:H});continue}if(G==="!"){if(u.noextglob!==true&&D()==="("){if(D(2)!=="?"||!/[!=<:]/.test(D(3))){extglobOpen("negate",G);continue}}if(u.nonegate!==true&&m.index===0){negate();continue}}if(G==="+"){if(u.noextglob!==true&&D()==="("&&D(2)!=="?"){extglobOpen("plus",G);continue}if(B&&B.value==="("||u.regex===false){push({type:"plus",value:G,output:g});continue}if(B&&(B.type==="bracket"||B.type==="paren"||B.type==="brace")||m.parens>0){push({type:"plus",value:G});continue}push({type:"plus",value:g});continue}if(G==="@"){if(u.noextglob!==true&&D()==="("&&D(2)!=="?"){push({type:"at",extglob:true,value:G,output:""});continue}push({type:"text",value:G});continue}if(G!=="*"){if(G==="$"||G==="^"){G=`\\${G}`}const t=a.exec(remaining());if(t){G+=t[0];m.index+=t[0].length}push({type:"text",value:G});continue}if(B&&(B.type==="globstar"||B.star===true)){B.type="star";B.star=true;B.value+=G;B.output=k;m.backtrack=true;m.globstar=true;consume(G);continue}let e=remaining();if(u.noextglob!==true&&/^\([^?]/.test(e)){extglobOpen("star",G);continue}if(B.type==="star"){if(u.noglobstar===true){consume(G);continue}const n=B.prev;const o=n.prev;const s=n.type==="slash"||n.type==="bos";const r=o&&(o.type==="star"||o.type==="globstar");if(u.bash===true&&(!s||e[0]&&e[0]!=="/")){push({type:"star",value:G,output:""});continue}const a=m.braces>0&&(n.type==="comma"||n.type==="brace");const i=w.length&&(n.type==="pipe"||n.type==="paren");if(!s&&n.type!=="paren"&&!a&&!i){push({type:"star",value:G,output:""});continue}while(e.slice(0,3)==="/**"){const u=t[m.index+4];if(u&&u!=="/"){break}e=e.slice(3);consume("/**",3)}if(n.type==="bos"&&eos()){B.type="globstar";B.value+=G;B.output=globstar(u);m.output=B.output;m.globstar=true;consume(G);continue}if(n.type==="slash"&&n.prev.type!=="bos"&&!r&&eos()){m.output=m.output.slice(0,-(n.output+B.output).length);n.output=`(?:${n.output}`;B.type="globstar";B.output=globstar(u)+(u.strictSlashes?")":"|$)");B.value+=G;m.globstar=true;m.output+=n.output+B.output;consume(G);continue}if(n.type==="slash"&&n.prev.type!=="bos"&&e[0]==="/"){const t=e[1]!==void 0?"|$":"";m.output=m.output.slice(0,-(n.output+B.output).length);n.output=`(?:${n.output}`;B.type="globstar";B.output=`${globstar(u)}${b}|${b}${t})`;B.value+=G;m.output+=n.output+B.output;m.globstar=true;consume(G+M());push({type:"slash",value:"/",output:""});continue}if(n.type==="bos"&&e[0]==="/"){B.type="globstar";B.value+=G;B.output=`(?:^|${b}|${globstar(u)}${b})`;m.output=B.output;m.globstar=true;consume(G+M());push({type:"slash",value:"/",output:""});continue}m.output=m.output.slice(0,-B.output.length);B.type="globstar";B.output=globstar(u);B.value+=G;m.output+=B.output;m.globstar=true;consume(G);continue}const n={type:"star",value:G,output:k};if(u.bash===true){n.output=".*?";if(B.type==="bos"||B.type==="slash"){n.output=T+n.output}push(n);continue}if(B&&(B.type==="bracket"||B.type==="paren")&&u.regex===true){n.output=G;push(n);continue}if(m.index===m.start||B.type==="slash"||B.type==="dot"){if(B.type==="dot"){m.output+=x;B.output+=x}else if(u.dot===true){m.output+=S;B.output+=S}else{m.output+=T;B.output+=T}if(D()!=="*"){m.output+=C;B.output+=C}}push(n)}while(m.brackets>0){if(u.strictBrackets===true)throw new SyntaxError(syntaxError("closing","]"));m.output=o.escapeLast(m.output,"[");decrement("brackets")}while(m.parens>0){if(u.strictBrackets===true)throw new SyntaxError(syntaxError("closing",")"));m.output=o.escapeLast(m.output,"(");decrement("parens")}while(m.braces>0){if(u.strictBrackets===true)throw new SyntaxError(syntaxError("closing","}"));m.output=o.escapeLast(m.output,"{");decrement("braces")}if(u.strictSlashes!==true&&(B.type==="star"||B.type==="bracket")){push({type:"maybe_slash",value:"",output:`${b}?`})}if(m.backtrack===true){m.output="";for(const t of m.tokens){m.output+=t.output!=null?t.output:t.value;if(t.suffix){m.output+=t.suffix}}}return m};parse.fastpaths=(t,e)=>{const u={...e};const r=typeof u.maxLength==="number"?Math.min(s,u.maxLength):s;const a=t.length;if(a>r){throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`)}t=c[t]||t;const{DOT_LITERAL:i,SLASH_LITERAL:p,ONE_CHAR:l,DOTS_SLASH:f,NO_DOT:A,NO_DOTS:_,NO_DOTS_SLASH:R,STAR:E,START_ANCHOR:h}=n.globChars(u.windows);const g=u.dot?_:A;const b=u.dot?R:A;const C=u.capture?"":"?:";const y={negated:false,prefix:""};let $=u.bash===true?".*?":E;if(u.capture){$=`(${$})`}const globstar=t=>{if(t.noglobstar===true)return $;return`(${C}(?:(?!${h}${t.dot?f:i}).)*?)`};const create=t=>{switch(t){case"*":return`${g}${l}${$}`;case".*":return`${i}${l}${$}`;case"*.*":return`${g}${$}${i}${l}${$}`;case"*/*":return`${g}${$}${p}${l}${b}${$}`;case"**":return g+globstar(u);case"**/*":return`(?:${g}${globstar(u)}${p})?${b}${l}${$}`;case"**/*.*":return`(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;case"**/.*":return`(?:${g}${globstar(u)}${p})?${i}${l}${$}`;default:{const e=/^(.*?)\.(\w+)$/.exec(t);if(!e)return;const u=create(e[1]);if(!u)return;return u+i+e[2]}}};const x=o.removePrefix(t,y);let S=create(x);if(S&&u.strictSlashes!==true){S+=`${p}?`}return S};t.exports=parse},510:(t,e,u)=>{const n=u(716);const o=u(697);const s=u(96);const r=u(154);const isObject=t=>t&&typeof t==="object"&&!Array.isArray(t);const picomatch=(t,e,u=false)=>{if(Array.isArray(t)){const n=t.map((t=>picomatch(t,e,u)));const arrayMatcher=t=>{for(const e of n){const u=e(t);if(u)return u}return false};return arrayMatcher}const n=isObject(t)&&t.tokens&&t.input;if(t===""||typeof t!=="string"&&!n){throw new TypeError("Expected pattern to be a non-empty string")}const o=e||{};const s=o.windows;const r=n?picomatch.compileRe(t,e):picomatch.makeRe(t,e,false,true);const a=r.state;delete r.state;let isIgnored=()=>false;if(o.ignore){const t={...e,ignore:null,onMatch:null,onResult:null};isIgnored=picomatch(o.ignore,t,u)}const matcher=(u,n=false)=>{const{isMatch:i,match:c,output:p}=picomatch.test(u,r,e,{glob:t,posix:s});const l={glob:t,state:a,regex:r,posix:s,input:u,output:p,match:c,isMatch:i};if(typeof o.onResult==="function"){o.onResult(l)}if(i===false){l.isMatch=false;return n?l:false}if(isIgnored(u)){if(typeof o.onIgnore==="function"){o.onIgnore(l)}l.isMatch=false;return n?l:false}if(typeof o.onMatch==="function"){o.onMatch(l)}return n?l:true};if(u){matcher.state=a}return matcher};picomatch.test=(t,e,u,{glob:n,posix:o}={})=>{if(typeof t!=="string"){throw new TypeError("Expected input to be a string")}if(t===""){return{isMatch:false,output:""}}const r=u||{};const a=r.format||(o?s.toPosixSlashes:null);let i=t===n;let c=i&&a?a(t):t;if(i===false){c=a?a(t):t;i=c===n}if(i===false||r.capture===true){if(r.matchBase===true||r.basename===true){i=picomatch.matchBase(t,e,u,o)}else{i=e.exec(c)}}return{isMatch:Boolean(i),match:i,output:c}};picomatch.matchBase=(t,e,u)=>{const n=e instanceof RegExp?e:picomatch.makeRe(e,u);return n.test(s.basename(t))};picomatch.isMatch=(t,e,u)=>picomatch(e,u)(t);picomatch.parse=(t,e)=>{if(Array.isArray(t))return t.map((t=>picomatch.parse(t,e)));return o(t,{...e,fastpaths:false})};picomatch.scan=(t,e)=>n(t,e);picomatch.compileRe=(t,e,u=false,n=false)=>{if(u===true){return t.output}const o=e||{};const s=o.contains?"":"^";const r=o.contains?"":"$";let a=`${s}(?:${t.output})${r}`;if(t&&t.negated===true){a=`^(?!${a}).*$`}const i=picomatch.toRegex(a,e);if(n===true){i.state=t}return i};picomatch.makeRe=(t,e={},u=false,n=false)=>{if(!t||typeof t!=="string"){throw new TypeError("Expected a non-empty string")}let s={negated:false,fastpaths:true};if(e.fastpaths!==false&&(t[0]==="."||t[0]==="*")){s.output=o.fastpaths(t,e)}if(!s.output){s=o(t,e)}return picomatch.compileRe(s,e,u,n)};picomatch.toRegex=(t,e)=>{try{const u=e||{};return new RegExp(t,u.flags||(u.nocase?"i":""))}catch(t){if(e&&e.debug===true)throw t;return/$^/}};picomatch.constants=r;t.exports=picomatch},716:(t,e,u)=>{const n=u(96);const{CHAR_ASTERISK:o,CHAR_AT:s,CHAR_BACKWARD_SLASH:r,CHAR_COMMA:a,CHAR_DOT:i,CHAR_EXCLAMATION_MARK:c,CHAR_FORWARD_SLASH:p,CHAR_LEFT_CURLY_BRACE:l,CHAR_LEFT_PARENTHESES:f,CHAR_LEFT_SQUARE_BRACKET:A,CHAR_PLUS:_,CHAR_QUESTION_MARK:R,CHAR_RIGHT_CURLY_BRACE:E,CHAR_RIGHT_PARENTHESES:h,CHAR_RIGHT_SQUARE_BRACKET:g}=u(154);const isPathSeparator=t=>t===p||t===r;const depth=t=>{if(t.isPrefix!==true){t.depth=t.isGlobstar?Infinity:1}};const scan=(t,e)=>{const u=e||{};const b=t.length-1;const C=u.parts===true||u.scanToEnd===true;const y=[];const $=[];const x=[];let S=t;let H=-1;let v=0;let d=0;let L=false;let T=false;let O=false;let k=false;let m=false;let w=false;let N=false;let I=false;let B=false;let G=false;let D=0;let M;let P;let K={value:"",depth:0,isGlob:false};const eos=()=>H>=b;const peek=()=>S.charCodeAt(H+1);const advance=()=>{M=P;return S.charCodeAt(++H)};while(H<b){P=advance();let t;if(P===r){N=K.backslashes=true;P=advance();if(P===l){w=true}continue}if(w===true||P===l){D++;while(eos()!==true&&(P=advance())){if(P===r){N=K.backslashes=true;advance();continue}if(P===l){D++;continue}if(w!==true&&P===i&&(P=advance())===i){L=K.isBrace=true;O=K.isGlob=true;G=true;if(C===true){continue}break}if(w!==true&&P===a){L=K.isBrace=true;O=K.isGlob=true;G=true;if(C===true){continue}break}if(P===E){D--;if(D===0){w=false;L=K.isBrace=true;G=true;break}}}if(C===true){continue}break}if(P===p){y.push(H);$.push(K);K={value:"",depth:0,isGlob:false};if(G===true)continue;if(M===i&&H===v+1){v+=2;continue}d=H+1;continue}if(u.noext!==true){const t=P===_||P===s||P===o||P===R||P===c;if(t===true&&peek()===f){O=K.isGlob=true;k=K.isExtglob=true;G=true;if(P===c&&H===v){B=true}if(C===true){while(eos()!==true&&(P=advance())){if(P===r){N=K.backslashes=true;P=advance();continue}if(P===h){O=K.isGlob=true;G=true;break}}continue}break}}if(P===o){if(M===o)m=K.isGlobstar=true;O=K.isGlob=true;G=true;if(C===true){continue}break}if(P===R){O=K.isGlob=true;G=true;if(C===true){continue}break}if(P===A){while(eos()!==true&&(t=advance())){if(t===r){N=K.backslashes=true;advance();continue}if(t===g){T=K.isBracket=true;O=K.isGlob=true;G=true;break}}if(C===true){continue}break}if(u.nonegate!==true&&P===c&&H===v){I=K.negated=true;v++;continue}if(u.noparen!==true&&P===f){O=K.isGlob=true;if(C===true){while(eos()!==true&&(P=advance())){if(P===f){N=K.backslashes=true;P=advance();continue}if(P===h){G=true;break}}continue}break}if(O===true){G=true;if(C===true){continue}break}}if(u.noext===true){k=false;O=false}let U=S;let X="";let F="";if(v>0){X=S.slice(0,v);S=S.slice(v);d-=v}if(U&&O===true&&d>0){U=S.slice(0,d);F=S.slice(d)}else if(O===true){U="";F=S}else{U=S}if(U&&U!==""&&U!=="/"&&U!==S){if(isPathSeparator(U.charCodeAt(U.length-1))){U=U.slice(0,-1)}}if(u.unescape===true){if(F)F=n.removeBackslashes(F);if(U&&N===true){U=n.removeBackslashes(U)}}const Q={prefix:X,input:t,start:v,base:U,glob:F,isBrace:L,isBracket:T,isGlob:O,isExtglob:k,isGlobstar:m,negated:I,negatedExtglob:B};if(u.tokens===true){Q.maxDepth=0;if(!isPathSeparator(P)){$.push(K)}Q.tokens=$}if(u.parts===true||u.tokens===true){let e;for(let n=0;n<y.length;n++){const o=e?e+1:v;const s=y[n];const r=t.slice(o,s);if(u.tokens){if(n===0&&v!==0){$[n].isPrefix=true;$[n].value=X}else{$[n].value=r}depth($[n]);Q.maxDepth+=$[n].depth}if(n!==0||r!==""){x.push(r)}e=s}if(e&&e+1<t.length){const n=t.slice(e+1);x.push(n);if(u.tokens){$[$.length-1].value=n;depth($[$.length-1]);Q.maxDepth+=$[$.length-1].depth}}Q.slashes=y;Q.parts=x}return Q};t.exports=scan},96:(t,e,u)=>{const{REGEX_BACKSLASH:n,REGEX_REMOVE_BACKSLASH:o,REGEX_SPECIAL_CHARS:s,REGEX_SPECIAL_CHARS_GLOBAL:r}=u(154);e.isObject=t=>t!==null&&typeof t==="object"&&!Array.isArray(t);e.hasRegexChars=t=>s.test(t);e.isRegexChar=t=>t.length===1&&e.hasRegexChars(t);e.escapeRegex=t=>t.replace(r,"\\$1");e.toPosixSlashes=t=>t.replace(n,"/");e.removeBackslashes=t=>t.replace(o,(t=>t==="\\"?"":t));e.escapeLast=(t,u,n)=>{const o=t.lastIndexOf(u,n);if(o===-1)return t;if(t[o-1]==="\\")return e.escapeLast(t,u,o-1);return`${t.slice(0,o)}\\${t.slice(o)}`};e.removePrefix=(t,e={})=>{let u=t;if(u.startsWith("./")){u=u.slice(2);e.prefix="./"}return u};e.wrapOutput=(t,e={},u={})=>{const n=u.contains?"":"^";const o=u.contains?"":"$";let s=`${n}(?:${t})${o}`;if(e.negated===true){s=`(?:^(?!${s}).*$)`}return s};e.basename=(t,{windows:e}={})=>{const u=t.split(e?/[\\/]/:"/");const n=u[u.length-1];if(n===""){return u[u.length-2]}return n}}};var e={};function __nccwpck_require__(u){var n=e[u];if(n!==undefined){return n.exports}var o=e[u]={exports:{}};var s=true;try{t[u](o,o.exports,__nccwpck_require__);s=false}finally{if(s)delete e[u]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var u=__nccwpck_require__(170);module.exports=u})();
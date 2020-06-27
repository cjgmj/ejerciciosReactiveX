import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ultricies odio. Aliquam libero arcu, cursus in sollicitudin a, mollis sed lacus. Nullam porttitor lorem sed enim aliquam fringilla. Nullam lobortis viverra mauris ac tincidunt. Suspendisse ultricies sagittis libero imperdiet gravida. Vestibulum sed mauris ipsum. Vivamus massa tortor, tincidunt in aliquam quis, rhoncus ut neque.
<br /><br />
Sed id enim quis diam porttitor sodales. Proin posuere felis ac est finibus volutpat. Maecenas nec arcu non augue tempor posuere sit amet nec dui. Sed et aliquam elit. Etiam mi ante, commodo eu dolor ac, lobortis mollis turpis. Integer eu lacus sit amet orci sagittis aliquet. Ut magna enim, tincidunt ultricies condimentum ut, egestas dapibus enim. Integer rhoncus faucibus auctor. Duis varius pretium massa, et aliquet libero accumsan vitae. Vivamus ac neque eu mi gravida imperdiet.
<br /><br />
Duis pulvinar in sem eget egestas. Quisque consectetur velit ipsum, id suscipit eros vehicula sed. Etiam at elit posuere, rhoncus erat vitae, tincidunt purus. Sed non placerat felis. Suspendisse imperdiet justo vel bibendum rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eleifend laoreet risus, at euismod nisi viverra sit amet. Quisque bibendum interdum augue eu luctus. Nunc ex mi, egestas a pretium eu, tristique a nisl. Duis mollis volutpat mauris, sed tristique felis iaculis nec. In sagittis rutrum ipsum, in cursus quam. Mauris eget neque in arcu sollicitudin pretium a in dui. Nulla ornare orci in pulvinar facilisis.
<br /><br />
Aliquam viverra condimentum nisl, a ultricies risus malesuada non. Duis auctor urna maximus, interdum urna euismod, maximus enim. Integer a venenatis nisi, nec sollicitudin ante. Nam sagittis tincidunt tortor, eu auctor massa faucibus sed. Duis commodo metus arcu, sit amet pellentesque nunc fringilla eu. Phasellus suscipit consequat est at vulputate. Nullam ut nunc non diam auctor pulvinar non nec quam. Morbi vel ex sem. Nulla dictum augue elit, vel venenatis urna vehicula dapibus. Aliquam fringilla urna malesuada euismod suscipit. Duis in dui quis lectus laoreet elementum. Nunc aliquet, augue id faucibus convallis, sem dui tincidunt eros, ut feugiat nibh leo a ligula. Vivamus auctor erat sit amet lectus suscipit, quis hendrerit lectus ultricies. Praesent et quam feugiat, mattis lorem vitae, consectetur nunc. Nam sit amet massa ut arcu ultrices pharetra vulputate efficitur felis.
<br /><br />
Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis libero a turpis euismod, sit amet imperdiet turpis ultrices. Nunc mattis mollis urna. Maecenas id felis arcu. Donec ac nulla sed libero lobortis laoreet. Aenean et tortor at justo lobortis ornare. Mauris ultrices, est quis bibendum tristique, velit nisi vulputate nisi, et facilisis tortor nunc sit amet risus. Nulla sodales tristique risus, auctor dapibus nibh malesuada ut. Donec in imperdiet augue. Proin pretium auctor elit, vitae fermentum lectus elementum at. Cras gravida feugiat leo, in tempor mi. Integer sollicitudin vel turpis a hendrerit. Quisque pharetra, erat non maximus convallis, mauris ipsum commodo lorem, sed semper lorem mi non tellus. Donec dignissim lobortis ullamcorper.
<br /><br />
Integer nec semper leo, et sodales lorem. Aliquam eget leo sit amet nisl pulvinar tincidunt. Nam et auctor massa. Sed rutrum venenatis eros, a bibendum metus mattis at. Suspendisse potenti. Etiam elit dolor, tempus sed neque non, varius venenatis odio. Sed consequat ligula sit amet dolor maximus, a cursus nunc varius. Duis efficitur maximus orci, id porttitor ex bibendum id. Etiam luctus volutpat turpis, vel pretium orci commodo ac. In hac habitasse platea dictumst. Nam tincidunt fermentum posuere.
<br /><br />
Aenean viverra odio vel risus dictum, vitae volutpat dolor porta. Donec ut dolor vitae lectus facilisis fermentum sit amet ac tellus. In euismod scelerisque felis, vel interdum urna dictum ac. In congue sagittis magna sed iaculis. Phasellus vestibulum luctus odio id congue. Vivamus lacinia sodales mauris nec tincidunt. Maecenas eget eros risus. Maecenas ac elementum ex.
<br /><br />
Fusce fermentum diam id imperdiet pretium. Quisque sit amet magna sed tellus dapibus faucibus. Phasellus luctus, orci in pulvinar suscipit, mi dui facilisis orci, quis consequat neque ipsum vel nulla. Nulla ut rhoncus arcu, a egestas risus. Mauris sed odio nec diam euismod aliquet. Aliquam mollis diam ut neque rhoncus auctor. Cras blandit consequat libero.
<br /><br />
Cras eu tempus lectus. Duis aliquam, orci id lacinia tempus, nunc diam porta sapien, facilisis luctus leo magna at sapien. Vestibulum convallis in tortor in ultricies. Aenean sed eros quam. Etiam ultrices venenatis malesuada. Mauris et sodales nisl. Mauris gravida dolor sem, egestas malesuada massa efficitur et. Nam varius ligula nisi.
<br /><br />
Nulla volutpat mi ut nunc condimentum rutrum. Proin in egestas risus, sit amet fermentum turpis. Nam congue aliquet mi, eget ultrices augue aliquam et. Curabitur vulputate lorem vel enim pulvinar auctor. Quisque interdum metus a semper pulvinar. Aliquam nunc massa, malesuada sit amet sapien vel, ultrices volutpat lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam hendrerit tortor volutpat, luctus enim sit amet, accumsan libero. Donec faucibus sit amet lacus non volutpat. Duis elementum dictum vestibulum. Proin pretium risus eros, id faucibus lacus ornare nec. Mauris quis dolor urna. Etiam sollicitudin finibus feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas consectetur ultricies ligula, at congue erat imperdiet nec.
<br /><br />
Morbi at metus arcu. Duis ut luctus risus. Nullam vel sapien commodo, cursus ipsum et, faucibus ligula. Sed varius nulla eu neque cursus consequat vel eget massa. Donec dictum varius orci vitae mattis. Mauris iaculis pharetra ligula, eu pulvinar nunc lacinia sit amet. Maecenas imperdiet neque mauris, a eleifend purus commodo ac. Mauris congue aliquet arcu, at rutrum mauris. Ut quam elit, interdum ut posuere ac, pellentesque a urna. Sed ut orci porta, euismod lectus luctus, tempus nulla. Praesent velit magna, porttitor et bibendum quis, vehicula ut est. Duis vitae sollicitudin neque, quis commodo sapien.
<br /><br />
Aliquam erat volutpat. Vivamus sit amet eros sed metus ornare malesuada sed sit amet metus. Aliquam vitae euismod mauris. Aliquam sit amet quam ullamcorper, lacinia velit mattis, ultricies nisl. In hac habitasse platea dictumst. Aenean sed odio leo. Morbi pharetra semper ultrices. In sed est odio. Maecenas vulputate luctus erat at laoreet.
<br /><br />
Aliquam ultrices bibendum tortor congue consectetur. In efficitur placerat lacus, vitae imperdiet ipsum pretium vitae. Suspendisse ultrices tempor metus, in venenatis purus facilisis a. Sed elit augue, finibus at luctus fringilla, vehicula quis neque. Fusce nibh ipsum, hendrerit facilisis fermentum id, pretium ut erat. Maecenas non felis ut justo fringilla interdum vel vitae dolor. Pellentesque congue gravida massa, eu bibendum neque consectetur at.
<br /><br />
Cras eget eros nisl. Phasellus justo urna, venenatis in quam sed, posuere dignissim odio. Mauris ac sapien erat. Praesent sit amet suscipit arcu. Integer non dolor non mauris porttitor lacinia. Mauris eu eros et felis suscipit sodales et sed metus. Sed finibus ullamcorper libero vel dictum. Duis vestibulum consectetur interdum. Nam aliquam risus ac velit egestas, congue pellentesque ligula elementum. Vestibulum consectetur pellentesque lorem nec efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin a elit at enim semper maximus. Sed fermentum posuere condimentum.
<br /><br />
In hac habitasse platea dictumst. Aenean convallis, mi a semper fringilla, nibh purus convallis nisl, sit amet molestie risus dolor non justo. Curabitur elementum urna vitae metus congue cursus ac eget ligula. Sed et fringilla arcu. Donec finibus, enim in placerat bibendum, lectus sem convallis magna, in vestibulum purus urna in ex. Nunc euismod metus hendrerit mauris scelerisque, et aliquam magna porttitor. Donec vel mi ac lacus ullamcorper fringilla in nec libero. Maecenas purus orci, gravida et tellus malesuada, ornare luctus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris aliquet ultricies interdum. Maecenas tincidunt tincidunt enim, vitae iaculis elit euismod eget. In hac habitasse platea dictumst. Quisque mattis purus aliquet tempus laoreet. Cras quis lectus dapibus eros accumsan lacinia. Cras pharetra venenatis sem et dignissim.`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Función que haga el cálculo
const calcularPorcentajeScroll = event => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    // Hace lo mismo que el código comentado arriba
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
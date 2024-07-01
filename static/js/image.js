
// const K = document.querySelector('input[name="music_codebook"]:checked').value;


function showHide(to_show, to_hide) {
    for (var i = 0; i < to_show.length; i++) {
        document.getElementById(to_show[i]).style.display = 'block';
    }
    for (var i = 0; i < to_hide.length; i++) {
        document.getElementById(to_hide[i]).style.display = 'none';
    }
}

function genSelectC(div, k) {
    // Get the container and clear previous content
    const container = document.getElementById(div);
    container.innerHTML = ''; // Clear previous content

    // Create the <select> element
    const select = document.createElement('select');
    select.name = `${div}_${k}`;
    select.id = `${div}_${k}`;

    // Create and append the default <option>
    const defaultOption = document.createElement('option');
    defaultOption.value = 'None';
    defaultOption.textContent = '--';
    select.appendChild(defaultOption);

    // Create and append the other <option> elements
    for (let i = 0; i < k; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }

    // Append the <select> element and a <br> to the container
    container.appendChild(select);
    // container.appendChild(document.createElement('br'));

    // Clear the show-transfer div
    const show_div_v3 = div.replace('select_', 'transfer_').replace('_fix_c', '_v3');
    const show_div_mine = div.replace('select_', 'transfer_').replace('_fix_c', '_mine');
    const show_div_cycle = div.replace('select_', 'transfer_').replace('_fix_c', '_cycle');
    document.getElementById(show_div_v3).innerHTML = '';
    document.getElementById(show_div_mine).innerHTML = '';
    document.getElementById(show_div_cycle).innerHTML = '';

    // Clear the style selection
    const select_style = document.getElementById(div.replace('_fix_c', '_fix_s') + `_${k}`);
    if (select_style) {
        select_style.options[0].selected = true;
    }
    
    // Once the <select> selection changes, show the selected music
    select.onchange = function() {
        // clear the style selection
        const select_style = document.getElementById(div.replace('_fix_c', '_fix_s') + `_${k}`);
        select_style.options[0].selected = true;

        const v3_img_dir = div.replace('select_', '').replace('_fix_c', '_v3') + `_${k}`;
        const v3_img_path = `${v3_img_dir}/gen_c${select.value}.png`;
        const v3_show_div = div.replace('select_', 'transfer_').replace('_fix_c', '_v3');
        if (select.value === 'None') {
            document.getElementById(v3_show_div).innerHTML = '';
            return;
        }
        else selectedShow(v3_show_div, v3_img_path);

        const mine_img_dir = div.replace('select_', '').replace('_fix_c', '_mine') + `_${k}`;
        const mine_img_path = `${mine_img_dir}/gen_c${select.value}.png`;
        const mine_show_div = div.replace('select_', 'transfer_').replace('_fix_c', '_mine');
        if (select.value === 'None') {
            document.getElementById(mine_show_div).innerHTML = '';
            return;
        }
        else selectedShow(mine_show_div, mine_img_path);

        const cycle_img_dir = div.replace('select_', '').replace('_fix_c', '_cycle') + `_${k}`;
        const cycle_img_path = `${cycle_img_dir}/gen_c${select.value}.png`;
        const cycle_show_div = div.replace('select_', 'transfer_').replace('_fix_c', '_cycle');
        if (select.value === 'None') {
            document.getElementById(cycle_show_div).innerHTML = '';
            return;
        }
        else selectedShow(cycle_show_div, cycle_img_path);
    }
}

function genSelectS(div, k, n_s) {
    // Get the container and clear previous content
    const container = document.getElementById(div);
    container.innerHTML = ''; // Clear previous content

    // Create the <select> element
    const select = document.createElement('select');
    select.name = `${div}_${k}`;
    select.id = `${div}_${k}`;

    // Create and append the default <option>
    const defaultOption = document.createElement('option');
    defaultOption.value = 'None';
    defaultOption.textContent = '--';
    select.appendChild(defaultOption);

    if (n_s === 8) {
        var s_list = ['Black', 'Blue', 'Green', 'Red', 'Teal', 'Purple', 'Orange', 'Brown'];
    }
    else if (n_s === 12) {
        var s_list = ['Soprano Sax', 'Pipe Organ', 'Accordian', 'Viola', 'Trumpet', 'Muted Trumpet', 'Oboe', 'Clarinet', 'Piccolo', 'Pan Flute', 'Harmonica', 'Choir Aahs'];
    }

    // Create and append the other <option> elements
    for (let i = 0; i < n_s; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = s_list[i];
        select.appendChild(option);
    }

    // Append the <select> element and a <br> to the container
    container.appendChild(select);
    container.appendChild(document.createElement('br'));

    // Clear the show-transfer div
    const show_div_v3 = div.replace('select_', 'transfer_').replace('_fix_s', '_v3');
    const show_div_mine = div.replace('select_', 'transfer_').replace('_fix_s', '_mine');
    const show_div_cycle = div.replace('select_', 'transfer_').replace('_fix_s', '_cycle');
    document.getElementById(show_div_v3).innerHTML = '';
    document.getElementById(show_div_mine).innerHTML = '';
    document.getElementById(show_div_cycle).innerHTML = '';

    // Clear the content selection
    const select_content = document.getElementById(div.replace('_fix_s', '_fix_c') + `_${k}`);
    if (select_content) {
        select_content.options[0].selected = true;
    }
    
    // Once the <select> selection changes, show the selected music
    select.onchange = function() {
        // clear the content selection
        const select_content = document.getElementById(div.replace('_fix_s', '_fix_c') + `_${k}`);
        select_content.options[0].selected = true;

        const v3_img_dir = div.replace('select_', '').replace('_fix_s', '_v3') + `_${k}`;
        const v3_img_path = `${v3_img_dir}/gen_s${select.value}.png`;
        const v3_show_div = div.replace('select_', 'transfer_').replace('_fix_s', '_v3');
        if (select.value === 'None') {
            document.getElementById(v3_show_div).innerHTML = '';
            return;
        }
        else selectedShow(v3_show_div, v3_img_path);

        const mine_img_dir = div.replace('select_', '').replace('_fix_s', '_mine') + `_${k}`;
        const mine_img_path = `${mine_img_dir}/gen_s${select.value}.png`;
        const mine_show_div = div.replace('select_', 'transfer_').replace('_fix_s', '_mine');
        if (select.value === 'None') {
            document.getElementById(mine_show_div).innerHTML = '';
            return;
        }
        else selectedShow(mine_show_div, mine_img_path);

        const cycle_img_dir = div.replace('select_', '').replace('_fix_s', '_cycle') + `_${k}`;
        const cycle_img_path = `${cycle_img_dir}/gen_s${select.value}.png`;
        const cycle_show_div = div.replace('select_', 'transfer_').replace('_fix_s', '_cycle');
        if (select.value === 'None') {
            document.getElementById(cycle_show_div).innerHTML = '';
            return;
        }
        else selectedShow(cycle_show_div, cycle_img_path);
    }
}

function selectedShow(div, img_path){
    const container = document.getElementById(div);
    container.innerHTML = ''; // Clear previous content

    const img = document.createElement('img');
    img.src = img_path;
    img.style.width = '100%';
    container.appendChild(img);
}


genSelectC("select_image_fix_c", 10);
genSelectS("select_image_fix_s", 10, 8);
var radios = document.getElementsByName("image_codebook");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '10':
                showHide(["image_v3_10_c", "image_v3_10_s", "image_v3_10_cf"], ["image_v3_20_c", "image_v3_20_s", "image_v3_20_cf", "image_v3_40_c", "image_v3_40_s", "image_v3_40_cf"]);
                showHide(["image_mine_10_c", "image_mine_10_s", "image_mine_10_cf"], ["image_mine_20_c", "image_mine_20_s", "image_mine_20_cf", "image_mine_40_c", "image_mine_40_s", "image_mine_40_cf"]);
                showHide(["image_cycle_10_c", "image_cycle_10_s", "image_cycle_10_cf"], ["image_cycle_20_c", "image_cycle_20_s", "image_cycle_20_cf", "image_cycle_40_c", "image_cycle_40_s", "image_cycle_40_cf"]);
                genSelectC("select_image_fix_c", 10);
                genSelectS("select_image_fix_s", 10, 8);
                break;
            case '20':
                showHide(["image_v3_20_c", "image_v3_20_s", "image_v3_20_cf"], ["image_v3_10_c", "image_v3_10_s", "image_v3_10_cf", "image_v3_40_c", "image_v3_40_s", "image_v3_40_cf"]);
                showHide(["image_mine_20_c", "image_mine_20_s", "image_mine_20_cf"], ["image_mine_10_c", "image_mine_10_s", "image_mine_10_cf", "image_mine_40_c", "image_mine_40_s", "image_mine_40_cf"]);
                showHide(["image_cycle_20_c", "image_cycle_20_s", "image_cycle_20_cf"], ["image_cycle_10_c", "image_cycle_10_s", "image_cycle_10_cf", "image_cycle_40_c", "image_cycle_40_s", "image_cycle_40_cf"]);
                genSelectC("select_image_fix_c", 20);
                genSelectS("select_image_fix_s", 20, 8);
                break;
            case '40':
                showHide(["image_v3_40_c", "image_v3_40_s", "image_v3_40_cf"], ["image_v3_10_c", "image_v3_10_s", "image_v3_10_cf", "image_v3_20_c", "image_v3_20_s", "image_v3_20_cf"]);
                showHide(["image_mine_40_c", "image_mine_40_s", "image_mine_40_cf"], ["image_mine_10_c", "image_mine_10_s", "image_mine_10_cf", "image_mine_20_c", "image_mine_20_s", "image_mine_20_cf"]);
                showHide(["image_cycle_40_c", "image_cycle_40_s", "image_cycle_40_cf"], ["image_cycle_10_c", "image_cycle_10_s", "image_cycle_10_cf", "image_cycle_20_c", "image_cycle_20_s", "image_cycle_20_cf"]);
                genSelectC("select_image_fix_c", 40);
                genSelectS("select_image_fix_s", 40, 8);
                break;
        }
    }
}

// genSelectS("select_music_mine_fix_s", 12, 12);
// genSelectC("select_music_mine_fix_c", 12);
// var radios = document.getElementsByName("music_codebook_mine");
// for(var i = 0, max = radios.length; i < max; i++) {
//     radios[i].onclick = function() {
//         switch (this.value) {
//             case '12':
//                 showHide(["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf"], ["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
//                 genSelectC("select_music_mine_fix_c", 12);
//                 genSelectS("select_music_mine_fix_s", 12, 12);
//                 break;
//             case '24':
//                 showHide(["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
//                 genSelectC("select_music_mine_fix_c", 24);
//                 genSelectS("select_music_mine_fix_s", 24, 12);
//                 break;
//             case '48':
//                 showHide(["music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"]);
//                 genSelectC("select_music_mine_fix_c", 48);
//                 genSelectS("select_music_mine_fix_s", 48, 12);
//                 break;
//         }
//     }
// }

// genSelectS("select_music_cycle_fix_s", 12, 12);
// genSelectC("select_music_cycle_fix_c", 12);
// var radios = document.getElementsByName("music_codebook_cycle");
// for(var i = 0, max = radios.length; i < max; i++) {
//     radios[i].onclick = function() {
//         switch (this.value) {
//             case '12':
//                 showHide(["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf"], ["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
//                 genSelectC("select_music_cycle_fix_c", 12);
//                 genSelectS("select_music_cycle_fix_s", 12, 12);
//                 break;
//             case '24':
//                 showHide(["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
//                 genSelectC("select_music_cycle_fix_c", 24);
//                 genSelectS("select_music_cycle_fix_s", 24, 12);
//                 break;
//             case '48':
//                 showHide(["music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"]);
//                 genSelectC("select_music_cycle_fix_c", 48);
//                 genSelectS("select_music_cycle_fix_s", 48, 12);
//                 break;
//         }
//     }
// }
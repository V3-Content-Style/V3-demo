
// const K = document.querySelector('input[name="music_codebook"]:checked').value;


function showHideMusic(to_show, to_hide) {
    for (var i = 0; i < to_show.length; i++) {
        document.getElementById(to_show[i]).style.display = 'block';
    }
    for (var i = 0; i < to_hide.length; i++) {
        document.getElementById(to_hide[i]).style.display = 'none';
    }
}

function genSelectCMusic(div, k) {
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
        const v3_img_path = `${v3_img_dir}/gen_p${select.value}.png`;
        const v3_show_div = div.replace('select_', 'transfer_').replace('_fix_c', '_v3');
        if (select.value === 'None') {
            document.getElementById(v3_show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(v3_show_div, v3_img_path);

        const mine_img_dir = div.replace('select_', '').replace('_fix_c', '_mine') + `_${k}`;
        const mine_img_path = `${mine_img_dir}/gen_p${select.value}.png`;
        const mine_show_div = div.replace('select_', 'transfer_').replace('_fix_c', '_mine');
        if (select.value === 'None') {
            document.getElementById(mine_show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(mine_show_div, mine_img_path);

        const cycle_img_dir = div.replace('select_', '').replace('_fix_c', '_cycle') + `_${k}`;
        const cycle_img_path = `${cycle_img_dir}/gen_p${select.value}.png`;
        const cycle_show_div = div.replace('select_', 'transfer_').replace('_fix_c', '_cycle');
        if (select.value === 'None') {
            document.getElementById(cycle_show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(cycle_show_div, cycle_img_path);
    }
}

function genSelectSMusic(div, k, n_s) {
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
        const v3_img_path = `${v3_img_dir}/gen_t${select.value}.png`;
        const v3_show_div = div.replace('select_', 'transfer_').replace('_fix_s', '_v3');
        if (select.value === 'None') {
            document.getElementById(v3_show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(v3_show_div, v3_img_path);

        const mine_img_dir = div.replace('select_', '').replace('_fix_s', '_mine') + `_${k}`;
        const mine_img_path = `${mine_img_dir}/gen_t${select.value}.png`;
        const mine_show_div = div.replace('select_', 'transfer_').replace('_fix_s', '_mine');
        if (select.value === 'None') {
            document.getElementById(mine_show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(mine_show_div, mine_img_path);

        const cycle_img_dir = div.replace('select_', '').replace('_fix_s', '_cycle') + `_${k}`;
        const cycle_img_path = `${cycle_img_dir}/gen_t${select.value}.png`;
        const cycle_show_div = div.replace('select_', 'transfer_').replace('_fix_s', '_cycle');
        if (select.value === 'None') {
            document.getElementById(cycle_show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(cycle_show_div, cycle_img_path);
    }
}

function selectedShowMusic(div, img_path){
    const container = document.getElementById(div);
    container.innerHTML = ''; // Clear previous content

    // create a table, the first row is the image, the second row is the audio
    var table = document.createElement('table');
    table.style.width = '100%';
    table.style.textAlign = 'center';
    container.appendChild(table);

    const img = document.createElement('img');
    img.src = img_path;
    img.style.width = '64%';
    img.style.margin = 'auto';
    table.appendChild(img);

    const audio_path = img_path.replace('png', 'wav');
    const audio = document.createElement('audio');
    audio.src = audio_path;
    audio.controls = true;
    audio.controlsList = 'nodownload';
    audio.style.width = '64%';
    audio.style.margin = 'auto';
    table.appendChild(audio);
}


genSelectCMusic("select_music_fix_c", 12);
genSelectSMusic("select_music_fix_s", 12, 12);
var radios = document.getElementsByName("music_codebook");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '12':
                showHideMusic(["music_v3_12_c", "music_v3_12_s", "music_v3_12_cf"], ["music_v3_24_c", "music_v3_24_s", "music_v3_24_cf", "music_v3_48_c", "music_v3_48_s", "music_v3_48_cf"]);
                showHideMusic(["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf"], ["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
                showHideMusic(["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf"], ["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
                genSelectCMusic("select_music_fix_c", 12);
                genSelectSMusic("select_music_fix_s", 12, 12);
                break;
            case '24':
                showHideMusic(["music_v3_24_c", "music_v3_24_s", "music_v3_24_cf"], ["music_v3_12_c", "music_v3_12_s", "music_v3_12_cf", "music_v3_48_c", "music_v3_48_s", "music_v3_48_cf"]);
                showHideMusic(["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
                showHideMusic(["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
                genSelectCMusic("select_music_fix_c", 24);
                genSelectSMusic("select_music_fix_s", 24, 12);
                break;
            case '48':
                showHideMusic(["music_v3_48_c", "music_v3_48_s", "music_v3_48_cf"], ["music_v3_12_c", "music_v3_12_s", "music_v3_12_cf", "music_v3_24_c", "music_v3_24_s", "music_v3_24_cf"]);
                showHideMusic(["music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"]);
                showHideMusic(["music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"]);
                genSelectCMusic("select_music_fix_c", 48);
                genSelectSMusic("select_music_fix_s", 48, 12);
                break;
        }
    }
}

// genSelectSMusic("select_music_mine_fix_s", 12, 12);
// genSelectCMusic("select_music_mine_fix_c", 12);
// var radios = document.getElementsByName("music_codebook_mine");
// for(var i = 0, max = radios.length; i < max; i++) {
//     radios[i].onclick = function() {
//         switch (this.value) {
//             case '12':
//                 showHideMusic(["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf"], ["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
//                 genSelectCMusic("select_music_mine_fix_c", 12);
//                 genSelectSMusic("select_music_mine_fix_s", 12, 12);
//                 break;
//             case '24':
//                 showHideMusic(["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
//                 genSelectCMusic("select_music_mine_fix_c", 24);
//                 genSelectSMusic("select_music_mine_fix_s", 24, 12);
//                 break;
//             case '48':
//                 showHideMusic(["music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"]);
//                 genSelectCMusic("select_music_mine_fix_c", 48);
//                 genSelectSMusic("select_music_mine_fix_s", 48, 12);
//                 break;
//         }
//     }
// }

// genSelectSMusic("select_music_cycle_fix_s", 12, 12);
// genSelectCMusic("select_music_cycle_fix_c", 12);
// var radios = document.getElementsByName("music_codebook_cycle");
// for(var i = 0, max = radios.length; i < max; i++) {
//     radios[i].onclick = function() {
//         switch (this.value) {
//             case '12':
//                 showHideMusic(["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf"], ["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
//                 genSelectCMusic("select_music_cycle_fix_c", 12);
//                 genSelectSMusic("select_music_cycle_fix_s", 12, 12);
//                 break;
//             case '24':
//                 showHideMusic(["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
//                 genSelectCMusic("select_music_cycle_fix_c", 24);
//                 genSelectSMusic("select_music_cycle_fix_s", 24, 12);
//                 break;
//             case '48':
//                 showHideMusic(["music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"]);
//                 genSelectCMusic("select_music_cycle_fix_c", 48);
//                 genSelectSMusic("select_music_cycle_fix_s", 48, 12);
//                 break;
//         }
//     }
// }
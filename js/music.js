
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
    container.appendChild(document.createElement('br'));

    // Clear the show-transfer div
    const show_div = div.replace('select_', 'transfer_').replace('_fix_c', '');
    document.getElementById(show_div).innerHTML = '';

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

        const img_dir = div.replace('select_', '').replace('_fix_c', '') + `_${k}`;
        const img_path = `${img_dir}/gen_p${select.value}.png`;
        const show_div = div.replace('select_', 'transfer_').replace('_fix_c', '');
        if (select.value === 'None') {
            document.getElementById(show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(show_div, img_path);
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
    const show_div = div.replace('select_', 'transfer_').replace('_fix_s', '');
    document.getElementById(show_div).innerHTML = '';

    // Clear the content selection
    const select_content = document.getElementById(div.replace('_fix_s', '_fix_c') + `_${k}`);
    if (select_content) {
        select_content.options[0].selected = true;
    }
    
    // Once the <select> selection changes, show the selected music
    select.onchange = function() {
        // clear the style selection
        const select_content = document.getElementById(div.replace('_fix_s', '_fix_c') + `_${k}`);
        select_content.options[0].selected = true;

        const img_dir = div.replace('select_', '').replace('_fix_s', '') + `_${k}`;
        const img_path = `${img_dir}/gen_t${select.value}.png`;
        const show_div = div.replace('select_', 'transfer_').replace('_fix_s', '');
        if (select.value === 'None') {
            document.getElementById(show_div).innerHTML = '';
            return;
        }
        else selectedShowMusic(show_div, img_path);
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


genSelectSMusic("select_music_v3_fix_s", 12, 12);
genSelectCMusic("select_music_v3_fix_c", 12);
var radios = document.getElementsByName("music_codebook_v3");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '12':
                showHideMusic(["music_v3_12_c", "music_v3_12_s", "music_v3_12_cf"], ["music_v3_24_c", "music_v3_24_s", "music_v3_24_cf", "music_v3_48_c", "music_v3_48_s", "music_v3_48_cf"]);
                genSelectCMusic("select_music_v3_fix_c", 12);
                genSelectSMusic("select_music_v3_fix_s", 12, 12);
                break;
            case '24':
                showHideMusic(["music_v3_24_c", "music_v3_24_s", "music_v3_24_cf"], ["music_v3_12_c", "music_v3_12_s", "music_v3_12_cf", "music_v3_48_c", "music_v3_48_s", "music_v3_48_cf"]);
                genSelectCMusic("select_music_v3_fix_c", 24);
                genSelectSMusic("select_music_v3_fix_s", 24, 12);
                break;
            case '48':
                showHideMusic(["music_v3_48_c", "music_v3_48_s", "music_v3_48_cf"], ["music_v3_12_c", "music_v3_12_s", "music_v3_12_cf", "music_v3_24_c", "music_v3_24_s", "music_v3_24_cf"]);
                genSelectCMusic("select_music_v3_fix_c", 48);
                genSelectSMusic("select_music_v3_fix_s", 48, 12);
                break;
        }
    }
}

genSelectSMusic("select_music_mine_fix_s", 12, 12);
genSelectCMusic("select_music_mine_fix_c", 12);
var radios = document.getElementsByName("music_codebook_mine");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '12':
                showHideMusic(["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf"], ["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
                genSelectCMusic("select_music_mine_fix_c", 12);
                genSelectSMusic("select_music_mine_fix_s", 12, 12);
                break;
            case '24':
                showHideMusic(["music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"]);
                genSelectCMusic("select_music_mine_fix_c", 24);
                genSelectSMusic("select_music_mine_fix_s", 24, 12);
                break;
            case '48':
                showHideMusic(["music_mine_48_c", "music_mine_48_s", "music_mine_48_cf"], ["music_mine_12_c", "music_mine_12_s", "music_mine_12_cf", "music_mine_24_c", "music_mine_24_s", "music_mine_24_cf"]);
                genSelectCMusic("select_music_mine_fix_c", 48);
                genSelectSMusic("select_music_mine_fix_s", 48, 12);
                break;
        }
    }
}

genSelectSMusic("select_music_cycle_fix_s", 12, 12);
genSelectCMusic("select_music_cycle_fix_c", 12);
var radios = document.getElementsByName("music_codebook_cycle");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '12':
                showHideMusic(["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf"], ["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
                genSelectCMusic("select_music_cycle_fix_c", 12);
                genSelectSMusic("select_music_cycle_fix_s", 12, 12);
                break;
            case '24':
                showHideMusic(["music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"]);
                genSelectCMusic("select_music_cycle_fix_c", 24);
                genSelectSMusic("select_music_cycle_fix_s", 24, 12);
                break;
            case '48':
                showHideMusic(["music_cycle_48_c", "music_cycle_48_s", "music_cycle_48_cf"], ["music_cycle_12_c", "music_cycle_12_s", "music_cycle_12_cf", "music_cycle_24_c", "music_cycle_24_s", "music_cycle_24_cf"]);
                genSelectCMusic("select_music_cycle_fix_c", 48);
                genSelectSMusic("select_music_cycle_fix_s", 48, 12);
                break;
        }
    }
}
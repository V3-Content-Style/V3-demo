
// const K = document.querySelector('input[name="image_codebook"]:checked').value;


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
    container.appendChild(document.createElement('br'));

    // Clear the show-transfer div
    const show_div = div.replace('select_', 'transfer_').replace('_fix_c', '');
    document.getElementById(show_div).innerHTML = '';

    // Clear the style selection
    const select_style = document.getElementById(div.replace('_fix_c', '_fix_s') + `_${k}`);
    if (select_style) {
        select_style.options[0].selected = true;
    }
    
    // Once the <select> selection changes, show the selected image
    select.onchange = function() {
        // clear the style selection
        const select_style = document.getElementById(div.replace('_fix_c', '_fix_s') + `_${k}`);
        select_style.options[0].selected = true;

        const img_dir = div.replace('select_', '').replace('_fix_c', '') + `_${k}`;
        const img_path = `${img_dir}/gen_c${select.value}.png`;
        const show_div = div.replace('select_', 'transfer_').replace('_fix_c', '');
        if (select.value === 'None') {
            document.getElementById(show_div).innerHTML = '';
            return;
        }
        else selectedShow(show_div, img_path);
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
    const show_div = div.replace('select_', 'transfer_').replace('_fix_s', '');
    document.getElementById(show_div).innerHTML = '';

    // Clear the content selection
    const select_content = document.getElementById(div.replace('_fix_s', '_fix_c') + `_${k}`);
    if (select_content) {
        select_content.options[0].selected = true;
    }
    
    // Once the <select> selection changes, show the selected image
    select.onchange = function() {
        // clear the style selection
        const select_content = document.getElementById(div.replace('_fix_s', '_fix_c') + `_${k}`);
        select_content.options[0].selected = true;

        const img_dir = div.replace('select_', '').replace('_fix_s', '') + `_${k}`;
        const img_path = `${img_dir}/gen_s${select.value}.png`;
        const show_div = div.replace('select_', 'transfer_').replace('_fix_s', '');
        if (select.value === 'None') {
            document.getElementById(show_div).innerHTML = '';
            return;
        }
        else selectedShow(show_div, img_path);
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



genSelectS("select_image_v3_fix_s", 10, 8);
genSelectC("select_image_v3_fix_c", 10);
var radios = document.getElementsByName("image_codebook_v3");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '10':
                showHide(["image_v3_10_c", "image_v3_10_s", "image_v3_10_cf"], ["image_v3_20_c", "image_v3_20_s", "image_v3_20_cf", "image_v3_40_c", "image_v3_40_s", "image_v3_40_cf"]);
                genSelectC("select_image_v3_fix_c", 10);
                genSelectS("select_image_v3_fix_s", 10, 8);
                break;
            case '20':
                showHide(["image_v3_20_c", "image_v3_20_s", "image_v3_20_cf"], ["image_v3_10_c", "image_v3_10_s", "image_v3_10_cf", "image_v3_40_c", "image_v3_40_s", "image_v3_40_cf"]);
                genSelectC("select_image_v3_fix_c", 20);
                genSelectS("select_image_v3_fix_s", 20, 8);
                break;
            case '40':
                showHide(["image_v3_40_c", "image_v3_40_s", "image_v3_40_cf"], ["image_v3_10_c", "image_v3_10_s", "image_v3_10_cf", "image_v3_20_c", "image_v3_20_s", "image_v3_20_cf"]);
                genSelectC("select_image_v3_fix_c", 40);
                genSelectS("select_image_v3_fix_s", 40, 8);
                break;
        }
    }
}

genSelectS("select_image_mine_fix_s", 10, 8);
genSelectC("select_image_mine_fix_c", 10);
var radios = document.getElementsByName("image_codebook_mine");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '10':
                showHide(["image_mine_10_c", "image_mine_10_s", "image_mine_10_cf"], ["image_mine_20_c", "image_mine_20_s", "image_mine_20_cf", "image_mine_40_c", "image_mine_40_s", "image_mine_40_cf"]);
                genSelectC("select_image_mine_fix_c", 10);
                genSelectS("select_image_mine_fix_s", 10, 8);
                break;
            case '20':
                showHide(["image_mine_20_c", "image_mine_20_s", "image_mine_20_cf"], ["image_mine_10_c", "image_mine_10_s", "image_mine_10_cf", "image_mine_40_c", "image_mine_40_s", "image_mine_40_cf"]);
                genSelectC("select_image_mine_fix_c", 20);
                genSelectS("select_image_mine_fix_s", 20, 8);
                break;
            case '40':
                showHide(["image_mine_40_c", "image_mine_40_s", "image_mine_40_cf"], ["image_mine_10_c", "image_mine_10_s", "image_mine_10_cf", "image_mine_20_c", "image_mine_20_s", "image_mine_20_cf"]);
                genSelectC("select_image_mine_fix_c", 40);
                genSelectS("select_image_mine_fix_s", 40, 8);
                break;
        }
    }
}

genSelectS("select_image_cycle_fix_s", 10, 8);
genSelectC("select_image_cycle_fix_c", 10);
var radios = document.getElementsByName("image_codebook_cycle");
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        switch (this.value) {
            case '10':
                showHide(["image_cycle_10_c", "image_cycle_10_s", "image_cycle_10_cf"], ["image_cycle_20_c", "image_cycle_20_s", "image_cycle_20_cf", "image_cycle_40_c", "image_cycle_40_s", "image_cycle_40_cf"]);
                genSelectC("select_image_cycle_fix_c", 10);
                genSelectS("select_image_cycle_fix_s", 10, 8);
                break;
            case '20':
                showHide(["image_cycle_20_c", "image_cycle_20_s", "image_cycle_20_cf"], ["image_cycle_10_c", "image_cycle_10_s", "image_cycle_10_cf", "image_cycle_40_c", "image_cycle_40_s", "image_cycle_40_cf"]);
                genSelectC("select_image_cycle_fix_c", 20);
                genSelectS("select_image_cycle_fix_s", 20, 8);
                break;
            case '40':
                showHide(["image_cycle_40_c", "image_cycle_40_s", "image_cycle_40_cf"], ["image_cycle_10_c", "image_cycle_10_s", "image_cycle_10_cf", "image_cycle_20_c", "image_cycle_20_s", "image_cycle_20_cf"]);
                genSelectC("select_image_cycle_fix_c", 40);
                genSelectS("select_image_cycle_fix_s", 40, 8);
                break;
        }
    }
}
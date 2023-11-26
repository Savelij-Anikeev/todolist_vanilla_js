// todo list

post_list = []
fields = document.getElementsByClassName('fields')[0]

let add_post = () => {
    // getting post value
    post = new_text.value
    post_list.push(post)
    // console.log(post_list)
    list_posts(post_list)
}

let remove_post = (index) => {
    // trying to remove element
    console.log(post_list)
    post_list = post_list.filter((item) => {
        return item != post_list[index]
    })
    list_posts(post_list)
    console.log(post_list)
}

let list_posts = (arr) => {
    fields.innerHTML = ''
    if (arr.length != 0){
        for (let i = 0; i < arr.length; i++){
            // creating elements
            post = document.createElement('div');
            number = document.createElement('span');
            inner_text = document.createElement('p');
            rm_btm = document.createElement('button');

            // addind attributes
            number.innerHTML = `${i+1}`;
            inner_text.innerHTML = `${arr[i]}`;
            rm_btm.innerHTML = 'remove';

            post.classList.add('point');
            rm_btm.classList.add('rm_btn');

            rm_btm.setAttribute("onclick",`remove_post(${i})`);
            
            // appending...
            post.appendChild(number)
            post.appendChild(inner_text)
            post.appendChild(rm_btm)

            // final appending
            fields.appendChild(post)
        }
    } else {
        placeholder = document.createElement('span');
        placeholder.classList.add('plch');
        placeholder.innerHTML = 'your posts will be here!';

        fields.appendChild(placeholder);
    }
}

list_posts(post_list)

// menu functionality



let open_menu = () => {
    let class_list = [...menu.classList]

    // is short mode menu
    if (class_list.includes('menu-short')){   
        menu_icon.classList.add('menu_icon_full')
        menu.classList.add('menu-full')
        menu.classList.remove('menu-short')
    
        menu_icon.innerHTML = '><'

        // creating form for uploading
        div = document.createElement('div')
        div.classList.add('form')

        div_title = document.createElement('h2')
        div_input = document.createElement('input')
        div_btn = document.createElement('button')

        div_title.innerHTML = 'Adding post'
        div_input.placeholder = '   add post'
        div_input.classList.add('form-input')
        div_input.id = 'new_text'
        div_btn.innerHTML = 'post'
        div_btn.classList.add('form-button')
        div_btn.setAttribute("onclick",`add_post()`);


        div.appendChild(div_title)
        div.appendChild(div_input)
        div.appendChild(div_btn)

        menu.appendChild(div)

    } else {
        menu.removeChild(menu.lastChild);

        menu.classList.remove('menu-full')
        menu.classList.add('menu-short')

        menu_icon.innerHTML = '|||'

    }
}



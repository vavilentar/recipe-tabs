$(document).ready(function () {
	//Modal 

	const recipeCatalog = document.querySelector('.your-recipes')
	let recipeName = document.querySelector('.input-name');
	let recipeDescr = document.querySelector('.input-descr');
	let recipeLink = document.querySelector('.input-link');
	let recipePersons = document.querySelector('.input-persons');
	let recipeTime = document.querySelector('.input-time-spend');
	let recipeComment = document.querySelector('.comment-area');


	$('.modal__close').on('click', function () {
		$('.overlay, #add-recipe').fadeOut('fast');
	});

	$('.add-recipe-btn').each(function (i) {

		$(this).on('click', function () {
			$('add-recipe .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #add-recipe').fadeIn('fast');
		});
	});

	$('.catalog-item__btn').each(function (i) {

		$(this).on('click', function () {
			$('add-recipe .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #add-recipe').fadeIn('fast');
		});
	});

	$('.button_submit').on('click', function(e) {
		e.preventDefault();
		let recipeTab = document.createElement('recipe')  
		recipeTab.innerHTML = `
		<div class="catalog-item">
					<div class="catalog-item__wrapper">
						<div class="catalog-item__content active">
							<img src="${recipeLink.value}" alt="" class="catalog-item__img">
							<div class="catalog-item__subtitle">${recipeName.value}</div>
							<div class="catalog-item__descr">${recipeDescr.value}</div>
							<a href="#" class="catalog-item__link">ПОДРОБНЕЕ</a>
						</div>
						<div class="catalog-item__list">
							${recipeComment.value}
							<a href="#" class="catalog-item__back">Назад</a>
						</div>
					</div>
					<hr>

					<div class="catalog-item__footer">
						<div class="catalog-item__prices">
							<div class="catalog-item__old-price">${recipePersons.value} персон</div>
							<div class="catalog-item__price">${recipeTime.value} минут/часов</div>
						</div>
						<button class="catalog-item__btn">Список</button>
					</div>
				</div>
		`
		
		recipeCatalog.appendChild(recipeTab);
		
		toggleSlide('.catalog-item__link');
		toggleSlide('.catalog-item__back');
	})

	$('ul.catalog__tabs').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.container').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	function toggleSlide(item) {

		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('active');
				$('.catalog-item__list').eq(i).toggleClass('active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
})
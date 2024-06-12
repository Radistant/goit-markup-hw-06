document.addEventListener('DOMContentLoaded', function () {
	const modalOverlay = document.getElementById('modalOverlay')
	const mobileMenu = document.getElementById('mobileMenu')
	const burgerButton = document.getElementById('burgerButton')
	const closeMenuButton = document.getElementById('closeMenuButton')
	const btn = document.querySelector('.solutions-button')
	const btnFooter = document.querySelector('.footer-subscribe-button')
	const btnCloseModal = document.getElementById('closeModal')

	burgerButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('is-open')
	})

	closeMenuButton.addEventListener('click', function () {
		mobileMenu.classList.remove('is-open')
	})

	btn.addEventListener('click', function (e) {
		e.preventDefault()
		modalOverlay.classList.add('is-open')
	})

	btnFooter.addEventListener('click', function (e) {
		e.preventDefault()
		modalOverlay.classList.add('is-open')
	})

	btnCloseModal.addEventListener('click', function () {
		modalOverlay.classList.remove('is-open')
	})
})

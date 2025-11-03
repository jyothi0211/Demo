// Wire up the external button
document.getElementById('extBtn').addEventListener('click', () => {
  document.getElementById('extMsg').textContent = 'hai from external javascript';
});
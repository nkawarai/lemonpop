document.addEventListener('DOMContentLoaded', function() {
  const queryParams = new URLSearchParams(window.location.search);
  const lapData = queryParams.get('lap');
  document.getElementById('lap-data').textContent = lapData || 'データがありません。';
});
require 'rack/jekyll'
require 'yaml'
run Rack::Jekyll.new

# require 'rack/contrib/try_static'
# require 'rack/contrib/not_found'

# use Rack::TryStatic,
#  :root => "_site",
#  :urks => %w[/],
#  :try  => ['index.html', '/index.html']

# run Rack::NotFound.new('_site/404.html')

class Api::ApiController < ApplicationController
    include Api::Concerns::CurrentUser
end
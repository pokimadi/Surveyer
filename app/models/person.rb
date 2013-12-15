class Person < ActiveRecord::Base
  def Person.new_remember_token
    SecureRandom.urlsafe_base64
  end

  def Person.encrypt(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

  private

    def create_remember_token
      self.remember_token = Person.encrypt(Person.new_remember_token)
    end
end

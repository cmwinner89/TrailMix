# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord

    validates :fname, :lname, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Review

    has_many :photos,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Photo
        
    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        # debugger
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    private 

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
end

class Timeblock < ApplicationRecord
  belongs_to :timeline
  validates :start_time, :end_time, presence: true
  validate :valid_start_and_end_time

  def project
    self.timeline.project
  end

  def valid_start_and_end_time
    #validate data type and format of start and end time strings
    if start_time_is_valid && end_time_is_valid 
      #validate that start time is before end time
      start_time_is_earlier_than_end_time(start_time, end_time)
      #validate that times are only in 15 min chunks
      times_are_in_15_min_increments(start_time, end_time)
    end
  end

  # returns true or false and also adds errors if false
  def start_time_is_valid
    #validate string format of start_time
    if time_string_is_valid_format(start_time)
      true
    else 
      errors.add(:start_time, "should be a string formatted HH:MM in 24hr time")
      false
    end
  end

  # returns true or false and also adds errors if false
  def end_time_is_valid
    if time_string_is_valid_format(end_time)
      true
    else
      errors.add(:end_time, "should be a string formatted HH:MM in 24hr time")
      false
    end
  end

  def time_string_is_valid_format(string)
    # check data type is a string
    return false if !string.is_a? String
    # string should be length of 5 split by a colon e.g. '06:30'
    if string.length == 5 && string.chars[2] == ":"
      # set first 2 digits to hr as int
      hr = string.slice(0,2).to_i
      # set last 2 digits to min as int
      min = string.slice(3, 2).to_i
      # hr should be between 0 and 23 and min should be between 0 and 59 
      hr >= 0 && hr < 24 && min >= 0 && min <= 59
    else
      false
    end
  end

  # make sure this is called after validating format of start and end time otherwise will not work
  # checks that start_time represents an earlier time than end time and adds errors 
  def start_time_is_earlier_than_end_time(start_time, end_time)
    start_hr = start_time.slice(0, 2)
    start_min = start_time.slice(3, 2)
    end_hr = end_time.slice(0, 2)
    end_min = end_time.slice(3, 2)

    if start_hr > end_hr
      errors.add(:start_time, "must be earlier than end time.")
    elsif start_hr == end_hr
      if start_min > end_min
        errors.add(:start_time, "must be earlier than end time.")
      end
    end
  end

  # makes sure minute value of start and end times are 15 min increments from whole hour, adds errors if not
  def times_are_in_15_min_increments(start_time, end_time)
    start_min = start_time.slice(3, 2).to_i
    end_min = end_time.slice(3, 2).to_i

    if start_min % 15 != 0 
      errors.add(:start_time, "must be in 15 minute increments from the whole hour")
    end

    if end_min % 15 != 0
      errors.add(:end_time, "must be in 15 minute increments from the whole hour")
    end
  end
end

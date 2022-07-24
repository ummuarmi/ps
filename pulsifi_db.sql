-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 24, 2022 at 08:11 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pulsifi_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `ur_id` int(11) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `job_description` mediumtext NOT NULL,
  `job_location` text NOT NULL,
  `job_company` varchar(255) NOT NULL,
  `job_created` datetime NOT NULL,
  `job_status` enum('open','closed') NOT NULL DEFAULT 'open',
  `image` varchar(100) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`job_id`, `ur_id`, `job_title`, `job_description`, `job_location`, `job_company`, `job_created`, `job_status`, `image`, `update_date`) VALUES
(1, 1, 'software engineer II', 'intermediate skill in technologies', 'eco city, bangsar south', 'pulsifi', '2022-07-19 15:04:00', 'open', 'pulsifi.png', NULL),
(2, 1, 'graphic designer', 'photoshop', 'Kerinchi', 'TM', '2022-07-19 00:00:00', 'open', 'tm.png', NULL),
(3, 1, 'software engineer I', 'beginner skill in technologies', 'mid valley', 'Snappy', '2022-07-19 15:04:00', 'open', 'snappy.png', NULL),
(4, 1, 'senior graphic designer', 'photoshop, video, ui/ux', 'Seremban', 'Aeon', '2022-07-19 00:00:00', 'open', 'aeon.png', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_role`
--

CREATE TABLE `users_role` (
  `ur_id` int(11) NOT NULL,
  `ur_name` varchar(10) NOT NULL,
  `ur_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_role`
--

INSERT INTO `users_role` (`ur_id`, `ur_name`, `ur_created`) VALUES
(1, 'admin', '2022-07-19 15:00:00'),
(2, 'candidate', '2022-07-19 15:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `users_role`
--
ALTER TABLE `users_role`
  ADD PRIMARY KEY (`ur_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users_role`
--
ALTER TABLE `users_role`
  MODIFY `ur_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
